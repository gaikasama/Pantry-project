
type pathItem = {
  href: string;
  name: string;
}
/**
 * Defines all main paths of the app.
 */
const appPaths: {[key: string]: pathItem} = {
  items: {
    href: "/items",
    name: "items",
  }
}

/**
 * Navigation buttons to be displayed in header or footer.
 */
export const headerPaths: pathItem[] = [appPaths.items]