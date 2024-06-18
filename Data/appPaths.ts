import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faListUl } from "@fortawesome/free-solid-svg-icons";

type pathItem = {
  href: string;
  name: string;
  icon?: IconDefinition;
}
/**
 * Defines all main paths of the app.
 */
const appPaths: {[key: string]: pathItem} = {
  items: {
    href: "/items",
    name: "items",
    icon: faListUl
  }
}

/**
 * Navigation buttons to be displayed in header or footer.
 */
export const headerPaths: pathItem[] = [appPaths.items]