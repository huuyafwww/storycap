import { browser } from '@huuyafwww/eslint-config-browser';
import { common } from '@huuyafwww/eslint-config-common';
import { javascript } from '@huuyafwww/eslint-config-javascript';
import { react } from '@huuyafwww/eslint-config-react';
import { storybook } from '@huuyafwww/eslint-config-storybook';
import { typescript } from '@huuyafwww/eslint-config-typescript';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  common,
  javascript,
  typescript,
  browser,
  react,
  storybook,
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
