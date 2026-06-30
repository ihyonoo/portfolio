window.PORTFOLIO_CONTENT = {
  en: {
    meta: {
      title: "Hyunwoo Choi | Portfolio",
      description:
        "Portfolio of Hyunwoo Choi covering AI, computer vision, blockchain, backend systems, and applied product work."
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      awards: "Awards",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      name: "Hyunwoo Choi"
    },
    heroPoints: [
      "Soonchunhyang University, Computer Software Engineering",
      "Undergraduate Researcher @ Information Security Lab",
      "Work-Study Contributor @ DEEP.I"
    ],
    section: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      awards: "Awards",
      experience: "Experience",
      contact: "Contact"
    },
    about: {
      body:
        "I prefer work that does not stop at experiments. My recent projects connect data pipelines, model training, backend APIs, operational logic, and demo-ready interfaces across computer vision, blockchain integrity workflows, NLP, and full-stack product development.",
      cards: [
        {
          title: "Education",
          meta: "Soonchunhyang University · B.S. Candidate",
          body: "Senior in Computer Software Engineering with ongoing research and project work focused on applied systems."
        },
        {
          title: "Current Roles",
          meta: "Research + Industry Projects",
          body:
            "Undergraduate Researcher at the Information Security Lab since March 26, 2025, and work-study contributor at DEEP.I since December 31, 2024."
        },
        {
          title: "Focus Areas",
          meta: "What I Prefer to Build",
          body:
            "Computer vision, blockchain, backend services, and AI product flows that move from experimentation to a usable, auditable system."
        }
      ]
    },
    skills: [
      "C",
      "Python",
      "PostgreSQL",
      "Redis",
      "React",
      "FastAPI",
      "Docker",
      "Hyperledger Besu",
      "Solidity",
      "PyTorch",
      "OpenCV",
      "Ultralytics YOLO",
      "Linux"
    ],
    projects: [
      {
        title: "Medical Equipment Usage Integrity System",
        period: "2025.10 - Present",
        meta: "BLE indoor tracking + NFC authentication + blockchain integrity",
        summary:
          "Real-time medical equipment tracking with physical BLE readers and NFC authentication",
        highlights: [
          "Implemented a BLE-based indoor positioning setup including reader hardware for real-time equipment location tracking",
          "Built NFC-based user authentication and equipment checkout or return flow tied to physical tags",
          "Connected FastAPI, PostgreSQL, Redis, and Hyperledger Besu into one operational tracking and integrity-verification system"
        ],
        tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu"]
      },
      {
        title: "JobFit AI",
        meta: "AI hiring platform · Next.js 14, FastAPI, PostgreSQL",
        summary:
          "AI hiring platform for analysis, matching, and interview prep",
        highlights: [
          "Portfolio ingestion from text, PDF, URL, and GitHub",
          "Job recommendation, tailored resume generation, and interview simulation"
        ],
        tags: ["Next.js 14", "FastAPI", "PostgreSQL", "LLM APIs", "Docker"]
      },
      {
        title: "Cow Detection Data Pipeline",
        period: "DEEP.I",
        meta: "RTSP collection and YOLO training",
        summary:
          "End-to-end cattle data collection and detection pipeline",
        highlights: [
          "RTSP frame collection, augmentation, and label correction",
          "YOLOv8 training, inference, and keypoint visualization"
        ],
        tags: ["Python", "OpenCV", "YOLO", "Multiprocessing"]
      },
      {
        title: "TBM Document Generator",
        period: "DEEP.I",
        meta: "LLM workflow tool",
        summary:
          "Tool that turns work logs into structured TBM documents",
        highlights: [
          "Regex-based parsing for work-log inputs",
          "Gradio UI and Azure OpenAI based generation flow"
        ],
        tags: ["Python", "Gradio", "Azure OpenAI", "Docker"]
      },
      {
        title: "Worm Segmentation and Tracking",
        period: "DEEP.I",
        meta: "Segmentation and tracking experiments",
        summary:
          "Segmentation, format conversion, and tracking pipeline for worm data",
        highlights: [
          "COCO-to-YOLO segmentation preprocessing and QA",
          "MMDetection, YOLO Segmentation, ByteTrack, and BotSORT experiments"
        ],
        tags: ["Python", "MMDetection", "YOLO", "ByteTrack"]
      },
      {
        title: "Boiler Classification and Pipe Detection",
        period: "DEEP.I",
        meta: "Two-stage CV system",
        summary:
          "Two-stage system for boiler classification and pipe detection",
        highlights: [
          "ResNet18 based binary classification and YOLO detection pipeline",
          "Gradio service for image upload, threshold control, and result visualization"
        ],
        tags: ["Python", "PyTorch", "YOLO", "Gradio"]
      },
      {
        title: "Korean Hate Speech Detection with KoELECTRA",
        meta: "Personal NLP project · PyTorch, Transformers, Streamlit",
        summary:
          "Multi-label Korean hate speech detection demo",
        highlights: [
          "KoELECTRA fine-tuning pipeline with validation and best-model saving",
          "CLI inference and Streamlit blur-based demo UI"
        ],
        tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit"]
      },
      {
        title: "Distributed Vending Machine Management System",
        meta: "Python socket system · replication and failover",
        summary:
          "Distributed vending machine control and monitoring system",
        highlights: [
          "TCP/IP message protocol, ACK delivery, and offline queue recovery",
          "Server replication, failover, and admin interfaces"
        ],
        tags: ["Python", "socket", "PostgreSQL", "Flask", "tkinter"]
      }
    ],
    awards: [
      {
        title: "BLEP Data Utilization Competition - Grand Prize",
        meta: "Department of Computer Software Engineering, Soonchunhyang University · 2025",
        body: "Grand Prize in the BLEP data utilization competition"
      },
      {
        title: "Excellent Paper Award",
        meta: "Korean Data Science Society Winter Conference · 2025",
        body:
          "Excellent Paper Award for hate speech filtering research based on pretrained language models"
      },
      {
        title: "Outstanding Information Security Club Award",
        meta: "KUCIS / Korea Information Security Industry Association · 2025",
        body: "3rd place and encouragement award in university information security club activities"
      }
    ],
    experience: [
      {
        title: "Undergraduate Researcher",
        meta: "Information Security Lab, Soonchunhyang University · 2025.03 - Present",
        body:
          "Conduct research centered on cryptography and blockchain, while broadening practical security knowledge through regular technical seminars on topics such as digital forensics and penetration testing. Also contribute to booth operations, technical documentation, and collaborative lab activities."
      },
      {
        title: "Work-Study Contributor",
        meta: "DEEP.I · 2024.12 - Present",
        body:
          "Contribute to computer vision projects end-to-end, covering data collection and annotation, training dataset preparation, model training and inference pipelines, and AI service development."
      }
    ],
    contact: {
      intro:
        "If you need someone who can connect data, models, and backend logic into a working system, feel free to reach out.",
      items: [
        {
          label: "Email",
          value: "ihyonoo0520@gmail.com",
          url: "mailto:ihyonoo0520@gmail.com"
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
        }
      ]
    },
    footer: {
      copy: "© 2026 Hyunwoo Choi. All rights reserved."
    },
  },
  ko: {
    meta: {
      title: "최현우 | 포트폴리오",
      description:
        "최현우의 AI, 컴퓨터비전, 블록체인, 백엔드, 제품 중심 프로젝트를 정리한 포트폴리오입니다."
    },
    nav: {
      about: "소개",
      skills: "기술",
      projects: "프로젝트",
      awards: "수상",
      experience: "경력",
      contact: "연락처"
    },
    hero: {
      name: "최현우 (Hyunwoo Choi)"
    },
    heroPoints: [
      "순천향대학교 컴퓨터소프트웨어공학과",
      "정보보호연구실 학부 연구생",
      "DEEP.I 근무"
    ],
    section: {
      about: "소개",
      skills: "기술",
      projects: "프로젝트",
      awards: "수상",
      experience: "경력",
      contact: "연락처"
    },
    about: {
      body:
        "실험 코드에서 멈추지 않고, 데이터 파이프라인, 모델 학습, 백엔드 API, 운영 로직, 데모 UI까지 실제로 동작하는 형태로 연결하는 일을 선호합니다. 최근에는 컴퓨터비전, 블록체인 무결성 검증, NLP, 풀스택 서비스 개발을 중심으로 프로젝트를 수행했습니다.",
      cards: [
        {
          title: "학력",
          meta: "순천향대학교 · 컴퓨터소프트웨어공학과 4학년",
          body: "학부 과정과 함께 연구실 및 실무형 프로젝트를 병행하며 응용 시스템 구현 경험을 쌓고 있습니다."
        },
        {
          title: "현재 역할",
          meta: "연구 + 실무 프로젝트",
          body:
            "2025년 3월 26일부터 정보보호연구실 학부 연구생으로 활동 중이며, 2024년 12월 31일부터 DEEP.I에서 근로장학생 형태로 프로젝트를 수행하고 있습니다."
        },
        {
          title: "관심 분야",
          meta: "선호하는 문제 유형",
          body:
            "Computer Vision, Blockchain, Backend, AI 제품 흐름처럼 실험부터 서비스 형태의 결과물까지 이어지는 문제를 선호합니다."
        }
      ]
    },
    skills: [
      "C",
      "Python",
      "PostgreSQL",
      "Redis",
      "React",
      "FastAPI",
      "Docker",
      "Hyperledger Besu",
      "Solidity",
      "PyTorch",
      "OpenCV",
      "Ultralytics YOLO",
      "Linux"
    ],
    projects: [
      {
        title: "블록체인을 활용한 의료 장비 사용 이력 관리 시스템",
        period: "2025.10 - 현재",
        meta: "BLE 실내 위치 추적 + NFC 사용자 인증 + 블록체인 무결성 검증",
        summary:
          "실제 BLE 리더 하드웨어와 NFC 인증을 포함한 의료 장비 실시간 추적 시스템",
        highlights: [
          "BLE 기반 실내 위치 추적 시스템을 하드웨어 단계부터 구현해 의료 장비 위치를 실시간으로 탐지",
          "NFC 기반 사용자 인증과 장비 사용 시작·반납 흐름을 실제 태그와 연결해 구현",
          "FastAPI, PostgreSQL, Redis, Hyperledger Besu를 묶어 운영 흐름과 무결성 검증까지 통합"
        ],
        tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu"]
      },
      {
        title: "JobFit AI",
        meta: "AI 채용 매칭 플랫폼 · Next.js 14, FastAPI, PostgreSQL",
        summary:
          "분석, 추천, 이력서 생성, 면접 시뮬레이션을 묶은 AI 채용 플랫폼",
        highlights: [
          "텍스트, PDF, URL, GitHub 기반 포트폴리오 수집 및 구조화",
          "공고 추천, 맞춤형 이력서 생성, 면접 시뮬레이션 구현"
        ],
        tags: ["Next.js 14", "FastAPI", "PostgreSQL", "LLM API", "Docker"]
      },
      {
        title: "소 검출 데이터 파이프라인",
        period: "DEEP.I",
        meta: "RTSP 수집 및 YOLO 학습",
        summary:
          "소 데이터 수집부터 학습까지 연결한 검출 파이프라인",
        highlights: [
          "RTSP 프레임 수집, 증강, 라벨 좌표 보정",
          "YOLOv8 학습, 추론, keypoint 시각화 구현"
        ],
        tags: ["Python", "OpenCV", "YOLO", "Multiprocessing"]
      },
      {
        title: "TBM 문서 생성 도구",
        period: "DEEP.I",
        meta: "LLM 기반 업무 도구",
        summary:
          "작업일보를 TBM 문서로 변환하는 생성형 AI 도구",
        highlights: [
          "정규식 기반 입력 파싱",
          "Gradio UI와 Azure OpenAI 생성 흐름 구현"
        ],
        tags: ["Python", "Gradio", "Azure OpenAI", "Docker"]
      },
      {
        title: "웜 세그멘테이션 및 트래킹",
        period: "DEEP.I",
        meta: "세그멘테이션·트래킹 실험",
        summary:
          "웜 객체용 세그멘테이션과 트래킹 실험 파이프라인",
        highlights: [
          "COCO-to-YOLO 세그멘테이션 전처리 및 검수",
          "MMDetection, YOLO Segmentation, ByteTrack, BotSORT 실험"
        ],
        tags: ["Python", "MMDetection", "YOLO", "ByteTrack"]
      },
      {
        title: "보일러 분류 및 연통 검출",
        period: "DEEP.I",
        meta: "2단계 CV 시스템",
        summary:
          "보일러 분류와 연통 검출을 묶은 2단계 비전 시스템",
        highlights: [
          "ResNet18 이진 분류와 YOLO 검출 파이프라인 구현",
          "이미지 업로드, threshold 조절, 결과 시각화 Gradio 서비스 구성"
        ],
        tags: ["Python", "PyTorch", "YOLO", "Gradio"]
      },
      {
        title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
        meta: "개인 NLP 프로젝트 · PyTorch, Transformers, Streamlit",
        summary:
          "한국어 혐오 표현 멀티라벨 분류 데모 프로젝트",
        highlights: [
          "KoELECTRA 학습 파이프라인과 검증 로직 구현",
          "CLI 추론과 Streamlit blur 데모 UI 연결"
        ],
        tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit"]
      },
      {
        title: "분산 자판기 관리 시스템",
        meta: "Python 소켓 시스템 · 복제와 장애 대응",
        summary:
          "복제와 장애 대응을 포함한 분산 자판기 관리 시스템",
        highlights: [
          "TCP/IP 메시지 프로토콜, ACK 전달, 오프라인 큐 복구 구현",
          "서버 복제, failover, tkinter 및 Flask 관리자 화면 구성"
        ],
        tags: ["Python", "socket", "PostgreSQL", "Flask", "tkinter"]
      }
    ],
    awards: [
      {
        title: "BLEP 데이터 활용 경진대회 최우수상",
        meta: "순천향대학교 컴퓨터소프트웨어공학과 · 2025",
        body: "BLEP 데이터 활용 경진대회 최우수상 수상"
      },
      {
        title: "우수 논문상",
        meta: "한국데이터사이언스학회 동계종합학술대회 · 2025",
        body: "사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구로 우수 논문상 수상"
      },
      {
        title: "대학정보보호동아리 우수동아리 3위 / 장려상",
        meta: "KUCIS / 한국정보보호산업협회 · 2025",
        body: "KUCIS 우수동아리 3위 및 장려상 수상"
      }
    ],
    experience: [
      {
        title: "학부 연구생",
        meta: "순천향대학교 정보보호연구실 · 2025.03 - 현재",
        body:
          "암호학과 블록체인을 중심으로 연구를 수행했으며, 정기 기술세미나를 통해 포렌식과 모의해킹 관련 주제도 폭넓게 학습했습니다. 또한 부스 운영, 기술 보고서 작성, 연구실 협업 활동에 참여하며 연구 커뮤니케이션과 실무형 운영 경험을 쌓았습니다."
      },
      {
        title: "근로장학생 / 프로젝트 참여",
        meta: "DEEP.I · 2024.12 - 현재",
        body:
          "데이터 수집·어노테이션부터 학습 데이터셋 구축, 모델 학습·추론 파이프라인 구현, AI 서비스 개발까지 전 과정을 실무 수준에서 수행했습니다."
      }
    ],
    contact: {
      intro:
        "데이터, 모델, 백엔드를 하나의 흐름으로 연결할 수 있는 개발자가 필요하다면 편하게 연락 주세요.",
      items: [
        {
          label: "이메일",
          value: "ihyonoo0520@gmail.com",
          url: "mailto:ihyonoo0520@gmail.com"
        },
        {
          label: "전화",
          value: "010-5083-1298",
          url: "tel:+821050831298"
        },
        {
          label: "GitHub",
          value: "github.com/ihyonoo",
          url: "https://github.com/ihyonoo"
        }
      ]
    },
    footer: {
      copy: "© 2026 최현우. All rights reserved."
    },
  }
};
