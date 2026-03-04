import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Blocks,
  Briefcase,
  Code2,
  Download,
  FlaskConical,
  Gauge,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Rocket,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sun,
  TestTube2,
  Wrench,
  X,
} from 'lucide-react'
import './App.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const ROLE_TITLES = [
  'QA Automation',
  'SDET',
  'Quality Assurance',
  'Manual Tester',
  'Test Architect',
  'Quality Engineer',
]

const HERO_TECH = [
  'Playwright',
  'Python',
  'Node.js',
  'CI/CD',
  'API Testing',
  'Test Architecture',
]

const SKILL_GROUPS = [
  {
    title: 'Automation & Testing',
    icon: TestTube2,
    skills: [
      'Playwright (Expert)',
      'API Testing',
      'UI Automation',
      'Visual Regression Testing',
      'Component Testing',
    ],
  },
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      'React & TypeScript',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'Next.js & Vite',
    ],
  },
  {
    title: 'UI/UX & Design',
    icon: Palette,
    skills: [
      'Figma & Design Systems',
      'Responsive Design',
      'Accessibility (WCAG)',
      'User Interface Design',
      'Prototyping',
    ],
  },
  {
    title: 'Test Engineering',
    icon: Gauge,
    skills: [
      'Test Strategy',
      'Framework Design',
      'CI/CD Integration',
      'Performance Testing',
      'Quality Metrics',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      'Git & GitHub',
      'GitHub Actions',
      'VS Code',
      'Docker',
      'Jenkins/CircleCI',
    ],
  },
  {
    title: 'Testing Mindset',
    icon: ShieldCheck,
    skills: [
      'Reliability Engineering',
      'Maintainability',
      'Risk-based Testing',
      'Test Coverage Analysis',
      'Quality Advocacy',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Playwright Automation Framework v2',
    description:
      'Enterprise-grade test automation framework with hybrid API + UI testing capabilities, authentication handling, network mocking, and comprehensive CI/CD integration.',
    icon: Rocket,
    technologies: ['Playwright', 'TypeScript', 'GitHub Actions', 'Docker', 'Allure Reports'],
    githubUrl: '#',
  },
  {
    title: 'QA Automation Portfolio',
    description:
      'Production-ready automation test suite demonstrating best practices in test architecture, page object models, data-driven testing, and continuous integration.',
    icon: TestTube2,
    technologies: ['Playwright', 'TypeScript', 'Jest', 'CI/CD', 'API Testing'],
    githubUrl: '#',
  },
  {
    title: 'Modern Portfolio Website',
    description:
      'Fully responsive, accessible portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and modern UI/UX design patterns.',
    icon: Code2,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Figma'],
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Testing Suite',
    description:
      'Comprehensive end-to-end testing solution for e-commerce platforms covering user flows, payment integration, inventory management, and performance testing.',
    icon: ShoppingCart,
    technologies: ['Playwright', 'API Testing', 'Performance', 'Visual Testing'],
    githubUrl: '#',
  },
  {
    title: 'Design System Documentation',
    description:
      'Interactive component library and design system built with Storybook, featuring accessibility-first components, design tokens, and comprehensive usage guidelines.',
    icon: Blocks,
    technologies: ['React', 'Storybook', 'Tailwind', 'Accessibility', 'Figma'],
    githubUrl: '#',
  },
  {
    title: 'Automation Experiments',
    description:
      'Research repository exploring advanced testing patterns, visual regression testing, accessibility automation, and performance testing strategies.',
    icon: FlaskConical,
    technologies: ['Playwright', 'Axe-core', 'Lighthouse', 'Percy', 'WebVitals'],
    githubUrl: '#',
  },
]

