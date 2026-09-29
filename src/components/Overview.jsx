import React, { useState } from 'react';
import { 
  Server, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  HardDrive, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronRight,
  Terminal,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Overview({ setActiveTab }) {
  const { profile, kpis, stats } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overview-container">
      {/* Hero Section */}
      <section className="hero-card">
        <div className="hero-content">
          <div className="badge-row">
            <span className="badge badge-accent">
              <span className="pulse-dot"></span>
              {profile.availability}
            </span>
            <span className="badge badge-outline">{profile.experienceYears} Industry Experience</span>
            <span className="badge badge-outline">{profile.location}</span>
          </div>

          <h1 className="hero-title">{profile.name}</h1>
          <h2 className="hero-subtitle">{profile.title}</h2>
          <p className="hero-description">{profile.summary}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleCopyEmail}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Contact Email'}</span>
            </button>
            <button className="btn btn-secondary" onClick={() => setActiveTab('projects')}>
              <span>View Enterprise Projects</span>
              <ChevronRight size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => setActiveTab('automation')}>
              <Terminal size={16} />
              <span>Explore PowerShell Lab</span>
            </button>
          </div>
        </div>

        {/* Live System Fleet Box */}
        <div className="fleet-stats-card">
          <div className="card-header-simple">
            <Server size={18} className="text-accent" />
            <h3>Managed Infrastructure Scope</h3>
          </div>
          <div className="fleet-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="fleet-stat-item">
                <div className="fleet-stat-value">{stat.value}</div>
                <div className="fleet-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="fleet-footer">
            <span>Core OS: <strong>WS 2022 / 2019 / 2016</strong></span>
            <span>Hypervisor: <strong>Hyper-V & ESXi</strong></span>
          </div>
        </div>
      </section>

      {/* KPI Benchmarks Grid */}
      <section className="kpi-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Operational KPIs & Performance Metrics</h2>
            <p className="section-subtitle">Real-world performance benchmarks across ticketing, SLA, patching, and escalation containment.</p>
          </div>
        </div>

        <div className="kpi-grid">
          {kpis.map((kpi, index) => (
            <div key={index} className="kpi-card">
              <div className="kpi-top">
                <span className="kpi-label">{kpi.label}</span>
                {index === 0 && <CheckCircle size={20} className="kpi-icon text-success" />}
                {index === 1 && <Clock size={20} className="kpi-icon text-accent" />}
                {index === 2 && <ShieldCheck size={20} className="kpi-icon text-success" />}
                {index === 3 && <TrendingUp size={20} className="kpi-icon text-warning" />}
                {index === 4 && <Cpu size={20} className="kpi-icon text-purple" />}
                {index === 5 && <HardDrive size={20} className="kpi-icon text-cyan" />}
              </div>
              <div className="kpi-value">{kpi.value}</div>
              <p className="kpi-desc">{kpi.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role Profile & Core Responsibilities */}
      <section className="role-breakdown-card">
        <h3 className="section-title-sm">What Sets a Level 2 (L2) Administrator Apart</h3>
        <div className="breakdown-grid">
          <div className="breakdown-item">
            <div className="breakdown-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4>Advanced Incident Resolution</h4>
              <p>Escalation point for Level 1 service desk. Resolves directory replication faults, Kerberos authentication delays, VSS shadow storage issues, and stuck print queues without recurring outages.</p>
            </div>
          </div>

          <div className="breakdown-item">
            <div className="breakdown-icon">
              <Server size={22} />
            </div>
            <div>
              <h4>Infrastructure Maintenance & Upgrades</h4>
              <p>Executes domain controller promotions, FSMO transfers, cluster patching, storage LUN mapping, and Group Policy baseline enforcement according to change management standards.</p>
            </div>
          </div>

          <div className="breakdown-item">
            <div className="breakdown-icon">
              <Terminal size={22} />
            </div>
            <div>
              <h4>Automation & Proactive Monitoring</h4>
              <p>Replaces manual recurring maintenance with resilient, logged PowerShell routines for account lifecycle audits, server disk capacity alerts, and automated backup verifications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
