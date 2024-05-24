/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { getJestConfig } = require('@storybook/test-runner');
/* eslint-enable @typescript-eslint/no-var-requires */

// eslint-disable-next-line no-undef
module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */
  testTimeout: 60_000,
};
