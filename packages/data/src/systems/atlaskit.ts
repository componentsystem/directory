import type { ComponentSystem } from "../schema";

const atlaskit: ComponentSystem = {
  slug: "atlaskit",
  name: "Atlaskit",
  url: "https://atlaskit.atlassian.com/",
  description:
    "Atlassian's official React UI component library powering products like Jira and Confluence, providing enterprise-grade components with the Atlassian Design System.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["general", "enterprise", "design-system"],
  maturity: "active",
  components: ["Avatar", "AvatarGroup", "Badge", "Banner", "Breadcrumbs", "Button", "ButtonGroup", "Calendar", "Checkbox", "Code", "CodeBlock", "DatePicker", "DateTimePicker", "DropdownMenu", "DynamicTable", "EmptyState", "Flag", "FlagGroup", "Form", "Heading", "Icon", "InlineDialog", "InlineEdit", "InlineMessage", "Lozenge", "Menu", "Modal", "PageHeader", "PageLayout", "Pagination", "Popup", "ProgressBar", "ProgressIndicator", "Radio", "Range", "Select", "SideNavigation", "Spinner", "Table", "Tabs", "Tag", "TextArea", "TextField", "TimePicker", "Toggle", "Tooltip", "Tree"],
  tags: ["atlassian", "enterprise", "design-system"],
  featured: false,
  sponsored: false,
  company: "Atlassian",
};

export default atlaskit;
