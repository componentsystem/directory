import type { ComponentSystem } from "../schema";

const qwikUi: ComponentSystem = {
  slug: "qwik-ui",
  name: "Qwik UI",
  url: "https://qwikui.com/",
  github: "https://github.com/qwikifiers/qwik-ui",
  description:
    "The official component library for the Qwik framework, providing accessible and performant UI components optimized for resumability.",
  frameworks: ["qwik"],
  styling: ["headless"],
  category: ["general"],
  maturity: "active",
  components: ["Accordion", "Avatar", "Badge", "Breadcrumb", "Button", "Card", "Carousel", "Checkbox", "Combobox", "Label", "Modal", "Pagination", "Popover", "Progress", "RadioGroup", "Select", "Separator", "Skeleton", "Slider", "Tabs", "Toast", "Toggle", "Tooltip"],
  tags: ["qwik", "resumable", "accessible"],
  featured: false,
  sponsored: false,
};

export default qwikUi;
