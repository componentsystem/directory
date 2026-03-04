import type { ComponentSystem } from "../schema";

const carbonDesignSystem: ComponentSystem = {
  slug: "carbon-design-system",
  name: "Carbon Design System",
  url: "https://carbondesignsystem.com/",
  github: "https://github.com/carbon-design-system/carbon",
  description:
    "IBM's open-source design system providing React components, design guidelines, and resources for building consistent enterprise digital experiences at scale.",
  frameworks: ["react"],
  styling: ["vanilla-css", "design-tokens"],
  category: ["general", "enterprise", "design-system"],
  maturity: "stable",
  components: ["Accordion", "Breadcrumb", "Button", "Checkbox", "CodeSnippet", "ComboBox", "ComposedModal", "ContentSwitcher", "ContextMenu", "Copy", "DataTable", "DatePicker", "Dropdown", "FileUploader", "FilterableMultiSelect", "FluidForm", "Form", "Grid", "InlineLoading", "InlineNotification", "Link", "ListBox", "Loading", "Modal", "MultiSelect", "Notification", "NumberInput", "OverflowMenu", "Pagination", "ProgressIndicator", "RadioButton", "Search", "Select", "SideNav", "Skeleton", "Slider", "StructuredList", "Tab", "Tag", "TextArea", "TextInput", "Tile", "TimePicker", "ToastNotification", "Toggle", "Tooltip", "TreeView", "UIShell"],
  tags: ["ibm", "enterprise", "design-system", "accessible"],
  featured: false,
  sponsored: false,
  company: "IBM",
};

export default carbonDesignSystem;
