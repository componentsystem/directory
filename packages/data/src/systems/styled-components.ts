import type { ComponentSystemSource } from "../schema";
const styledComponents: ComponentSystemSource = {
    slug: "styled-components",
    name: "Styled Components",
    url: "https://styled-components.com/",
    logo: "/logos/component-systems/styled-components.svg",
    latestVersion: "unknown",
    github: "https://github.com/styled-components/styled-components",
    description: "A CSS-in-JS styling library for React that uses tagged template literals, allowing you to write actual CSS code to style components with automatic scoping.",
    frameworks: ["react"],
    styling: ["css-in-js"],
    category: ["primitives"],
    maturity: "stable",
    components: [
        {
            name: "styled",
            description: "A styled component provided by Styled Components.",
            link: "https://styled-components.com/"
        },
        {
            name: "css",
            description: "A css component provided by Styled Components.",
            link: "https://styled-components.com/"
        },
        {
            name: "keyframes",
            description: "A keyframes component provided by Styled Components.",
            link: "https://styled-components.com/"
        },
        {
            name: "createGlobalStyle",
            description: "A createGlobalStyle component provided by Styled Components.",
            link: "https://styled-components.com/"
        },
        {
            name: "ThemeProvider",
            description: "A ThemeProvider component provided by Styled Components.",
            link: "https://styled-components.com/"
        },
        {
            name: "ServerStyleSheet",
            description: "A ServerStyleSheet component provided by Styled Components.",
            link: "https://styled-components.com/"
        }
    ],
    tags: ["css-in-js", "tagged-templates", "styling"],
    featured: false,
    sponsored: false
};
export default styledComponents;

