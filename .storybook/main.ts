import preact from '@preact/preset-vite'
import {CoreConfig, Options, StorybookConfig} from '@storybook/core-common'
import {UserConfig} from 'vite'

import {exists} from '../utils/exists'
import {Weaken} from '../utils/weaken'

interface CustomizedCoreConfig extends Weaken<CoreConfig, 'builder'> {
    builder: CoreConfig['builder'] | 'storybook-builder-vite'
}
interface CustomizedStorybookConfig extends Weaken<StorybookConfig, 'core'> {
    core: CustomizedCoreConfig
    viteFinal?: (config: UserConfig, options: Options) => UserConfig
}

const config: CustomizedStorybookConfig = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'storybook-builder-vite'
    },
    viteFinal: (config) => {
        if (exists(config.plugins)) config.plugins = [...config.plugins, preact()]
        if (process.env.NODE_ENV === 'production') {
            if (exists(config.build)) config.build.chunkSizeWarningLimit = 1200
        }
        return config
    }
}

export default config