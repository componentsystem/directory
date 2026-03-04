import type { ComponentSystem } from "../schema";

const kendoUi: ComponentSystem = {
  slug: "kendo-ui",
  name: "Kendo UI",
  url: "https://www.telerik.com/kendo-ui",
  description:
    "A comprehensive commercial UI component suite by Telerik supporting React, Vue, and Angular with rich data grids, charts, and enterprise widgets.",
  frameworks: ["react", "vue", "angular"],
  styling: [],
  category: ["general", "enterprise"],
  maturity: "stable",
  components: ["AutoComplete", "BottomNavigation", "Breadcrumb", "Button", "ButtonGroup", "Calendar", "Chart", "Checkbox", "ChipList", "ColorPicker", "ComboBox", "ContextMenu", "DateInput", "DatePicker", "DateRangePicker", "DateTimePicker", "Dialog", "Drawer", "DropDownButton", "DropDownList", "Editor", "FileManager", "Filter", "FlatColorPicker", "FloatingActionButton", "Gantt", "Grid", "Input", "Loader", "Map", "MaskedTextInput", "Menu", "MultiColumnComboBox", "MultiSelect", "Notification", "NumericTextBox", "Pager", "PanelBar", "PDFViewer", "PivotGrid", "PopOver", "ProgressBar", "QRCode", "RadioButton", "RadioGroup", "RangeSlider", "Rating", "Scheduler", "ScrollView", "Skeleton", "Slider", "SplitButton", "Splitter", "Spreadsheet", "Stepper", "Switch", "TabStrip", "TextArea", "TextBox", "TileLayout", "TimePicker", "ToggleButton", "Toolbar", "Tooltip", "TreeList", "TreeView", "Upload", "Window", "Wizard"],
  tags: ["commercial", "data-grid"],
  featured: false,
  sponsored: false,
  company: "Telerik",
  license: "Commercial",
};

export default kendoUi;
