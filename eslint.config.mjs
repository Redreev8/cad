import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import panda from '@pandacss/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    eslintPluginPrettierRecommended,
    {
        plugins: {
            '@pandacss': panda,
        },
        rules: {
            '@typescript-eslint/no-empty-object-type': 'warn',
            'react/display-name': 'off',
            '@pandacss/no-debug': 'error',
            ...panda.configs.recommended.rules,
            ...panda.configs.all.rules,
        },
    },
]

export default eslintConfig
