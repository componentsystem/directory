import type { ComponentSystem } from "../schema";

const baseWeb: ComponentSystem = {
  slug: "base-web",
  name: "Base Web",
  url: "https://baseweb.design/",
  github: "https://github.com/uber/baseweb",
  description:
    "Uber's React component library implementing the Base Design System, offering robust and highly customizable components for building accessible enterprise web applications.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["general", "enterprise", "design-system"],
  maturity: "active",
  components: ["Accordion", "Avatar", "Badge", "Banner", "Breadcrumbs", "Button", "ButtonGroup", "Card", "Checkbox", "Combobox", "DataTable", "DatePicker", "Drawer", "FileUploader", "FlexGrid", "FloatingMarker", "FixedMarker", "FormControl", "Heading", "Icon", "Input", "Layer", "List", "Menu", "Modal", "Notification", "Pagination", "PaymentCard", "PhoneInput", "Pin Code", "Popover", "ProgressBar", "ProgressSteps", "Radio", "Rating", "Select", "Side Navigation", "Skeleton", "Slider", "Snackbar", "Spinner", "Table", "Tabs", "Tag", "Textarea", "TimePicker", "Toast", "Toggle", "Tooltip", "Tree View", "Typography"],
  tags: ["uber", "enterprise", "customizable"],
  featured: false,
  sponsored: false,
  company: "Uber",
};

export default baseWeb;
