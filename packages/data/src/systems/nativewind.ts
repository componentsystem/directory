import type { ComponentSystemSource } from "../schema";
const nativewind: ComponentSystemSource = {
    slug: "nativewind",
    name: "NativeWind",
    url: "https://www.nativewind.dev",
    logo: "/logos/component-systems/nativewind.jpg",
    latestVersion: "unknown",
    github: "https://github.com/marklawlor/nativewind",
    description: "A utility-first styling system for React Native that brings Tailwind CSS to mobile development, enabling familiar class-based styling for native apps.",
    frameworks: ["react"],
    styling: ["tailwind"],
    category: ["general", "mobile"],
    maturity: "active",
    components: [
        {
            name: "styled",
            description: "A styled component provided by NativeWind.",
            link: "https://www.nativewind.dev"
        },
        {
            name: "StyledComponent",
            description: "A StyledComponent component provided by NativeWind.",
            link: "https://www.nativewind.dev"
        },
        {
            name: "useColorScheme",
            description: "A useColorScheme component provided by NativeWind.",
            link: "https://www.nativewind.dev"
        }
    ],
    tags: ["react-native", "tailwind", "mobile", "styling"],
    featured: false,
    sponsored: false
};
export default nativewind;

