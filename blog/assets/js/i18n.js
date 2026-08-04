const ko = {
  site: {
    wordmark: "최현우",
    title: "최현우 | Portfolio",
    description: "최현우의 AI, Computer Vision, Backend 프로젝트 포트폴리오입니다.",
    footer: "© 2026 최현우. All rights reserved."
  },
  nav: {
    about: "소개",
    experience: "경력",
    skills: "기술",
    projects: "프로젝트",
    awards: "수상",
    publications: "논문",
    contact: "연락처"
  },
  hero: {
    eyebrow: "PORTFOLIO",
    title: "최현우",
    role: "AI / Computer Vision · Backend",
    copy:
      "AI / Computer Vision과 Backend 프로젝트를 통해 데이터와 모델, API 흐름을 실제로 동작하는 형태로 연결해 왔습니다."
  },
  heroKeywords: ["AI", "Computer Vision", "Backend"],
  sections: {
    aboutEyebrow: "ABOUT",
    aboutTitle: "소개",
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "경력",
    skillsEyebrow: "SKILLS",
    skillsTitle: "기술",
    projectsEyebrow: "PROJECTS",
    projectsTitle: "프로젝트",
    publicationsEyebrow: "PUBLICATIONS",
    publicationsTitle: "논문",
    awardsEyebrow: "AWARDS",
    awardsTitle: "수상",
    contactEyebrow: "CONTACT",
    contactTitle: "연락처"
  },
  about: {
    body:
      "<p>실험 코드에서 멈추지 않고 데이터, 모델, API 흐름을 실제로 동작하는 시스템으로 연결하는 개발자입니다.</p><p>AI / Computer Vision과 Backend를 중심으로 문제를 구조화하고, 구현과 검증을 통해 사용자에게 닿는 결과물까지 완성하는 일을 좋아합니다.</p>"
  },
  experience: [
    {
      organization: "순천향대학교",
      role: "Dept. of Computer Software Engineering",
      period: "2021.03 - 현재",
      bullets: [
        "컴퓨터소프트웨어공학과 4학년 재학",
        "2026 Wrtn 순천향대학교 부트캠프 참가",
        {
          text: "2026 로컬 창업동아리 아이디어 리그 경진대회 참가",
          url: "papers/idea-league-slides.pdf"
        },
        "다수 튜터링 프로그램 튜터 활동",
        "학술 동아리 Soft Brain 활동"
      ],
      links: []
    },
    {
      organization: "순천향대학교 정보보호연구실",
      role: "학부 연구생",
      period: "2025.03.26 - 현재",
      bullets: [
        "보안 세미나(암호학), 기술 세미나(포렌식/모의해킹/블록체인/DID), 논문 리뷰 세미나 참가 및 발표",
        "보안 기사 작성 및 전시",
        "2025 대학 암호동아리, KUCIS, 사이버보안동아리 선정",
        "2025 KISIA 융합보안 인력양성 교육(AI보안 1차) 수료",
        "2025 KISIA 온택트 융합보안 12개 과정 수료",
        "2025 KUCIS 우수동아리 시상",
        "2025 제11회 암호분석경진대회 참가",
        "2025 헥테온 세종 국제 대학생 사이버보안 경진대회 참가",
        "2026 대학 암호동아리, KUCIS 선정",
        "2025 졸업생 컨퍼런스 발표"
      ],
      links: []
    },
    {
      organization: "DEEP.I",
      role: "근로장학생 / Computer Vision 프로젝트 참여",
      period: "2024.12.31 - 현재",
      bullets: [
        "RTSP 영상 프레임 수집 및 카메라별 데이터 저장 자동화",
        "데이터 증강 적용과 YOLO 라벨 좌표 보정 로직 구현",
        "YOLOv8 기반 학습, 추론, 성능 평가, 결과 시각화 수행",
        "이미지/라벨 정합성 점검 및 학습 데이터셋 분할 스크립트 구현",
        "Azure OpenAI API를 활용한 TBM 문서 생성 로직 개발",
        "작업일보 입력 파싱 및 생성 응답 후처리 흐름 구현",
        "COCO-to-YOLO segmentation 전처리 파이프라인 구현",
        "MMDetection, YOLO Segmentation 기반 segmentation 실험 수행",
        "ByteTrack, BotSORT 기반 객체 추적 실험 수행",
        "ResNet18 기반 이진 분류 모델 학습 및 평가",
        "YOLO Detection과 Gradio UI를 연결한 2단계 추론 파이프라인 구현"
      ],
      links: []
    }
  ],
  skills: [
    {
      title: "AI / Computer Vision",
      items: ["PyTorch", "OpenCV", "YOLO", "MMDetection", "ByteTrack", "BotSORT", "ResNet18"]
    },
    {
      title: "Backend / Database",
      items: ["FastAPI", "PostgreSQL", "Redis", "psycopg", "SQLAlchemy"]
    },
    {
      title: "Blockchain / Security",
      items: ["Hyperledger Besu", "Solidity", "QBFT", "Integrity Verification"]
    },
    {
      title: "Frontend / Product",
      items: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "Gradio"]
    },
    {
      title: "Infra / Tools",
      items: ["Docker", "Docker Compose", "Linux", "Git"]
    },
    {
      title: "Languages",
      items: ["Python", "C", "JavaScript/TypeScript", "Solidity"]
    }
  ],
  projects: [
    {
      id: "visionops",
      title: "VisionOps",
      status: "In Progress",
      type: "Individual",
      summary:
        "Object Detection, Segmentation, Classification, Pose Estimation 등 컴퓨터 비전 모델 전반을 다루는 로컬 우선 Computer Vision Ops 웹 플랫폼.",
      stack: "FastAPI/SQLAlchemy/React/TypeScript/Vite",
      detailUrl: "projects/visionops.html",
      githubUrl: "https://github.com/ihyonoo/visionops"
    },
    {
      id: "mediledger",
      title: "Mediledger & EqupTrace\n- 블록체인 기반 의료 장비 사용 이력 관리 시스템",
      status: "In Progress",
      type: "Individual",
      summary:
        "RTLS 기반 위치 추적, NFC 사용 이력, Hyperledger Besu 무결성 검증을 연결한 의료 장비 관리 시스템.",
      stack: "FastAPI/PostgreSQL/Redis/React/Hyperledger Besu",
      detailUrl: "projects/mediledger-equptrace.html",
      githubUrl: "https://github.com/ihyonoo/capstone-blockchain-medical-equipment-management"
    },
    {
      id: "hateSpeech",
      title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
      status: "Completed",
      type: "Individual",
      summary: "K-MHaS 데이터 기반 한국어 혐오 표현 8개 유형 멀티라벨 분류와 Streamlit 데모.",
      stack: "Python/PyTorch/Transformers/KoELECTRA/Streamlit",
      detailUrl: "projects/hate-speech-detection.html",
      githubUrl: "https://github.com/ihyonoo/koelectra-hate-speech-detection"
    },
    {
      id: "smartglass",
      title: "스마트 글래스 시뮬레이션",
      status: "Completed",
      type: "Team",
      summary:
        "음성 명령으로 길찾기·이미지 번역·실시간 통역·여행지 질문응답(RAG)을 오버레이 UI로 보여주는 웹캠 기반 스마트 글래스 시뮬레이션. 5인 팀에서 프론트엔드/UI 담당.",
      stack: "Python/FastAPI/React/Vite/TailwindCSS/Three.js",
      detailUrl: "projects/smartglass-simulation.html",
      githubUrl: "https://github.com/Yoon-Tae-Jun/smartglass-simulation"
    }
  ],
  publications: [
    {
      title: "사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구",
      meta: "한국데이터사이언스학회 동계종합학술대회 · 우수 논문상 · 2025",
      url: "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
    },
    {
      title: "블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계",
      meta: "한국정보보호학회 하계학술대회 CISC-S'26 · 2026",
      url: "papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf"
    }
  ],
  awards: [
    {
      title: "컴퓨터소프트웨어공학과 2025 BLEP 데이터 활용 경진 대회 최우수상",
      meta: "순천향대학교 · 2025"
    },
    {
      title: "한국데이터사이언스학회 동계종합학술대회 우수 논문상",
      meta: "2025"
    },
    {
      title: "KUCIS 우수동아리 3위 / 장려상",
      meta: "한국정보보호산업협회 · 2025"
    }
  ],
  contact: [
    {
      label: "Email",
      value: "hyunu.choe@gmail.com",
      url: "mailto:hyunu.choe@gmail.com"
    },
    {
      label: "Phone",
      value: "010-5083-1298",
      url: "tel:+821050831298"
    }
  ],
  projectDetails: {
    visionops: {
      title: "VisionOps",
      status: "In Progress",
      type: "Individual",
      summary:
        "Object Detection, Segmentation, Classification, Pose Estimation 등 컴퓨터 비전 모델 전반을 다루는 로컬 우선 Computer Vision Ops 웹 플랫폼.",
      mediaLabel: "Computer Vision · MLOps Platform",
      tags: ["FastAPI", "SQLAlchemy", "React", "TypeScript", "Detection", "Segmentation", "Classification", "Pose Estimation"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/ihyonoo/visionops"
    },
    mediledger: {
      title: "Mediledger & EqupTrace\n- 블록체인 기반 의료 장비 사용 이력 관리 시스템",
      status: "In Progress",
      type: "Individual",
      summary:
        "RTLS 기반 위치 추적, NFC 사용 이력, Hyperledger Besu 무결성 검증을 연결한 의료 장비 관리 시스템.",
      mediaLabel: "RTLS · NFC · Blockchain Integrity",
      tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu", "Solidity", "QBFT"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/ihyonoo/capstone-blockchain-medical-equipment-management"
    },
    hateSpeech: {
      title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
      status: "Completed",
      type: "Individual",
      summary: "K-MHaS 데이터 기반 한국어 혐오 표현 8개 유형 멀티라벨 분류와 Streamlit 데모.",
      mediaLabel: "Korean NLP · Multi-label Classification",
      tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit", "K-MHaS"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/ihyonoo/koelectra-hate-speech-detection"
    },
    smartglass: {
      title: "스마트 글래스 시뮬레이션",
      status: "Completed",
      type: "Team",
      summary:
        "음성 명령으로 길찾기·이미지 번역·실시간 통역·여행지 질문응답(RAG)을 오버레이 UI로 보여주는 웹캠 기반 스마트 글래스 시뮬레이션. 5인 팀에서 프론트엔드/UI 담당.",
      mediaLabel: "AR Glass Simulation · Voice Command",
      tags: ["Python", "FastAPI", "React", "Vite", "TailwindCSS", "Three.js", "CLOVA Speech", "Papago", "RAG"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/Yoon-Tae-Jun/smartglass-simulation"
    }
  }
};

const en = {
  site: {
    wordmark: "Hyunwoo Choi",
    title: "Hyunwoo Choi | Portfolio",
    description:
      "Portfolio of Hyunwoo Choi covering AI, computer vision, and backend projects.",
    footer: "© 2026 Hyunwoo Choi. All rights reserved."
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    awards: "Awards",
    publications: "Publications",
    contact: "Contact"
  },
  hero: {
    eyebrow: "PORTFOLIO",
    title: "Hyunwoo Choi",
    role: "AI / Computer Vision · Backend",
    copy:
      "I connect data, models, and APIs into working systems through AI, computer vision, and backend projects."
  },
  heroKeywords: ["AI", "Computer Vision", "Backend"],
  sections: {
    aboutEyebrow: "ABOUT",
    aboutTitle: "Positioning",
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "Experience",
    skillsEyebrow: "SKILLS",
    skillsTitle: "Skills",
    projectsEyebrow: "PROJECTS",
    projectsTitle: "Selected Projects",
    publicationsEyebrow: "PUBLICATIONS",
    publicationsTitle: "Publications",
    awardsEyebrow: "AWARDS",
    awardsTitle: "Awards",
    contactEyebrow: "CONTACT",
    contactTitle: "Contact"
  },
  about: {
    body:
      "<p>I build beyond experiment code, connecting data, models, and APIs into systems that actually run.</p><p>My work focuses on AI / Computer Vision and backend systems that move from implementation to usable outcomes.</p>"
  },
  experience: [
    {
      organization: "Soonchunhyang University",
      role: "Dept. of Computer Software Engineering",
      period: "2021.03 - Present",
      bullets: [
        "Senior student in Computer Software Engineering",
        "Participated in the 2026 Wrtn Soonchunhyang University bootcamp",
        {
          text: "Participated in the 2026 Local Startup Club Idea League competition",
          url: "papers/idea-league-slides.pdf"
        },
        "Worked as a tutor in multiple tutoring programs",
        "Participated in the Soft Brain academic club"
      ],
      links: []
    },
    {
      organization: "Information Security Lab, Soonchunhyang University",
      role: "Undergraduate Researcher",
      period: "2025.03.26 - Present",
      bullets: [
        "Participated in and presented at security seminars on cryptography, technical seminars on forensics, penetration testing, blockchain, and DID, and paper review seminars",
        "Authored and exhibited security articles",
        "Selected for the 2025 university cryptography club, KUCIS, and cybersecurity club programs",
        "Completed the 2025 KISIA Convergence Security Talent Training course in AI Security I",
        "Completed 12 courses in the 2025 KISIA Ontact Convergence Security program",
        "Received recognition through the 2025 KUCIS Outstanding Club award",
        "Participated in the 11th Cryptanalysis Competition in 2025",
        "Participated in the 2025 HackTheon Sejong International Collegiate Cybersecurity Competition",
        "Selected for the 2026 university cryptography club and KUCIS programs",
        "Presented at the 2025 alumni conference"
      ],
      links: []
    },
    {
      organization: "DEEP.I",
      role: "Work-Study Contributor / Computer Vision Projects",
      period: "2024.12.31 - Present",
      bullets: [
        "Automated RTSP frame collection and camera-specific data storage",
        "Implemented data augmentation and YOLO label-coordinate correction logic",
        "Ran YOLOv8 training, inference, performance evaluation, and result visualization",
        "Implemented scripts for image-label consistency checks and train/validation dataset splitting",
        "Developed TBM document generation logic using the Azure OpenAI API",
        "Implemented work-log input parsing and generated-response post-processing",
        "Built a COCO-to-YOLO segmentation preprocessing pipeline",
        "Ran segmentation experiments with MMDetection and YOLO Segmentation",
        "Ran object-tracking experiments with ByteTrack and BotSORT",
        "Trained and evaluated a ResNet18-based binary classification model",
        "Connected YOLO Detection with a Gradio UI in a two-stage inference pipeline"
      ],
      links: []
    }
  ],
  skills: [
    {
      title: "AI / Computer Vision",
      items: ["PyTorch", "OpenCV", "YOLO", "MMDetection", "ByteTrack", "BotSORT", "ResNet18"]
    },
    {
      title: "Backend / Database",
      items: ["FastAPI", "PostgreSQL", "Redis", "psycopg", "SQLAlchemy"]
    },
    {
      title: "Blockchain / Security",
      items: ["Hyperledger Besu", "Solidity", "QBFT", "Integrity Verification"]
    },
    {
      title: "Frontend / Product",
      items: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "Gradio"]
    },
    {
      title: "Infra / Tools",
      items: ["Docker", "Docker Compose", "Linux", "Git"]
    },
    {
      title: "Languages",
      items: ["Python", "C", "JavaScript/TypeScript", "Solidity"]
    }
  ],
  projects: [
    {
      id: "visionops",
      title: "VisionOps",
      status: "In Progress",
      type: "Individual",
      summary:
        "A local-first computer vision ops web platform covering object detection, segmentation, classification, pose estimation, and other vision models.",
      stack: "FastAPI/SQLAlchemy/React/TypeScript/Vite",
      detailUrl: "projects/visionops.html",
      githubUrl: "https://github.com/ihyonoo/visionops"
    },
    {
      id: "mediledger",
      title: "Mediledger & EqupTrace\n- Blockchain-Based Medical Equipment Usage History Management System",
      status: "In Progress",
      type: "Individual",
      summary:
        "A medical equipment management system that connects RTLS-based location tracking, NFC usage history, and Hyperledger Besu integrity verification.",
      stack: "FastAPI/PostgreSQL/Redis/React/Hyperledger Besu",
      detailUrl: "projects/mediledger-equptrace.html",
      githubUrl: "https://github.com/ihyonoo/capstone-blockchain-medical-equipment-management"
    },
    {
      id: "hateSpeech",
      title: "Korean Hate Speech Detection with KoELECTRA",
      status: "Completed",
      type: "Individual",
      summary:
        "A K-MHaS-based multi-label classifier for eight Korean hate speech categories with a Streamlit demo.",
      stack: "Python/PyTorch/Transformers/KoELECTRA/Streamlit",
      detailUrl: "projects/hate-speech-detection.html",
      githubUrl: "https://github.com/ihyonoo/koelectra-hate-speech-detection"
    },
    {
      id: "smartglass",
      title: "Smart Glass Simulation",
      status: "Completed",
      type: "Team",
      summary:
        "A webcam-based smart glass simulation for travelers that shows voice-command-driven navigation, image translation, real-time interpretation, and RAG-based Q&A as an overlay UI. Responsible for frontend/UI in a 5-person team.",
      stack: "Python/FastAPI/React/Vite/TailwindCSS/Three.js",
      detailUrl: "projects/smartglass-simulation.html",
      githubUrl: "https://github.com/Yoon-Tae-Jun/smartglass-simulation"
    }
  ],
  publications: [
    {
      title: "A Study Proposing an Automatic Hate Speech Filtering System Based on Pre-trained Language Models",
      meta: "Korean Data Science Society Winter Conference · Excellent Paper Award · 2025",
      url: "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
    },
    {
      title: "Design of a Blockchain-Based Medical Equipment Usage History Management System",
      meta: "Korea Institute of Information Security and Cryptology Summer Conference CISC-S'26 · 2026",
      url: "papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf"
    }
  ],
  awards: [
    {
      title: "Grand Prize, 2025 BLEP Data Utilization Competition, Department of Computer Software Engineering",
      meta: "Soonchunhyang University · 2025"
    },
    {
      title: "Excellent Paper Award, Korean Data Science Society Winter Conference",
      meta: "2025"
    },
    {
      title: "KUCIS Outstanding Club 3rd Place / Encouragement Award",
      meta: "Korea Information Security Industry Association · 2025"
    }
  ],
  contact: [
    {
      label: "Email",
      value: "hyunu.choe@gmail.com",
      url: "mailto:hyunu.choe@gmail.com"
    },
    {
      label: "Phone",
      value: "010-5083-1298",
      url: "tel:+821050831298"
    }
  ],
  projectDetails: {
    visionops: {
      title: "VisionOps",
      status: "In Progress",
      type: "Individual",
      summary:
        "A local-first computer vision ops web platform covering object detection, segmentation, classification, pose estimation, and other vision models.",
      mediaLabel: "Computer Vision · MLOps Platform",
      tags: ["FastAPI", "SQLAlchemy", "React", "TypeScript", "Detection", "Segmentation", "Classification", "Pose Estimation"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/ihyonoo/visionops"
    },
    mediledger: {
      title: "Mediledger & EqupTrace\n- Blockchain-Based Medical Equipment Usage History Management System",
      status: "In Progress",
      type: "Individual",
      summary:
        "A medical equipment management system that connects RTLS-based location tracking, NFC usage history, and Hyperledger Besu integrity verification.",
      mediaLabel: "RTLS · NFC · Blockchain Integrity",
      tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu", "Solidity", "QBFT"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/ihyonoo/capstone-blockchain-medical-equipment-management"
    },
    hateSpeech: {
      title: "Korean Hate Speech Detection with KoELECTRA",
      status: "Completed",
      type: "Individual",
      summary:
        "A K-MHaS-based multi-label classifier for eight Korean hate speech categories with a Streamlit demo.",
      mediaLabel: "Korean NLP · Multi-label Classification",
      tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit", "K-MHaS"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/ihyonoo/koelectra-hate-speech-detection"
    },
    smartglass: {
      title: "Smart Glass Simulation",
      status: "Completed",
      type: "Team",
      summary:
        "A webcam-based smart glass simulation for travelers that shows voice-command-driven navigation, image translation, real-time interpretation, and RAG-based Q&A as an overlay UI. Responsible for frontend/UI in a 5-person team.",
      mediaLabel: "AR Glass Simulation · Voice Command",
      tags: ["Python", "FastAPI", "React", "Vite", "TailwindCSS", "Three.js", "CLOVA Speech", "Papago", "RAG"],
      sections: [
        {
          title: "Problem",
          body:
            ""
        },
        {
          title: "My Role",
          body:
            ""
        },
        {
          title: "Architecture",
          body:
            ""
        },
        {
          title: "Tech Stack",
          body:
            ""
        },
        {
          title: "What I Learned / Review",
          body:
            ""
        }
      ],
      githubUrl: "https://github.com/Yoon-Tae-Jun/smartglass-simulation"
    }
  }
};

window.PORTFOLIO_DATA = { defaultLang: "ko", locales: { ko, en } };
