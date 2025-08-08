import { common } from '@huuyafwww/eslint-config-common';
import { javascript } from '@huuyafwww/eslint-config-javascript';
import { node } from '@huuyafwww/eslint-config-node';
import { typescript } from '@huuyafwww/eslint-config-typescript';
import { define } from '@praha/eslint-config-definer';

import type { Linter } from 'eslint';

const config = define([
  common,
  javascript,
  typescript,
  node,
]);

export default config({
  tsconfigPath: './tsconfig.json',
}) satisfies Linter.Config[];
