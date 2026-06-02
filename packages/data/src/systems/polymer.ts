import type { ComponentSystemSource } from "../schema";
const polymer: ComponentSystemSource = {
    slug: "polymer",
    name: "Polymer",
    url: "https://www.polymer-project.org/",
    logo: "/logos/component-systems/polymer.png",
    latestVersion: "unknown",
    github: "https://github.com/polymer/polymer",
    description: "A pioneering web components library by Google that helped shape the web components standard. Now deprecated in favor of Lit.",
    frameworks: ["web-components"],
    styling: ["vanilla-css"],
    category: ["general"],
    maturity: "deprecated",
    components: [
        {
            name: "LitElement",
            description: "A LitElement component provided by Polymer.",
            link: "https://www.polymer-project.org/"
        },
        {
            name: "PolymerElement",
            description: "A PolymerElement component provided by Polymer.",
            link: "https://www.polymer-project.org/"
        },
        {
            name: "html",
            description: "A html component provided by Polymer.",
            link: "https://www.polymer-project.org/"
        },
        {
            name: "css",
            description: "A css component provided by Polymer.",
            link: "https://www.polymer-project.org/"
        }
    ],
    tags: ["google", "web-components", "legacy"],
    featured: false,
    sponsored: false
};
export default polymer;

