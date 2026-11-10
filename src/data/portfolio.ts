/**
 * ============================================================================
 *  CENTRAL CONTENT FILE
 * ============================================================================
 *  Every piece of text, link and image used by the website lives here.
 *  To update the portfolio, edit this file only - no component changes needed.
 *
 *  Content source: CV + thesis documents provided by the owner.
 *  Fields left as '' (empty) are hidden on the site until you fill them in.
 *
 *  TODO checklist (see the README for details):
 *   1. Add a profile photo at  public/images/profile.jpg
 *   2. Fill in linkedin / telegram / facebook below
 *   3. Replace each project's repoUrl with the real repository link
 *   4. Phone number is taken from the latest CV (096 671 9476, Cambodia +855)
 * ============================================================================
 */
import type {
  AboutHighlight,
  Contact,
  CertificateItem,
  CourseItem,
  EducationItem,
  ExperienceItem,
  GlanceRow,
  NavItem,
  Person,
  Project,
  SkillGroup,
} from '@/types'

/* -------------------------------------------------------------------------- */
/*  Personal information                                                       */
/* -------------------------------------------------------------------------- */
export const person: Person = {
  name: 'CHHEANG Udomveasna',
  firstName: 'CHHEANG',
  lastName: 'Udomveasna',
  initials: 'CU',
  handle: 'udomveasna',
  title: 'Data Science Student',
  tagline: ['Data Analyst', 'Deep Learning', 'Business Intelligence'],
  summary:
    'I turn data into decisions - from statistical analysis and machine learning to Power BI dashboards that people actually use.',
  availability: 'Open to internship opportunities',
  profileImage: '/images/profile.jpg', // drop a photo here - a styled placeholder shows until then
  cvUrl: '/CHHEANG-Udomveasna-CV.pdf',
  cvFileName: 'CHHEANG-Udomveasna-CV.pdf',
}

/* -------------------------------------------------------------------------- */
/*  Contact & social links (empty strings are hidden automatically)            */
/* -------------------------------------------------------------------------- */
export const contact: Contact = {
  email: 'udomveasnachheang@gmail.com',
  phone: '+855-96-671-9476', // from the latest CV (096 671 9476)
  location: 'Phnom Penh, Cambodia',
  github: 'https://github.com/CHHEANG-UDOMVEASNA',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-name/'
  telegram: '', // e.g. 'https://t.me/your_username'
  facebook: '', // e.g. 'https://www.facebook.com/your.name'
}

/* -------------------------------------------------------------------------- */
/*  Navigation (ids must match the section ids)                                */
/* -------------------------------------------------------------------------- */
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
export const heroStats: GlanceRow[] = [
  { label: 'Education', value: 'ITC - Data Science' },
  { label: 'Internship', value: 'Telecom Cambodia - Data Analyst' },
  { label: 'Focus', value: 'Data, ML & BI dashboards' },
]

export const heroBadges = {
  building: { label: 'Currently seeking', value: 'Data Analyst internship' },
  stack: 'Python · Power BI · SQL',
}

export const heroCodeLines = {
  focus: ['Data', 'ML', 'BI'],
  seeking: 'Data Analyst internship',
}

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */
export const about = {
  eyebrow: '// about',
  title: 'From raw data to clear decisions',
  lead: 'Statistics foundations, hands-on machine learning and business-intelligence dashboards.',
  paragraphs: [
    "I'm a Data Science student at the Institute of Technology of Cambodia (ITC), majoring in Applied Mathematics and Statistics and based in Phnom Penh. I work with Python, Pandas and MySQL, and I have built projects in computer vision, NLP, business intelligence and data engineering.",
    'As a Data Analyst intern at Telecom Cambodia (Jul - Sep 2026), I built two production Power BI dashboards: an automated traffic analytics system and a sales and churn report. I am passionate about data and looking for a Data Analyst or Data Collection internship where I can apply my skills and keep growing.',
  ],
  highlights: [
    {
      icon: 'graduation',
      title: 'Academic background',
      text: 'Bachelor of Engineering in Data Science at ITC, built on Applied Mathematics and Statistics.',
    },
    {
      icon: 'brain',
      title: 'Technical interests',
      text: 'Data analysis, machine learning, deep learning on image data, and business-intelligence dashboards.',
    },
    {
      icon: 'target',
      title: 'Career objective',
      text: 'Data Analyst or Data Collection internship - turning real data into insight and growing with a team.',
    },
    {
      icon: 'users',
      title: 'Personal strengths',
      text: 'Teamwork, leadership, time management, critical thinking and effective communication.',
    },
  ] as AboutHighlight[],
  glance: [
    { label: 'Role', value: 'Data Science Student' },
    { label: 'Education', value: 'Institute of Technology of Cambodia' },
    { label: 'Internship', value: 'Telecom Cambodia - Data Analyst' },
    { label: 'Languages', value: 'Khmer · English · French' },
    { label: 'Location', value: 'Phnom Penh, Cambodia' },
  ] as GlanceRow[],
  coreStack: ['Python', 'Pandas', 'PyTorch', 'MySQL', 'Power BI', 'DAX'],
}

