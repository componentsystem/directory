import type { ComponentSystemSource } from "../schema";
const restyle: ComponentSystemSource = {
    slug: "restyle",
    name: "Restyle",
    url: "https://github.com/Shopify/restyle",
    logo: "/logos/component-systems/restyle.svg",
    latestVersion: "unknown",
    github: "https://github.com/Shopify/restyle",
    description: "A type-enforced system for building UI components in React Native with TypeScript, developed by Shopify, using design tokens for consistent theming.",
    frameworks: ["native"],
    styling: ["design-tokens"],
    category: ["mobile", "primitives"],
    maturity: "active",
    components: [
        {
            name: "Box",
            description: "A Box component provided by Restyle.",
            link: "https://github.com/Shopify/restyle"
        },
        {
            name: "Text",
            description: "A Text component provided by Restyle.",
            link: "https://github.com/Shopify/restyle"
        },
        {
            name: "ThemeProvider",
            description: "A ThemeProvider component provided by Restyle.",
            link: "https://github.com/Shopify/restyle"
        },
        {
            name: "createRestyleComponent",
            description: "A createRestyleComponent component provided by Restyle.",
            link: "https://github.com/Shopify/restyle"
        },
        {
            name: "createVariant",
            description: "A createVariant component provided by Restyle.",
            link: "https://github.com/Shopify/restyle"
        }
    ],
    tags: ["react-native", "design-tokens", "theming", "typescript"],
    featured: false,
    sponsored: false,
    company: "Shopify"
};
export default restyle;

