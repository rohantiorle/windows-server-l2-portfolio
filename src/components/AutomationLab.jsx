import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Play, Copy, Check, CheckCircle2, RotateCw } from 'lucide-react';

export default function AutomationLab() {
  const { scripts } = portfolioData;
  const [activeScriptId, setActiveScriptId] = useState(scripts[0]?.id || null);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState(null);

  const currentScript = scripts.find(s => s.id === activeScriptId) || scripts[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentScript.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateRun = () => {
    setIsRunning(true);
    setExecutionOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      setExecutionOutput(currentScript.sampleOutput);
    }, 1200);
  };

  return (
    <div className="automation-container">
      <div className="section-header">
        <div>
          <h2 className="section-title">PowerShell Automation & Scripting Suite</h2>
          <p className="section-subtitle">
            Production-grade, parameterized PowerShell scripts developed to audit directory health, monitor server disks, and eliminate stale objects.
          </p>
        </div>
      </div>

      <div className="automation-layout">
        {/* Script Selection Bar */}
        <div className="script-tabs-bar">
          {scripts.map((script) => (
            <button
              key={script.id}
              onClick={() => {
                setActiveScriptId(script.id);
                setExecutionOutput(null);
              }}
              className={`script-tab-btn ${activeScriptId === script.id ? 'active' : ''}`}
            >
              <Terminal size={16} />
              <span>{script.name}</span>
            </button>
          ))}
        </div>

        {/* Script Header Card */}
        <div className="script-info-card">
          <div className="script-info-left">
            <h3 className="script-heading">{currentScript.title}</h3>
            <p className="script-desc">{currentScript.description}</p>
          </div>

          <div className="script-actions">
            <button className="btn btn-secondary" onClick={handleCopy}>
              {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Script'}</span>
            </button>

            <button 
              className="btn btn-primary" 
              onClick={handleSimulateRun} 
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <RotateCw size={16} className="spin-icon" />
                  <span>Executing in Test Environment...</span>
                </>
              ) : (
                <>
                  <Play size={16} />
                  <span>Simulate Script Run</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Script Code Viewer */}
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-filename">
              <span>Windows PowerShell 7.4 - {currentScript.name}</span>
            </div>
            <div className="terminal-actions">
              <span className="file-badge">.ps1</span>
            </div>
          </div>

          <div className="terminal-code-body">
            <pre className="code-content">
              <code>{currentScript.code}</code>
            </pre>
          </div>
        </div>

        {/* Live Simulation Output Console */}
        {executionOutput && (
          <div className="console-output-card">
            <div className="console-header">
              <div className="console-title">
                <CheckCircle2 size={16} className="text-success" />
                <span>Simulated Output Console (Test Forest: corp.internal)</span>
              </div>
              <button 
                className="console-clear-btn" 
                onClick={() => setExecutionOutput(null)}
              >
                Clear Output
              </button>
            </div>
            <pre className="console-body">
              <code>{executionOutput}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
