import type { ComponentSystemSource } from "../schema";
const headlessUi: ComponentSystemSource = {
    slug: "headless-ui",
    name: "Headless UI",
    url: "https://headlessui.com/",
    logo: "/logos/component-systems/headless-ui.svg",
    latestVersion: "unknown",
    github: "https://github.com/tailwindlabs/headlessui",
    description: "Completely unstyled, fully accessible UI components for React and Vue, designed to integrate seamlessly with Tailwind CSS.",
    frameworks: ["react", "vue"],
    styling: ["headless"],
    category: ["primitives"],
    maturity: "stable",
    components: [
        {
            name: "Combobox",
            description: "A Combobox component provided by Headless UI.",
            link: "https://headlessui.com/react/combobox"
        },
        {
            name: "Dialog",
            description: "A Dialog component provided by Headless UI.",
            link: "https://headlessui.com/react/dialog"
        },
        {
            name: "Disclosure",
            description: "A Disclosure component provided by Headless UI.",
            link: "https://headlessui.com/react/disclosure"
        },
        {
            name: "Listbox",
            description: "A Listbox component provided by Headless UI.",
            link: "https://headlessui.com/react/listbox"
        },
        {
            name: "Menu",
            description: "A Menu component provided by Headless UI.",
            link: "https://headlessui.com/react/menu"
        },
        {
            name: "Popover",
            description: "A Popover component provided by Headless UI.",
            link: "https://headlessui.com/react/popover"
        },
        {
            name: "RadioGroup",
            description: "A RadioGroup component provided by Headless UI.",
            link: "https://headlessui.com/react/radio-group"
        },
        {
            name: "Switch",
            description: "A Switch component provided by Headless UI.",
            link: "https://headlessui.com/react/switch"
        },
        {
            name: "Tabs",
            description: "A Tabs component provided by Headless UI.",
            link: "https://headlessui.com/react/tabs"
        },
        {
            name: "Transition",
            description: "A Transition component provided by Headless UI.",
            link: "https://headlessui.com/react/transition"
        }
    ],
    tags: ["accessible", "tailwind"],
    featured: false,
    sponsored: false,
    company: "Tailwind Labs"
};
export default headlessUi;

