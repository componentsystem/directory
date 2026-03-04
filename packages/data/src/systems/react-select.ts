import type { ComponentSystem } from "../schema";

const reactSelect: ComponentSystem = {
  slug: "react-select",
  name: "React Select",
  url: "https://react-select.com/home",
  github: "https://github.com/JedWatson/react-select",
  description:
    "A flexible and feature-rich select input component for React, supporting multi-select, async loading, creatable options, and extensive customization.",
  frameworks: ["react"],
  styling: [],
  category: ["forms"],
  maturity: "stable",
  components: ["Select", "AsyncSelect", "CreatableSelect", "AsyncCreatableSelect"],
  tags: ["select", "dropdown", "form-control"],
  featured: false,
  sponsored: false,
};

export default reactSelect;
