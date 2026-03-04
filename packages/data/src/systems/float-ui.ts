import type { ComponentSystem } from "../schema";

const floatUi: ComponentSystem = {
  slug: "float-ui",
  name: "Float UI",
  url: "https://floatui.com/",
  github: "https://github.com/MarsX-dev/floatui",
  description:
    "A free, open-source collection of modern UI components and website templates built with Tailwind CSS, providing ready-to-use sections for landing pages.",
  frameworks: ["react", "vue", "svelte", "html"],
  styling: ["tailwind"],
  category: ["general"],
  maturity: "active",
  components: [
    "Hero",
    "Feature",
    "CTA",
    "Pricing",
    "Testimonial",
    "FAQ",
    "Footer",
    "Navbar",
    "Stats",
    "Newsletter",
    "Logo Cloud",
    "Team",
    "Contact",
    "Blog",
    "Banner",
    "404",
  ],
  tags: ["free", "templates", "landing-page", "copy-paste"],
  featured: false,
  sponsored: false,
};

export default floatUi;
