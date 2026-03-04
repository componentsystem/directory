import type { ComponentSystem } from "../schema";

const nativewind: ComponentSystem = {
  slug: "nativewind",
  name: "NativeWind",
  url: "https://www.nativewind.dev",
  github: "https://github.com/marklawlor/nativewind",
  description:
    "A utility-first styling system for React Native that brings Tailwind CSS to mobile development, enabling familiar class-based styling for native apps.",
  frameworks: ["react"],
  styling: ["tailwind"],
  category: ["general", "mobile"],
  maturity: "active",
  components: ["styled", "StyledComponent", "useColorScheme"],
  tags: ["react-native", "tailwind", "mobile", "styling"],
  featured: false,
  sponsored: false,
};

export default nativewind;
