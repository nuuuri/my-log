# Next-Template (with Yarn Berry)

- **Next.js 15 (App Router)** 프로젝트 템플릿
- ESLint 적용 (`@rushstack/eslint-config`)
- Prettier 적용
- Tailwind CSS 적용

## 환경

- node : v20.16.0
- yarn : 4.5.3

## 시작하기

```bash
# 1. 의존성 패키지 일괄 설치
$ yarn install
$ yarn dlx @yarnpkg/sdks vscode

# 2. 스크립트 실행
$ yarn dev
```

## 폴더 구조

```
  src
   ├── app          // 폴더 기반 라우팅
   ├── components   // 컴포넌트 관리
   ├── lib          // 외부 라이브러리 설정
   ├── stores       // 전역 상태 관리
   ├── styles       // 전역 스타일 및 모듈화 스타일 파일 관리
   │    └── fonts
   ├── types        // 전역 타입 관리
   └── utils        // 공통으로 사용되는 유틸리티 함수 관리
```
