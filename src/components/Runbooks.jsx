import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, AlertTriangle, AlertCircle, Check, Copy, ChevronRight, Activity } from 'lucide-react';

export default function Runbooks({ searchQuery }) {
  const { runbooks } = portfolioData;
  const [selectedRunbookId, setSelectedRunbookId] = useState(runbooks[0]?.id || null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const selectedRunbook = runbooks.find(r => r.id === selectedRunbookId) || runbooks[0];

  const handleCopy = (commandText, index) => {
    navigator.clipboard.writeText(commandText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getSeverityBadgeClass = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'badge-critical';
      case 'high': return 'badge-high';
      case 'medium': return 'badge-medium';
      default: return 'badge-info';
    }
  };

  const filteredRunbooks = runbooks.filter(rb => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      rb.title.toLowerCase().includes(q) ||
      rb.category.toLowerCase().includes(q) ||
      rb.trigger.toLowerCase().includes(q) ||
      rb.steps.some(s => s.name.toLowerCase().includes(q) || s.command.toLowerCase().includes(q))
    );
  });

  return (
    <div className="runbooks-container">
      <div className="section-header">
        <div>
          <h2 className="section-title">L2 Standard Operating Procedures & Incident Runbooks</h2>
          <p className="section-subtitle">
            Battle-tested operational playbooks for diagnosing and mitigating high-severity Windows Server infrastructure incidents.
          </p>
        </div>
      </div>

      <div className="runbooks-layout">
        {/* Left Side: Runbook Selector */}
        <div className="runbooks-sidebar">
          <div className="sidebar-header">
            <Terminal size={18} />
            <span>Incident Scenarios</span>
          </div>

          <div className="runbook-tabs">
            {filteredRunbooks.map((rb) => {
              const isSelected = rb.id === selectedRunbook.id;
              return (
                <button
                  key={rb.id}
                  onClick={() => setSelectedRunbookId(rb.id)}
                  className={`runbook-tab-btn ${isSelected ? 'active' : ''}`}
                >
                  <div className="tab-btn-top">
                    <span className={`severity-tag ${getSeverityBadgeClass(rb.severity)}`}>
                      {rb.severity}
                    </span>
                    <span className="category-label">{rb.category}</span>
                  </div>
                  <div className="tab-btn-title">{rb.title}</div>
                  <ChevronRight size={16} className="chevron-icon" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Selected Runbook Detail */}
        <div className="runbook-detail-card">
          <div className="detail-header">
            <div className="detail-tags">
              <span className={`severity-badge ${getSeverityBadgeClass(selectedRunbook.severity)}`}>
                Severity: {selectedRunbook.severity}
              </span>
              <span className="badge badge-outline">{selectedRunbook.category}</span>
            </div>
            <h3 className="detail-title">{selectedRunbook.title}</h3>
            
            {/* Trigger Alert Box */}
            <div className="trigger-box">
              <AlertTriangle size={18} className="trigger-icon" />
              <div>
                <strong>Incident Trigger: </strong>
                <span>{selectedRunbook.trigger}</span>
              </div>
            </div>
          </div>

          {/* Observable Symptoms */}
          <div className="symptoms-section">
            <h4 className="sub-heading-sm">Reported Symptoms & Indicators</h4>
            <ul className="symptoms-list">
              {selectedRunbook.symptoms.map((symptom, idx) => (
                <li key={idx} className="symptom-item">
                  <AlertCircle size={15} className="symptom-icon" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Triage Procedure */}
          <div className="steps-section">
            <h4 className="sub-heading-sm">Step-by-Step Triage & Remediation Workflow</h4>
            <div className="procedure-steps">
              {selectedRunbook.steps.map((st, idx) => (
                <div key={idx} className="procedure-step-card">
                  <div className="procedure-step-header">
                    <div className="step-badge">Step {st.step}</div>
                    <div className="step-name">{st.name}</div>
                  </div>

                  {/* Code / Command Block */}
                  <div className="command-terminal-block">
                    <div className="terminal-header-bar">
                      <span className="terminal-title">PowerShell / Command Prompt</span>
                      <button
                        className="copy-btn"
                        onClick={() => handleCopy(st.command, idx)}
                        title="Copy command to clipboard"
                      >
                        {copiedIndex === idx ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                        <span>{copiedIndex === idx ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="command-code">
                      <code>{st.command}</code>
                    </pre>
                  </div>

                  {st.notes && (
                    <div className="step-notes">
                      <strong>Triage Note:</strong> {st.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
