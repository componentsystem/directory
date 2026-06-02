import type { ComponentSystemSource } from "../schema";
const lit: ComponentSystemSource = {
    slug: "lit",
    name: "Lit",
    url: "https://lit.dev/",
    logo: "/logos/component-systems/lit.svg",
    latestVersion: "unknown",
    github: "https://github.com/lit/lit/",
    description: "A simple library for building fast, lightweight web components with declarative templates and reactive properties.",
    frameworks: ["web-components"],
    styling: [],
    category: ["general"],
    maturity: "stable",
    components: [
        {
            name: "LitElement",
            description: "A LitElement component provided by Lit.",
            link: "https://lit.dev/"
        },
        {
            name: "html",
            description: "A html component provided by Lit.",
            link: "https://lit.dev/"
        },
        {
            name: "css",
            description: "A css component provided by Lit.",
            link: "https://lit.dev/"
        },
        {
            name: "ReactiveElement",
            description: "A ReactiveElement component provided by Lit.",
            link: "https://lit.dev/"
        },
        {
            name: "nothing",
            description: "A nothing component provided by Lit.",
            link: "https://lit.dev/"
        },
        {
            name: "noChange",
            description: "A noChange component provided by Lit.",
            link: "https://lit.dev/"
        }
    ],
    tags: ["web-standards", "lightweight"],
    featured: false,
    sponsored: false
};
export default lit;

