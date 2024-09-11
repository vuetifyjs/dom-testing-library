export function logRoles(container: Element, options?: LogRolesOptions): string

interface LogRolesOptions {
  hidden?: boolean
}

export function getRoles(container: Element): {
  [index: string]: Element[]
}

/**
 * https://testing-library.com/docs/dom-testing-library/api-helpers#isinaccessible
 */
export function isInaccessible(element: Element): boolean

export function computeHeadingLevel(element: Element): number | undefined
