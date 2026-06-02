import type { ComponentSystemSource } from "../schema";
const stitches: ComponentSystemSource = {
    slug: "stitch-es",
    name: "Stitches",
    url: "https://stitches.dev/",
    logo: "/logos/component-systems/stitch-es.jpg",
    latestVersion: "unknown",
    github: "https://github.com/stitchesjs/stitches",
    description: "A CSS-in-JS library with near-zero runtime, offering a best-in-class developer experience with variants, theming, and SSR support. No longer maintained.",
    frameworks: ["react"],
    styling: ["css-in-js"],
    category: ["primitives"],
    maturity: "deprecated",
    components: [
        {
            name: "styled",
            description: "A styled component provided by Stitches.",
            link: "https://stitches.dev/"
        },
        {
            name: "css",
            description: "A css component provided by Stitches.",
            link: "https://stitches.dev/"
        },
        {
            name: "globalCss",
            description: "A globalCss component provided by Stitches.",
            link: "https://stitches.dev/"
        },
        {
            name: "keyframes",
            description: "A keyframes component provided by Stitches.",
            link: "https://stitches.dev/"
        },
        {
            name: "theme",
            description: "A theme component provided by Stitches.",
            link: "https://stitches.dev/"
        },
        {
            name: "createTheme",
            description: "A createTheme component provided by Stitches.",
            link: "https://stitches.dev/"
        }
    ],
    tags: ["css-in-js", "variants", "theming", "ssr"],
    featured: false,
    sponsored: false
};
export default stitches;

