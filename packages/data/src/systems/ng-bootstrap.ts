import type { ComponentSystem } from "../schema";

const ngBootstrap: ComponentSystem = {
  slug: "ng-bootstrap",
  name: "NG Bootstrap",
  url: "https://ng-bootstrap.github.io/",
  github: "https://github.com/ng-bootstrap/ng-bootstrap",
  description:
    "Native Angular widgets built from the ground up using Bootstrap CSS, requiring no jQuery or Bootstrap JavaScript dependencies.",
  frameworks: ["angular"],
  styling: ["bootstrap"],
  category: ["general"],
  maturity: "active",
  components: [
    "Accordion",
    "Alert",
    "Carousel",
    "Collapse",
    "Datepicker",
    "Dropdown",
    "Modal",
    "Nav",
    "Offcanvas",
    "Pagination",
    "Popover",
    "Progressbar",
    "Rating",
    "Scrollspy",
    "Table",
    "Timepicker",
    "Toast",
    "Tooltip",
    "Typeahead",
  ],
  tags: ["angular", "bootstrap", "widgets"],
  featured: false,
  sponsored: false,
};

export default ngBootstrap;
