const ko = {
  site: {
    wordmark: "최현우",
    title: "최현우 | Portfolio",
    description: "최현우의 AI, Computer Vision, Backend, Full-stack, Blockchain 프로젝트 포트폴리오입니다.",
    footer: "© 2026 최현우. All rights reserved."
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    publications: "Publications",
    contact: "Contact"
  },
  hero: {
    eyebrow: "PORTFOLIO",
    title: "최현우 / Hyunwoo Choi",
    role: "AI / Computer Vision · Backend · Full-stack",
    copy:
      "AI / Computer Vision, Backend, Full-stack 프로젝트를 통해 데이터와 모델, API, 사용자 흐름을 실제로 동작하는 형태로 연결해 왔습니다."
  },
  heroKeywords: ["Computer Vision", "Backend", "AI Product", "Blockchain Integrity"],
  sections: {
    aboutEyebrow: "ABOUT",
    aboutTitle: "Positioning",
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "Experience",
    skillsEyebrow: "SKILLS",
    skillsTitle: "Skills",
    projectsEyebrow: "PROJECTS",
    projectsTitle: "Selected Projects",
    publicationsEyebrow: "PUBLICATIONS / AWARDS",
    publicationsTitle: "Publications / Awards",
    contactEyebrow: "CONTACT",
    contactTitle: "Contact"
  },
  about: {
    body:
      "<p>실험 코드에서 멈추지 않고 데이터, 모델, API, 사용자 흐름을 실제로 동작하는 시스템으로 연결하는 개발자입니다.</p><p>Computer Vision, Backend, Blockchain 무결성 검증, AI Product를 중심으로 문제를 구조화하고, 구현과 검증을 통해 사용자에게 닿는 결과물까지 완성하는 일을 좋아합니다.</p>"
  },
  experience: [
    {
      organization: "순천향대학교",
      role: "Computer Software Engineering",
      period: "재학 중",
      bullets: [
        "컴퓨터소프트웨어공학과 4학년 재학",
        "2026 Wrtn 부트캠프 참여",
        "2026 로컬 창업동아리 아이디어 리그 참여",
        "전공 튜터링 활동으로 학습 내용을 동료에게 설명하고 실습을 지원",
        "Soft Brain 활동을 통해 전공 기반 프로젝트와 협업 경험 축적"
      ],
      links: [
        {
          label: "Idea League Slides",
          url: "papers/idea-league-slides.pdf"
        }
      ]
    },
    {
      organization: "순천향대학교 정보보호연구실",
      role: "학부 연구생",
      period: "2025.03.26 - 현재",
      bullets: [
        "암호학, 블록체인, 정보보호 주제의 정기 세미나와 논문 리뷰 참여",
        "KUCIS, 암호학 동아리, 보안 동아리 활동을 통해 학부 연구와 실습 병행",
        "보안 경진대회 준비와 연구실 협업 활동을 통해 문제 분석과 구현 역량 강화",
        "학술대회 발표를 통해 연구 내용을 문서화하고 대외적으로 공유"
      ],
      links: []
    },
    {
      organization: "DEEP.I",
      role: "근로장학생 / Computer Vision 프로젝트 참여",
      period: "2024.12.31 - 현재",
      bullets: [
        "RTSP 영상 수집, 데이터 증강, 라벨 좌표 보정, YOLO 학습 및 추론 파이프라인 구현",
        "Gradio 기반 데모 UI를 구성해 모델 결과 확인과 실험 반복 속도 개선",
        "COCO-to-YOLO segmentation 변환, MMDetection, YOLO Segmentation 실험 수행",
        "ByteTrack, BotSORT 기반 객체 추적 실험과 결과 비교",
        "Azure OpenAI를 활용한 문서 생성 흐름과 ResNet18 기반 분류 실험 참여"
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
      id: "mediledger",
      title: "Mediledger & EqupTrace",
      status: "In Progress",
      summary:
        "RTLS 기반 위치 추적, NFC 사용 이력, Hyperledger Besu 무결성 검증을 연결한 의료 장비 관리 시스템.",
      stack: "FastAPI/PostgreSQL/Redis/React/Hyperledger Besu",
      detailUrl: "projects/mediledger-equptrace.html",
      githubUrl: ""
    },
    {
      id: "hateSpeech",
      title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
      status: "Completed",
      summary: "K-MHaS 데이터 기반 한국어 혐오 표현 8개 유형 멀티라벨 분류와 Streamlit 데모.",
      stack: "Python/PyTorch/Transformers/KoELECTRA/Streamlit",
      detailUrl: "projects/hate-speech-detection.html",
      githubUrl: ""
    },
    {
      id: "vendingMachine",
      title: "분산 자판기 관리 시스템",
      status: "Completed",
      summary:
        "TCP/IP 소켓 프로토콜, ACK 이벤트 처리, 서버 복제와 장애 대응을 포함한 Python 기반 운영 시스템.",
      stack: "Python/socket/PostgreSQL/Flask/tkinter",
      detailUrl: "projects/vending-machine.html",
      githubUrl: ""
    },
    {
      id: "jobfit",
      title: "JobFit AI",
      status: "Completed",
      summary:
        "포트폴리오 분석, 채용공고 추천, 이력서 생성, 면접 시뮬레이션을 연결한 AI 채용 매칭 플랫폼.",
      stack: "Next.js/FastAPI/PostgreSQL/LLM API/Docker",
      detailUrl: "projects/jobfit-ai.html",
      githubUrl: ""
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
      value: "ihyonoo0520@gmail.com",
      url: "mailto:ihyonoo0520@gmail.com"
    },
    {
      label: "GitHub",
      value: "github.com/ihyonoo",
      url: "https://github.com/ihyonoo"
    },
    {
      label: "Blog",
      value: "velog.io/@hyun_woo/posts",
      url: "https://velog.io/@hyun_woo/posts"
    },
    {
      label: "Phone",
      value: "010-5083-1298",
      url: "tel:+821050831298"
    }
  ],
  projectDetails: {
    mediledger: {
      title: "Mediledger & EqupTrace",
      status: "In Progress",
      summary:
        "RTLS 기반 위치 추적, NFC 사용 이력, Hyperledger Besu 무결성 검증을 연결한 의료 장비 관리 시스템.",
      mediaLabel: "RTLS · NFC · Blockchain Integrity",
      tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu", "Solidity", "QBFT"],
      sections: [
        {
          title: "Problem",
          body:
            "병원 내 의료 장비는 위치 이동과 사용자 변경이 잦아 사용 이력, 반납 상태, 위치 정보를 신뢰성 있게 연결하기 어렵습니다. 운영 데이터가 여러 시스템에 흩어지면 장비 분실, 책임 추적, 이력 위변조 검증이 모두 복잡해집니다."
        },
        {
          title: "My Role",
          body:
            "FastAPI 기반 API, PostgreSQL 데이터 모델, Redis 캐싱 흐름, React 화면, Hyperledger Besu 기반 무결성 검증 구조를 연결했습니다. RTLS 위치 정보와 NFC 사용 이벤트를 하나의 장비 라이프사이클로 묶는 설계를 담당했습니다."
        },
        {
          title: "Architecture",
          body:
            "RTLS 리더가 장비 위치 이벤트를 생성하고, NFC 인증 흐름이 사용자와 장비 사용 상태를 기록합니다. 백엔드는 이벤트를 정규화해 PostgreSQL에 저장하고 Redis로 최신 상태를 빠르게 제공하며, 핵심 사용 이력 해시는 Besu 네트워크에 기록해 사후 검증이 가능하도록 구성했습니다."
        },
        {
          title: "Tech Stack",
          body:
            "FastAPI, PostgreSQL, Redis, React, Hyperledger Besu, Solidity, QBFT를 사용했습니다. API 서버, 데이터베이스, 캐시, 블록체인 노드를 분리해 운영 흐름과 검증 흐름을 독립적으로 다룰 수 있게 설계했습니다."
        },
        {
          title: "What I Learned / Review",
          body:
            "블록체인은 모든 데이터를 저장하는 공간이 아니라 신뢰가 필요한 이벤트를 검증하는 레이어로 설계해야 효과적이라는 점을 배웠습니다. 물리 장비 이벤트와 서비스 API, 체인 기록 사이의 경계를 명확히 잡는 것이 시스템 안정성에 중요했습니다."
        }
      ],
      githubUrl: ""
    },
    hateSpeech: {
      title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
      status: "Completed",
      summary: "K-MHaS 데이터 기반 한국어 혐오 표현 8개 유형 멀티라벨 분류와 Streamlit 데모.",
      mediaLabel: "Korean NLP · Multi-label Classification",
      tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit", "K-MHaS"],
      sections: [
        {
          title: "Problem",
          body:
            "한국어 혐오 표현은 하나의 문장 안에 여러 유형의 혐오가 동시에 나타날 수 있어 단일 라벨 분류만으로는 실제 필터링 요구를 충분히 반영하기 어렵습니다. 서비스 적용을 위해서는 모델 학습뿐 아니라 사용자가 결과를 확인할 수 있는 데모 흐름도 필요했습니다."
        },
        {
          title: "My Role",
          body:
            "K-MHaS 데이터셋을 기반으로 KoELECTRA 멀티라벨 분류 학습 파이프라인을 구성하고, 검증 지표 확인과 best model 저장 흐름을 구현했습니다. 추론 결과를 Streamlit 데모로 연결해 문장 입력과 유형별 탐지 결과를 확인할 수 있게 만들었습니다."
        },
        {
          title: "Architecture",
          body:
            "데이터 전처리 후 토크나이저와 KoELECTRA 모델에 입력하고, 8개 혐오 표현 유형에 대해 sigmoid 기반 멀티라벨 출력을 생성했습니다. 학습 스크립트, CLI 추론, Streamlit UI를 분리해 실험과 데모를 독립적으로 반복할 수 있게 구성했습니다."
        },
        {
          title: "Tech Stack",
          body:
            "Python, PyTorch, Hugging Face Transformers, KoELECTRA, Streamlit을 사용했습니다. 모델 학습과 데모 UI는 단순히 연결하는 데 그치지 않고, 실제 입력 문장에 대한 예측 결과를 빠르게 검토할 수 있도록 구성했습니다."
        },
        {
          title: "What I Learned / Review",
          body:
            "NLP 모델 성능은 데이터 라벨 구조와 평가 방식에 크게 좌우된다는 점을 확인했습니다. 특히 혐오 표현 탐지는 기술적 정확도뿐 아니라 오탐과 미탐의 사회적 비용까지 고려해야 하는 문제라는 점을 배웠습니다."
        }
      ],
      githubUrl: ""
    },
    vendingMachine: {
      title: "분산 자판기 관리 시스템",
      status: "Completed",
      summary:
        "TCP/IP 소켓 프로토콜, ACK 이벤트 처리, 서버 복제와 장애 대응을 포함한 Python 기반 운영 시스템.",
      mediaLabel: "Distributed System · Socket Protocol",
      tags: ["Python", "socket", "PostgreSQL", "Flask", "tkinter", "Replication", "Failover"],
      sections: [
        {
          title: "Problem",
          body:
            "여러 자판기 단말을 중앙에서 관리하려면 판매, 재고, 장애 이벤트가 누락 없이 전달되어야 합니다. 네트워크 단절이나 서버 장애가 발생해도 운영 데이터가 손실되지 않도록 ACK, 재전송, 복제 구조가 필요했습니다."
        },
        {
          title: "My Role",
          body:
            "Python TCP/IP 소켓 기반 메시지 프로토콜을 설계하고, ACK 이벤트 처리와 오프라인 큐 복구 흐름을 구현했습니다. PostgreSQL 저장 구조, Flask 관리자 화면, tkinter 기반 단말 UI를 연결해 운영 시나리오를 검증했습니다."
        },
        {
          title: "Architecture",
          body:
            "자판기 클라이언트는 판매와 재고 이벤트를 서버에 전송하고 ACK를 기준으로 성공 여부를 판단합니다. 서버 장애 상황에서는 복제 서버와 failover 흐름을 통해 운영을 이어가며, 관리자 UI는 수집된 상태를 조회하고 제어할 수 있도록 구성했습니다."
        },
        {
          title: "Tech Stack",
          body:
            "Python socket, PostgreSQL, Flask, tkinter를 사용했습니다. 통신 계층, 저장 계층, 관리자 화면을 분리해 장애 시나리오를 단계별로 테스트할 수 있도록 만들었습니다."
        },
        {
          title: "What I Learned / Review",
          body:
            "분산 시스템에서는 기능 구현보다 실패 상황을 먼저 모델링하는 것이 중요하다는 점을 배웠습니다. ACK, 재시도, 복제, 장애 전환 같은 기본 원칙이 실제 운영 신뢰성을 결정한다는 것을 체감했습니다."
        }
      ],
      githubUrl: ""
    },
    jobfit: {
      title: "JobFit AI",
      status: "Completed",
      summary:
        "포트폴리오 분석, 채용공고 추천, 이력서 생성, 면접 시뮬레이션을 연결한 AI 채용 매칭 플랫폼.",
      mediaLabel: "AI Hiring Platform · Full-stack Product",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "LLM API", "Docker", "Tailwind CSS"],
      sections: [
        {
          title: "Problem",
          body:
            "구직자는 자신의 포트폴리오를 채용공고 기준으로 해석하고, 적합한 공고를 찾고, 이력서와 면접 준비까지 이어가는 과정에서 많은 반복 작업을 겪습니다. 이 흐름을 하나의 제품 경험으로 연결하는 것이 목표였습니다."
        },
        {
          title: "My Role",
          body:
            "포트폴리오 분석, 채용공고 추천, 이력서 생성, 면접 시뮬레이션을 연결하는 백엔드 API와 프론트엔드 흐름을 구현했습니다. LLM API 호출 결과를 사용자 액션에 맞게 구조화하고 저장하는 데이터 흐름을 설계했습니다."
        },
        {
          title: "Architecture",
          body:
            "Next.js 프론트엔드가 사용자 입력과 결과 화면을 담당하고, FastAPI 백엔드가 분석 요청, 추천 로직, 생성 요청을 처리합니다. PostgreSQL은 사용자 프로필, 포트폴리오 분석 결과, 추천 기록을 저장하며 Docker 기반으로 개발 환경을 구성했습니다."
        },
        {
          title: "Tech Stack",
          body:
            "Next.js, FastAPI, PostgreSQL, LLM API, Docker, Tailwind CSS를 사용했습니다. 제품 흐름이 길기 때문에 화면, API, 데이터 모델을 기능 단위로 나누고 각 단계의 입출력을 명확히 관리했습니다."
        },
        {
          title: "What I Learned / Review",
          body:
            "LLM 기반 서비스는 프롬프트만으로 완성되지 않고, 입력 데이터 구조화와 결과 저장, 재사용 가능한 사용자 흐름 설계가 함께 필요하다는 점을 배웠습니다. AI 기능을 제품 안에서 자연스럽게 연결하는 경험을 쌓았습니다."
        }
      ],
      githubUrl: ""
    }
  }
};

