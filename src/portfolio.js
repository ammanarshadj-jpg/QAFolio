/* =======================================================
   portfolio.js — Amman Arshad
   Target Role: Jr QA Automation Engineer (Remote)
   Instructions: Replace the contents of src/portfolio.js
   in your forked developerFolio repo with this file.
   ======================================================= */

import emoji from "react-easy-emoji";

// ─── GREETING ────────────────────────────────────────────
const greeting = {
  username: "ammanarshadj-jpg",
  title: "Hi, I'm Amman",
  subTitle: emoji(
    "A detail-oriented QA Automation enthusiast 🚀 with hands-on experience building Salesforce ATF test frameworks, SecOps automation pipelines, and a passion for delivering quality software through smart, scalable testing."
  ),
  resumeLink:
    "https://drive.google.com/your-resume-link-here", // ← Upload your PDF to Google Drive & paste the shareable link
  displayGreeting: true,
};

// ─── SOCIAL MEDIA ────────────────────────────────────────
const socialMediaLinks = {
  github: "https://github.com/ammanarshadj-jpg",
  linkedin: "https://www.linkedin.com/in/ammanarshad", // ← Update with your real LinkedIn URL
  gmail: "ammanarshad.j@gmail.com",
  display: true,
};

// ─── SKILLS ──────────────────────────────────────────────
const skillsSection = {
  title: "What I Do",
  subTitle:
    "QA AUTOMATION ENGINEER BUILDING RELIABLE TEST FRAMEWORKS ACROSS SALESFORCE AND BEYOND",
  skills: [
    emoji("⚡ Design and maintain automated test suites using Salesforce ATF (Apex Test Framework)"),
    emoji("⚡ Build SecOps automation pipelines to catch security vulnerabilities early in the SDLC"),
    emoji("⚡ Write clear, reproducible bug reports and collaborate cross-functionally to drive resolution"),
    emoji("⚡ Perform functional, regression, and end-to-end testing across web and CRM platforms"),
    emoji("⚡ Advocate for quality throughout the development lifecycle — shift-left testing mindset"),
  ],
  softwareSkills: [
    { skillName: "Salesforce ATF", fontAwesomeClassname: "fab fa-salesforce" },
    { skillName: "Apex", fontAwesomeClassname: "fas fa-code" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "CI/CD Pipelines", fontAwesomeClassname: "fas fa-infinity" },
    { skillName: "REST API Testing", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "SecOps Automation", fontAwesomeClassname: "fas fa-shield-alt" },
    { skillName: "CRM Systems", fontAwesomeClassname: "fas fa-database" },
    { skillName: "UX Design Thinking", fontAwesomeClassname: "fas fa-pencil-ruler" },
  ],
  display: true,
};

// ─── EDUCATION ───────────────────────────────────────────
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"), // ← Add an ASU logo image to assets if you have one
      subHeader: "Bachelor of Science, Industrial Design (In Progress)",
      duration: "Current",
      desc: "Developing a systems-thinking and human-centered design foundation that directly informs how I approach software quality and user-facing test coverage.",
      descBullets: [
        "Arizona State University Toastmasters — Public Speaking & Leadership Development",
      ],
    },
    {
      schoolName: "Northern Virginia Community College",
      logo: require("./assets/images/novacLogo.png"), // ← Add NOVA logo to assets if you have one
      subHeader: "Associate of Applied Science, General Studies",
      duration: "Completed",
      desc: "Built a strong analytical foundation across technical and communication disciplines.",
      descBullets: [],
    },
  ],
};

// ─── TECH STACK ──────────────────────────────────────────
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Salesforce ATF & Apex Testing", progressPercentage: "75%" },
    { Stack: "Test Planning & QA Documentation", progressPercentage: "80%" },
    { Stack: "SecOps & Security Automation", progressPercentage: "65%" },
    { Stack: "CI/CD & GitHub Actions", progressPercentage: "60%" },
    { Stack: "API & Integration Testing", progressPercentage: "60%" },
    { Stack: "Client Communication & Stakeholder Management", progressPercentage: "95%" },
  ],
  displayCodersrank: false,
};