const EXPERIENCE = [
  {
    title: 'QA Automation Engineer',
    company: 'Playson',
    companyUrl: 'https://playson.com/',
    period: 'Sep 2018 - Present',
    description: [
      'Led QA automation strategy for a multi-product platform, aligning risk-based software testing with release goals.',
      'Planned, tracked, and expanded end-to-end test coverage for web and API flows to reduce production defects.',
      'Architected and maintained core automated testing frameworks for regression, smoke, and critical-path validation.',
      'Selected and integrated QA tools into CI/CD pipelines to improve build quality gates and release confidence.',
      'Defined scalable test standards, reusable test architecture patterns, and quality metrics across product teams.',
      'Reviewed team code contributions and test implementations to ensure maintainability, reliability, and consistency.',
      'Maintained QA documentation, test strategy artifacts, and operational runbooks for faster onboarding and execution.',
      'Developed incident response procedures for quality issues, driving faster triage, root-cause analysis, and prevention.',
    ],
  },
  {
    title: 'QA Engineer',
    company: 'Ers Game Studios LLP, Enixan',
    period: 'May 2017 - Sep 2018',
    description: [
      'Ukraine',
      'Testing of casual games in the genre quest;',
      'Working with bug tracking system JIRA;',
      'Knowledge of desktop operating systems and mobile platforms (iOS, Android);',
      "PC Games: Spirits of Mistery; Redemption Cemetery; Edgar Allan Poe's; Puppet Show; Haunted Legends etc.",
      'F2P: Iron Rage; Deepsea Story.',
    ],
  },
]

const CORE_SKILLS = [
  'Python',
  'Javascript',
  'Playwright',
  'Selenium',
  'Test Architecture',
  'CI/CD',
  'API Testing',
  'Performance Testing',
  'Git & GitLab',
  'Agile/Scrum',
  'SQL',
  'CSS',
  'HTML',
  'Jira',
  'Postman',
]

const CERTIFICATIONS = [
  {
    title: 'Python Data Structures',
    url: 'https://www.sololearn.com/Certificate/CT-9ZHLFIBK/png',
  },
  {
    title: 'Structured Query Language',
    url: 'https://www.sololearn.com/Certificate/CT-XJ89NXWB/jpg',
  },
  {
    title: 'Python Programming Language',
    url: 'https://www.sololearn.com/Certificate/CT-QER6GGAD/png',
  },
  {
    title: 'Selenium Web Driver',
    url: 'https://www.linkedin.com/in/katya-h-8011a6b6/overlay/Position/1454661564/treasury/?profileId=ACoAABiWwwEB4ZX0Iw1XvPgi9lHb4xxjetzPWzk',
  },
  {
    title: 'Software Testing',
    url: 'https://skillsup.ua/education/courses/software-testing/',
  },
]

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/katya-h-8011a6b6/',
    description: 'Connect on LinkedIn',
    icon: Linkedin,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/khrynchyshyna',
    description: 'Message on Telegram',
    icon: Send,
  },
  {
    name: 'Email',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=katyagrinchishina@gmail.com',
    description: 'katyagrinchishina@gmail.com',
    icon: Mail,
  },
]

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return false
  }

  const savedTheme = window.localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return savedTheme ? savedTheme === 'dark' : prefersDark
}

