/// <reference types="react-scripts" />

import type { Entries } from "type-fest"

declare module "*.css" {
  const content: Record<"string", "string">
  export default content
}

declare global {
  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>
  }
}