// ─── WORK EXPERIENCE ─────────────────────────────────────
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Salesforce ATF & SecOps Automation — Self-Directed Project",
      company: "GitHub (Personal Project)",
      companylogo: require("./assets/images/githubLogo.png"), // ← add to assets
      date: "2024 – Present",
      desc: "Independently designed and built a Salesforce ATF test automation framework integrated with SecOps tooling to identify vulnerabilities in CI/CD workflows.",
      descBullets: [
        "Authored Apex test classes covering functional and regression scenarios",
        "Automated security checks within deployment pipelines using GitHub Actions",
        "Documented test plans, test cases, and defect reports following QA best practices",
        "Demonstrated shift-left testing by integrating quality gates early in the SDLC",
      ],
    },
    {
      role: "Account Coordinator & Client Success",
      company: "L'Oréal",
      companylogo: require("./assets/images/lorealLogo.png"), // ← add to assets
      date: "2019 – 2025",
      desc: "Managed high-volume client relationships and account coordination for a global luxury brand — skills that translate directly into stakeholder communication, defect triage collaboration, and cross-team QA workflows.",
      descBullets: [
        "Tracked and resolved client issues with urgency — analogous to bug triage and resolution cycles",
        "Maintained meticulous records and performance metrics — mirrors QA documentation discipline",
        "Communicated technical product details clearly to non-technical clients",
        "Exceeded performance targets consistently in a remote/virtual environment",
      ],
    },
    {
      role: "Personal Stylist",
      company: "Nordstrom",
      companylogo: require("./assets/images/nordstromLogo.png"), // ← add to assets
      date: "2015 – 2020",
      desc: "Delivered high-touch, consultative client experiences in a fast-paced luxury retail environment, building strong communication and problem-solving habits.",
      descBullets: [
        "Translated client needs into tailored solutions — mirrors translating requirements into test cases",
        "Built a loyal repeat client base through trust, follow-through, and attention to detail",
        "Collaborated with team members to continuously improve the customer experience",
      ],
    },
  ],
};

// ─── OPEN SOURCE / PROJECTS ──────────────────────────────
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// ─── BIG PROJECTS (FEATURED) ─────────────────────────────
const bigProjects = {
  title: "Featured Projects",
  subtitle: "HANDS-ON AUTOMATION WORK THAT DEMONSTRATES QA ENGINEERING CAPABILITY",
  projects: [
    {
      image: require("./assets/images/salesforceLogo.png"), // ← add to assets
      projectName: "Salesforce ATF & SecOps Automation",
      projectDesc:
        "A self-built Salesforce Apex Test Framework project integrated with security operations automation. Covers functional test coverage, CI/CD pipeline security gates, and structured defect documentation — built to demonstrate real-world Jr QA Automation Engineer skills.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/ammanarshadj-jpg/salesforce-atf-secops-automation",
        },
      ],
    },
    {
      image: require("./assets/images/merakiLogo.png"), // ← add Meraki logo to assets
      projectName: "Meraki — Luxury Brand Portfolio",
      projectDesc:
        "Personal brand portfolio site showcasing design thinking, front-end development, and UX principles — built and deployed via GitHub Pages.",
      footerLink: [
        {
          name: "Visit Site",
          url: "https://ammanarshadj-jpg.github.io/Meraki",
        },
        {
          name: "View on GitHub",
          url: "https://github.com/ammanarshadj-jpg/Meraki",
        },
      ],
    },
  ],
  display: true,
};

// ─── ACHIEVEMENTS & CERTIFICATIONS ───────────────────────
const achievementSection = {
  title: emoji("Certifications & Achievements 🏆"),
  subtitle: "CREDENTIALS THAT SUPPORT A QUALITY-FIRST, USER-CENTERED ENGINEERING MINDSET",
  achievementsCards: [
    {
      title: "Google UX Design Certificate",
      subtitle:
        "Completed Google's professional UX Design certification via Coursera — directly informing how I approach usability testing, user-centered test case design, and quality advocacy.",
      image: require("./assets/images/googleLogo.png"), // ← add to assets
      footerLink: [
        {
          name: "Coursera — Google UX Design",
          url: "https://www.coursera.org/professional-certificates/google-ux-design",
        },
      ],
    },
    {
      title: "Toastmasters International",
      subtitle:
        "Active member of ASU Toastmasters, developing public speaking and leadership communication skills essential for cross-functional QA collaboration and stakeholder reporting.",
      image: require("./assets/images/toastmastersLogo.png"), // ← add to assets
      footerLink: [],
    },
  ],
  display: true,
};

// ─── BLOGS (disable if you don't have Medium) ────────────
const blogSection = {
  title: "Blog",
  subtitle: "I write about QA, automation, and tech when inspiration strikes.",
  displayMediumBlogs: false,
  display: false, // ← Set to true and add MEDIUM_USERNAME to .env if you blog
};

// ─── TALKS (disable for now) ─────────────────────────────
const talkSection = {
  title: "Talks",
  subtitle: emoji(""),
  talks: [],
  display: false,
};

// ─── PODCAST (disable for now) ───────────────────────────
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false,
};

// ─── CONTACT ─────────────────────────────────────────────
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to Jr QA Automation Engineer roles — remote preferred. Let's talk about how I can help your team ship quality software.",
  number: "703-343-6502",
  email_address: "ammanarshad.j@gmail.com",
};

// ─── TWITTER (optional) ──────────────────────────────────
const twitterDetails = {
  userName: "", // ← Add your Twitter/X handle if you have one
  display: false,
};

// ─── GITHUB PROFILE (pulls your pinned repos automatically) ──
const isHireable = true; // ← Shows the "Open to Work" badge

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
