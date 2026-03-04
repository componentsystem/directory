import type { ComponentSystem } from "../schema";

const baseUi: ComponentSystem = {
  slug: "base-ui",
  name: "Base UI",
  url: "https://base-ui.com/",
  github: "https://github.com/mui/base-ui",
  npm: "@base-ui/react",
  description:
    "Unstyled, accessible UI components from the creators of Material UI, Radix, and Floating UI. Ships zero CSS so you can bring your own styling.",
  frameworks: ["react"],
  styling: ["headless"],
  category: ["primitives"],
  maturity: "active",
  components: [
    "Accordion",
    "AlertDialog",
    "Checkbox",
    "Collapsible",
    "Dialog",
    "Field",
    "Menu",
    "NumberField",
    "Popover",
    "PreviewCard",
    "Progress",
    "RadioGroup",
    "ScrollArea",
    "Select",
    "Separator",
    "Slider",
    "Switch",
    "Tabs",
    "Toggle",
    "ToggleGroup",
    "Tooltip",
  ],
  tags: ["headless", "unstyled", "accessible", "mui"],
  featured: false,
  sponsored: false,
  company: "MUI",
};

export default baseUi;
