import { yaml } from '@huuyafwww/eslint-config-yaml';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  () => ([{
    ignores: ['**/*.?([cm])ts?(x)', '**/*.?([cm])js?(x)', "examples.*", "examples/**/*"],
    files: [
      '*.yaml',
      '*.yml',
    ],
  }]),
  yaml,
]);

export default config({}) as Linter.Config;