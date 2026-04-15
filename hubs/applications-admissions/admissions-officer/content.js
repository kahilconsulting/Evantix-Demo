/* ============================================================
   Applications & Admissions Hub — Admissions Officer
   ============================================================ */

window.DEMO = {
  hub:         "Applications & Admissions Hub",
  hubSlug:     "applications-admissions",
  persona:     "Admissions Officer",
  personaSlug: "admissions-officer",
  color:       "#5A7815",

  steps: [
    {
      title: "Admissions Analytics Dashboard",
      screenshots: [
        {
          file: "step-01-dashboard-a.png",
          caption: "Admissions Analytics — full dashboard overview",
          description: "The Admissions Officer starts their day on the Admissions Analytics dashboard. The left-hand Agent Feed surfaces real-time AI activity showing documents translated, data extracted, and assessments completed. Giving the officer an instant summary of what the system has processed. <br><br>The main panel displays live charts breaking down active applications by status, type, program, and approval value. <br>The 'Student Applications – To Review' table at the bottom lists every application awaiting human attention."
        },
        {
          file: "step-01-dashboard-b.png",
          caption: "Dashboard with key areas highlighted",
          description: "Key areas of the User Interface: <ol><li><strong>Navigation: </strong> quick access to Student Applications, Application Documents, and Request for Information.</li><li><strong>Agent Feed:</strong> A running log of completed AI tasks such as translations and data extractions.</li><li><strong>Analytics charts:</strong>Live breakdown of Applications by status, type, program, and approval value.</li><li><strong>Review queue:</strong> Applications awaiting officer action with AI-readiness indicators.</li><li><strong>Inline check preview: </strong> Expanding a row reveals mandatory check results without leaving the list.</li></ol>"
        }
      ]
    },
    {
      title: "Application List & Details View",
      screenshots: [
        {
          file: "step-02-open-application-a.png",
          caption: "Active Student Applications list",
          description: "The Student Applications view lists every active application with submission date, intake channel (StudyLink, Manual Entry, Application Portal), application and approval status, program, and an AI Insights summary column. <br><br>Officers can filter, sort, or search across all fields to prioritise their workload. The AI Insights column provides a plain-language verdict for each row, flagging outstanding mandatory checks before the officer even opens the record."
        },
        {
          file: "step-02-open-application-b.png",
          caption: "Application details.",
          description: "Opening an application reveals the details about the student, program they applied for, and intake information in one view. <br><b>The Status</b> panel confirms the application show the application stage and approval status. The <b>AI Insights panel</b> gives a quick overview of the application's AI-generated insights. <br><b>The Mandatory Checks panel</b> lists every compliance check like Identity, Minimum Age, English Requirement, Entry-to-Entity, Country Entry with real-time status of the checks."
        }
      ]
    },
    {
      title: "Review Application Documents",
      screenshots: [
        {
          file: "step-03-review-documents-a.png",
          caption: "Documents tab — input documents and generated outputs",
          description: "The <b>Documents tab</b> shows every file associated with the application. <b>Input Documents</b> displays each uploaded file with its AI processing status. <br><b>The Output Documents</b> section lists system-generated artefacts — in this case, the Offer Letter PDF created automatically once checks passed."
        },
        {
          file: "step-03-review-documents-b.png",
          caption: "Application Bundle — AI-identified document types",
          description: "Opening the multilingual 'Application Bundle – EN VT PL' document shows the AI has automatically identified every document type within the bundle.<br>The AI note confirms the bundle provides a comprehensive checklist for the student's admission package."
        },
        {
          file: "step-03-review-documents-c.png",
          caption: "Application Bundle — extracted data and full English translation",
          description: "Switching to the <b>Extracted Data tab</b> displays two panels side-by-side: the raw structured data extracted from the bundle (left) and a full English translation of the Vietnamese sections (right). Every field is extracted automatically and made available for downstream assessment rules."
        }
      ]
    },
    {
      title: "Request Additional Information",
      screenshots: [
        {
          file: "step-04-requestsforinfo-a.png",
          caption: "Requests for Info tab — active information requests",
          description: "When a document is missing or incomplete, the officer raises a formal Request for Information directly from the application record (no separate email needed). The Requests for Info tab tracks all active requests with their creation timestamps. <br><br>In this example, a request for 'Missing Information about your Transcript' is pending the student's response. Once the student replies or uploads a new document through their portal, the timeline and agent feed update automatically, keeping all parties in sync without any manual follow-up."
        }
      ]
    },
    {
      title: "Application Timeline",
      screenshots: [
        {
          file: "step-05-Timeline-a.png",
          caption: "Timeline tab — combined activity log and processing timestamps",
          description: "The Timeline tab provides a full chronological audit trail combining automated system actions and manual officer activity in one view. <br><br><strong>1 Activity feed: </strong>records every event in sequence: application received, phone call notes logged by the officer, and system-generated actions. <br><strong>2. Timestamp panel: </strong>shows key processing milestones with elapsed times: AI Document Extracted (1 minute), AI Assessment Checked (10 minutes), and Decision Date. This gives officers, QA teams, and compliance reviewers a single source of truth for the entire application lifecycle."
        }
      ]
    },
    {
      title: "Review AI-Powered Mandatory Checks",
      screenshots: [
        {
          file: "step-06-assessment-checks-a.png",
          caption: "General tab — Identity Check flagged for review",
          description: "Back on the General tab, the Mandatory Checks panel shows the Identity Check is flagged 'To Review' while all other checks have passed. The AI Insights panel above provides a plain-language summary of the outstanding issue, so the officer knows exactly what to investigate before clicking into the check detail."
        },
        {
          file: "step-06-assessment-checks-b.png",
          caption: "Identity Check record — AI reasoning and check status",
          description: "<strong>1 AI Insights: </strong>the AI explains its reasoning in full: all documents that explicitly name the applicant match 'NGUYEN MINH THU' exactly, but two documents (IELTS and Financial Statements) do not display a name in the assessed sections and therefore cannot be verified, though no discrepancies were found. <br><strong>2. Check Status: </strong>set to 'To Review' because the identity check could not be fully confirmed, not because a mismatch was detected. The officer can accept the AI's analysis or override the status with a manual decision."
        },
        {
          file: "step-06-assessment-checks-c.png",
          caption: "AI Insights Details — per-document match analysis",
          description: "The AI Insights Details tab drills down to a per-document verdict, evaluating every individual file in the bundle against the Identity Check criteria. Each document is listed with a Matched or Not Matched result and a supporting explanation. This level of explainability allows officers to make confident, auditable decisions rather than acting on an opaque pass/fail result."
        }
      ]
    },
    {
      title: "Work with AI Agents",
      screenshots: [
        {
          file: "step-07-Work with Agents.png",
          caption: "Applications list with Agent Feed and Copilot sidebar open",
          description: "<strong>1 Agent Feed: </strong> A persistent live log on the left showing every document the AI has processed: translations completed, data extracted, and assessments run. Officers can click any feed item to jump directly to the relevant document or application. <br><br><strong>2. Copilot sidebar: </strong> Available across every view, the chat panel lets officers ask natural-language questions such as 'What are all applications assigned to [name]?' or 'Show applications with outstanding English Requirement checks.' The AI returns filtered, actionable results directly in the conversation — no report configuration or query syntax required."
        }
      ]
    }
  ]
};
