import type { ComponentSystem } from "../schema";

const patternfly: ComponentSystem = {
  slug: "patternfly",
  name: "PatternFly",
  url: "https://www.patternfly.org/",
  github: "https://github.com/patternfly/patternfly",
  description:
    "An open-source design system with web components and React implementations, providing enterprise-grade UI patterns and guidelines by Red Hat.",
  frameworks: ["web-components", "react"],
  styling: ["vanilla-css", "design-tokens"],
  category: ["general", "enterprise", "design-system"],
  maturity: "stable",
  components: ["Accordion", "ActionList", "Alert", "Avatar", "BackToTop", "Badge", "Banner", "Brand", "Breadcrumb", "Button", "Calendar", "Card", "Checkbox", "Chip", "ClipboardCopy", "CodeBlock", "CodeEditor", "DataList", "DatePicker", "DescriptionList", "Divider", "Drawer", "DualListSelector", "EmptyState", "ExpandableSection", "FileUpload", "Form", "Gallery", "Grid", "HelperText", "Hint", "Icon", "InputGroup", "JumpLinks", "Label", "List", "LoginPage", "MastHead", "Menu", "Modal", "Nav", "NotificationBadge", "NotificationDrawer", "NumberInput", "OverflowMenu", "Page", "Pagination", "Panel", "Popover", "Progress", "ProgressStepper", "Radio", "SearchInput", "Select", "Sidebar", "SimpleList", "Skeleton", "Slider", "Spinner", "Switch", "Tab", "Table", "Text", "TextArea", "TextInput", "Tile", "TimePicker", "ToggleGroup", "Toolbar", "Tooltip", "TreeView", "Wizard"],
  tags: ["enterprise", "red-hat", "patterns"],
  featured: false,
  sponsored: false,
};

export default patternfly;
