import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Runbooks from './components/Runbooks';
import AutomationLab from './components/AutomationLab';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync theme class to root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // If user enters search query and is on overview/certifications, auto-switch to skills
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query.trim() && (activeTab === 'overview' || activeTab === 'certifications')) {
      setActiveTab('skills');
    }
  };

  return (
    <div className="app-layout">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
      />

      <main className="main-content">
        {activeTab === 'overview' && (
          <Overview setActiveTab={setActiveTab} />
        )}
        {activeTab === 'skills' && (
          <Skills searchQuery={searchQuery} />
        )}
        {activeTab === 'projects' && (
          <Projects searchQuery={searchQuery} />
        )}
        {activeTab === 'runbooks' && (
          <Runbooks searchQuery={searchQuery} />
        )}
        {activeTab === 'automation' && (
          <AutomationLab />
        )}
        {activeTab === 'certifications' && (
          <Certifications />
        )}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
