import type { ComponentSystem } from "../schema";

const originUi: ComponentSystem = {
  slug: "origin-ui",
  name: "Origin UI",
  url: "https://originui.com/",
  github: "https://github.com/origin-space/originui",
  description:
    "An extensive collection of copy-and-paste UI components built with Tailwind CSS and React, following shadcn conventions for rapid app development.",
  frameworks: ["react"],
  styling: ["tailwind"],
  category: ["general"],
  maturity: "active",
  components: [
    "Button",
    "Input",
    "Select",
    "Checkbox",
    "Radio",
    "Switch",
    "Slider",
    "Textarea",
    "Badge",
    "Avatar",
    "Alert",
    "Dialog",
    "Dropdown",
    "Tabs",
    "Table",
    "Card",
    "Tooltip",
    "Notification",
    "Sidebar",
    "Pagination",
  ],
  tags: ["copy-paste", "shadcn", "trending"],
  featured: false,
  sponsored: false,
};

export default originUi;
