/**
 * portfolioData.ts
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for every piece of editable content on the site.
 * Components never hardcode copy — they only read from here.
 * To customize the portfolio, edit this file only.
 * ------------------------------------------------------------------
 */

import type {
  PersonalInfo,
  AboutInterest,
  SkillCategory,
  ExperienceEntry,
  ProjectEntry,
  AchievementEntry,
  LeadershipEntry,
  CertificationEntry,
  SocialLink,
  NavLink,
} from '../types';

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaMicrochip,
  FaBrain,
  FaLightbulb,
  FaTrophy,
  FaMedal,
  FaAward,
} from 'react-icons/fa6';

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiArduino,
  SiEspressif,
  SiOpencv,
  SiNumpy,
  SiFlask,
} from 'react-icons/si';

import { VscCode } from 'react-icons/vsc';

/* ------------------------------------------------------------------ */
/* Personal Info                                                       */
/* ------------------------------------------------------------------ */

export const personalInfo: PersonalInfo = {
  name: 'Srishti Sharma',
  role: 'Software Engineer',
  taglines: [
    'Full Stack Developer',
    'Embedded Systems Builder',
    'MERN Stack Engineer',
    'IoT & AI Enthusiast',
  ],
  intro:
    "I build reliable, real-time systems that connect hardware, software, and data — from computer-vision input devices to IoT games running entirely on a microcontroller.",
  location: 'New Delhi, India',
  email: 'ms.srishti.sharma@outlook.com',
  resumeUrl: '/resume.pdf',
  avatarInitials: 'SS',
};

/* ------------------------------------------------------------------ */
/* Social Links                                                        */
/* ------------------------------------------------------------------ */

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/mssrishtisharmaa', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ms-srishti-sharma/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:ms.srishti.sharma@outlook.com', icon: FaEnvelope },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                           */
/* ------------------------------------------------------------------ */

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/* About — Interests                                                    */
/* ------------------------------------------------------------------ */

export const aboutInterests: AboutInterest[] = [
  { label: 'Software Engineering', icon: FaCode },
  { label: 'Backend Systems', icon: FaServer },
  { label: 'Full Stack Development', icon: FaLayerGroup },
  { label: 'Artificial Intelligence', icon: FaBrain },
  { label: 'IoT', icon: FaMicrochip },
  { label: 'Problem Solving', icon: FaLightbulb },
];

export const aboutParagraphs: string[] = [
  "I'm a Computer Science undergraduate at Indira Gandhi Delhi Technical University for Women, currently maintaining a 9.11 CGPA, with a diploma background in Computer Engineering from Delhi Skill and Entrepreneurship University (9.32 CGPA).",
  "My work sits at the intersection of full-stack web development and embedded systems — I like taking a problem all the way from a microcontroller's sensor pin to a browser's UI. Recent projects span computer-vision accessibility tools, compliance automation, and IoT-connected games.",
  "I'm currently deepening my MERN stack and generative AI skills as an intern, and I stay sharp through competitive programming and hackathons in my spare time.",
];

