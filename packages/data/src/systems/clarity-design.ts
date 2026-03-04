import type { ComponentSystem } from "../schema";

const clarityDesign: ComponentSystem = {
  slug: "clarity-design",
  name: "Clarity Design",
  url: "http://clarity.design/",
  github: "https://github.com/vmware-clarity/ng-clarity",
  description:
    "VMware's open-source design system for Angular, offering enterprise-ready UI components, guidelines, and tools for building consistent and accessible web applications.",
  frameworks: ["angular"],
  styling: ["vanilla-css", "design-tokens"],
  category: ["general", "enterprise", "design-system"],
  maturity: "stable",
  components: ["Accordion", "Alert", "Badge", "Breadcrumb", "Button", "ButtonGroup", "Card", "Checkbox", "Combobox", "Datagrid", "DataList", "Datepicker", "Dropdown", "FileInput", "Form", "Grid", "Header", "Icon", "Input", "Label", "List", "Login", "Modal", "Navigation", "Pagination", "Password", "Progress Bar", "Radio", "Range", "Select", "Sidebar", "Signpost", "Spinner", "Stack", "Stepper", "Switch", "Table", "Tabs", "Tag", "Textarea", "Timeline", "Toggle", "Tooltip", "Tree", "Vertical Nav", "Wizard"],
  tags: ["vmware", "enterprise", "design-system", "accessible"],
  featured: false,
  sponsored: false,
  company: "VMware",
};

export default clarityDesign;
