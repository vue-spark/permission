import type { Permission } from './core'

export * from './component'
export * from './core'
export * from './directive'
export * from './injection'

declare module 'vue' {
  interface ComponentCustomProperties {
    $permission: Permission
  }
}
