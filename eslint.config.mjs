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
            ...panda.configs.recommended.rules,
            ...panda.configs.all.rules,
            '@typescript-eslint/no-empty-object-type': 'warn',
            '@pandacss/no-margin-properties': 'off',
            'react/display-name': 'off',
            '@pandacss/prefer-atomic-properties': 'off',
            '@pandacss/prefer-composite-properties': 'off',
            '@pandacss/prefer-longhand-properties': 'off',
            '@pandacss/prefer-composite-properties': 'off',
            '@pandacss/no-physical-properties': 'off',
            '@pandacss/no-debug': 'error',
        },
    },
]

export default eslintConfig
