import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Server, Shield, Terminal, HardDrive, Cpu, CheckCircle } from 'lucide-react';

export default function Skills({ searchQuery }) {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = skillCategories.map(category => {
    let filteredSkills = category.skills;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filteredSkills = filteredSkills.filter(s => 
        s.name.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(category => {
    if (selectedCategory === 'all') {
      return category.skills.length > 0;
    }
    return category.id === selectedCategory && category.skills.length > 0;
  });

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'identity': return <Shield size={16} />;
      case 'infrastructure': return <Server size={16} />;
      case 'virtualization': return <HardDrive size={16} />;
      case 'automation': return <Terminal size={16} />;
      case 'security': return <Cpu size={16} />;
      default: return <Server size={16} />;
    }
  };

  return (
    <div className="skills-container">
      <div className="section-header">
        <div>
          <h2 className="section-title">Technical Competencies Matrix</h2>
          <p className="section-subtitle">
            Categorized skills across enterprise Windows Server architecture, identity services, virtualization, and operational tooling.
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-pill-group">
        <button
          className={`pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Domains
        </button>
        {skillCategories.map(cat => (
          <button
            key={cat.id}
            className={`pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {getCategoryIcon(cat.id)}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {filteredCategories.length === 0 ? (
        <div className="empty-search-state">
          <p>No skills match your search query "{searchQuery}".</p>
        </div>
      ) : (
        <div className="categories-list">
          {filteredCategories.map(category => (
            <div key={category.id} className="category-block">
              <div className="category-header">
                {getCategoryIcon(category.id)}
                <h3 className="category-title">{category.name}</h3>
                <span className="category-count">{category.skills.length} Competencies</span>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-card">
                    <div className="skill-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    {/* Tags */}
                    <div className="skill-tags">
                      {skill.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
