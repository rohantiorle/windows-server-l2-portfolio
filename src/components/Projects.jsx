import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Shield, ChevronDown, ChevronUp, CheckCircle, Layers, Award, ArrowRight } from 'lucide-react';

export default function Projects({ searchQuery }) {
  const { projects } = portfolioData;
  const [expandedId, setExpandedId] = useState(projects[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const filteredProjects = projects.filter(project => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.subtitle.toLowerCase().includes(q) ||
      project.overview.toLowerCase().includes(q) ||
      project.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="projects-container">
      <div className="section-header">
        <div>
          <h2 className="section-title">Enterprise Infrastructure Case Studies</h2>
          <p className="section-subtitle">
            Major projects executed in production enterprise environments demonstrating migration, security hardening, high availability, and compliance.
          </p>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="empty-search-state">
          <p>No projects match your search query "{searchQuery}".</p>
        </div>
      ) : (
        <div className="projects-list">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
                {/* Project Header Bar */}
                <div className="project-header" onClick={() => toggleExpand(project.id)}>
                  <div className="project-title-group">
                    <div className="project-badges">
                      <span className="badge badge-accent">{project.badge}</span>
                      <span className="project-scope-badge">{project.scope}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <h4 className="project-subtitle">{project.subtitle}</h4>
                  </div>

                  <div className="project-toggle-action">
                    <button className="expand-btn" aria-label="Toggle details">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                {/* Impact Callout */}
                <div className="project-impact-banner">
                  <Award size={18} className="text-accent" />
                  <span><strong>Business Impact:</strong> {project.impact}</span>
                </div>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="project-expanded-body">
                    {/* Problem & Overview */}
                    <div className="project-section">
                      <h5 className="sub-heading">Challenge & Overview</h5>
                      <p className="project-text">{project.overview}</p>
                    </div>

                    {/* Architecture & Implementation Steps */}
                    <div className="project-section">
                      <h5 className="sub-heading">
                        <Layers size={16} />
                        <span>Implementation Architecture & Workflow</span>
                      </h5>
                      <div className="architecture-steps">
                        {project.architecture.map((step, idx) => (
                          <div key={idx} className="architecture-step-item">
                            <div className="step-number">{idx + 1}</div>
                            <div className="step-content">{step}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Results & Achievements */}
                    <div className="project-section">
                      <h5 className="sub-heading">
                        <CheckCircle size={16} />
                        <span>Key Deliverables & Verification</span>
                      </h5>
                      <div className="achievements-grid">
                        {project.achievements.map((ach, idx) => (
                          <div key={idx} className="achievement-item">
                            <span className="bullet-check">✓</span>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="project-footer-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
