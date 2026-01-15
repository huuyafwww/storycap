import { makeDecorator } from 'storybook/preview-api';

import { triggerScreenshot } from './trigger-screenshot.js';
import type { ScreenshotOptions } from '../shared/types.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
const withScreenshotDecorator = makeDecorator({
  name: 'withScreenshot',
  parameterName: 'screenshot',
  skipIfNoParametersOrOptions: false,
  wrapper: (
    getStory: (context: any) => any,
    context: any,
    { parameters, options }: { parameters?: ScreenshotOptions; options?: ScreenshotOptions },
  ) => {
    if (typeof process !== 'undefined') {
      return getStory(context);
    }
    const screenshotOptions = parameters || options || {};
    triggerScreenshot(screenshotOptions, context);
    return getStory(context);
  },
});
/* eslint-enable @typescript-eslint/no-explicit-any */

const withScreenshot = withScreenshotDecorator;

export { withScreenshot };
