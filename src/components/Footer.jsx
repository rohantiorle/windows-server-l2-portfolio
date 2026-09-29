import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Server, ShieldCheck, Mail, Globe, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const { profile } = portfolioData;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-group">
            <div className="brand-icon">
              <Server size={20} className="accent-icon" />
            </div>
            <div>
              <div className="footer-title">{profile.name}</div>
              <div className="footer-subtitle">{profile.title}</div>
            </div>
          </div>
          <p className="footer-desc">
            Engineered to maintain high availability, bolster Active Directory security, and streamline Windows Server enterprise operations through automation.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <button onClick={() => setActiveTab('overview')}>Executive Overview</button>
            <button onClick={() => setActiveTab('skills')}>Skills Matrix</button>
            <button onClick={() => setActiveTab('projects')}>Enterprise Projects</button>
            <button onClick={() => setActiveTab('runbooks')}>Incident Runbooks</button>
            <button onClick={() => setActiveTab('automation')}>PowerShell Lab</button>
          </div>

          <div className="footer-col">
            <h4>Connect & Contact</h4>
            <a href={`mailto:${profile.email}`} className="footer-link">
              <Mail size={15} />
              <span>{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link">
              <Globe size={15} />
              <span>LinkedIn Profile</span>
              <ExternalLink size={12} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link">
              <Globe size={15} />
              <span>GitHub Repositories</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {new Date().getFullYear()} {profile.name} • Level 2 Windows Server Infrastructure Portfolio
        </div>
        <div className="footer-badge">
          <ShieldCheck size={14} className="text-success" />
          <span>Production-Grade Architecture & Runbooks</span>
        </div>
      </div>
    </footer>
  );
}
