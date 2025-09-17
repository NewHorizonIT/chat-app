import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, prettier: eslintPluginPrettier },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'prettier/prettier': ['error'],
      'no-unused-vars': ['warn'], // Cảnh báo biến không dùng
      'no-console': 'off', // Bật console, cần cho logging
      'no-undef': 'error', // Báo lỗi biến chưa khai báo
      'no-mixed-spaces-and-tabs': 'error', // Tránh tab lẫn space
      eqeqeq: ['error', 'always'], // Luôn dùng === thay vì ==
      curly: ['error', 'all'], // Luôn dùng curly braces trong if/for/while
      'no-var': 'error', // Không dùng var, dùng let/const
      'prefer-const': 'warn', // Nếu biến không đổi, dùng const
      'consistent-return': 'warn', // Hàm luôn return consistent
      'no-empty-function': 'warn', // Tránh func
    },
  },
]);
