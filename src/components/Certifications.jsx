import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Award, Server, Cpu, FileText, CheckCircle, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  const hardwareEcosystem = [
    { title: "Compute Platforms", items: ["Dell PowerEdge R640 / R740 (iDRAC9 Enterprise)", "HPE ProLiant DL380 Gen10 (iLO5)", "Cisco UCS C-Series"] },
    { title: "Storage & SAN/NAS", items: ["Synology High-Availability RS3618xs+", "Dell EMC PowerVault ME4024 (iSCSI)", "ReFS / NTFS Cluster Shared Volumes"] },
    { title: "Networking & Switching", items: ["Cisco Catalyst 3850 / 9300", "Dell Networking S-Series (10GbE iSCSI fabrics)", "Switch Embedded Teaming (SET)"] },
    { title: "Operational Software", items: ["Veeam Backup & Replication 12", "PRTG Network Monitor / Zabbix", "ServiceNow / Jira Service Desk", "Sysinternals Suite"] }
  ];

  return (
    <div className="certifications-container">
      <div className="section-header">
        <div>
          <h2 className="section-title">Certifications & Infrastructure Ecosystem</h2>
          <p className="section-subtitle">
            Industry-standard certifications, enterprise hardware competencies, and operational toolsets.
          </p>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-top">
              <div className="cert-badge-icon">
                <Award size={24} className="text-accent" />
              </div>
              <div className="cert-status-badge">
                <span className="status-dot green"></span>
                <span>{cert.status}</span>
              </div>
            </div>

            <h3 className="cert-name">{cert.name}</h3>
            <div className="cert-meta">
              <span className="cert-code">{cert.code}</span>
              <span className="meta-divider">•</span>
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="meta-divider">•</span>
              <span className="cert-year">{cert.year}</span>
            </div>

            <div className="cert-skills-list">
              {cert.skills.map((skill, sIdx) => (
                <span key={sIdx} className="cert-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hardware & Ecosystem Competencies */}
      <div className="ecosystem-section">
        <h3 className="section-title-sm">Enterprise Hardware & Operational Ecosystem</h3>
        <div className="ecosystem-grid">
          {hardwareEcosystem.map((eco, idx) => (
            <div key={idx} className="ecosystem-card">
              <div className="eco-header">
                <Server size={18} className="text-accent" />
                <h4>{eco.title}</h4>
              </div>
              <ul className="eco-list">
                {eco.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="eco-item">
                    <CheckCircle size={15} className="eco-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
