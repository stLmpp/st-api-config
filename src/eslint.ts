import globals from 'globals';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

export const eslint: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-inner-declarations': ['off'],
      'object-shorthand': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'brace-style': ['off', 'off'],
      'id-blacklist': 'off',
      'id-match': 'off',
      'linebreak-style': 'off',
      'new-parens': 'off',
      'newline-per-chained-call': 'off',
      'no-extra-semi': 'off',
      'no-irregular-whitespace': 'off',
      'no-trailing-spaces': [
        'error',
        { ignoreComments: true, skipBlankLines: true },
      ],
      'no-underscore-dangle': 'off',
      'space-in-parens': ['off', 'never'],
      quotes: [
        'error',
        'single',
        { allowTemplateLiterals: true, avoidEscape: true },
      ],
      'no-console': ['warn'],
      curly: ['error', 'multi-line'],
      'no-useless-constructor': ['off'],
      'comma-dangle': [
        'error',
        {
          objects: 'always-multiline',
          arrays: 'always-multiline',
          functions: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': ['error'],
      'no-shadow': ['off'],
      'prefer-const': ['error', { destructuring: 'all' }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        { accessibility: 'explicit' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/unified-signatures': 'off',
      '@typescript-eslint/no-useless-constructor': ['off'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/prefer-optional-chain': ['warn'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-restricted-types': ['error'],
      '@typescript-eslint/naming-convention': [
        'off',
        {
          selector: 'default',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'memberLike',
          modifiers: ['protected'],
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'property',
          modifiers: ['static'],
          format: null,
        },
        {
          selector: 'parameterProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'enumMember',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'objectLiteralProperty',
          format: null,
        },
      ],
      '@typescript-eslint/typedef': [
        'error',
        {
          arrowParameter: false,
          memberVariableDeclaration: false,
          parameter: false,
          propertyDeclaration: true,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'off',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      '@typescript-eslint/no-magic-numbers': [
        'off',
        { ignore: [0, 1], ignoreArrayIndexes: true, ignoreTypeIndexes: true },
      ],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/consistent-type-imports': [
        'off',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false,
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/prevent-abbreviations': ['off'],
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/no-null': 'off',
      'unicorn/throw-new-error': 'off',
    },
  },
);