/* ------------------------------------------------------------------ */
/* Skills                                                                */
/* ------------------------------------------------------------------ */

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: [
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscCode },
      { name: 'HTML/CSS', icon: SiHtml5 },
    ],
  },
  {
    id: 'platforms',
    title: 'Cloud / Platforms',
    items: [
      { name: 'ESP32', icon: SiEspressif },
      { name: 'Arduino', icon: SiArduino },
      { name: 'Firebase Realtime DB', icon: SiFirebase },
      { name: 'OpenCV', icon: SiOpencv },
    ],
  },
  {
    id: 'cs-core',
    title: 'Core CS Subjects',
    items: [
      { name: 'Data Structures & Algorithms', icon: FaLayerGroup },
      { name: 'Object-Oriented Programming', icon: FaCode },
      { name: 'Structured Programming', icon: SiCss },
      { name: 'NumPy / Pandas', icon: SiNumpy },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                           */
/* ------------------------------------------------------------------ */

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-anveshan-mern',
    role: 'MERN Stack Intern',
    organization: 'IGDTUW Anveshan Foundation',
    duration: 'Jun 2026 – Jul 2026',
    location: 'Remote',
    responsibilities: [
      'Developed MERN stack applications using React.js, Node.js, Express.js, MongoDB, and TypeScript through hands-on assignments.',
      'Applied MVC architecture to structure scalable full-stack applications.',
      'Integrated generative AI capabilities using OpenAI APIs and Hugging Face models into full-stack web applications.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
    achievements: [
      'Shipped multiple full-stack assignments combining REST APIs with generative AI integrations.',
    ],
  },
  {
    id: 'exp-anveshan-aiml',
    role: 'AI/ML Intern',
    organization: 'ANVESHAN Foundation, IGDTUW',
    duration: 'Sep 2025 – Oct 2025',
    location: 'Remote',
    responsibilities: [
      'Completed structured training in Python, exploratory data analysis, and data preprocessing.',
      'Studied 8+ supervised and unsupervised ML algorithms including Linear Regression, SVM, KNN, Decision Tree, Random Forest, and K-Means.',
      'Performed EDA on real-world datasets using Pandas, Matplotlib, and Seaborn — covering descriptive statistics, outlier detection, correlation analysis, and missing-value handling.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'scikit-learn'],
    achievements: [
      'Built a solid foundation in classical ML workflows, from raw data to model-ready features.',
    ],
  },
  {
    id: 'exp-stem-vivifiers',
    role: 'Intern',
    organization: 'STEM VIVIFIERS (OPC) PVT. LTD.',
    duration: 'Aug 2024 – Dec 2024',
    location: 'Remote',
    responsibilities: [
      'Conducted data-driven research on candidate career patterns to support analytical decision-making.',
      'Worked with structured data and database design for internal tools.',
    ],
    technologies: ['Data Analysis', 'Database Design'],
    achievements: [
      'Delivered research insights that informed internal tooling decisions.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                              */
/* ------------------------------------------------------------------ */

export const projects: ProjectEntry[] = [
  {
    id: 'proj-esp32-archery',
    title: 'ESP32 Smart Archery Game',
    description:
      'A real-time IoT archery scoring system hosted entirely on an ESP32, playable from any browser on the local network.',
    longDescription:
      'Developed a real-time IoT archery scoring system on ESP32, serving a browser-based game wirelessly with automated hit detection across 2 difficulty levels and 5 scored rounds. Implemented WebSocket-based communication and a Firebase Realtime Database to synchronize hit events, live scores, and leaderboard updates across connected clients. Designed an interactive HTML5 Canvas interface featuring animated targets and dynamic difficulty progression, then hosted the entire web application directly on the ESP32 using FFat and ESPAsyncWebServer, integrating IR sensors and an OLED display for real-time hit detection and score feedback.',
    image: '/projects/esp32-archery.svg',
    techStack: ['ESP32', 'Embedded C++', 'JavaScript', 'HTML5 Canvas', 'Firebase', 'WebSockets'],
    features: [
      'Self-hosted web app served directly from the ESP32 (FFat + ESPAsyncWebServer)',
      'WebSocket sync of hit events, scores, and leaderboards in real time',
      'IR sensors + OLED display for physical hit detection and feedback',
      'Animated HTML5 Canvas UI with 2 difficulty levels and 5 scored rounds',
    ],
    githubUrl: 'https://github.com/mssrishtisharmaa/esp32-smart-archery-game',
    featured: true,
  },
  {
    id: 'proj-morse-decoder',
    title: 'Vision-Based Morse Code Decoder',
    description:
      'A real-time, hands-free text input system that decodes eye blinks into Morse code using facial landmark tracking.',
    longDescription:
      'Developed a real-time, hands-free text input system decoding eye blinks into Morse code using facial landmark tracking and timing-based classification. Implemented Eye Aspect Ratio (EAR) detection via 12 eye landmarks using MediaPipe and NumPy, classifying blinks as a dot (under 0.25s) or a dash (0.25–0.65s) with gap thresholds between symbols. Built a complete decoding pipeline supporting all 26 letters (A–Z) with live output, a gesture-based ON/OFF toggle, and real-time visual feedback — designed as an accessible, hands-free input method.',
    image: '/projects/morse-decoder.svg',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
    features: [
      'Real-time Eye Aspect Ratio (EAR) detection across 12 landmarks',
      'Timing-based dot / dash classification with gap thresholds',
      'Full A–Z decoding pipeline with live text output',
      'Gesture-based ON/OFF toggle and visual feedback overlay',
    ],
    githubUrl: 'https://github.com/mssrishtisharmaa/Vision-Based-Morse-Code-Decoder',
    featured: true,
  },
  {
    id: 'proj-e-validate',
    title: 'E-VALIDATE',
    description:
      'A rule-based compliance engine that automatically validates legal metrology declarations on pre-packaged goods.',
    longDescription:
      'Developed a rule-based classification system to automatically validate legal metrology declarations on pre-packaged goods against 18 structured data fields. Processed and validated 10+ product listings using structured data parsing and pattern-matching logic, flagging missing and incorrect declarations. Generated automated compliance reports that reduced manual validation time by up to 90%, demonstrating practical, data-driven decision making for a regulatory use case.',
    image: '/projects/e-validate.svg',
    techStack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    features: [
      'Validates listings against 18 structured legal-metrology fields',
      'Pattern-matching logic to flag missing or incorrect declarations',
      'Automated compliance report generation',
      'Cut manual validation time by up to 90%',
    ],
    githubUrl: 'https://github.com/mssrishtisharmaa/E-validate',
    featured: true,
  },
  
];

/* ------------------------------------------------------------------ */
/* Achievements                                                         */
/* ------------------------------------------------------------------ */

export const achievements: AchievementEntry[] = [
  {
    id: 'ach-big-code',
    title: 'Top 15,000 — The Big Code 2026',
    description: 'Qualified among the Top 15,000 participants in The Big Code 2026, hosted by Google.',
    date: '2026',
    category: 'competitive-programming',
    icon: FaTrophy,
  },
  {
    id: 'ach-sih',
    title: 'Top 100 Teams — Smart India Hackathon 2025',
    description:
      'Selected among the Top 100 teams in the Smart India Hackathon (SIH) 2025 university-level internal screening.',
    date: '2025',
    category: 'hackathon',
    icon: FaMedal,
  },
  {
    id: 'ach-leetcode',
    title: 'LeetCode Contest Rating — 1480',
    description: 'Achieved a peak LeetCode Contest Rating of 1476 through consistent competitive programming practice.',
    date: '2026',
    category: 'competitive-programming',
    icon: FaAward,
  },
  {
  id: 'ach-codechef',
  title: 'CodeChef Highest Rating — 1074',
  description:
    'Achieved a highest CodeChef contest rating of 1074 through consistent participation in rated competitive programming contests.',
  date: '2026',
  category: 'competitive-programming',
  icon: FaAward,
}
];

/* ------------------------------------------------------------------ */
/* Leadership & Engagement                                              */
/* ------------------------------------------------------------------ */

export const leadership: LeadershipEntry[] = [
  {
    id: 'lead-sih',
    organization: 'Smart India Hackathon (SIH) 2025',
    role: 'Team Member',
    duration: '2025',
    impact: [
      'Collaborated within a team selected among the Top 100 in the university-level internal screening.',
      'Contributed to rapid prototyping and problem-solving under hackathon time constraints.',
    ],
  },
  {
    id: 'lead-anveshan',
    organization: 'IGDTUW Anveshan Foundation',
    role: 'Program Cohort Member',
    duration: '2025 – 2026',
    impact: [
      'Participated in a structured MERN stack and AI/ML training cohort alongside peer developers.',
      'Engaged in collaborative, assignment-based learning bridging full-stack development and generative AI.',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Certifications                                                       */
/* ------------------------------------------------------------------ */
// /* No certifications were listed on the source resume — replace the
//    entries below with your own credentials, or remove this array's
//    contents to hide the section (see CertificationsSection.tsx). */

export const certifications: CertificationEntry[] = [];

/* ------------------------------------------------------------------ */
/* EmailJS configuration (Contact form)                                 */
/* ------------------------------------------------------------------ */

export const emailjsConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
};
