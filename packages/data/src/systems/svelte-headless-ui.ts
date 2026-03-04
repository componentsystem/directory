import type { ComponentSystem } from "../schema";

const svelteHeadlessUi: ComponentSystem = {
  slug: "svelte-headless-ui",
  name: "Svelte Headless UI",
  url: "https://svelte-headlessui.goss.io/",
  github: "https://github.com/rgossiaux/svelte-headlessui",
  description:
    "An unofficial Svelte port of Headless UI, providing completely unstyled and accessible UI components designed to integrate with Tailwind CSS.",
  frameworks: ["svelte"],
  styling: ["headless"],
  category: ["general"],
  maturity: "active",
  components: ["Combobox", "Dialog", "Disclosure", "Listbox", "Menu", "Popover", "RadioGroup", "Switch", "Tabs", "Transition"],
  tags: ["headless-ui", "accessible", "unstyled"],
  featured: false,
  sponsored: false,
};

export default svelteHeadlessUi;