/* -------------------------------------------------------------------------- */
/*  Skills                                                                     */
/* -------------------------------------------------------------------------- */
export const skills = {
  eyebrow: '// skills',
  title: 'Technologies & tools I work with',
  lead: 'A practical toolkit for analysing data, building models and presenting results clearly.',
  groups: [
    {
      abbr: 'PL',
      title: 'Programming Languages',
      description: 'Languages I use to analyse and model data.',
      items: ['Python', 'DAX', 'Power Query M', 'Bash'],
    },
    {
      abbr: 'DB',
      title: 'Database',
      description: 'Storing, querying and modelling data.',
      items: ['MySQL', 'PostgreSQL', 'SQL', 'Star Schema Modelling'],
    },
    {
      abbr: 'DS',
      title: 'Data Science / ML',
      description: 'Cleaning, exploring and modelling data.',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Machine Learning', 'Data Analysis'],
    },
    {
      abbr: 'AI',
      title: 'AI / Deep Learning',
      description: 'Neural networks, computer vision and language models.',
      items: ['PyTorch', 'Deep Learning', 'Computer Vision', 'NLP', 'RAG', 'LangChain', 'GPT-4o', 'YOLO11', 'ArcFace'],
    },
    {
      abbr: 'BI',
      title: 'Business Intelligence',
      description: 'Turning raw data into clear, actionable visuals.',
      items: ['Power BI', 'Dashboard Design', 'Data Visualization', 'ETL Pipelines', 'Scheduled Refresh'],
    },
    {
      abbr: 'TT',
      title: 'Tools & Technologies',
      description: 'Platforms I use to build and share work.',
      items: ['GitHub', 'Power BI Service', 'rclone', 'Robotics Systems'],
    },
    {
      abbr: 'SS',
      title: 'Soft Skills',
      description: 'How I work with other people.',
      items: [
        'Teamwork',
        'Leadership',
        'Time Management',
        'Critical Thinking',
        'Communication',
        'Project Management',
        'Public Relations',
      ],
    },
    {
      abbr: 'LG',
      title: 'Languages',
      description: 'Spoken and written.',
      items: ['Khmer (Native)', 'English (Upper-Intermediate)', 'French (Basic)'],
    },
  ] as SkillGroup[],
}

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */
const GITHUB_PROFILE = contact.github

export const projects = {
  eyebrow: '// selected work',
  title: 'Projects',
  lead: 'Production dashboards from my Telecom Cambodia internship, plus AI projects in face recognition and a Khmer-English chatbot.',
  items: [
    {
      id: 'sales-churn-dashboard',
      title: 'Sales Performance & Churn Analytics Dashboard',
      description:
        'Six-page Power BI report built on 40,330 subscription records and 362,792 invoices, with a star schema and 54 DAX measures for churn, MRR, ARPU and receivables. Published with scheduled refresh and accepted by the Director General of Telecom Cambodia.',
      categories: ['Business Intelligence', 'Data Analytics'],
      tech: ['Power BI', 'Power Query M', 'DAX', 'Star Schema', 'REST API'],
      isPrivate: true, // company data - source is not public
      cover: { icon: 'chart', accent: 'lime' },
    },
    {
      id: 'traffic-analytics-dashboard',
      title: 'Traffic Analytics Dashboard & Automated ETL',
      description:
        'Five-page Power BI dashboard for Transit and VoIP traffic. A nightly Bash script pulls data from MySQL, uploads it with rclone to OneDrive, and Power BI refreshes at 09:00 - replacing manual monthly reports with daily updates.',
      categories: ['Data Engineering', 'Business Intelligence'],
      tech: ['Power BI', 'DAX', 'Bash', 'MySQL', 'rclone', 'OneDrive'],
      isPrivate: true, // company data - source is not public
      cover: { icon: 'activity', accent: 'emerald' },
    },
    {
      id: 'face-attendance-system',
      title: 'Intelligent Face Attendance System',
      description:
        'Research project combining YOLO11 face detection and ArcFace recognition with schedule-aware validation. Attendance is saved only for enrolled students during an active class. Tested on 55 images of 11 students: 100% detection and 96% correct authorization.',
      categories: ['AI', 'Computer Vision', 'Research'],
      tech: ['Python', 'YOLO11', 'ArcFace', 'OpenCV', 'PostgreSQL', 'Streamlit'],
      repoUrl: GITHUB_PROFILE, // TODO: replace with the repository URL
      cover: { icon: 'scan', accent: 'violet' },
    },
    {
      id: 'khmer-english-chatbot',
      title: 'Bilingual Chatbot (Khmer - English)',
      description:
        'AI chatbot that answers educational questions in Khmer and English using Retrieval-Augmented Generation. Built on Grade 12 Khmer textbook data, with GPT-4o and a vector database to give answers grounded in the textbooks and fewer hallucinations.',
      categories: ['AI', 'NLP', 'RAG'],
      tech: ['Python', 'GPT-4o', 'LangChain', 'FAISS', 'ChromaDB', 'NLP'],
      repoUrl: GITHUB_PROFILE, // TODO: replace with the repository URL
      cover: { icon: 'bot', accent: 'amber' },
    },
  ] as Project[],
}

