import type { ComponentSystem } from "../schema";

const cfDesign: ComponentSystem = {
  slug: "cf-design",
  name: "cf-design",
  url: "https://cloudflare.github.io/cf-ui/",
  github: "https://github.com/cloudflare/cf-ui",
  description:
    "Cloudflare's React component library used internally to build the Cloudflare dashboard and other web-based products with consistent styling and behavior.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["general", "design-system"],
  maturity: "active",
  components: ["Alert", "Avatar", "Badge", "Breadcrumb", "Button", "ButtonGroup", "Card", "Checkbox", "Code", "Dialog", "Divider", "Dropdown", "EmptyState", "Form", "Icon", "Input", "Label", "Link", "List", "Loading", "Menu", "Modal", "Nav", "Notification", "Pagination", "Popover", "Progress", "Radio", "Select", "Sidebar", "Skeleton", "Switch", "Tab", "Table", "Tag", "TextArea", "Toast", "Toggle", "Tooltip"],
  tags: ["cloudflare", "internal", "dashboard"],
  featured: false,
  sponsored: false,
  company: "Cloudflare",
};

export default cfDesign;
