# @vue-spark/permission

Lightweight Vue permission management plugin for component-level access control.

[English Document](https://github.com/vue-spark/permission/blob/dev/README.md)

## Installation

```sh
npm i @vue-spark/permission
```

### Registration

```ts
// main.ts
import { createPermission } from '@vue-spark/permission'
import { createApp } from 'vue'

createApp().use(createPermission())
```

## Type Definitions

```ts
declare const PERMISSION_CODE_ALL = '*'
type PermissionCodeAll = typeof PERMISSION_CODE_ALL

type PermissionCode = PermissionCodeAll | (string & {})

type PermissionOperator = 'or' | 'and'

interface Permission {
  /**
   * A readonly list of all added permission codes
   */
  get codes(): readonly string[]
  /**
   * Adds permission codes
   */
  add: (codes: PermissionCode | PermissionCode[]) => void
  /**
   * Sets the list of permission codes, completely overwriting existing ones
   */
  set: (codes: PermissionCode | PermissionCode[]) => void
  /**
   * Clears the permission code list
   */
  clear: () => void
  /**
   * Checks if the user has the specified permissions
   * @param codes Permission codes to check
   * @param op Logical operator, defaults to `or`
   * @returns Result of the permission check
   */
  check: (codes: PermissionCode | PermissionCode[], op?: PermissionOperator) => boolean
}
```

## Usage

### PermissionGuard

Control rendering based on permissions using the `<PermissionGuard />` component.

```html
<script setup lang="ts">
  import { usePermission, PermissionGuard } from '@vue-spark/permission'

  const permission = usePermission()
  permission.set(['list:add', 'list:edit', 'list:delete'])
</script>

<template>
  <!-- Button is rendered only if the user has the required permission -->
  <PermissionGuard :codes="['list:delete']" op="or">
    <button>Delete</button>
  </PermissionGuard>
</template>
```

### vPermission

Use the `v-permission` directive for permission control in templates.

```html
<script setup lang="ts">
  import { vPermission, usePermission } from '@vue-spark/permission'

  const permission = usePermission()
  permission.set(['list:add', 'list:edit', 'list:delete'])
</script>

<template>
  <!-- Button is rendered only if the user has the required permission -->
  <button v-permission:or="['list:delete']">Delete</button>
</template>
```

### usePermission or $permission

```html
<script setup lang="ts">
  import { usePermission } from '@vue-spark/permission'

  const permission = usePermission()
  permission.set(['list:add', 'list:edit', 'list:delete'])
</script>

<template>
  <!-- Button is rendered only if the user has the required permission -->
  <button v-if="permission.check(['list:delete'])">Delete</button>

  <!-- Equivalent to -->
  <button v-if="$permission.check('list:delete')">Delete</button>
</template>
```

## License

[MIT](./LICENSE) License © 2025 [leihaohao](https://github.com/l246804)
