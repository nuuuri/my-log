# :sparkling_heart: My Log (개인 블로그)

- mdx 파일 기반 개인 블로그 프로젝트
- 개발 기간 : 2024.12.13 ~ ing
- [Let's Go! :two_hearts:](https://nuuuri.vercel.app/)

<br/>

## 🔧 개발 환경

- **Node.js** : v20.16.0
- **yarn** : 4.5.3 (yarn berry)
- **프레임워크** : Next.js 15 (App Router)
- **스타일** : Tailwind CSS
- **상태관리** : Zustand
- **글 작성** : MDX
- **글 파싱**
  - next-mdx-remote
  - gray-matter
- **배포** : Vercel

<br/>

## :four_leaf_clover: 주요 기능

- mdx 파일 기반 게시글 저장 & 불러오기
- 폴더 구조를 기반으로 카테고리 자동 추출
- 게시글 목록, 상세 페이지
- 카테고리, 태그 설정
- 페이지 최상단으로 이동
- 테마 지원 (라이트모드 / 다크모드)
- 코드 블럭 지원 (theme: slack-dark)
- 반응형 UI 적용

<br/>

## :star2: 추가 예정 기능

- [ ] 게시글 목록 페이지네이션
- [ ] 카테고리/해시태그 모아보기
- [ ] 사이드바에서 카테고리/태그 표출 (파일 기반 자동 설정)
- [ ] 게시글 내 목차 기능
- [ ] 댓글 기능
- [ ] 검색 엔진 최적화(SEO)
- [ ] 이미지 클릭 시 확대하기
- [ ] 생각나는대로 추가 예정...

<br/>

## :file_folder: 프로젝트 시작하기

### # 시작하기

```bash
# 1. 의존성 패키지 일괄 설치
$ yarn install
$ yarn dlx @yarnpkg/sdks vscode

# 2. 스크립트 실행
$ yarn dev
```

### # 폴더 구조

```bash
├── mdx                         # MDX 파일 관리 (카테고리별로 폴더화
└── src
     ├── app                    # app 폴더 기반 라우팅
     ├── components             # 공통 컴포넌트
     ├── features               # feature 단위 모듈 관리
     │     ├── post
     │     │    ├── components
     │     │    ├── hooks
     │     │    ├── model
     │     │    │     ├── post-store.ts
     │     │    │     ├── post-query.ts
     │     │    │     └── post-type.ts
     │     │    ├── utils
     │     │    └── index.ts   # Public API
     │     └── user
     ├── hooks                  # 공통 hook 관리
     ├── lib                    # 외부 라이브러리 설정
     ├── styles                 # 전역 스타일 및 모듈화 스타일 파일 관리
     │     └── fonts
     └── utils                  # 공통 유틸리티 함수 관리
```
