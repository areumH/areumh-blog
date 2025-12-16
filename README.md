# areumh-blog

Next.js 15, React 19, TypeScript로 구축된 MDX 기반 개인 블로그 프로젝트입니다! 

## 주요 기능

- 📝 MDX 기반 블로그 포스팅
- 🏷️ 카테고리 및 태그 지원
- 🎨 다크모드 지원 (next-themes)
- 📑 목차(TOC) 자동 생성
- 💅 Tailwind CSS 스타일링
- 🎯 코드 하이라이팅 (rehype-pretty-code)

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
areumh-blog/
├── app/             # Next.js App Router 페이지
│   ├── category/    # 카테고리 페이지
│   ├── post/        # 블로그 포스트 상세 페이지
│   └── portfolio/   # 포트폴리오 페이지
├── components/      # 공통 컴포넌트
│   ├── layout/      # 레이아웃 컴포넌트
│   └── ui/          # ui 컴포넌트
├── constants/       # 상수 정의
├── hooks/           # 커스텀 훅
├── lib/             # 블로그 포스트 관련 유틸리티 함수
├── posts/           # 카테고리별 MDX 블로그 포스트 파일
├── public/          # 정적 파일
├── styles/          # 전역 스타일
├── utils/           # 유틸리티 함수
└── types.ts         # 타입 정의
```

## 블로그 포스트 작성

`posts/` 폴더 내 카테고리별 폴더에 `.mdx` 파일을 추가하면 자동으로 블로그에 포스트가 생성됩니다.

### 포스트 frontmatter 형식

```mdx
---
title: 포스트 제목
date: 2025-10-04
description: 포스트 설명
tags: [tag1, tag2]
---

포스트 내용...
```

## 기술 스택

- **Framework**: Next.js 15.5.4
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.14
- **MDX Processing**: next-mdx-remote, gray-matter
- **Code Highlighting**: rehype-pretty-code
- **Theme**: next-themes
