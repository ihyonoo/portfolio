# Portfolio

최현우의 개인 포트폴리오 사이트입니다. 별도 프레임워크나 빌드 단계 없이 정적 HTML, CSS, JavaScript로 구성되어 있습니다.

- **배포 사이트**: [hwchoi.com](https://hwchoi.com)
- **사이트 소스**: `blog/`
- **배포 방식**: `main` 브랜치 변경 시 GitHub Actions가 홈서버 배포 작업을 실행합니다. 설정은 [deploy.yml](.github/workflows/deploy.yml)에 있습니다.

## 주요 구성

- 한국어/영어 전환을 지원하는 단일 페이지 포트폴리오
- 경험, 주요 기술, 프로젝트, 수상, 논문 콘텐츠와 프로젝트 상세 페이지
- 전체 화면에서 동작하는 3D Tubes 마우스 커서 효과
- 콘텐츠 단일 원천: `blog/assets/js/i18n.js`
- 공통 스타일과 동작: `blog/assets/css/main.css`, `blog/assets/js/main.js`

## 로컬에서 보기

상대 경로와 외부 모듈을 안정적으로 불러올 수 있도록, HTML 파일을 직접 여는 대신 정적 서버로 실행하는 방식을 권장합니다.

```bash
python3 -m http.server 4173 --directory blog
```

그런 다음 [http://localhost:4173](http://localhost:4173)에서 확인합니다.

## 콘텐츠 수정

화면의 콘텐츠는 `blog/assets/js/i18n.js`에서 관리합니다. 경력·기술·프로젝트·수상·논문을 수정할 때는 `ko`와 `en` 데이터를 함께 갱신해야 합니다. 프로젝트 상세 페이지는 `blog/projects/`에 있으며, 같은 공통 CSS와 JavaScript를 사용합니다.