function App() {
  const supportsIntersectionObserver =
    typeof window !== 'undefined' && 'IntersectionObserver' in window
  const [isDark, setIsDark] = useState(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const skillCardRefs = useRef([])
  const [visibleSkillCards, setVisibleSkillCards] = useState(() =>
    SKILL_GROUPS.map(() => !supportsIntersectionObserver),
  )

  const heroDots = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        left: `${(index % 6) * 20}%`,
        top: `${Math.floor(index / 6) * 20}%`,
        delay: `${index * 0.1}s`,
      })),
    [],
  )

  const heroShapes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => ({
        left: `${8 + ((index * 11) % 84)}%`,
        top: `${12 + ((index * 17) % 76)}%`,
        duration: `${18 + index * 3}s`,
        delay: `${index * 0.8}s`,
        type: index % 3,
      })),
    [],
  )

  const applyTheme = (nextIsDark) => {
    setIsDark(nextIsDark)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setShowTopButton(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % ROLE_TITLES.length)
    }, 5100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSkillCards((previous) => {
          let next = previous
          let changed = false

          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return
            }

            const index = Number(entry.target.getAttribute('data-skill-index'))
            if (Number.isNaN(index) || previous[index]) {
              return
            }

            if (!changed) {
              next = [...previous]
              changed = true
            }

            next[index] = true
            observer.unobserve(entry.target)
          })

          return changed ? next : previous
        })
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    skillCardRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) {
      return
    }

    const top = section.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    alert('Thank you for your message! This is a demo form.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  return (
    <div className="site-shell">
      <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                type="button"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-button"
              aria-label="Toggle theme"
              onClick={() => applyTheme(!isDark)}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              className="icon-button menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMenuOpen((previous) => !previous)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <div
          id="mobile-nav-menu"
          className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              className="mobile-menu-link"
              type="button"
              style={{ '--menu-item-index': index }}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-bg">
            <div className="hero-gradient" />
            <div
              className="hero-blob hero-blob--one"
              style={{
                transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
              }}
            />
            <div
              className="hero-blob hero-blob--two"
              style={{
                transform: `translate(${-mousePosition.x / 60}px, ${-mousePosition.y / 60}px)`,
              }}
            />
            <div
              className="hero-blob hero-blob--three"
              style={{
                transform: `translate(${mousePosition.x / 70}px, ${-mousePosition.y / 70}px)`,
              }}
            />
            <div className="hero-grid" />
            <div className="hero-shapes">
              {heroShapes.map((shape, index) => (
                <div
                  key={`shape-${index}`}
                  className={`hero-shape hero-shape--${shape.type}`}
                  style={{
                    left: shape.left,
                    top: shape.top,
                    animationDuration: shape.duration,
                    animationDelay: shape.delay,
                  }}
                />
              ))}
            </div>
            <div className="hero-dots">
              {heroDots.map((dot, index) => (
                <span
                  key={`dot-${index}`}
                  className="hero-dot"
                  style={{ left: dot.left, top: dot.top, animationDelay: dot.delay }}
                />
              ))}
            </div>
            <span className="hero-scan-line" />
          </div>

          <div className="container hero-inner">
            <div className="hero-content">
              <div className="hero-copy">
                <h1 className="hero-title">
                  <span className="hero-role" key={ROLE_TITLES[roleIndex]}>
                    {ROLE_TITLES[roleIndex]}
                    <span className="hero-caret" />
                  </span>
                  <span className="hero-keywords">Playwright | CI/CD | Quality Engineering</span>
                </h1>
                <p className="hero-description">
                  I build reliable QA automation systems with Playwright, API testing, and CI/CD
                  pipelines to reduce release risk, accelerate delivery, and ensure seamless scaling for modern
                  product teams. I struggle to embed quality engineering across all stages of the software
                  development lifecycle.
                </p>
                <div className="hero-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => scrollToSection('projects')}
                  >
                    View Work
                    <ArrowRight size={20} />
                  </button>
                <button
                  type="button"
                  className="btn btn-secondary hero-download-btn"
                  onClick={() => scrollToSection('resume')}
                >
                  <Download size={20} />
                  Download Resume
                  </button>
                </div>
                <div className="hero-tags">
                  {HERO_TECH.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <aside className="hero-portrait-shell">
                <a
                  href="https://www.linkedin.com/in/katya-h-8011a6b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Kateryna Vorona LinkedIn profile"
                >
                  <div className="hero-portrait-ring">
                    <img
                      className="hero-portrait-image"
                      src="/hero-photo.jpeg"
                      alt="Kateryna Vorona portrait"
                    />
                  </div>
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Skills & Expertise</h2>
              <p className="section-subtitle">
                Full-stack quality engineering with frontend development and UI/UX design
                capabilities
              </p>
            </header>
            <div className="skills-grid">
              {SKILL_GROUPS.map((group, index) => {
                const GroupIcon = group.icon
                return (
                  <article
                    key={group.title}
                    ref={(element) => {
                      skillCardRefs.current[index] = element
                    }}
                    data-skill-index={index}
                    className={`card skill-card ${visibleSkillCards[index] ? 'skill-card--visible' : ''}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="card-icon">
                      <GroupIcon size={24} />
                    </div>
                    <h3>{group.title}</h3>
                    <ul className="skill-list">
                      {group.skills.map((skill) => (
                        <li key={skill}>
                          <span className="bullet-dot" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-soft">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Automation frameworks, testing solutions, and frontend development projects
              </p>
            </header>
            <div className="projects-grid">
              {PROJECTS.map((project) => {
                const ProjectIcon = project.icon
                return (
                  <article key={project.title} className="card project-card">
                    <div className="card-icon">
                      <ProjectIcon size={28} />
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-list">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="tag">
                          {technology}
                        </span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="resume" className="section section-soft">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Experience & Background</h2>
              <p className="section-subtitle">
                Building quality into products through strategic automation and testing excellence
              </p>
              <button type="button" className="btn btn-primary section-cta">
                <Download size={20} />
                Download Full Resume
              </button>
            </header>

            <div className="resume-grid">
              <div>
                <div className="inline-heading">
                  <Briefcase size={22} />
                  <h3>Work Experience</h3>
                </div>
                <div className="timeline">
                  {EXPERIENCE.map((entry) => (
                    <article key={`${entry.title}${entry.company}`} className="timeline-item card">
                      <div className="timeline-head">
                        <div>
                          <h4>{entry.title}</h4>
                          <p>
                            {entry.companyUrl ? (
                              <a
                                href={entry.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="timeline-company-link"
                              >
                                {entry.company}
                              </a>
                            ) : (
                              entry.company
                            )}
                          </p>
                        </div>
                        <span>{entry.period}</span>
                      </div>
                      <ul className="timeline-list">
                        {entry.description.map((point) => (
                          <li key={point}>
                            <span className="timeline-marker">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="resume-side">
                <article className="card side-card">
                  <div className="inline-heading">
                    <Sparkles size={20} />
                    <h3>Core Skills</h3>
                  </div>
                  <div className="badge-list">
                    {CORE_SKILLS.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="card side-card">
                  <div className="inline-heading">
                    <BadgeCheck size={20} />
                    <h3>Certifications</h3>
                  </div>
                  <ul className="cert-list">
                    {CERTIFICATIONS.map((certificate) => (
                      <li key={certificate.title}>
                        <span className="check-symbol">✓</span>
                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link"
                        >
                          {certificate.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="card side-card">
                  <div className="inline-heading">
                    <GraduationCap size={20} />
                    <h3>Education</h3>
                  </div>
                  <div className="education-row">
                    <a
                      href="https://vspu.edu.ua/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Vinnytsia State Pedagogical University website"
                    >
                      <img
                        className="education-logo"
                        src="/vspu-logo.png"
                        alt="Vinnytsia State Pedagogical University logo"
                      />
                    </a>
                    <div className="education-text">
                      <p className="education-main">Vinnytsia State Pedagogical University</p>
                      <p className="education-sub">MSc of Information Technology</p>
                      <p className="education-sub">2008 – 2013</p>
                    </div>
                  </div>
                </article>
              </aside>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <header className="section-header">
              <h2 className="section-title">Let&apos;s Talk Quality Engineering</h2>
              <p className="section-subtitle">
                Interested in discussing newest automation strategies, best test architecture approaches, or exciting potential opportunities?
              </p>
            </header>

            <div className="contact-grid">
              <article className="contact-form-wrap">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <label htmlFor="name">
                    Name
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleFormFieldChange}
                      required
                      placeholder="Your name"
                    />
                  </label>

                  <label htmlFor="email">
                    Email
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormFieldChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </label>

                  <label htmlFor="message">
                    Message
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleFormFieldChange}
                      required
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </label>

                  <button type="submit" className="btn btn-primary btn-full">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </article>

              <div className="contact-side">
                <article className="card contact-card">
                  <h3>Get in Touch</h3>
                  <p>
                    I&apos;m always open to discussing new opportunities, solving automation
                    challenges, and collaborating on quality engineering initiatives.
                  </p>
                  <p>
                    If you&apos;re looking for a QA automation engineer, need guidance on test
                    strategy, or want to exchange quality engineering best practices, feel free to
                    reach out.
                  </p>
                </article>

                <div className="social-links">
                  {SOCIAL_LINKS.map((link) => {
                    const SocialIcon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card social-card"
                      >
                        <div className="card-icon">
                          <SocialIcon size={20} />
                        </div>
                        <div>
                          <p className="social-name">{link.name}</p>
                          <p className="social-description">{link.description}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>

                <article className="availability-card">
                  <div className="availability-header">
                    <span className="status-dot" />
                    <p>Open to opportunities</p>
                  </div>
                  <p>
                    Open to interesting opportunities in product companies and SaaS startups
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 All rights reserved.</p>
          <div className="footer-links">
            <a
              href="https://t.me/khrynchyshyna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/katya-h-8011a6b6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=katyagrinchishina@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {showTopButton && (
        <button
          type="button"
          className="scroll-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  )
}

export default App
