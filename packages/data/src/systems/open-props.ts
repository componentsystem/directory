import type { ComponentSystemSource } from "../schema";
const openProps: ComponentSystemSource = {
    slug: "open-props",
    name: "Open Props",
    url: "https://open-props.style/",
    logo: "/logos/component-systems/open-props.png",
    latestVersion: "unknown",
    github: "https://github.com/argyleink/open-props",
    description: "A collection of supercharged CSS custom properties that provide Tailwind-like utility values as design tokens for any framework or vanilla CSS.",
    frameworks: ["html"],
    styling: ["design-tokens", "vanilla-css"],
    category: ["general", "primitives"],
    maturity: "active",
    components: [
        {
            name: "CSS Custom Properties",
            description: "A CSS Custom Properties component provided by Open Props.",
            link: "https://open-props.style/"
        }
    ],
    tags: ["css-custom-properties", "design-tokens", "framework-agnostic"],
    featured: false,
    sponsored: false
};
export default openProps;

