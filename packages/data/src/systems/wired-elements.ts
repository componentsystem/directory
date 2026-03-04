import type { ComponentSystem } from "../schema";

const wiredElements: ComponentSystem = {
  slug: "wired-elements",
  name: "Wired Elements",
  url: "https://wiredjs.com/",
  github: "https://github.com/rough-stuff/wired-elements",
  description:
    "A set of web components with a hand-drawn, sketchy appearance built using Rough.js, offering a unique wireframe-like aesthetic for UI prototypes and playful interfaces.",
  frameworks: ["web-components"],
  styling: [],
  category: ["general"],
  maturity: "unmaintained",
  components: ["Button", "Calendar", "Card", "Checkbox", "Combo", "Dialog", "Divider", "Fab", "IconButton", "Image", "Input", "Item", "Link", "Listbox", "Progress", "RadioGroup", "Search", "Slider", "Spinner", "Tab", "Textarea", "Toggle", "Video"],
  tags: ["hand-drawn", "sketchy", "rough-js", "wireframe"],
  featured: false,
  sponsored: false,
};

export default wiredElements;