const en = {
  site: {
    wordmark: "Hyunwoo Choi",
    title: "Hyunwoo Choi | Portfolio",
    description:
      "Portfolio of Hyunwoo Choi covering AI, computer vision, backend, full-stack, and blockchain integrity projects.",
    footer: "© 2026 Hyunwoo Choi. All rights reserved."
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    publications: "Publications",
    contact: "Contact"
  },
  hero: {
    eyebrow: "PORTFOLIO",
    title: "Hyunwoo Choi / 최현우",
    role: "AI / Computer Vision · Backend · Full-stack",
    copy:
      "I connect data, models, APIs, and product flows into working systems through AI, computer vision, backend, and full-stack projects."
  },
  heroKeywords: ["Computer Vision", "Backend", "AI Product", "Blockchain Integrity"],
  sections: {
    aboutEyebrow: "ABOUT",
    aboutTitle: "Positioning",
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "Experience",
    skillsEyebrow: "SKILLS",
    skillsTitle: "Skills",
    projectsEyebrow: "PROJECTS",
    projectsTitle: "Selected Projects",
    publicationsEyebrow: "PUBLICATIONS / AWARDS",
    publicationsTitle: "Publications / Awards",
    contactEyebrow: "CONTACT",
    contactTitle: "Contact"
  },
  about: {
    body:
      "<p>I build beyond experiment code, connecting data, models, APIs, and user flows into systems that actually run.</p><p>My work focuses on computer vision, backend systems, blockchain integrity verification, and AI product workflows that move from implementation to usable outcomes.</p>"
  },
  experience: [
    {
      organization: "Soonchunhyang University",
      role: "Computer Software Engineering",
      period: "Currently enrolled",
      bullets: [
        "Senior student in Computer Software Engineering",
        "Participated in the 2026 Wrtn bootcamp",
        "Participated in the 2026 local startup club Idea League",
        "Supported peer learning through tutoring activities",
        "Built project and collaboration experience through Soft Brain"
      ],
      links: [
        {
          label: "Idea League Slides",
          url: "papers/idea-league-slides.pdf"
        }
      ]
    },
    {
      organization: "Information Security Lab, Soonchunhyang University",
      role: "Undergraduate Researcher",
      period: "2025.03.26 - Present",
      bullets: [
        "Joined seminars and paper reviews on cryptography, blockchain, and information security",
        "Combined research and hands-on practice through KUCIS, cryptography club, and security club activities",
        "Strengthened analysis and implementation skills through security competition preparation and lab collaboration",
        "Presented research at academic conferences and practiced communicating technical work clearly"
      ],
      links: []
    },
    {
      organization: "DEEP.I",
      role: "Work-Study Contributor / Computer Vision Projects",
      period: "2024.12.31 - Present",
      bullets: [
        "Built RTSP video collection, augmentation, label correction, YOLO training, and inference pipelines",
        "Created Gradio demos to review model outputs and speed up experiment cycles",
        "Worked on COCO-to-YOLO segmentation conversion, MMDetection, and YOLO Segmentation experiments",
        "Compared object tracking results with ByteTrack and BotSORT",
        "Contributed to Azure OpenAI document-generation workflows and ResNet18 classification experiments"
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
      id: "mediledger",
      title: "Mediledger & EqupTrace",
      status: "In Progress",
      summary:
        "A medical equipment management system that connects RTLS-based location tracking, NFC usage history, and Hyperledger Besu integrity verification.",
      stack: "FastAPI/PostgreSQL/Redis/React/Hyperledger Besu",
      detailUrl: "projects/mediledger-equptrace.html",
      githubUrl: ""
    },
    {
      id: "hateSpeech",
      title: "Korean Hate Speech Detection with KoELECTRA",
      status: "Completed",
      summary:
        "A K-MHaS-based multi-label classifier for eight Korean hate speech categories with a Streamlit demo.",
      stack: "Python/PyTorch/Transformers/KoELECTRA/Streamlit",
      detailUrl: "projects/hate-speech-detection.html",
      githubUrl: ""
    },
    {
      id: "vendingMachine",
      title: "Distributed Vending Machine Management System",
      status: "Completed",
      summary:
        "A Python operations system with a TCP/IP socket protocol, ACK event handling, server replication, and failure recovery.",
      stack: "Python/socket/PostgreSQL/Flask/tkinter",
      detailUrl: "projects/vending-machine.html",
      githubUrl: ""
    },
    {
      id: "jobfit",
      title: "JobFit AI",
      status: "Completed",
      summary:
        "An AI hiring-matching platform that connects portfolio analysis, job recommendations, resume generation, and interview simulation.",
      stack: "Next.js/FastAPI/PostgreSQL/LLM API/Docker",
      detailUrl: "projects/jobfit-ai.html",
      githubUrl: ""
    }
  ],
  publications: [
    {
      title: "A Study Proposing an Automatic Hate Speech Filtering System Based on a Pretrained Language Model",
      meta: "Korean Data Science Society Winter Conference · Excellent Paper Award · 2025",
      url: "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
    },
    {
      title: "Design of a Medical Equipment Usage History Management System Using Blockchain",
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
      value: "ihyonoo0520@gmail.com",
      url: "mailto:ihyonoo0520@gmail.com"
    },
    {
      label: "GitHub",
      value: "github.com/ihyonoo",
      url: "https://github.com/ihyonoo"
    },
    {
      label: "Blog",
      value: "velog.io/@hyun_woo/posts",
      url: "https://velog.io/@hyun_woo/posts"
    },
    {
      label: "Phone",
      value: "010-5083-1298",
      url: "tel:+821050831298"
    }
  ],
  projectDetails: {
    mediledger: {
      title: "Mediledger & EqupTrace",
      status: "In Progress",
      summary:
        "A medical equipment management system that connects RTLS-based location tracking, NFC usage history, and Hyperledger Besu integrity verification.",
      mediaLabel: "RTLS · NFC · Blockchain Integrity",
      tags: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu", "Solidity", "QBFT"],
      sections: [
        {
          title: "Problem",
          body:
            "Medical equipment moves frequently inside hospitals, and responsibility changes whenever equipment is checked out, returned, or relocated. If location data and usage history are fragmented, it becomes difficult to prevent loss, trace responsibility, or verify whether records were changed."
        },
        {
          title: "My Role",
          body:
            "I connected the FastAPI backend, PostgreSQL data model, Redis state layer, React interface, and Hyperledger Besu integrity-verification flow. I designed the equipment lifecycle around RTLS location events and NFC usage events."
        },
        {
          title: "Architecture",
          body:
            "RTLS readers generate equipment location events, while NFC authentication records user and usage-state changes. The backend normalizes events into PostgreSQL, serves current state through Redis, and writes hashes of critical usage records to a Besu network for later verification."
        },
        {
          title: "Tech Stack",
          body:
            "The system uses FastAPI, PostgreSQL, Redis, React, Hyperledger Besu, Solidity, and QBFT. API, database, cache, and blockchain nodes are separated so operational workflows and verification workflows can evolve independently."
        },
        {
          title: "What I Learned / Review",
          body:
            "I learned that blockchain is most useful as a verification layer for trust-critical events, not as a place to store every operational detail. Clear boundaries between physical device events, service APIs, and chain records are essential for system reliability."
        }
      ],
      githubUrl: ""
    },
    hateSpeech: {
      title: "Korean Hate Speech Detection with KoELECTRA",
      status: "Completed",
      summary:
        "A K-MHaS-based multi-label classifier for eight Korean hate speech categories with a Streamlit demo.",
      mediaLabel: "Korean NLP · Multi-label Classification",
      tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit", "K-MHaS"],
      sections: [
        {
          title: "Problem",
          body:
            "Korean hate speech can contain multiple harmful categories in a single sentence, so single-label classification does not match the real filtering problem well. A usable demo was also needed so predictions could be reviewed beyond offline training metrics."
        },
        {
          title: "My Role",
          body:
            "I built a KoELECTRA multi-label training pipeline on the K-MHaS dataset, including validation checks and best-model saving. I connected inference to a Streamlit demo where users can enter text and review category-level predictions."
        },
        {
          title: "Architecture",
          body:
            "After preprocessing, text is passed through a tokenizer and KoELECTRA model to produce sigmoid-based outputs for eight hate speech categories. Training, CLI inference, and Streamlit UI are separated so experiments and demos can be iterated independently."
        },
        {
          title: "Tech Stack",
          body:
            "The project uses Python, PyTorch, Hugging Face Transformers, KoELECTRA, and Streamlit. The model pipeline and UI were connected so real input sentences could be tested and reviewed quickly."
        },
        {
          title: "What I Learned / Review",
          body:
            "I learned how strongly NLP performance depends on label structure and evaluation design. Hate speech detection also requires thinking beyond raw accuracy because false positives and false negatives both carry real social cost."
        }
      ],
      githubUrl: ""
    },
    vendingMachine: {
      title: "Distributed Vending Machine Management System",
      status: "Completed",
      summary:
        "A Python operations system with a TCP/IP socket protocol, ACK event handling, server replication, and failure recovery.",
      mediaLabel: "Distributed System · Socket Protocol",
      tags: ["Python", "socket", "PostgreSQL", "Flask", "tkinter", "Replication", "Failover"],
      sections: [
        {
          title: "Problem",
          body:
            "Managing multiple vending machine clients requires sales, inventory, and failure events to arrive reliably. Network disconnection or server failure should not cause operational data loss, so ACK handling, retry behavior, and replication were necessary."
        },
        {
          title: "My Role",
          body:
            "I designed the Python TCP/IP socket message protocol and implemented ACK event handling plus offline queue recovery. I connected PostgreSQL storage, a Flask admin screen, and a tkinter client UI to validate the operating scenario end to end."
        },
        {
          title: "Architecture",
          body:
            "Vending machine clients send sales and inventory events to the server and use ACK responses to decide whether delivery succeeded. During server failure, replication and failover flows keep the system running, while the admin UI exposes collected status and control actions."
        },
        {
          title: "Tech Stack",
          body:
            "The system uses Python socket programming, PostgreSQL, Flask, and tkinter. Communication, storage, and administrative UI layers were separated so failure scenarios could be tested step by step."
        },
        {
          title: "What I Learned / Review",
          body:
            "I learned that distributed systems need failure modeling as much as feature implementation. ACKs, retries, replication, and failover are not extras; they define whether the system can be trusted in operation."
        }
      ],
      githubUrl: ""
    },
    jobfit: {
      title: "JobFit AI",
      status: "Completed",
      summary:
        "An AI hiring-matching platform that connects portfolio analysis, job recommendations, resume generation, and interview simulation.",
      mediaLabel: "AI Hiring Platform · Full-stack Product",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "LLM API", "Docker", "Tailwind CSS"],
      sections: [
        {
          title: "Problem",
          body:
            "Job seekers repeatedly reinterpret their portfolio against job postings, search for fitting roles, write tailored resumes, and prepare for interviews. The goal was to connect those steps into one product workflow."
        },
        {
          title: "My Role",
          body:
            "I implemented frontend and backend flows for portfolio analysis, job recommendations, resume generation, and interview simulation. I structured LLM API outputs so they could be stored, reused, and presented through user actions."
        },
        {
          title: "Architecture",
          body:
            "The Next.js frontend handles user input and result screens, while the FastAPI backend coordinates analysis, recommendation, and generation requests. PostgreSQL stores user profiles, portfolio analysis results, and recommendation history, with Docker used for the development environment."
        },
        {
          title: "Tech Stack",
          body:
            "The project uses Next.js, FastAPI, PostgreSQL, LLM APIs, Docker, and Tailwind CSS. Because the product flow spans multiple steps, screens, APIs, and data models were organized around clear feature boundaries."
        },
        {
          title: "What I Learned / Review",
          body:
            "I learned that LLM products require more than prompt calls. Useful AI workflows depend on structured inputs, durable outputs, and product flows that make generated results easy to act on."
        }
      ],
      githubUrl: ""
    }
  }
};

window.PORTFOLIO_DATA = { defaultLang: "ko", locales: { ko, en } };
