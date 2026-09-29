import React from 'react';
import { Server, Terminal, Shield, Activity, Search, Sun, Moon } from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  theme, 
  toggleTheme, 
  searchQuery, 
  setSearchQuery 
}) {
  const tabs = [
    { id: 'overview', label: 'Overview & KPIs', icon: Activity },
    { id: 'skills', label: 'Skills Matrix', icon: Server },
    { id: 'projects', label: 'Enterprise Projects', icon: Shield },
    { id: 'runbooks', label: 'L2 Runbooks & SOPs', icon: Terminal },
    { id: 'automation', label: 'PowerShell Lab', icon: Terminal },
    { id: 'certifications', label: 'Certifications', icon: Shield },
  ];

  return (
    <header className="header-container">
      {/* Top Status Bar */}
      <div className="status-banner">
        <div className="status-item">
          <span className="status-dot green"></span>
          <span>AD Forest: <strong>corp.internal</strong> (Healthy)</span>
        </div>
        <div className="status-item hide-mobile">
          <span className="status-dot green"></span>
          <span>FSMO Roles: <strong>Online (5/5)</strong></span>
        </div>
        <div className="status-item hide-mobile">
          <span className="status-dot blue"></span>
          <span>Patch SLA: <strong>98.6% Compliant</strong></span>
        </div>
        <div className="status-item">
          <span className="status-dot green"></span>
          <span>System Status: <strong>Operational</strong></span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="brand-group">
          <div className="brand-icon">
            <Server size={24} className="accent-icon" />
          </div>
          <div>
            <div className="brand-title">Alex Morgan</div>
            <div className="brand-subtitle">Level 2 Windows Server Administrator</div>
          </div>
        </div>

        {/* Global Search */}
        <div className="search-wrapper">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search skills, commands, projects (e.g. repadmin, LAPS, Hyper-V)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        {/* Action Controls */}
        <div className="nav-actions">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <nav className="tab-nav">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${isActive ? 'active' : ''}`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
