import type { ComponentSystemSource } from "../schema";
const reactSelect: ComponentSystemSource = {
    slug: "react-select",
    name: "React Select",
    url: "https://react-select.com/home",
    logo: "/logos/component-systems/react-select.jpg",
    latestVersion: "unknown",
    github: "https://github.com/JedWatson/react-select",
    description: "A flexible and feature-rich select input component for React, supporting multi-select, async loading, creatable options, and extensive customization.",
    frameworks: ["react"],
    styling: [],
    category: ["forms"],
    maturity: "stable",
    components: [
        {
            name: "Select",
            description: "A Select component provided by React Select.",
            link: "https://react-select.com/home"
        },
        {
            name: "AsyncSelect",
            description: "A AsyncSelect component provided by React Select.",
            link: "https://react-select.com/home"
        },
        {
            name: "CreatableSelect",
            description: "A CreatableSelect component provided by React Select.",
            link: "https://react-select.com/home"
        },
        {
            name: "AsyncCreatableSelect",
            description: "A AsyncCreatableSelect component provided by React Select.",
            link: "https://react-select.com/home"
        }
    ],
    tags: ["select", "dropdown", "form-control"],
    featured: false,
    sponsored: false
};
export default reactSelect;

