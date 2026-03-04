import type { ComponentSystem } from "../schema";

const angularMaterial: ComponentSystem = {
  slug: "angular-material",
  name: "Angular Material",
  url: "https://material.angular.io/",
  github: "https://github.com/angular/components",
  description:
    "Official Material Design component library for Angular, providing a comprehensive set of reusable UI components following Google's Material Design specification.",
  frameworks: ["angular"],
  styling: ["material"],
  category: ["general", "design-system"],
  maturity: "stable",
  components: ["Autocomplete", "Badge", "Bottom Sheet", "Button", "Button Toggle", "Card", "Checkbox", "Chips", "Core", "Datepicker", "Dialog", "Divider", "Expansion", "Form Field", "Grid List", "Icon", "Input", "List", "Menu", "Paginator", "Progress Bar", "Progress Spinner", "Radio", "Ripple", "Select", "Sidenav", "Slide Toggle", "Slider", "Snack Bar", "Sort", "Stepper", "Table", "Tabs", "Toolbar", "Tooltip", "Tree"],
  tags: ["material-design", "google", "official"],
  featured: false,
  sponsored: false,
  company: "Google",
};

export default angularMaterial;