/* -------------------------------------------------------------------------- */
/*  Experience (newest first)                                                  */
/* -------------------------------------------------------------------------- */
export const experience = {
  eyebrow: '// experience',
  title: "Where I'm learning by building",
  lead: 'Internship, research and project experience across data analytics, machine learning and robotics.',
  items: [
    {
      role: 'Data Analyst Intern',
      organization: 'Telecom Cambodia (TC)',
      type: 'Internship',
      period: 'Jul – Sep 2026',
      icon: 'briefcase',
      description:
        'Designed and delivered two production dashboards for the national telecom operator. Both were completed on schedule and are running in production.',
      bullets: [
        'Built a daily automated ETL: Bash on MySQL, rclone to OneDrive, Power BI refresh at 09:00',
        'Delivered a five-page Traffic Analytics Dashboard for Transit and VoIP partners',
        'Modelled 40,330 subscriptions and 362,792 invoices in a star schema with 54 DAX measures',
        'Published a six-page Sales & Churn dashboard, accepted by the Director General',
      ],
    },
    {
      role: 'Bilingual Chatbot (Khmer - English)',
      organization: 'Key project',
      type: 'Project',
      period: '2024 – 2025',
      icon: 'bot',
      description:
        'Developed a bilingual AI chatbot that answers educational questions using Retrieval-Augmented Generation (RAG).',
      bullets: [
        'Collected and processed Grade 12 Khmer textbook datasets to build a subject-specific knowledge base',
        'Built an end-to-end RAG pipeline: document collection, preprocessing, chunking, embeddings and semantic retrieval',
        'Integrated GPT-4o with a vector database for context-aware answers that reduce hallucinations',
        'Technologies: Python, GPT-4o, LangChain, FAISS/ChromaDB, NLP, RAG',
      ],
    },
    {
      role: 'Robotics Research & Projects',
      organization: 'DC-Lab (Robotics)',
      type: 'Research',
      period: '2023 – 2024',
      icon: 'cpu',
      description:
        'Early-stage research and hands-on project work on robotics systems design, coding and integration.',
      bullets: [
        'Collaborated on building and programming autonomous robots',
        'Combined mechanical engineering with control systems',
      ],
    },
    {
      role: 'ITC Volunteer',
      organization: 'Institute of Technology of Cambodia',
      type: 'Volunteer',
      period: '2022 – 2023',
      icon: 'users',
      description: 'Supported institute events by providing logistical help and guiding attendees.',
      bullets: ['Provided logistical support at events', 'Guided and assisted attendees'],
    },
  ] as ExperienceItem[],
}

