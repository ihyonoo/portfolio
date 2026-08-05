const ko = {
  site: {
    wordmark: "최현우",
    title: "최현우 | Portfolio",
    description: "최현우의 AI, Computer Vision, Backend 프로젝트 포트폴리오입니다.",
    footer: "© 2026 Hyunwoo Choi. All rights reserved."
  },
  nav: {
    about: "소개",
    experience: "경력",
    skills: "주요 기술",
    projects: "프로젝트",
    awards: "수상",
    publications: "논문"
  },
  hero: {
    eyebrow: "PORTFOLIO",
    title: "최현우",
    role: "AI · Computer Vision · Backend · Blockchain"
  },
  sections: {
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "경력",
    skillsEyebrow: "SKILLS",
    skillsTitle: "주요 기술",
    projectsEyebrow: "PROJECTS",
    projectsTitle: "프로젝트",
    publicationsEyebrow: "PUBLICATIONS",
    publicationsTitle: "논문",
    awardsEyebrow: "AWARDS",
    awardsTitle: "수상"
  },
  experience: [
    {
      organization: "순천향대학교 컴퓨터소프트웨어공학과",
      role: "4학년 재학중",
      period: "2025.03.01 - 현재",
      bullets: [
        {
          text: "2026 NAVER Cloud Academy 소버린 AI Literacy 과정 1기 참가",
          url: "experience/네이버클라우드_발표자료.pdf"
        },
        {
          text: "2026 Wrtn AI 개발자 양성 부트캠프 참가",
          url: "https://github.com/ihyonoo/ai-job-matching-system"
        },
        {
          text: "2026 로컬 창업동아리 아이디어 리그 경진대회 참가",
          url: "experience/idea-league-slides.pdf"
        },
        "2026-1학기 튜터링(교과: 운영체제) 프로그램 튜터 활동",
        "2025-2학기 튜터링(교과: 정보이론) 프로그램 튜터 활동",
        "학술 동아리 Soft Brain 활동"
      ],
      links: []
    },
    {
      organization: "순천향대학교 정보보호연구실",
      role: "학부 연구생",
      period: "2025.03.26 - 현재",
      bullets: [
        "매주 보안 세미나(암호학), 기술 세미나(포렌식/모의해킹/블록체인/DID), 논문 분석 세미나 참가 및 발표",
        "보안 기사 작성 및 전시",
        "2026 한국암호포럼 암호인재통합워크숍 참가",
        "2026 대학정보보호동아리 활동",
        "2026 한국암호포럼 암호동아리 활동",
        "2025 대학정보보호동아리 활동",
        "2025 한국암호포럼 암호동아리 활동",
        "2025 연합 졸업생 컨퍼런스 발표",
        "2025 KISIA 융합보안 인력양성 교육 수료",
        "2025 KISIA 온택트 융합보안 12개 과정 수료",
        "2025 제11회 암호분석경진대회 참가",
        "2025 헥테온 세종 국제 대학생 사이버보안 경진대회 참가"
      ],
      links: []
    },
    {
      organization: "DEEP.I",
      role: "근로장학생",
      period: "2024.12.31 - 현재",
      groups: [
        {
          title: "RTSP 기반 22대 CCTV 실시간 수집 시스템 구축",
          bullets: [
            "멀티프로세싱 기반 동시 RTSP 스트림 수집 로직 구현",
            "FPS 계산 기반 정밀 캡처 로직으로 낮/밤 수집 주기 차등 적용",
            "RTSP 연결 끊김·프레임 수신 실패 대응 자동 재연결(장애 복구) 로직 구현으로 무인 장기 운영 안정성 확보"
          ]
        },
        {
          title: "YOLO 기반 소 객체 탐지 모델 구현",
          bullets: [
            "데이터셋 구축, 학습, 추론, 성능 분석, 결과 시각화 진행",
            "데이터 증강, Hard Negative Mining, Confidence Threshold 튜닝 등으로 반복 개선하여 정확도 향상",
            "Notion 공유 워크스페이스를 통해 실험 과정과 결과를 고객사에 실시간 공유"
          ]
        },
        {
          title: "꼬마선충(C. elegans) 객체 탐지 및 트래킹 모델 구현",
          bullets: [
            "선행 연구(WormSwin, MMDetection 기반 Mask R-CNN) 모델 재현 및 검증",
            "IoU 기반 Hungarian Algorithm 매칭 및 Global ID 트래킹 알고리즘 분석 및 구현",
            "YOLO11n/26n/26x 등 다중 모델·세대 비교 실험 설계 및 수행",
            "BoT-SORT, ByteTrack 객체 추적 알고리즘 적용"
          ]
        },
        {
          title: "가스공사 검침원 촬영 사진 기반 보일러 연통 자동 탐지 시스템 구축",
          bullets: [
            "보일러/비보일러 이진 분류 모델(ResNet18) 개발 및 성능 분석 진행",
            "연통(보일러 배출구) 객체 탐지 모델(YOLO11n) 개발 및 성능 분석 진행",
            "2단계(분류 → 탐지) 연계 추론 파이프라인 구현"
          ]
        },
        {
          title: "Azure OpenAI API를 활용한 TBM(Tool Box Meeting, 작업 전 안전점검) 문서 자동 생성 시스템 개발",
          bullets: [
            "Gradio 기반 애플리케이션 개발 및 Docker 컨테이너화 — 사내 서버 배포",
            "입력 형식(JSON/텍스트/파일 업로드)에 관계없이 정형화된 출력 포맷을 보장하는 프롬프트 설계",
            "JSON에서 TBM 필요 정보 추출 파싱 스크립트 개발",
            "Azure Content Filter 오탐(안전 관련 용어를 위험 콘텐츠로 오판)이슈 대응 및 예외처리 구현"
          ]
        },
        {
          title: "데이터 가공 및 검수",
          bullets: [
            "오픈소스 데이터셋 수집 및 각종 데이터 라벨링",
            "이미지/라벨 정합성 점검 및 학습 데이터셋 분할 파이프라인 구현",
            "Polygon → Bbox 포멧 변환",
            "COCO → YOLO Segmentation 포맷 변환"
          ]
        }
      ],
      links: []
    }
  ],
  skills: [
    {
      title: "AI / Computer Vision",
      items: ["PyTorch", "OpenCV", "YOLO", "ResNet18"]
    },
    {
      title: "Backend / Database",
      items: ["FastAPI", "PostgreSQL", "Redis", "psycopg", "SQLAlchemy"]
    },
    {
      title: "Blockchain / Security",
      items: ["Hyperledger Besu", "Solidity"]
    },
    {
      title: "Frontend / Product",
      items: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS"]
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
      id: "mediledger",
      title: "Mediledger & EquipTrace",
      status: "In Progress",
      type: "Individual",
      summary: [
        "RTLS 기반 실내 의료 장비 위치 추적",
        "블록체인을 활용한 의료 장비 사용 이력 무결성 보장",
        "NFC 기반 장비 식별 및 장비 대여/반납"
      ],
      stack: "FastAPI/PostgreSQL/Redis/React/Hyperledger Besu",
      detailUrl: "projects/mediledger-equptrace.html",
      githubUrl: "https://github.com/ihyonoo/capstone-blockchain-medical-equipment-management"
    },
    {
      id: "visionops",
      title: "VisionOps",
      status: "In Progress",
      type: "Individual",
      summary: ["요약 1", "요약 2", "요약 3"],
      stack: "FastAPI/SQLAlchemy/React/TypeScript/Vite",
      detailUrl: "projects/visionops.html",
      githubUrl: "https://github.com/ihyonoo/visionops"
    },
    {
      id: "hateSpeech",
      title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
      status: "Completed",
      type: "Individual",
      summary: ["요약 1", "요약 2", "요약 3"],
      stack: "Python/PyTorch/Transformers/KoELECTRA/Streamlit",
      detailUrl: "projects/hate-speech-detection.html",
      githubUrl: "https://github.com/ihyonoo/koelectra-hate-speech-detection"
    },
    {
      id: "smartglass",
      title: "NAY-BEN - 스마트 글래스 시뮬레이션 시스템",
      status: "Completed",
      type: "Team",
      summary: ["요약 1", "요약 2", "요약 3"],
      stack: "Python/FastAPI/React/Vite/TailwindCSS/Three.js",
      detailUrl: "projects/smartglass-simulation.html",
      githubUrl: "https://github.com/Yoon-Tae-Jun/smartglass-simulation"
    }
  ],
  publications: [
    {
      title: "블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계",
      meta: "2026.05 · 한국정보보호학회 하계학술대회",
      url: "papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf"
    },
    {
      title: "사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구",
      meta: "2025.12 · 한국데이터사이언스학회 동계종합학술대회",
      url: "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
    }
  ],
  awards: [
    {
      contest: "2025 BLEP 데이터 활용 경진대회",
      award: "최우수상",
      date: "2025.10",
      organizer: "순천향대학교 컴퓨터소프트웨어공학과"
    },
    {
      contest: "한국데이터사이언스학회 동계종합학술대회",
      award: "우수 논문상",
      date: "2025.12",
      organizer: "한국데이터사이언스학회"
    },
    {
      contest: "2025 대학정보보호동아리(KUCIS)",
      award: "우수 동아리(한국정보보호산업협회장상)",
      date: "2025.12",
      organizer: "한국정보보호산업협회(KISIA)"
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
    },
    {
      label: "GitHub",
      value: "github.com/ihyonoo",
      url: "https://github.com/ihyonoo"
    },
    {
      label: "Tech Blog",
      value: "velog.io/@hyun_woo",
      url: "https://velog.io/@hyun_woo/posts"
    }
  ],
  projectDetails: {
    visionops: {
      title: "VisionOps",
      status: "In Progress",
      type: "Individual",
      summary: ["요약 1", "요약 2", "요약 3"],
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
      title: "Mediledger & EquipTrace",
      status: "In Progress",
      type: "Individual",
      summary: [
        "RTLS 기반 실내 의료 장비 위치 추적",
        "블록체인을 활용한 의료 장비 사용 이력 무결성 보장",
        "NFC 기반 장비 식별 및 장비 대여/반납"
      ],
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
      summary: ["요약 1", "요약 2", "요약 3"],
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
      title: "NAY-BEN - 스마트 글래스 시뮬레이션 시스템",
      status: "Completed",
      type: "Team",
      summary: ["요약 1", "요약 2", "요약 3"],
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
    about: "About Me",
    experience: "Experience",
    skills: "Main Skills",
    projects: "Projects",
    awards: "Awards",
    publications: "Publications"
  },
  hero: {
    eyebrow: "PORTFOLIO",
    title: "Hyunwoo Choi",
    role: "AI · Computer Vision · Backend"
  },
  sections: {
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "Experience",
    skillsEyebrow: "SKILLS",
    skillsTitle: "Main Skills",
    projectsEyebrow: "PROJECTS",
    projectsTitle: "Project",
    publicationsEyebrow: "PUBLICATIONS",
    publicationsTitle: "Publications",
    awardsEyebrow: "AWARDS",
    awardsTitle: "Awards"
  },
  experience: [
    {
      organization: "Soonchunhyang University, Dept. of Computer Software Engineering",
      role: "4th-Year Student",
      period: "2025.03.01 - Present",
      bullets: [
        {
          text: "Participated in the 1st cohort of the 2026 NAVER Cloud Academy Sovereign AI Literacy program",
          url: "experience/네이버클라우드_발표자료.pdf"
        },
        {
          text: "Participated in the 2026 Wrtn AI Developer Training Bootcamp",
          url: "https://github.com/ihyonoo/ai-job-matching-system"
        },
        {
          text: "Participated in the 2026 Local Startup Club Idea League competition",
          url: "experience/idea-league-slides.pdf"
        },
        "Worked as a tutor for the Operating Systems course in the 2026 spring semester tutoring program",
        "Worked as a tutor for the Information Theory course in the 2025 fall semester tutoring program",
        "Participated in the Soft Brain academic club"
      ],
      links: []
    },
    {
      organization: "Information Security Lab, Soonchunhyang University",
      role: "Undergraduate Researcher",
      period: "2025.03.26 - Present",
      bullets: [
        "Participated in and presented at weekly security seminars on cryptography, technical seminars on forensics, penetration testing, blockchain, and DID, and paper analysis seminars",
        "Authored and exhibited security articles",
        "Participated in the 2026 Korea Cryptography Forum Integrated Cryptography Talent Workshop",
        "Participated in the 2026 university information security club",
        "Participated in the 2026 Korea Cryptography Forum cryptography club",
        "Participated in the 2025 university information security club",
        "Participated in the 2025 Korea Cryptography Forum cryptography club",
        "Presented at the 2025 joint alumni conference",
        "Completed the 2025 KISIA Convergence Security Talent Training program",
        "Completed 12 courses in the 2025 KISIA Ontact Convergence Security program",
        "Participated in the 11th Cryptanalysis Competition in 2025",
        "Participated in the 2025 HackTheon Sejong International Collegiate Cybersecurity Competition"
      ],
      links: []
    },
    {
      organization: "DEEP.I",
      role: "Work-Study Contributor",
      period: "2024.12.31 - Present",
      groups: [
        {
          title: "Real-Time Collection System for 22 RTSP-Based CCTV Cameras",
          bullets: [
            "Implemented multiprocessing-based logic for concurrent RTSP stream collection",
            "Applied differentiated day/night capture intervals using FPS-based precision capture logic",
            "Implemented automatic reconnection (failure recovery) logic for RTSP disconnections and frame reception failures, ensuring stability for long-term unattended operation"
          ]
        },
        {
          title: "YOLO-Based Cattle Object Detection Model",
          bullets: [
            "Built the dataset and performed training, inference, performance analysis, and result visualization",
            "Improved accuracy through iterative refinement using data augmentation, hard negative mining, and confidence threshold tuning",
            "Shared experiment progress and results with the client in real time via a shared Notion workspace"
          ]
        },
        {
          title: "C. elegans Object Detection and Tracking Model",
          bullets: [
            "Reproduced and verified prior research models (WormSwin, MMDetection-based Mask R-CNN)",
            "Analyzed and implemented IoU-based Hungarian Algorithm matching and a global ID tracking algorithm",
            "Designed and ran comparison experiments across multiple YOLO models and generations (YOLO11n/26n/26x, etc.)",
            "Applied the BoT-SORT and ByteTrack object tracking algorithms"
          ]
        },
        {
          title: "Automated Boiler Flue Detection System Based on Gas Utility Meter Reader Photos",
          bullets: [
            "Developed and evaluated a boiler/non-boiler binary classification model (ResNet18)",
            "Developed and evaluated a flue (boiler exhaust) object detection model (YOLO11n)",
            "Implemented a two-stage (classification → detection) linked inference pipeline"
          ]
        },
        {
          title: "Automated TBM (Tool Box Meeting, Pre-Work Safety Check) Document Generation System Using the Azure OpenAI API",
          bullets: [
            "Developed a Gradio-based application and containerized it with Docker for in-house server deployment",
            "Designed prompts that guarantee a structured output format regardless of input type (JSON/text/file upload)",
            "Developed a parsing script to extract required TBM information from JSON",
            "Handled Azure Content Filter false positives (safety-related terms misclassified as harmful content) and implemented exception handling"
          ]
        },
        {
          title: "Data Processing and Quality Review",
          bullets: [
            "Collected open-source datasets and performed various data labeling tasks",
            "Implemented an image/label consistency check and train/validation dataset splitting pipeline",
            "Converted polygon annotations to bbox format",
            "Converted COCO format to YOLO segmentation format"
          ]
        }
      ],
      links: []
    }
  ],
  skills: [
    {
      title: "AI / Computer Vision",
      items: ["PyTorch", "OpenCV", "YOLO", "ResNet18"]
    },
    {
      title: "Backend / Database",
      items: ["FastAPI", "PostgreSQL", "Redis", "psycopg", "SQLAlchemy"]
    },
    {
      title: "Blockchain / Security",
      items: ["Hyperledger Besu", "Solidity"]
    },
    {
      title: "Frontend / Product",
      items: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS"]
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
      id: "mediledger",
      title: "Mediledger & EquipTrace\n- Blockchain-Based Medical Equipment Usage History Management System",
      status: "In Progress",
      type: "Individual",
      summary:
        "A medical equipment management system that connects RTLS-based location tracking, NFC usage history, and Hyperledger Besu integrity verification.",
      stack: "FastAPI/PostgreSQL/Redis/React/Hyperledger Besu",
      detailUrl: "projects/mediledger-equptrace.html",
      githubUrl: "https://github.com/ihyonoo/capstone-blockchain-medical-equipment-management"
    },
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
      title: "NAY-BEN - Smart Glass Simulation System",
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
      title: "Design of a Blockchain-Based Medical Equipment Usage History Management System",
      meta: "2026.05 · Korea Institute of Information Security and Cryptology Summer Conference",
      url: "papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf"
    },
    {
      title: "A Study Proposing an Automatic Hate Speech Filtering System Based on Pre-trained Language Models",
      meta: "2025.12 · Korean Data Science Society Winter Conference",
      url: "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
    }
  ],
  awards: [
    {
      contest: "2025 BLEP Data Utilization Competition",
      award: "Grand Prize",
      date: "2025.10",
      organizer: "Dept. of Computer Software Engineering, Soonchunhyang University"
    },
    {
      contest: "Korean Data Science Society Winter Conference",
      award: "Excellent Paper Award",
      date: "2025.12",
      organizer: "Korean Data Science Society"
    },
    {
      contest: "2025 University Information Security Club (KUCIS)",
      award: "Outstanding Club (Korea Information Security Industry Association President's Award)",
      date: "2025.12",
      organizer: "Korea Information Security Industry Association (KISIA)"
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
    },
    {
      label: "GitHub",
      value: "github.com/ihyonoo",
      url: "https://github.com/ihyonoo"
    },
    {
      label: "Tech Blog",
      value: "velog.io/@hyun_woo",
      url: "https://velog.io/@hyun_woo/posts"
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
      title: "Mediledger & EquipTrace\n- Blockchain-Based Medical Equipment Usage History Management System",
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
      title: "NAY-BEN - Smart Glass Simulation System",
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
