import { antfu } from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  formatters: true,
  stylistic: {
    overrides: {
      'style/operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
            // 避免 `=` 后的 `/* @__PURE__ */` 被移动
            '=': 'ignore',
          },
        },
      ],
    },
  },
})
