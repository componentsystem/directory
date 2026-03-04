import type { ComponentSystem } from "../schema";

const skeleton: ComponentSystem = {
  slug: "skeleton",
  name: "Skeleton",
  url: "https://www.skeleton.dev/",
  github: "https://github.com/skeletonlabs/skeleton",
  description:
    "A fully featured UI toolkit for Svelte and Tailwind CSS, providing adaptive and accessible components with built-in theming and dark mode support.",
  frameworks: ["svelte"],
  styling: ["tailwind"],
  category: ["general"],
  maturity: "active",
  components: ["Accordion", "AppBar", "AppShell", "Autocomplete", "Avatar", "ConicGradient", "DataTable", "FileButton", "FileDropzone", "InputChip", "ListBox", "LightSwitch", "Paginator", "Popup", "ProgressBar", "ProgressRadial", "RadioGroup", "RangeSlider", "Ratings", "SlideToggle", "Stepper", "Tab", "Table", "Toast", "TreeView"],
  tags: ["theming", "dark-mode"],
  featured: false,
  sponsored: false,
};

export default skeleton;
