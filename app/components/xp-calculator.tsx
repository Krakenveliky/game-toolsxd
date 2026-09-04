"use client";

import { FormEvent, useState } from "react";
import { experienceBetweenLevels } from "../lib/minecraft-xp";

export function XpCalculator() {
  const [current, setCurrent] = useState("0");
  const [target, setTarget] = useState("30");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");
  function calculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currentLevel = Number(current); const targetLevel = Number(target);
    if (!Number.isInteger(currentLevel) || !Number.isInteger(targetLevel) || currentLevel < 0 || targetLevel < 0) { setError("Enter whole numbers of 0 or higher."); setResult(null); return; }
    if (targetLevel <= currentLevel) { setError("Your target level must be higher than your current level."); setResult(null); return; }
    setError(""); setResult(experienceBetweenLevels(currentLevel, targetLevel));
  }
  return <div className="panel" style={{ marginTop: 28 }}><h2>Calculate your XP</h2><p className="panel-intro">Use whole-number levels. The answer shows the total XP between the two level milestones.</p><form onSubmit={calculate}><div className="form-grid"><div className="field"><label htmlFor="current-level">Current level</label><input id="current-level" type="number" min="0" step="1" value={current} onChange={(event) => setCurrent(event.target.value)} /></div><div className="field"><label htmlFor="target-level">Target level</label><input id="target-level" type="number" min="1" step="1" value={target} onChange={(event) => setTarget(event.target.value)} /></div></div><button className="primary-button" type="submit">Calculate XP</button>{error && <p className="error" role="alert">{error}</p>}</form>{result !== null && <div className="result" aria-live="polite"><span className="result-label">XP required</span><strong className="result-number">{result.toLocaleString()}</strong><p className="result-note">experience points from level {current} to level {target}</p></div>}</div>;
}