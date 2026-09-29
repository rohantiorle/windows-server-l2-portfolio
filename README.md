# Level 2 (L2) Windows Server Systems Administrator Portfolio (React)

An interactive, responsive, enterprise-grade portfolio web application built with **React 19**, **Vite 8**, and **Lucide Icons**, designed specifically to showcase Level 2 (L2) Windows Server and Infrastructure Engineering skills.

---

## 🌟 Key Features

1. **Executive Overview & Key Performance Indicators (KPIs)**
   - Highlights SLA adherence (97.4%), Mean Time to Resolution (MTTR - 1.8 hrs), Patching SLA (98.6%), and First-Touch Containment (84%).
   - Fleet overview: 140+ servers, 8 Domain Controllers, 2,500+ AD objects, 35+ VMs.

2. **Categorized Technical Competencies Matrix**
   - 5 Domains: Directory Services & Identity, Server Infrastructure & OS, Virtualization & Storage, Automation & Patching, Security & Diagnostics.
   - Interactive domain filters, proficiency progress bars, and search tag filtering.

3. **Enterprise Project Case Studies**
   - **Active Directory Migration to Windows Server 2022**: Multi-site forest upgrade with zero downtime and FSMO transfer.
   - **Domain-Wide Microsoft LAPS Deployment**: Eliminating Pass-the-Hash vulnerabilities across 1,200+ endpoints.
   - **WSUS Phased Patch Pipeline**: 4-ring deployment pipeline with automated pre/post health verification.
   - **2-Node Hyper-V Failover Cluster & DR**: High availability with Cluster Shared Volumes (CSV) and Veeam Backup & Replication 12.

4. **L2 Incident Triage Runbooks & SOPs**
   - Active Directory Replication Failure (`repadmin /replsummary`, `dcdiag`, DNS, RPC verification).
   - User Account Lockout Root-Cause Investigation (Querying PDC Emulator for Security Event ID 4740).
   - Emergency Drive C: Low Disk Space Remediation (VSS quota resizing, update cache purging).
   - Hung Windows Service Force Termination (`sc queryex`, `taskkill /f /pid`).
   - One-click copy buttons for all production commands.

5. **PowerShell Automation Lab**
   - Production scripts: `Get-ADDomainHealth.ps1`, `Monitor-ServerDisks.ps1`, `Clean-StaleADObjects.ps1`.
   - Interactive terminal window with **"Simulate Script Run"** feature demonstrating realistic test console outputs.

6. **Windows Terminal & Fluent Theming**
   - One-click toggle between **Windows Terminal Dark** and **Fluent Clean Light** modes.
   - Real-time global search across skills, tools, and commands.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Development
From the project folder:
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 🛠️ Customization Guide

All data (profile details, projects, skills, metrics, and scripts) is cleanly centralized in a single configuration file:
- **`src/data/portfolioData.js`**

Simply update:
- `profile.name`, `profile.email`, `profile.linkedin`, `profile.github`
- Add or modify your own project descriptions and KPIs.
- The UI will dynamically update all components, search indexes, and badges!

---

## 📦 Deployment Options

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"homepage": "https://<your-username>.github.io/<repo-name>"` to `package.json`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run `npm run build && npm run deploy`

### Vercel / Netlify
- Connect your GitHub repository to Vercel or Netlify.
- Build Command: `npm run build`
- Output Directory: `dist`