/* -------------------------------------------------------------------------- */
/*  Education                                                                  */
/* -------------------------------------------------------------------------- */
export const education = {
  eyebrow: '// education',
  title: 'Academic background',
  lead: 'Building a strong base in mathematics, statistics and data science while shipping real projects.',
  items: [
    {
      institution: 'Institute of Technology of Cambodia (ITC)',
      degree: 'Bachelor of Engineering in Data Science',
      major: 'Data Science · Applied Mathematics & Statistics',
      period: '2022 – Present',
      location: 'Phnom Penh, Cambodia',
      description:
        'Studying data science with a foundation in applied mathematics and statistics, together with databases, machine learning and data-driven software.',
      achievements: [
        'Year-4 thesis: Sales Performance & Churn Analytics Dashboard for a Telecom Subscriber Base',
        'First thesis defense held on 31 October 2026',
        'Took part in DC-Lab Robotics and ITC volunteering',
      ],
    },
  ] as EducationItem[],
  coursesTitle: 'Courses & training',
  courses: [
    { title: 'General English Program', provider: 'Australian Center for Education', period: '2024 – Present' },
    { title: 'Above & Beyond Python Course', provider: 'Short course', period: '7 weeks' },
    { title: 'Full Stack Development', provider: 'Udemy (online)', period: 'In progress' },
  ] as CourseItem[],
}

/* -------------------------------------------------------------------------- */
/*  Certificates                                                               */
/*  PDFs and previews live in public/certificates/                             */
/* -------------------------------------------------------------------------- */
export const certificates = {
  eyebrow: '// certificates',
  title: 'Certificates',
  lead: 'Courses and training I completed, with the official certificates.',
  items: [
    {
      id: 'telecom-cambodia-internship',
      title: 'Internship Completion Certificate',
      issuer: 'Telecom Cambodia (TC)',
      description:
        'Official letter confirming practical training at the Strategy and Business Development department of Telecom Cambodia.',
      // The original letter shows personal details, so it is not published here.
      // To show it, add the file to public/certificates/ and set fileUrl.
      fileUrl: '',
      icon: 'briefcase',
    },
    {
      id: 'python-fundamentals',
      title: 'Python Fundamentals - 7-Week Online Course',
      issuer: 'Above + Beyond, with the Institute of Technology of Cambodia',
      description: 'Course completion certificate for a 7-week online course in Python fundamentals.',
      credentialId: 'ANBPTMD12024044',
      image: '/certificates/python-fundamentals.jpg',
      fileUrl: '/certificates/python-fundamentals-above-beyond.pdf',
      icon: 'code',
    },
    {
      id: 'python-basic',
      title: 'Basic Python - 3-Week Fast-Track Online Course',
      issuer: 'Above + Beyond',
      description: 'Course completion certificate for a 3-week fast-track online course in basic Python.',
      credentialId: 'ANBFT20240581',
      image: '/certificates/python-basic.jpg',
      fileUrl: '/certificates/python-basic-above-beyond.pdf',
      icon: 'code',
    },
  ] as CertificateItem[],
}

/* -------------------------------------------------------------------------- */
/*  Contact section copy                                                       */
/* -------------------------------------------------------------------------- */
export const contactSection = {
  eyebrow: '// contact',
  title: "Let's work together",
  lead: "Looking for a Data Analyst or Data Collection intern? Have a question about my projects? My inbox is open.",
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */
export const footerAscii = [
  [
    ' ██████╗██╗  ██╗██╗  ██╗███████╗ █████╗ ███╗   ██╗ ██████╗',
    '██╔════╝██║  ██║██║  ██║██╔════╝██╔══██╗████╗  ██║██╔════╝',
    '██║     ███████║███████║█████╗  ███████║██╔██╗ ██║██║  ███╗',
    '██║     ██╔══██║██╔══██║██╔══╝  ██╔══██║██║╚██╗██║██║   ██║',
    '╚██████╗██║  ██║██║  ██║███████╗██║  ██║██║ ╚████║╚██████╔╝',
    ' ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝',
  ].join('\n'),
  [
    '██╗   ██╗██████╗  ██████╗ ███╗   ███╗██╗   ██╗███████╗ █████╗ ███████╗███╗   ██╗ █████╗',
    '██║   ██║██╔══██╗██╔═══██╗████╗ ████║██║   ██║██╔════╝██╔══██╗██╔════╝████╗  ██║██╔══██╗',
    '██║   ██║██║  ██║██║   ██║██╔████╔██║██║   ██║█████╗  ███████║███████╗██╔██╗ ██║███████║',
    '██║   ██║██║  ██║██║   ██║██║╚██╔╝██║╚██╗ ██╔╝██╔══╝  ██╔══██║╚════██║██║╚██╗██║██╔══██║',
    '╚██████╔╝██████╔╝╚██████╔╝██║ ╚═╝ ██║ ╚████╔╝ ███████╗██║  ██║███████║██║ ╚████║██║  ██║',
    ' ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝',
  ].join('\n'),
]
