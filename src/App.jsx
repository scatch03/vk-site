import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Bot,
  Briefcase,
  Code2,
  Download,
  Gauge,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  TestTube2,
  Wrench,
  X,
} from 'lucide-react'
import anatoliiPhoto from './assets/anatolii.jpeg'
import './App.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'testimonials', label: 'Testimonials' },
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
    title: 'Testing',
    icon: TestTube2,
    skills: [
      'API Testing',
      'Visual Regression Testing',
      'Component Testing',
      'Cross-Browser Testing',
      'Test Case Design',
    ],
  },
  {
    title: 'Software Development',
    icon: Code2,
    skills: [
      'Python',
      'Javascript',
      'Node.js',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Test Automation',
    icon: Bot,
    skills: [
      'Playwright',
      'Selenium',
      'End-to-End Automation',
      'Regression Suite Automation',
      'CI/CD Pipeline Integration',
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
      'Git & GitLab',
      'Kubernetes',
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

const EXPERIENCE = [
  {
    title: 'QA Automation Engineer',
    company: 'Playson',
    companyLinks: [{ label: 'Playson', url: 'https://playson.com/' }],
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
    companyLinks: [
      { label: 'Ers Game Studios LLP', url: 'http://www.ersgamestudios.com/home' },
      { label: 'Enixan', url: 'https://enixan.com/' },
    ],
    period: 'May 2017 - Sep 2018',
    description: [
      'Executed manual and exploratory testing for casual quest games across full feature cycles.',
      'Reported, tracked, and validated defects in JIRA, collaborating closely with developers and designers.',
      'Tested gameplay and compatibility on desktop and mobile platforms, including iOS and Android.',
      'Created and maintained test cases, checklists, and release test plans to improve regression coverage.',
      'Performed smoke and sanity testing for new builds to ensure stable releases under tight deadlines.',
    ],
  },
]

const CORE_SKILLS = [
  'Python',
  'Javascript',
  'Node.js',
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

const RESUME_SIDE_CARD_COUNT = 3

const TESTIMONIALS = [
  {
    name: 'Anatolii Mikhailyuk',
    role: 'Backend Developer (NestJS / TypeScript / AWS)',
    linkedin: 'https://www.linkedin.com/in/mikhailuk-anatoly/',
    photo: anatoliiPhoto,
    review:
      'Katya is a talented QA Engineer and great to work with. She has value tech skills which can help every young team. Katya is very attentiveness and always looking for new solutions for doing testing process more easy and comfortable for the team. Katya a fun person to work with and is always helpful. She is a passionate QA team member with big experience in game industry using manual testing, I can strongly recommend her.',
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

const RESUME_PDF_PATH = '/kateryna-vorona-qa-automation-engineer-resume.pdf'
const CONTACT_MAILTO = 'katyagrinchishina@gmail.com'

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
  const [activeSectionId, setActiveSectionId] = useState(NAV_ITEMS[0]?.id ?? '')
  const [showTopButton, setShowTopButton] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mailto: CONTACT_MAILTO,
    subject: '',
    message: '',
  })
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [contactFormStatus, setContactFormStatus] = useState({
    type: 'idle',
    message: '',
  })
  const resumeHeaderRef = useRef(null)
  const [isResumeHeaderVisible, setIsResumeHeaderVisible] = useState(
    () => !supportsIntersectionObserver,
  )
  const testimonialsHeaderRef = useRef(null)
  const [isTestimonialsHeaderVisible, setIsTestimonialsHeaderVisible] = useState(
    () => !supportsIntersectionObserver,
  )
  const contactHeaderRef = useRef(null)
  const [isContactHeaderVisible, setIsContactHeaderVisible] = useState(
    () => !supportsIntersectionObserver,
  )
  const contactContentRef = useRef(null)
  const [isContactContentVisible, setIsContactContentVisible] = useState(
    () => !supportsIntersectionObserver,
  )
  const socialLinksRef = useRef(null)
  const [isSocialLinksVisible, setIsSocialLinksVisible] = useState(
    () => !supportsIntersectionObserver,
  )
  const skillsHeaderRef = useRef(null)
  const [isSkillsHeaderVisible, setIsSkillsHeaderVisible] = useState(
    () => !supportsIntersectionObserver,
  )
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const skillCardRefs = useRef([])
  const [visibleSkillCards, setVisibleSkillCards] = useState(() =>
    SKILL_GROUPS.map(() => !supportsIntersectionObserver),
  )
  const experienceCardRefs = useRef([])
  const [visibleExperienceCards, setVisibleExperienceCards] = useState(() =>
    EXPERIENCE.map(() => !supportsIntersectionObserver),
  )
  const resumeSideCardRefs = useRef([])
  const [visibleResumeSideCards, setVisibleResumeSideCards] = useState(() =>
    Array.from({ length: RESUME_SIDE_CARD_COUNT }, () => !supportsIntersectionObserver),
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
    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean)

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20)
      setShowTopButton(window.scrollY > 500)

      const scrollPosition = window.scrollY + 140
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let nextActiveSection = NAV_ITEMS[0]?.id ?? ''

      sectionElements.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          nextActiveSection = section.id
        }
      })

      if (reachedBottom) {
        nextActiveSection = NAV_ITEMS[NAV_ITEMS.length - 1]?.id ?? nextActiveSection
      }

      if (reachedBottom) {
        setIsFooterVisible(true)
      }

      setActiveSectionId((previous) =>
        previous === nextActiveSection ? previous : nextActiveSection,
      )
    }

    updateScrollState()

    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
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

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      setIsResumeHeaderVisible(true)
      return
    }

    if (!resumeHeaderRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          setIsResumeHeaderVisible(true)
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -15% 0px',
      },
    )

    observer.observe(resumeHeaderRef.current)

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      setIsTestimonialsHeaderVisible(true)
      return
    }

    if (!testimonialsHeaderRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          setIsTestimonialsHeaderVisible(true)
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -15% 0px',
      },
    )

    observer.observe(testimonialsHeaderRef.current)

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      setIsContactHeaderVisible(true)
      return
    }

    if (!contactHeaderRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          setIsContactHeaderVisible(true)
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -15% 0px',
      },
    )

    observer.observe(contactHeaderRef.current)

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      setIsContactContentVisible(true)
      return
    }

    if (!contactContentRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          setIsContactContentVisible(true)
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    observer.observe(contactContentRef.current)

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      setIsSocialLinksVisible(true)
      return
    }

    if (!socialLinksRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          setIsSocialLinksVisible(true)
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -28% 0px',
      },
    )

    observer.observe(socialLinksRef.current)

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      setIsSkillsHeaderVisible(true)
      return
    }

    if (!skillsHeaderRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          setIsSkillsHeaderVisible(true)
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -15% 0px',
      },
    )

    observer.observe(skillsHeaderRef.current)

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleResumeSideCards((previous) => {
          let next = previous
          let changed = false

          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return
            }

            const index = Number(entry.target.getAttribute('data-resume-side-index'))
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

    resumeSideCardRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [supportsIntersectionObserver])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!supportsIntersectionObserver) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleExperienceCards((previous) => {
          let next = previous
          let changed = false

          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return
            }

            const index = Number(entry.target.getAttribute('data-experience-index'))
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
        threshold: 0.3,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    experienceCardRefs.current.forEach((element) => {
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

    setActiveSectionId(sectionId)
    const top = section.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (isSubmittingContact) {
      return
    }

    setIsSubmittingContact(true)
    setContactFormStatus({ type: 'idle', message: '' })

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mailto: formData.mailto.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    try {
      const apiBase = `${window.location.protocol}//${window.location.hostname}:4000`
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const contentType = response.headers.get('content-type') ?? ''
      let responseData = null

      if (contentType.includes('application/json')) {
        responseData = await response.json()
      }

      if (!response.ok) {
        throw new Error(
          responseData?.message || 'Failed to send the message. Please try again in a moment.',
        )
      }

      setFormData({
        name: '',
        email: '',
        mailto: CONTACT_MAILTO,
        subject: '',
        message: '',
      })
      setContactFormStatus({
        type: 'success',
        message: 'Thanks. Your message has been sent successfully.',
      })
    } catch (error) {
      setContactFormStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to send the message. Please try again in a moment.',
      })
    } finally {
      setIsSubmittingContact(false)
    }
  }

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    if (contactFormStatus.type !== 'idle') {
      setContactFormStatus({ type: 'idle', message: '' })
    }
  }

  return (
    <div className="site-shell">
      <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSectionId === item.id ? 'nav-link--active' : ''}`}
                type="button"
                aria-current={activeSectionId === item.id ? 'page' : undefined}
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
              className={`mobile-menu-link ${activeSectionId === item.id ? 'mobile-menu-link--active' : ''}`}
              type="button"
              aria-current={activeSectionId === item.id ? 'page' : undefined}
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
                    onClick={() => scrollToSection('resume')}
                  >
                    View Work
                    <ArrowRight size={20} />
                  </button>
                  <a
                    className="btn btn-secondary hero-download-btn"
                    href={RESUME_PDF_PATH}
                    download
                  >
                    <Download size={20} />
                    Download Resume
                  </a>
                </div>
                <div className="hero-tags">
                  {HERO_TECH.map((tech, index) => (
                    <span key={tech} className="tech-pill-wrap" style={{ '--tech-index': index }}>
                      <span className="tech-pill">{tech}</span>
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
            <header
              ref={skillsHeaderRef}
              className={`section-header skills-section-header ${
                isSkillsHeaderVisible ? 'skills-section-header--visible' : ''
              }`}
            >
              <h2 className="section-title skills-section-title">Skills & Expertise</h2>
              <p className="section-subtitle skills-section-subtitle">
                Full-fledged quality engineering with extensive automation capabilities
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
                    style={{
                      transitionDelay: `${index * 80}ms`,
                      '--skill-card-delay': `${index * 80}ms`,
                    }}
                  >
                    <div className="card-icon">
                      <GroupIcon size={24} />
                    </div>
                    <h3>{group.title}</h3>
                    <ul className="skill-list">
                      {group.skills.map((skill, skillIndex) => (
                        <li key={skill} style={{ '--skill-item-index': skillIndex }}>
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

        <section id="resume" className="section section-soft">
          <div className="container">
            <header
              ref={resumeHeaderRef}
              className={`section-header resume-section-header ${
                isResumeHeaderVisible ? 'resume-section-header--visible' : ''
              }`}
            >
              <h2 className="section-title resume-section-title">Experience & Background</h2>
              <p className="section-subtitle resume-section-subtitle">
                Building quality into products through strategic automation and testing excellence
              </p>
              <a
                className="btn btn-primary section-cta resume-section-cta"
                href={RESUME_PDF_PATH}
                download
              >
                <Download size={20} />
                Download Full Resume
              </a>
            </header>

            <div className="resume-grid">
              <div>
                <div
                  className={`inline-heading ${
                    visibleExperienceCards[0] ? 'inline-heading--visible' : ''
                  }`}
                >
                  <Briefcase size={22} />
                  <h3>Work Experience</h3>
                </div>
                <div className="timeline">
                  {EXPERIENCE.map((entry, index) => (
                    <article
                      key={`${entry.title}${entry.company}`}
                      ref={(element) => {
                        experienceCardRefs.current[index] = element
                      }}
                      data-experience-index={index}
                      className={`timeline-item card ${
                        visibleExperienceCards[index] ? 'timeline-item--visible' : ''
                      }`}
                      style={{ transitionDelay: `${index * 220}ms` }}
                    >
                      <div className="timeline-head">
                        <div>
                          <h4>{entry.title}</h4>
                          <p>
                            {entry.companyLinks?.length ? (
                              entry.companyLinks.map((companyLink, index) => (
                                <span key={companyLink.label}>
                                  {index > 0 ? ', ' : ''}
                                  <a
                                    href={companyLink.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="timeline-company-link"
                                  >
                                    {companyLink.label}
                                  </a>
                                </span>
                              ))
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
                <article
                  ref={(element) => {
                    resumeSideCardRefs.current[0] = element
                  }}
                  data-resume-side-index={0}
                  className={`card side-card ${visibleResumeSideCards[0] ? 'side-card--visible' : ''}`}
                  style={{ transitionDelay: '0ms' }}
                >
                  <div
                    className={`inline-heading ${
                      visibleResumeSideCards[0] ? 'inline-heading--visible' : ''
                    }`}
                  >
                    <Sparkles size={20} />
                    <h3>Core Skills</h3>
                  </div>
                  <div className="badge-list">
                    {CORE_SKILLS.map((skill, index) => (
                      <span
                        key={skill}
                        className="badge core-skill-badge"
                        style={{ '--core-skill-index': index }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>

                <article
                  ref={(element) => {
                    resumeSideCardRefs.current[1] = element
                  }}
                  data-resume-side-index={1}
                  className={`card side-card ${visibleResumeSideCards[1] ? 'side-card--visible' : ''}`}
                  style={{ transitionDelay: '140ms' }}
                >
                  <div
                    className={`inline-heading ${
                      visibleResumeSideCards[1] ? 'inline-heading--visible' : ''
                    }`}
                  >
                    <BadgeCheck size={20} />
                    <h3>Certifications</h3>
                  </div>
                  <ul className="cert-list">
                    {CERTIFICATIONS.map((certificate, index) => (
                      <li
                        key={certificate.title}
                        className="cert-item"
                        style={{ '--cert-index': index }}
                      >
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

                <article
                  ref={(element) => {
                    resumeSideCardRefs.current[2] = element
                  }}
                  data-resume-side-index={2}
                  className={`card side-card ${visibleResumeSideCards[2] ? 'side-card--visible' : ''}`}
                  style={{ transitionDelay: '280ms' }}
                >
                  <div
                    className={`inline-heading ${
                      visibleResumeSideCards[2] ? 'inline-heading--visible' : ''
                    }`}
                  >
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

        <section id="testimonials" className="section">
          <div className="container">
            <header
              ref={testimonialsHeaderRef}
              className={`section-header testimonials-section-header ${
                isTestimonialsHeaderVisible ? 'testimonials-section-header--visible' : ''
              }`}
            >
              <h2 className="section-title testimonials-section-title">Testimonials</h2>
              <p className="section-subtitle testimonials-section-subtitle">
                Feedback from professionals I&apos;ve collaborated with.
              </p>
            </header>

            <div
              className={`testimonials-grid ${
                isTestimonialsHeaderVisible ? 'testimonials-grid--visible' : ''
              }`}
            >
              {TESTIMONIALS.map((testimonial) => (
                <article key={testimonial.name} className="card testimonial-card">
                  <div className="testimonial-head">
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="testimonial-profile-link testimonial-avatar-link"
                      aria-label={`Open ${testimonial.name} LinkedIn profile`}
                    >
                      <img
                        src={testimonial.photo}
                        alt={`${testimonial.name} profile photo`}
                        className="testimonial-avatar"
                        loading="lazy"
                      />
                    </a>
                    <div>
                      <h3>
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="testimonial-profile-link"
                        >
                          {testimonial.name}
                        </a>
                      </h3>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <header
              ref={contactHeaderRef}
              className={`section-header contact-section-header ${
                isContactHeaderVisible ? 'contact-section-header--visible' : ''
              }`}
            >
              <h2 className="section-title contact-section-title">Let&apos;s Talk Quality Engineering</h2>
              <p className="section-subtitle contact-section-subtitle">
                Interested in discussing newest automation strategies, best test architecture approaches, or exciting potential opportunities?
              </p>
            </header>

            <div
              ref={contactContentRef}
              className={`contact-grid ${isContactContentVisible ? 'contact-grid--visible' : ''}`}
            >
              <article
                className={`contact-form-wrap ${
                  isContactContentVisible ? 'contact-form-wrap--visible' : ''
                }`}
              >
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <input type="hidden" name="mailto" value={formData.mailto} />

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

                  <label htmlFor="subject">
                    Subject
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleFormFieldChange}
                      placeholder="Opportunity, project, or consultation"
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

                  <button type="submit" className="btn btn-primary btn-full" disabled={isSubmittingContact}>
                    <Send size={18} />
                    {isSubmittingContact ? 'Sending...' : 'Send Message'}
                  </button>

                  {contactFormStatus.type !== 'idle' ? (
                    <p
                      className={`contact-form-status contact-form-status--${contactFormStatus.type}`}
                      role={contactFormStatus.type === 'error' ? 'alert' : 'status'}
                    >
                      {contactFormStatus.message}
                    </p>
                  ) : null}
                </form>
              </article>

              <div className="contact-side">
                <article
                  className={`card contact-card ${isContactContentVisible ? 'contact-card--visible' : ''}`}
                >
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

                <div className="social-links" ref={socialLinksRef}>
                  {SOCIAL_LINKS.map((link, index) => {
                    const SocialIcon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`card social-card ${
                          isSocialLinksVisible ? 'social-card--visible' : ''
                        }`}
                        style={{ '--social-index': index }}
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

                <article
                  className={`availability-card ${
                    isSocialLinksVisible ? 'availability-card--visible' : ''
                  }`}
                >
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

      <footer className={`site-footer ${isFooterVisible ? 'site-footer--visible' : ''}`}>
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
