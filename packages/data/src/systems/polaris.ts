import type { ComponentSystem } from "../schema";

const polaris: ComponentSystem = {
  slug: "polaris",
  name: "Polaris",
  url: "https://polaris.shopify.com/components",
  github: "https://github.com/Shopify/polaris",
  description:
    "Shopify's design system and React component library for building consistent, accessible admin interfaces and merchant-facing experiences.",
  frameworks: ["react"],
  styling: ["design-tokens", "css-modules"],
  category: ["design-system", "enterprise"],
  maturity: "stable",
  components: ["AccountConnection", "ActionList", "AppProvider", "Autocomplete", "Avatar", "Badge", "Banner", "Bleed", "BlockStack", "Box", "Button", "ButtonGroup", "CalloutCard", "Card", "Checkbox", "ChoiceList", "Collapsible", "ColorPicker", "Combobox", "ContextualSaveBar", "DataTable", "DatePicker", "DescriptionList", "Divider", "DropZone", "EmptyState", "ExceptionList", "Filters", "FooterHelp", "Form", "FormLayout", "Frame", "FullscreenBar", "Grid", "Icon", "IndexFilters", "IndexTable", "InlineCode", "InlineGrid", "InlineStack", "Kbd", "KeyboardKey", "Label", "Layout", "LegacyCard", "LegacyFilters", "LegacyStack", "LegacyTabs", "Link", "List", "Listbox", "Loading", "MediaCard", "Modal", "Navigation", "OptionList", "Page", "PageActions", "Pagination", "Popover", "ProgressBar", "RadioButton", "RangeSlider", "ResourceItem", "ResourceList", "ScrollContainer", "Scrollable", "Select", "SettingToggle", "SkeletonBodyText", "SkeletonDisplayText", "SkeletonPage", "SkeletonTabs", "SkeletonThumbnail", "Spinner", "Sticky", "Tabs", "Tag", "Text", "TextField", "Thumbnail", "Toast", "Tooltip", "TopBar", "VideoThumbnail"],
  tags: ["shopify", "admin", "e-commerce"],
  featured: false,
  sponsored: false,
  company: "Shopify",
};

export default polaris;
