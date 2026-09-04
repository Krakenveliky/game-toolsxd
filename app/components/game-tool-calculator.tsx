"use client";

import { FormEvent, useState } from "react";
import { calculateCm360, calculateDpi, calculateDownloadSeconds, calculateEdpi, calculateFps, convertSensitivity, scaleResolution, simplifyAspectRatio } from "../lib/game-tools/calculators";
import type { GameConfig } from "../lib/game-tools/types";

type Props = { game: GameConfig; toolId: string };
type Values = Record<string, string>;

const initialValues: Values = { dpi: "800", sensitivity: "1", targetGame: "cs2", cm360: "40", width: "1920", height: "1080", targetWidth: "1280", sizeGb: "50", speedMbps: "100", frameTimeMs: "6.94" };

export function GameToolCalculator({ game, toolId }: Props) {
  const [values, setValues] = useState<Values>(initialValues);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const update = (key: string, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const number = (key: string) => Number(values[key]);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputs = Object.values(values).filter((value) => value !== "");
    if (inputs.some((value) => !Number.isFinite(Number(value)) || Number(value) <= 0)) { setError("Enter positive numbers in every numeric field."); setResult(null); return; }
    setError("");
    if (toolId === "sensitivity-converter") {
      if (!game.yawDegreesPerCount) { setError("This game does not have a verified sensitivity conversion yet."); return; }
      const target = values.targetGame === "cs2" ? 0.022 : 0.07;
      setResult(convertSensitivity(number("sensitivity"), game.yawDegreesPerCount, target).toFixed(4));
    } else if (toolId === "edpi-calculator") setResult(calculateEdpi(number("dpi"), number("sensitivity")).toFixed(2));
    else if (toolId === "cm-360-calculator") setResult(`${calculateCm360(number("dpi"), number("sensitivity"), game.yawDegreesPerCount ?? 0).toFixed(2)} cm`);
    else if (toolId === "dpi-calculator") setResult(`${calculateDpi(number("cm360"), number("sensitivity"), game.yawDegreesPerCount ?? 0).toFixed(0)} DPI`);
    else if (toolId === "resolution-calculator") { const scaled = scaleResolution(number("width"), number("height"), number("targetWidth")); setResult(`${scaled.width} x ${scaled.height}`); }
    else if (toolId === "aspect-ratio-calculator") setResult(simplifyAspectRatio(number("width"), number("height")));
    else if (toolId === "download-time-calculator") setResult(`${Math.ceil(calculateDownloadSeconds(number("sizeGb"), number("speedMbps")) / 60)} minutes`);
    else if (toolId === "fps-calculator") setResult(`${calculateFps(number("frameTimeMs")).toFixed(1)} FPS`);
  };
  const fields = toolId === "sensitivity-converter" ? [["sensitivity", "Sensitivity"]] : toolId === "edpi-calculator" ? [["dpi", "Mouse DPI"], ["sensitivity", "Sensitivity"]] : toolId === "cm-360-calculator" ? [["dpi", "Mouse DPI"], ["sensitivity", "Sensitivity"]] : toolId === "dpi-calculator" ? [["cm360", "Target cm/360"], ["sensitivity", "Sensitivity"]] : toolId === "resolution-calculator" ? [["width", "Source width"], ["height", "Source height"], ["targetWidth", "Target width"]] : toolId === "aspect-ratio-calculator" ? [["width", "Width"], ["height", "Height"]] : toolId === "download-time-calculator" ? [["sizeGb", "File size (GB)"], ["speedMbps", "Download speed (Mbps)"]] : [["frameTimeMs", "Frame time (ms)"]];
  return <div className="panel calculator-panel"><h2>Calculate your result</h2><p className="panel-intro">Values are calculated using the {game.name} configuration where game-specific constants are required.</p><form onSubmit={submit}><div className="form-grid">{fields.map(([key, label]) => <div className="field" key={key}><label htmlFor={`game-${key}`}>{label}</label><input id={`game-${key}`} type="number" min="0.0001" step="any" value={values[key]} onChange={(event) => update(key, event.target.value)} /></div>)}{toolId === "sensitivity-converter" && <div className="field"><label htmlFor="game-target">Convert to</label><select id="game-target" value={values.targetGame} onChange={(event) => update("targetGame", event.target.value)}><option value="cs2">Counter-Strike 2</option><option value="valorant">VALORANT</option></select></div>}</div><button className="primary-button" type="submit">Calculate</button>{error && <p className="error" role="alert">{error}</p>}</form>{result && <div className="result" aria-live="polite"><span className="result-label">Result</span><strong className="result-number">{result}</strong></div>}</div>;
}