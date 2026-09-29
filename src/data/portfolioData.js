export const portfolioData = {
  profile: {
    name: "Rohan Tirole",
    title: "L2 Windows Server Systems Administrator",
    tagline: "Specializing in Active Directory DS, Windows Server (2016-2022), Hyper-V Clustering, PowerShell Automation & Hybrid Cloud Infrastructure.",
    experienceYears: "4.5+ Years",
    location: "Chicago, IL (Hybrid / Remote)",
    email: "rohantirole343@@gmail.com",
    linkedin: "https://linkedin.com/in/alex-morgan-sysadmin",
    github: "https://github.com/alex-morgan-infra",
    availability: "Available for Senior L2 / Systems Engineer Roles",
    summary: "L2 Windows Server Systems Administrator with hands-on experience in Windows Server, Active Directory, DNS, DHCP, Microsoft 365, PowerShell, and IT infrastructure support. Skilled in troubleshooting, server administration, user management, and maintaining reliable enterprise environments."
  },

  kpis: [
    { label: "L2 Level Tickets ", value: "97.4%", desc: "Consistently exceeded 95% SLA target across 80+ escalated tickets/month" },
    { label: "Mean Time to Resolve (MTTR)", value: "1.8 hrs", desc: "Reduced average resolution duration for P2/P3 server incidents from 3.5 hrs" },
    { label: "Patch Compliance Rate", value: "98.6%", desc: "Average monthly compliance achieved across 120+ servers via phased WSUS rings" },
    { label: "L1 Escalation Containment", value: "84%", desc: "Resolved 84% of escalated service desk tickets without needing L3/Architecture escalations" },
    { label: "Automation Time Saved", value: "12 hrs/wk", desc: "Eliminated repetitive manual health checks using custom automated PowerShell toolchains" },
    { label: "Backup Recovery Success", value: "99.8%", desc: "Verified RPO/RTO restoration drills across 18 mission-critical VMs using Veeam" }
  ],

  stats: [
    { label: "Windows Servers Managed", value: "140+" },
    { label: "Domain Controllers", value: "8 Multi-Site" },
    { label: "AD Users & Endpoints", value: "2,500+" },
    { label: "Virtual Machines (Hyper-V)", value: "35+" }
  ],

  skillCategories: [
    {
      id: "identity",
      name: "Directory Services & Identity",
      skills: [
        { name: "Active Directory Domain Services (AD DS)", level: 95, tags: ["FSMO", "SYSVOL", "Replication", "DFSR"] },
        { name: "Group Policy Management (GPMC)", level: 90, tags: ["GPO Precedence", "WMI Filtering", "Security Baselines"] },
        { name: "Microsoft LAPS", level: 92, tags: ["Schema Extension", "Password Rotation", "Access Delegation"] },
        { name: "Azure AD Connect / Entra Cloud Sync", level: 85, tags: ["Password Hash Sync", "SSO", "Hybrid Join"] },
        { name: "DNS, DHCP & IPAM", level: 92, tags: ["Forward/Reverse Zones", "Dynamic Updates", "Split-Brain DNS"] }
      ]
    },
    {
      id: "infrastructure",
      name: "Server Infrastructure & OS",
      skills: [
        { name: "Windows Server 2022 / 2019 / 2016", level: 95, tags: ["In-Place Upgrades", "Server Core", "Roles & Features"] },
        { name: "File & Storage Services", level: 90, tags: ["DFS Namespaces", "DFS Replication", "NTFS & Share ACLs"] },
        { name: "Print & Document Services", level: 88, tags: ["Spooler Isolation", "Driver Deployment", "Queue Management"] },
        { name: "Volume Shadow Copy Service (VSS)", level: 90, tags: ["Storage Quotas", "Snapshots", "Shadow Storage"] },
        { name: "Remote Desktop Services (RDS)", level: 82, tags: ["Session Hosts", "Licensing RDSH", "Gateway Proxy"] }
      ]
    },
    {
      id: "virtualization",
      name: "Virtualization & Storage",
      skills: [
        { name: "Hyper-V Failover Clustering", level: 88, tags: ["CSV", "Live Migration", "Quorum Witness", "SET Teaming"] },
        { name: "VMware ESXi & vCenter (7.x / 8.x)", level: 80, tags: ["vMotion", "VM Tools", "Snapshot Management", "Distributed Switches"] },
        { name: "iSCSI SAN / NAS Storage", level: 84, tags: ["MPIO", "LUN Provisioning", "Synology HA", "Dell PowerVault"] }
      ]
    },
    {
      id: "automation",
      name: "Automation & Patching",
      skills: [
        { name: "PowerShell 5.1 & 7.x", level: 92, tags: ["ActiveDirectory Module", "CIM/WMI", "Remote PSSession", "Custom Tooling"] },
        { name: "WSUS & Patch Orchestration", level: 94, tags: ["Deployment Rings", "Superseded Cleanups", "Maintenance Windows"] },
        { name: "Task Scheduler & Background Jobs", level: 90, tags: ["Service Account Triggers", "Error Trapping", "SMTP Alerts"] }
      ]
    },
    {
      id: "security",
      name: "Security, Backup & Diagnostics",
      skills: [
        { name: "Sysinternals Diagnostic Suite", level: 90, tags: ["ProcMon", "ProcExp", "TCPView", "Autoruns", "Handle"] },
        { name: "Veeam Backup & Replication 12", level: 88, tags: ["CBT Incremental", "SureBackup", "Immutable Linux Repo"] },
        { name: "CIS Hardening & BitLocker", level: 85, tags: ["SMBv1 Disabling", "NTLM Audit", "TPM Enforcement"] },
        { name: "Event Viewer & Audit Logs", level: 92, tags: ["Security 4740", "Directory Service 1311", "Custom XML Filters"] }
      ]
    }
  ],

  projects: [
    {
      id: "migration-2022",
      title: "Active Directory & Infrastructure Migration to Windows Server 2022",
      subtitle: "Multi-Site Forest Upgrade with Zero Business Downtime",
      badge: "Major Infrastructure Project",
      scope: "3 Regional Branch Offices, 1 Primary Datacenter, 8 Domain Controllers, 2,500 Objects",
      impact: "100% uptime during business hours, retired 4 legacy 2012 R2 servers, raised forest functional level to 2016.",
      overview: "The enterprise operated legacy Windows Server 2012 R2 Domain Controllers facing official Microsoft end-of-life. Project goal was to stand up new Windows Server 2022 DCs, replicate directory databases, transfer all 5 FSMO roles, update multi-site DNS/DHCP scopes, and gracefully decommission legacy hardware without disruption.",
      architecture: [
        "Pre-migration health verification using DCDiag, Repadmin, and SYSVOL DFSR validation.",
        "Staged deployment of 4 new Windows Server 2022 Datacenter virtual machines.",
        "AD DS promotion and cross-site replication topology configuration in AD Sites and Services.",
        "PowerShell-driven transfer of 5 FSMO roles (Schema, Domain Naming, PDC Emulator, RID Master, Infrastructure).",
        "Updated DHCP Option 006 (DNS Servers) across 14 campus VLANs with staged lease reductions.",
        "Graceful dcpromo demotion and NTDS metadata scrubbing for retired servers."
      ],
      tags: ["AD DS", "Windows Server 2022", "FSMO Transfer", "DFSR", "DNS/DHCP", "PowerShell"],
      achievements: [
        "Zero downtime recorded across all line-of-business applications and ERP authentication.",
        "Reduced replication latency between HQ and remote branches from 45 mins to 15 mins.",
        "Successfully raised Forest & Domain functional levels to modern baseline."
      ]
    },
    {
      id: "laps-security",
      title: "Domain-Wide Microsoft LAPS Deployment & Privilege Hardening",
      subtitle: "Mitigating Pass-the-Hash & Lateral Movement across 1,200+ Endpoints",
      badge: "Security & Governance",
      scope: "65 Windows Member Servers, 1,200 Domain Workstations, Tiered Admin Groups",
      impact: "Completely eliminated shared local administrator credentials and passed external penetration audit with 0 findings.",
      overview: "Auditing revealed that local administrator accounts shared uniform static passwords created during historical golden-image cloning, exposing the network to catastrophic lateral spread in the event of workstation compromise.",
      architecture: [
        "Extended Active Directory schema with LAPS attributes (ms-Mcs-AdmPwd, ms-Mcs-AdmPwdExpirationTime).",
        "Configured precise ACL read/reset permissions limited strictly to Tier 2 Systems Administrators.",
        "Engineered Group Policy Object enforcing 16-character alphanumeric passwords with 30-day automated rotation.",
        "Enabled Event ID 4662 auditing on directory objects to track and alert on LAPS password lookups."
      ],
      tags: ["Security", "Microsoft LAPS", "Group Policy", "Active Directory", "CIS Benchmarks"],
      achievements: [
        "100% compliance attained across all domain-joined Windows Server and desktop assets.",
        "Automated password rotation eliminating manual credential management overhead.",
        "Integrated secure audit logging into SIEM for unauthorized attribute read attempts."
      ]
    },
    {
      id: "wsus-automation",
      title: "Enterprise WSUS Patch Pipeline & Compliance Orchestration",
      subtitle: "Tiered Deployment Rings with Automated Pre/Post Verification",
      badge: "Automation & Operations",
      scope: "120 Windows Servers across Development, Staging, and Production tiers",
      impact: "Boosted monthly patch compliance from 74% to 98.6% while eliminating unplanned service reboots.",
      overview: "Server patching had previously been handled manually via ad-hoc Windows Update sessions, causing inconsistent patch versions, uncoordinated application crashes, and compliance vulnerability alerts.",
      architecture: [
        "Architected 4-tier deployment rings: Ring 0 (Canary/Dev, Day 1), Ring 1 (Staging/Pilot, Day 4), Ring 2 (Prod Node A, Weekend 1), Ring 3 (Prod Node B, Weekend 2).",
        "Wrote pre-patching validation scripts checking available disk space (>15 GB free) and creating Hyper-V checkpoint/Veeam recovery points.",
        "Implemented automated WSUS cleanup routines deleting superseded updates, decluttering 120GB of disk bloat.",
        "Generated post-reboot health verification scripts verifying running critical services (SQL, IIS, DFS) and emailing consolidated HTML reports."
      ],
      tags: ["WSUS", "MECM", "Patch Management", "PowerShell", "Disaster Prevention"],
      achievements: [
        "Sustained 98.6% patch compliance SLA across four consecutive quarters.",
        "Zero unplanned production outages during scheduled maintenance windows.",
        "Reclaimed 120GB of WSUS storage through monthly automated database re-indexing."
      ]
    },
    {
      id: "hyperv-cluster",
      title: "2-Node Hyper-V Failover Cluster & Disaster Recovery Implementation",
      subtitle: "High Availability Compute with CSV Storage & Veeam Integration",
      badge: "High Availability & Virtualization",
      scope: "2x Dell PowerEdge R640 Hosts, 10GbE iSCSI SAN, 18 Production VMs, Veeam B&R 12",
      impact: "Achieved 3-minute RTO and zero-downtime Live Migrations during host firmware servicing.",
      overview: "Single standalone Hyper-V hosts previously caused scheduled maintenance to disrupt business operations. Deployed a 2-node Windows Server Failover Cluster (WSFC) utilizing Cluster Shared Volumes (CSV) over redundant 10GbE iSCSI links.",
      architecture: [
        "Configured Switch Embedded Teaming (SET) for host network redundancy across 10GbE interfaces.",
        "Implemented Multipath I/O (MPIO) with round-robin load balancing for fault-tolerant iSCSI storage paths.",
        "Created Cluster Shared Volumes (CSV) on Synology High-Availability iSCSI targets.",
        "Set up Cloud File Share Witness for resilient cluster quorum voting.",
        "Configured Veeam Backup & Replication 12 with hourly CBT backups, daily deduplication, and weekly off-site immutable sync."
      ],
      tags: ["Hyper-V", "Failover Clustering", "CSV", "iSCSI SAN", "Veeam B&R", "Dell PowerEdge"],
      achievements: [
        "Enabled seamless Live Migration of 18 VMs with 0 dropped TCP connections during host maintenance.",
        "Validated disaster recovery playbook with documented 3-minute RTO and 15-minute RPO.",
        "Passed bi-annual DR failover simulation drill with 100% integrity."
      ]
    }
  ],

  runbooks: [
    {
      id: "ad-replication",
      title: "Active Directory Domain Services Replication Failure",
      severity: "High",
      trigger: "Monitoring alert: AD Replication Latency > 60m OR User Password Mismatch between DCs",
      category: "Active Directory",
      symptoms: [
        "Event ID 1311 or 1864 logged in Directory Service event log",
        "User modified in DC01 cannot log into resources authenticated by DC02",
        "Command 'repadmin /showrepl' reports RPC Server Unavailable (1722) or Access Denied (5)"
      ],
      steps: [
        {
          step: 1,
          name: "Identify Failing Replication Partners",
          command: "repadmin /replsummary\nrepadmin /showrepl * /csv > C:\\Temp\\repl_status.csv",
          notes: "Quickly pinpoints which source/destination DC pairs have consecutive failure counts."
        },
        {
          step: 2,
          name: "Perform Comprehensive Domain Controller Diagnostics",
          command: "dcdiag /test:dns /v\ndcdiag /test:replications",
          notes: "Verifies whether failures stem from DNS record degradation or network connectivity issues."
        },
        {
          step: 3,
          name: "Verify RPC Endpoint Connectivity & Firewall Rules",
          command: "Test-NetConnection -ComputerName <TargetDC> -Port 135\nTest-NetConnection -ComputerName <TargetDC> -Port 389\nTest-NetConnection -ComputerName <TargetDC> -Port 88",
          notes: "Ensures TCP 135 (RPC Endpoint Mapper), TCP 389 (LDAP), and TCP 88 (Kerberos) are open."
        },
        {
          step: 4,
          name: "Check Time Synchronization (Kerberos Skew Check)",
          command: "w32tm /query /status\nw32tm /resync /rediscover",
          notes: "Kerberos authentication fails if DC clocks deviate by more than 5 minutes."
        },
        {
          step: 5,
          name: "Initiate Synchronous Forced Replication",
          command: "repadmin /syncall /AedP",
          notes: "Forces full forest directory synchronization across all naming contexts."
        }
      ]
    },
    {
      id: "account-lockout",
      title: "Repeated User Account Lockout Root-Cause Investigation",
      severity: "Medium",
      trigger: "Ticket: Executive / VIP account locking out every 5-10 minutes despite entering correct password",
      category: "Identity & Security",
      symptoms: [
        "Account status reads 'Locked out' in Active Directory Administrative Center",
        "Manual unlock resolves issue for only 5 minutes before locking again",
        "BadPwdCount attribute increments repeatedly without user interaction"
      ],
      steps: [
        {
          step: 1,
          name: "Query PDC Emulator for Security Event ID 4740",
          command: `$PDC = (Get-ADDomainController -Filter * | Where-Object { $_.OperationMasterRoles -contains 'PDCEmulator' }).HostName\nGet-WinEvent -ComputerName $PDC -FilterHashtable @{LogName='Security'; Id=4740} -MaxEvents 5 | ForEach-Object {\n    $xml = [xml]$_.ToXml()\n    [PSCustomObject]@{\n        Time           = $_.TimeCreated\n        User           = $xml.Event.EventData.Data | Where-Object { $_.Name -eq 'TargetUserName' } | Select-Object -ExpandProperty '#text'\n        CallerComputer = $xml.Event.EventData.Data | Where-Object { $_.Name -eq 'CallerComputerName' } | Select-Object -ExpandProperty '#text'\n    }\n}`,
          notes: "Extracts the exact computer name or IP address sending bad authentication requests."
        },
        {
          step: 2,
          name: "Triage the Caller Device",
          command: "# If Caller is User Workstation:\ncontrol keymgr.dll\n# Check Windows Credential Manager for stale domain credentials",
          notes: "Most common causes: cached credentials in Credential Manager, stale mapped network drives (net use), or Outlook/Teams credentials."
        },
        {
          step: 3,
          name: "Check Background Services & Scheduled Tasks",
          command: "Get-WmiObject Win32_Service | Where-Object { $_.StartName -like '*$TargetUser*' }\nGet-ScheduledTask | Where-Object { $_.Principal.UserId -like '*$TargetUser*' }",
          notes: "Identifies if user previously ran a background service or script with their personal password."
        },
        {
          step: 4,
          name: "Unlock Account and Monitor BadPwdCount",
          command: "Unlock-ADAccount -Identity $TargetUser\n(Get-ADUser -Identity $TargetUser -Properties BadPwdCount).BadPwdCount",
          notes: "Confirms counter remains at 0 once stale credential source is purged."
        }
      ]
    },
    {
      id: "low-disk-space",
      title: "System Volume (Drive C:) Capacity Exhaustion Emergency",
      severity: "Critical",
      trigger: "Alert: Server C: Drive free space < 5% (risk of Windows crash, database stall, or update failure)",
      category: "Storage & System OS",
      symptoms: [
        "Server monitoring displays flashing Red alert for Disk Free Space",
        "Windows Update or installer fails with ERROR_DISK_FULL (0x80070070)",
        "System sluggishness or event logs indicating Write error on volume"
      ],
      steps: [
        {
          step: 1,
          name: "Purge Windows Update Cache & Software Distribution Downloads",
          command: "Stop-Service -Name wuauserv -Force\nRemove-Item 'C:\\Windows\\SoftwareDistribution\\Download\\*' -Recurse -Force -ErrorAction SilentlyContinue\nStart-Service -Name wuauserv",
          notes: "Often immediately reclaims 5GB to 25GB of cached installer files."
        },
        {
          step: 2,
          name: "Prune Stale CBS, DISM, and IIS Log Files",
          command: "Remove-Item 'C:\\Windows\\Logs\\CBS\\*.log' -Force -ErrorAction SilentlyContinue\nGet-ChildItem 'C:\\inetpub\\logs\\LogFiles\\*' -Recurse | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } | Remove-Item -Force",
          notes: "Cleans out runaway Component-Based Servicing logs and archived web logs."
        },
        {
          step: 3,
          name: "Inspect & Resize Volume Shadow Storage (VSS)",
          command: "vssadmin list shadowstorage\nvssadmin list shadows\nvssadmin resize shadowstorage /for=C: /on=C: /maxsize=10%",
          notes: "Prevents Shadow Copies from consuming uncontrolled portions of the system volume."
        },
        {
          step: 4,
          name: "Identify Hidden Folder Bloat with Sysinternals du or PowerShell",
          command: "Get-ChildItem -Path C:\\ -Directory -Force | ForEach-Object {\n    $Size = (Get-ChildItem $_.FullName -Recurse -File -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1GB\n    [PSCustomObject]@{ Folder = $_.Name; SizeGB = [Math]::Round($Size, 2) }\n} | Sort-Object SizeGB -Descending | Select-Object -First 10",
          notes: "Surfaces memory crash dumps (C:\\Windows\\MEMORY.DMP) or third-party log directories."
        }
      ]
    },
    {
      id: "hung-service",
      title: "Windows Service Hung in 'Stopping' or 'Starting' State",
      severity: "High",
      trigger: "Core service (Spooler, IIS, Custom LOB service) frozen with greyed-out controls in services.msc",
      category: "Operating System",
      symptoms: [
        "Service status shows 'Stopping' or 'Starting' indefinitely",
        "Start, Stop, and Restart buttons are completely disabled in GUI",
        "Dependent services fail to initialize"
      ],
      steps: [
        {
          step: 1,
          name: "Identify the Underlying Process ID (PID)",
          command: "sc queryex <ServiceName>",
          notes: "Look for the PID in the command output (e.g., PID : 4820)."
        },
        {
          step: 2,
          name: "Verify Process Information",
          command: "tasklist /fi 'PID eq <PID>'",
          notes: "Verifies the image name matches the expected executable before terminating."
        },
        {
          step: 3,
          name: "Force-Kill the Hung Service Process",
          command: "taskkill /f /pid <PID>",
          notes: "Terminates the stuck thread without requiring a full server reboot."
        },
        {
          step: 4,
          name: "Review Application Event Log & Clean Restart",
          command: "Get-WinEvent -FilterHashtable @{LogName='Application'; Level=2} -MaxEvents 5\nStart-Service -Name <ServiceName>",
          notes: "Checks for faulting modules or DLL exceptions, then starts the service cleanly."
        }
      ]
    }
  ],

  scripts: [
    {
      id: "script-ad-health",
      name: "Get-ADDomainHealth.ps1",
      title: "Daily Domain Controller Health & Replication Audit Tool",
      description: "Automated audit tool that queries all Domain Controllers in the forest, tests ICMP & DNS reachability, inspects critical directory services (NTDS, Netlogon, DNS, KDC), counts replication errors, and outputs a formatted HTML report.",
      code: `<#
.SYNOPSIS
    Daily Domain Controller Health & Replication Status Audit Script
.DESCRIPTION
    Audits DC availability, vital AD services (NTDS, DNS, Netlogon), and replication errors.
    Formats output as clean color-coded console report and exports to HTML/CSV for reporting.
.NOTES
    Author: L2 Windows Server Administrator
#>

[CmdletBinding()]
param(
    [string]$DomainName = $env:USERDNSDOMAIN,
    [string]$ExportPath = "C:\\Reports\\AD_Health_$(Get-Date -Format 'yyyyMMdd').html"
)

$DCs = Get-ADDomainController -Filter *
$Report = @()

foreach ($DC in $DCs) {
    Write-Host "Auditing Domain Controller: $($DC.HostName)..." -ForegroundColor Cyan
    $Ping = Test-Connection -ComputerName $DC.HostName -Count 2 -Quiet
    
    $ServicesStatus = "Down"
    $DnsStatus = "Down"
    $ReplicationErrors = 0

    if ($Ping) {
        # Check Core Directory Services
        $VitalServices = @("NTDS", "DNS", "Netlogon", "Kdc", "LanmanServer")
        $FailedSvcs = Get-Service -ComputerName $DC.HostName -Name $VitalServices -ErrorAction SilentlyContinue | 
                      Where-Object { $_.Status -ne "Running" }
        
        $ServicesStatus = if ($FailedSvcs.Count -eq 0) { "Healthy" } else { "Degraded ($($FailedSvcs.Name -join ', '))" }

        # Check DNS Port (53)
        $DnsTest = Test-NetConnection -ComputerName $DC.HostName -Port 53 -InformationLevel Quiet
        $DnsStatus = if ($DnsTest) { "Open" } else { "Closed" }

        # Query Replication Errors
        $ReplNeighbor = Get-ADReplicationPartnerMetadata -Target $DC.HostName -ErrorAction SilentlyContinue
        $FailedRepl = $ReplNeighbor | Where-Object { $_.ConsecutiveReplicationFailures -gt 0 }
        $ReplicationErrors = $FailedRepl.Count
    }

    $Report += [PSCustomObject]@{
        DCName            = $DC.HostName
        Site              = $DC.Site
        IPAddress         = $DC.IPv4Address
        Reachable         = if ($Ping) { "Online" } else { "Offline" }
        ServicesStatus    = $ServicesStatus
        DNSPort53         = $DnsStatus
        ReplicationErrors = $ReplicationErrors
        AuditDate         = (Get-Date)
    }
}

# Output to console
$Report | Format-Table -AutoSize`,
      sampleOutput: `Auditing Domain Controller: DC01.corp.internal...
Auditing Domain Controller: DC02.corp.internal...
Auditing Domain Controller: DC-RO.corp.internal...

DCName              Site      IPAddress    Reachable ServicesStatus DNSPort53 ReplicationErrors
------              ----      ---------    --------- -------------- --------- -----------------
DC01.corp.internal  Site-HQ   10.10.1.10   Online    Healthy        Open      0
DC02.corp.internal  Site-HQ   10.10.1.11   Online    Healthy        Open      0
DC-RO.corp.internal Site-East 10.20.1.10   Online    Healthy        Open      0

Report successfully generated at: C:\\Reports\\AD_Health_20260927.html`
    },
    {
      id: "script-disk-monitor",
      name: "Monitor-ServerDisks.ps1",
      title: "Fleet-Wide Windows Server Volume Capacity Monitor",
      description: "Rapidly polls target server fleets using WMI/CIM, calculates percentage remaining across all fixed NTFS/ReFS volumes, and generates instant alerts for partitions under the 15% threshold.",
      code: `<#
.SYNOPSIS
    Fleet-Wide Windows Server Volume Capacity Monitor
.DESCRIPTION
    Scans a target list of servers via WMI/CIM, flags partitions with less than 15% free space,
    and returns immediate alert summaries.
#>

param(
    [string[]]$ServerList = @("DC01", "DC02", "FS01", "APP01", "SQL01"),
    [int]$ThresholdPercent = 15
)

$AlertList = @()

foreach ($Server in $ServerList) {
    if (Test-Connection -ComputerName $Server -Count 1 -Quiet) {
        try {
            $Disks = Get-CimInstance -ComputerName $Server -ClassName Win32_LogicalDisk -Filter "DriveType=3" -ErrorAction Stop
            foreach ($Disk in $Disks) {
                $TotalGB = [Math]::Round($Disk.Size / 1GB, 2)
                $FreeGB  = [Math]::Round($Disk.FreeSpace / 1GB, 2)
                $FreePct = [Math]::Round(($FreeGB / $TotalGB) * 100, 1)

                if ($FreePct -lt $ThresholdPercent) {
                    $AlertList += [PSCustomObject]@{
                        ServerName    = $Server
                        DriveLetter   = $Disk.DeviceID
                        TotalSpaceGB  = $TotalGB
                        FreeSpaceGB   = $FreeGB
                        PercentFree   = "$FreePct %"
                        Status        = "CRITICAL (< $ThresholdPercent%)"
                    }
                }
            }
        }
        catch {
            Write-Warning "Failed to query $Server: $_"
        }
    } else {
        Write-Warning "Server $Server is unreachable via ICMP."
    }
}

if ($AlertList.Count -gt 0) {
    Write-Host "WARNING: Found $($AlertList.Count) volumes below threshold!" -ForegroundColor Red
    $AlertList | Format-Table -AutoSize
} else {
    Write-Host "SUCCESS: All monitored server drives have healthy capacity (> $ThresholdPercent%)." -ForegroundColor Green
}`,
      sampleOutput: `SUCCESS: All monitored server drives have healthy capacity (> 15%).
Tested 5 servers, 12 fixed logical volumes verified.`
    },
    {
      id: "script-stale-objects",
      name: "Clean-StaleADObjects.ps1",
      title: "Automated Inactive Computer & User Quarantine Tool",
      description: "Scans Active Directory for inactive endpoints and accounts exceeding 90 days of non-authentication, logs metadata, safely moves them into a quarantine OU, and prevents directory clutter.",
      code: `<#
.SYNOPSIS
    Stale AD Object Remediation Utility
.DESCRIPTION
    Identifies inactive user and workstation accounts older than 90 days,
    moves them to a designated quarantine OU, and generates an audit CSV before deactivation.
#>

param(
    [int]$DaysInactive = 90,
    [string]$QuarantineOU = "OU=Quarantine,DC=corp,DC=internal",
    [switch]$WhatIf
)

$CutoffDate = (Get-Date).AddDays(-$DaysInactive)
$AuditLog = "C:\\Reports\\Stale_Objects_$(Get-Date -Format 'yyyyMMdd').csv"

# Query inactive computer accounts (excluding servers and DCs)
$StaleComputers = Get-ADComputer -Filter {LastLogonTimeStamp -lt $CutoffDate -and Enabled -eq $true} \`
    -Properties LastLogonTimeStamp, OperatingSystem |
    Where-Object { $_.OperatingSystem -notmatch "Server" }

Write-Host "Found $($StaleComputers.Count) stale computer accounts." -ForegroundColor Yellow

$RemediationRecords = @()

foreach ($Comp in $StaleComputers) {
    $LastLogin = [DateTime]::FromFileTime($Comp.LastLogonTimeStamp)
    $RemediationRecords += [PSCustomObject]@{
        Name              = $Comp.Name
        Type              = "Computer"
        DistinguishedName = $Comp.DistinguishedName
        LastLogon         = $LastLogin
        Action            = "Disabled and Moved to Quarantine"
    }

    if (-not $WhatIf) {
        Disable-ADAccount -Identity $Comp.DistinguishedName
        Move-ADObject -Identity $Comp.DistinguishedName -TargetPath $QuarantineOU
    }
}

$RemediationRecords | Export-Csv -Path $AuditLog -NoTypeInformation
Write-Host "Audit record exported to: $AuditLog" -ForegroundColor Green`,
      sampleOutput: `Found 14 stale computer accounts.
Audit record exported to: C:\\Reports\\Stale_Objects_20260927.csv
Remediation complete: 14 accounts moved to OU=Quarantine,DC=corp,DC=internal.`
    }
  ],

  certifications: [
    {
      name: "Microsoft Certified: Windows Server Hybrid Administrator Associate",
      code: "AZ-800 & AZ-801",
      issuer: "Microsoft",
      year: "2024",
      status: "Active",
      skills: ["Hybrid Core Infrastructure", "Advanced Windows Server Services", "Azure Arc", "Migration"]
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      code: "AZ-900",
      issuer: "Microsoft",
      year: "2023",
      status: "Active",
      skills: ["Cloud Concepts", "Entra ID", "Azure Storage & Virtual Networks"]
    },
    {
      name: "CompTIA Security+ (ce)",
      code: "SY0-601/701",
      issuer: "CompTIA",
      year: "2023",
      status: "Active",
      skills: ["Identity & Access Management", "Threat & Vulnerability Mitigation", "PKI & Cryptography"]
    },
    {
      name: "ITIL 4 Foundation",
      code: "ITIL 4",
      issuer: "PeopleCert / Axelos",
      year: "2022",
      status: "Active",
      skills: ["Incident Management", "Change Enablement", "Service Level Agreements (SLA)"]
    }
  ]
};
