import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    name_style = ParagraphStyle(
        'DocName',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111827')
    )
    
    contact_style = ParagraphStyle(
        'ContactInfo',
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#374151')
    )

    section_header_style = ParagraphStyle(
        'SectionHeader',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#1f2937'),
        spaceAfter=2
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor('#111827')
    )

    item_subtitle_style = ParagraphStyle(
        'ItemSubtitle',
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#ea580c')
    )

    date_style = ParagraphStyle(
        'ItemDate',
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#4b5563')
    )

    bullet_style = ParagraphStyle(
        'BulletPoint',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#374151'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )

    normal_style = ParagraphStyle(
        'NormalText',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#374151')
    )

    bold_normal = ParagraphStyle(
        'BoldNormal',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#111827')
    )

    story = []

    # Header
    story.append(Paragraph("ABHISHEK KUMAR MISHRA", name_style))
    story.append(Spacer(1, 4))
    
    contact_text = (
        "+91 8207768304 &nbsp;|&nbsp; "
        "<a href='mailto:abhishekkumarmishra82077@gmail.com' color='#ea580c'>abhishekkumarmishra82077@gmail.com</a> &nbsp;|&nbsp; "
        "<a href='https://www.linkedin.com/in/abhishekmishra82077/' color='#ea580c'>linkedin.com/in/abhishekmishra82077</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/Abhishekmishra-04' color='#ea580c'>github.com/Abhishekmishra-04</a> &nbsp;|&nbsp; "
        "Uttar Pradesh, India"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 8))

    def add_section_divider(title):
        story.append(Paragraph(title.upper(), section_header_style))
        story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#9ca3af'), spaceAfter=5, spaceBefore=1))

    # EDUCATION
    add_section_divider("Education")
    edu_table_data = [
        [
            Paragraph("<b>Galgotias University</b>, Greater Noida, India", item_title_style),
            Paragraph("Aug 2020 – Jun 2024", date_style)
        ],
        [
            Paragraph("Bachelor of Technology in Computer Science and Engineering (AI & ML)", normal_style),
            Paragraph("<b>CGPA: 8.28 / 10</b>", date_style)
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[400, 140])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 6))

    # TECHNICAL SKILLS
    add_section_divider("Technical Skills")
    skills_data = [
        [Paragraph("<b>Languages:</b>", bold_normal), Paragraph("C++, Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3", normal_style)],
        [Paragraph("<b>Frameworks & Libraries:</b>", bold_normal), Paragraph("React.js, Next.js, Node.js, Express.js, Tailwind CSS, RESTful APIs, Context API, Redux", normal_style)],
        [Paragraph("<b>Databases:</b>", bold_normal), Paragraph("MySQL, MongoDB, Database Optimization, Query Performance Tuning, Relational Schema Design", normal_style)],
        [Paragraph("<b>DevOps & Tools:</b>", bold_normal), Paragraph("Git, GitHub, AWS, Vercel, PostCSS, CI/CD Awareness, Agile Methodologies", normal_style)],
        [Paragraph("<b>Core Competencies:</b>", bold_normal), Paragraph("Full Stack Engineering, System Design, Frontend Architecture, API Integration, Clean Code", normal_style)],
    ]
    skills_table = Table(skills_data, colWidths=[130, 410])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 6))

    # PROFESSIONAL EXPERIENCE
    add_section_divider("Professional Experience")
    
    # Future Interns
    exp1_header = [
        [Paragraph("<b>Full Stack Web Development Intern</b>", item_title_style), Paragraph("Dec 2024 – Present", date_style)],
        [Paragraph("<i>Future Interns</i>, Noida, Uttar Pradesh", item_subtitle_style), Paragraph("", date_style)]
    ]
    t1 = Table(exp1_header, colWidths=[400, 140])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t1)
    story.append(Paragraph("• Architecting responsive UI components using Next.js, React, and TypeScript with focus on accessibility and cross-browser consistency.", bullet_style))
    story.append(Paragraph("• Implementing robust backend REST APIs and secure endpoints to power dynamic application workflows and data flow efficiency.", bullet_style))
    story.append(Paragraph("• Resolving performance bottlenecks through automated debugging and testing, cutting load latencies across devices.", bullet_style))
    story.append(Spacer(1, 4))

    # GrowthLink
    exp2_header = [
        [Paragraph("<b>Frontend Web Development Intern</b>", item_title_style), Paragraph("Nov 2024 – Mar 2025", date_style)],
        [Paragraph("<i>GrowthLink</i>, Remote", item_subtitle_style), Paragraph("", date_style)]
    ]
    t2 = Table(exp2_header, colWidths=[400, 140])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t2)
    story.append(Paragraph("• Refactored resource-heavy React components, boosting client-side rendering speed and improving Lighthouse score by 25%.", bullet_style))
    story.append(Paragraph("• Implemented real-time data sync hooks eliminating unnecessary manual page refreshes for end-users.", bullet_style))
    story.append(Spacer(1, 4))

    # Qveto Technologies
    exp3_header = [
        [Paragraph("<b>Web Development Intern</b>", item_title_style), Paragraph("Jul 2024 – May 2025", date_style)],
        [Paragraph("<i>Qveto Technologies</i>, Noida, Uttar Pradesh", item_subtitle_style), Paragraph("", date_style)]
    ]
    t3 = Table(exp3_header, colWidths=[400, 140])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t3)
    story.append(Paragraph("• Built the complete Job Listing module from ground up using React, Node.js, and MySQL with responsive UI across mobile and desktop.", bullet_style))
    story.append(Paragraph("• Optimized slow database queries with proper indexing and connection pooling, accelerating search response by 40%.", bullet_style))
    story.append(Paragraph("• Designed interactive analytics dashboards and forms that increased active user engagement by 30%.", bullet_style))
    story.append(Spacer(1, 6))

    # KEY GITHUB & PRODUCTION PROJECTS
    add_section_divider("Key GitHub & Production Projects")

    projects = [
        {
            "name": "AI-Powered Recruiter Portfolio & Digital Twin",
            "tech": "Next.js 16, React 19, TypeScript, OpenAI API, Tailwind CSS",
            "links": "Live: abhishekkumarmishraportfolio.netlify.app | GitHub: github.com/Abhishekmishra-04/Personal_Portfolio",
            "bullets": [
                "Built production-ready portfolio featuring an interactive AI Assistant chatbot trained on developer background with zero hallucination context.",
                "Engineered an automated Job Description (JD) Skill Matcher and an interactive Contact Form with server validation and 1-click link sharing."
            ]
        },
        {
            "name": "Full-Stack Support Ticket Management System",
            "tech": "TypeScript, Next.js, React, Node.js, Tailwind CSS, REST APIs",
            "links": "Live: support-ticket-system-olive.vercel.app | GitHub: github.com/Abhishekmishra-04/Support-Ticket-System",
            "bullets": [
                "Developed complete support ticket platform with role-based auth, ticket status progression (Open/In Progress/Closed), and SLA priority tracking.",
                "Designed responsive client dashboards with instant search, multi-factor filtering, and sub-100ms API response times."
            ]
        },
        {
            "name": "Job Portal Web Application",
            "tech": "React.js, Node.js, Express, MySQL, MongoDB",
            "links": "GitHub: github.com/Abhishekmishra-04",
            "bullets": [
                "Architected dual-database setup (MySQL for structured candidate/job listings and MongoDB for logging activity) avoiding search bottlenecks.",
                "Implemented role-based permissions, advanced candidate search filtering, and secure JWT authentication."
            ]
        },
        {
            "name": "School Management System",
            "tech": "React.js, JavaScript, Node.js, Tailwind CSS, Vercel",
            "links": "Live: school-management-system-six-phi.vercel.app | GitHub: github.com/Abhishekmishra-04/School-Management-System",
            "bullets": [
                "Created comprehensive academic management platform to register institutions, manage student directories, and track attendance records.",
                "Built responsive dashboards with clean RESTful modular endpoints for fast administrative operations."
            ]
        },
        {
            "name": "Domain Checker & DNS Intelligence Tool",
            "tech": "JavaScript, React, DNS APIs, Vercel",
            "links": "Live: domain-checker-amber.vercel.app | GitHub: github.com/Abhishekmishra-04/Domain-checker",
            "bullets": [
                "Built zero-latency domain availability search engine with asynchronous WHOIS lookups and live DNS record parsing.",
                "Implemented debounced query inputs and optimistic UI states handling hundreds of domain extensions effortlessly."
            ]
        },
        {
            "name": "Task Management System",
            "tech": "React.js, Node.js, Express, MySQL",
            "links": "GitHub: github.com/Abhishekmishra-04/Task-Management-App",
            "bullets": [
                "Engineered full-stack CRUD task tracking application with status state-machine (To Do, In Progress, Completed) and relational schema design.",
                "Designed intuitive UI with drag-and-drop capability and optimistic updates for smooth task organization."
            ]
        },
        {
            "name": "ATS Job Search & Resume Matcher",
            "tech": "Python, NLP, FastAPI, Machine Learning",
            "links": "GitHub: github.com/Abhishekmishra-04/ATS-Job-Search",
            "bullets": [
                "Developed intelligent applicant tracking system engine parsing candidate resumes against job descriptions to compute keyword match percentage.",
                "Implemented text preprocessing, entity recognition, and actionable gap analysis recommendations."
            ]
        },
        {
            "name": "Expense Tracker & Financial Analytics",
            "tech": "TypeScript, JavaScript, HTML5, CSS3, LocalStorage / SQL",
            "links": "Live: abhishekmishra-04.github.io/Expense-Tracker | GitHub: github.com/Abhishekmishra-04/Expense-Tracker",
            "bullets": [
                "Created responsive personal finance application with real-time balance calculations, category breakdown charts, and local data persistence.",
                "Implemented client-side input validation and transaction export features with zero external latency."
            ]
        },
        {
            "name": "Netflix Clone & Media Streaming UI",
            "tech": "React.js, TMDB API, CSS3, Vercel",
            "links": "Live: netflix-clone-t264.vercel.app | GitHub: github.com/Abhishekmishra-04/Netflix-clone",
            "bullets": [
                "Engineered responsive video-on-demand layout replicating hero trailers, category carousels, and poster grids with lazy image loading.",
                "Integrated real-time TMDB API caching to minimize redundant network requests during rapid scrolling."
            ]
        },
        {
            "name": "Smart Bookmark Manager & Data Pipeline Dashboard",
            "tech": "TypeScript, React, Python, Data Pipelines",
            "links": "GitHub: github.com/Abhishekmishra-04/Smart-Bookmark-App & data-pipeline-fullstack-dashboard",
            "bullets": [
                "Built productivity bookmark manager with tag-based filtering and automated OpenGraph metadata extraction.",
                "Designed automated Python ETL data pipeline extracting, transforming, and streaming analytical KPIs to full-stack dashboards."
            ]
        }
    ]

    for p in projects:
        project_flowables = []
        p_table = [
            [
                Paragraph(f"<b>{p['name']}</b> &nbsp;|&nbsp; <font color='#4b5563'>{p['tech']}</font>", item_title_style),
                Paragraph("", date_style)
            ],
            [
                Paragraph(f"<i><font color='#ea580c'>{p['links']}</font></i>", normal_style),
                Paragraph("", date_style)
            ]
        ]
        pt = Table(p_table, colWidths=[430, 110])
        pt.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        project_flowables.append(pt)
        for b in p["bullets"]:
            project_flowables.append(Paragraph(f"• {b}", bullet_style))
        project_flowables.append(Spacer(1, 3))
        story.append(KeepTogether(project_flowables))

    # CERTIFICATIONS & ACHIEVEMENTS
    add_section_divider("Certifications & Coding Achievements")
    story.append(Paragraph("• <b>AWS Academy – Data Engineering:</b> Designed and optimized secure cloud data pipelines and data ingestion architectures.", bullet_style))
    story.append(Paragraph("• <b>C++ Programming Certification – Coding Ninjas:</b> Advanced algorithmic problem solving, recursion, graphs, and dynamic programming.", bullet_style))
    story.append(Paragraph("• <b>Frontend Development with React & Node.js REST API Development:</b> Udemy Certified.", bullet_style))
    story.append(Paragraph("• <b>Coding Profiles:</b> Solved 300+ algorithmic problems across <b>LeetCode</b>, <b>CodeChef</b> (akmishra_24), <b>HackerEarth</b>, and active contributor on <b>StackOverflow</b>.", bullet_style))

    doc.build(story)
    print(f"Resume generated successfully at: {output_path}")

if __name__ == "__main__":
    out_file = os.path.abspath("public/resume.pdf")
    create_resume(out_file)
