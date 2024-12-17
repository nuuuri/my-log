// eslint-disable-next-line @typescript-eslint/no-require-imports
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },

  settings: {
    react: {
      version: 'detect', // 사용자가 설치한 버전을 자동으로 선택
    },
  },

  plugins: ['react', 'react-refresh', 'jsx-a11y', 'import'],
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    '@rushstack/eslint-config/profile/web-app',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],

  rules: {
    '@rushstack/typedef-var': 'off', // 타입 추론으로 충분한 곳에 타이핑을 강요하므로 off
    '@typescript-eslint/naming-convention': [
      'warn',
      // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      // camelCase 함수, PascalCase 함수 허용
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // PascalCase 클래스, interfaces, type aliases, enums 허용
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      // interface 앞에 I 사용 불가
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // typeAlias 앞에 T 사용 불가
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: false,
        },
      },
      // typeParameter 앞에 T 사용 불가
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{next*,next*/*,next*/*/*,react*,react*/*}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/components/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '{@/constants/*,@/constants/*/*}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/stores/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/styles/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/types/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/utils/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/posts/*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        noSortAlphabetically: false, // 알파벳 순으로 props 정렬
        ignoreCase: true, // 대소문자 무시
        callbacksLast: true, // callback은 가장 마지막에 선언
        shorthandFirst: true, // 단축 props는 앞쪽에 선언
        reservedFirst: true, // key, ref는 가장 먼저 선언
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
