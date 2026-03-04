import type { ComponentSystem } from "../schema";

const rippleUi: ComponentSystem = {
  slug: "ripple-ui",
  name: "Ripple UI",
  url: "https://www.ripple-ui.com/",
  github: "https://github.com/Siumauricio/rippleui",
  description:
    "A clean and modern Tailwind CSS component library providing ready-to-use HTML components with elegant default styling and easy customization.",
  frameworks: ["html"],
  styling: ["tailwind"],
  category: ["general"],
  maturity: "active",
  components: ["Accordion", "Alert", "Avatar", "Badge", "Breadcrumb", "Button", "ButtonGroup", "Card", "Checkbox", "Divider", "Drawer", "Dropdown", "Input", "Modal", "Navbar", "Pagination", "Popover", "Progress", "Radio", "Range", "Select", "Sidebar", "Skeleton", "Spinner", "Stat", "Steps", "Switch", "Table", "Tabs", "TextArea", "Timeline", "Toast", "Toggle", "Tooltip"],
  tags: ["tailwind", "html", "utility-first"],
  featured: false,
  sponsored: false,
};

export default rippleUi;
