import type { ComponentSystem } from "../schema";

const hackclubTheme: ComponentSystem = {
  slug: "hackclub-theme",
  name: "Hack Club Theme",
  url: "https://theme.hackclub.com",
  github: "https://github.com/hackclub/theme",
  description:
    "A Theme UI-based design theme for Hack Club providing consistent colors, typography, and styling primitives across projects.",
  frameworks: ["react"],
  styling: ["css-in-js"],
  category: ["design-system"],
  maturity: "active",
  components: ["Avatar", "Badge", "Banner", "Box", "Button", "Card", "Container", "Flex", "Grid", "Heading", "Icon", "Image", "Input", "Label", "Link", "Select", "Text", "Textarea", "Theme"],
  tags: ["theme-ui"],
  featured: false,
  sponsored: false,
  company: "Hack Club",
};

export default hackclubTheme;
