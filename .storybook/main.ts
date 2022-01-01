import { UserConfig } from "vite";
import preact from "@preact/preset-vite";
import { CoreConfig, Options, StorybookConfig } from "@storybook/core-common";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import { exists } from "../utils/exists";
import { Weaken } from "../utils/weaken";

interface CustomizedCoreConfig extends Weaken<CoreConfig, "builder"> {
  builder: CoreConfig["builder"] | "storybook-builder-vite";
}
interface CustomizedStorybookConfig extends Weaken<StorybookConfig, "core"> {
  core: CustomizedCoreConfig;
  viteFinal?: (config: UserConfig, options: Options) => UserConfig;
}

const config: CustomizedStorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-a11y"],
  core: {
    builder: "storybook-builder-vite",
  },
  viteFinal: (config) => {
    if (exists(config.plugins)) {
      config.plugins.push(vanillaExtractPlugin());
      config.plugins = [...config.plugins, preact()];
    }
    if (process.env.NODE_ENV === "production") {
      if (exists(config.build)) config.build.chunkSizeWarningLimit = 1200;
    }
    return config;
  },
};

export default config;
