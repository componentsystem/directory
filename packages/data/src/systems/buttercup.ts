import type { ComponentSystem } from "../schema";

const buttercup: ComponentSystem = {
  slug: "buttercup",
  name: "Buttercup",
  url: "https://buttercup.pw/",
  github: "https://github.com/buttercup/ui",
  description:
    "The React UI component library for the Buttercup password manager, providing styled components used across the Buttercup application ecosystem.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["general"],
  maturity: "active",
  components: ["Breadcrumb", "Button", "Card", "Checkbox", "Code", "DataTable", "Dropdown", "Header", "Icon", "Input", "Label", "List", "Menu", "Modal", "Notification", "Pagination", "Progress", "Radio", "Select", "SideMenu", "Switch", "Tab", "Table", "Tag", "TextArea", "Toast", "Tooltip"],
  tags: ["buttercup", "password-manager"],
  featured: false,
  sponsored: false,
  company: "Buttercup",
};

export default buttercup;
