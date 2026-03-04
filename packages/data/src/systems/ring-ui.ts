import type { ComponentSystem } from "../schema";

const ringUi: ComponentSystem = {
  slug: "ring-ui",
  name: "Ring UI",
  url: "https://jetbrains.github.io/ring-ui/",
  github: "https://github.com/JetBrains/ring-ui",
  description:
    "A collection of React UI components by JetBrains, powering the interfaces of JetBrains products like YouTrack, TeamCity, and Hub.",
  frameworks: ["react"],
  styling: ["css-modules"],
  category: ["general", "enterprise", "design-system"],
  maturity: "stable",
  components: ["Alert", "Auth", "Avatar", "Badge", "Breadcrumb", "Button", "ButtonGroup", "Checkbox", "Code", "Confirm", "ContentLayout", "DataList", "DatePicker", "Dialog", "Dropdown", "Footer", "Grid", "Group", "Header", "Heading", "Icon", "Input", "Island", "Link", "List", "Loader", "LoaderInline", "LoaderScreen", "LoginDialog", "Markdown", "Message", "Pager", "Panel", "Popup", "PopupMenu", "ProgressBar", "QueryAssist", "Radio", "Select", "Sidebar", "Table", "Tabs", "Tag", "Tags", "Text", "Toggle", "Tooltip"],
  tags: ["jetbrains", "enterprise"],
  featured: false,
  sponsored: false,
  company: "JetBrains",
};

export default ringUi;
