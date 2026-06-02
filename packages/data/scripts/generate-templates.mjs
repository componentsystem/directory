import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(new URL("../../..", import.meta.url).pathname);
const dataFile = resolve(root, "packages/data/src/templates.ts");
const previewDir = resolve(root, "apps/web/public/templates");

const sources = {
  "Tailwind Plus": {
    sourceUrl: "https://tailwindcss.com/plus/templates",
    tools: ["Tailwind CSS", "React", "Next.js"],
    priceType: "paid",
    priceText: "$99 or Tailwind Plus",
  },
  Webflow: {
    sourceUrl: "https://webflow.com/templates",
    tools: ["Webflow"],
    priceType: "paid",
    priceText: "Paid templates",
  },
  "Figma Community": {
    sourceUrl: "https://www.figma.com/community/website-templates",
    tools: ["Figma"],
    priceType: "free",
    priceText: "Free community files",
  },
};

const entries = [
  { slug: "tailwind-plus-oatmeal", name: "Oatmeal", description: "Elegant SaaS marketing kit built with Tailwind CSS, React, Next.js, and Tailwind Plus Elements.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/kits/oatmeal", categories: ["saas-landing", "startup"], featured: true },
  { slug: "tailwind-plus-spotlight", name: "Spotlight", description: "Personal website template from Tailwind Plus for publishing a polished profile, writing, and work.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/spotlight", categories: ["personal", "portfolio"] },
  { slug: "tailwind-plus-radiant", name: "Radiant", description: "Multi-page SaaS marketing website template for product positioning, features, and conversion.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/radiant", categories: ["saas-landing", "startup"], featured: true },
  { slug: "tailwind-plus-compass", name: "Compass", description: "Clean course template for publishing online courses, lessons, and learning content.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/compass", categories: ["education"] },
  { slug: "tailwind-plus-salient", name: "Salient", description: "SaaS landing page template designed to announce and sell a new product idea.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/salient", categories: ["saas-landing", "startup"] },
  { slug: "tailwind-plus-studio", name: "Studio", description: "Agency template for showcasing work, explaining services, and winning new clients.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/studio", categories: ["agency", "portfolio"] },
  { slug: "tailwind-plus-primer", name: "Primer", description: "Info product landing page template for courses, ebooks, launches, and paid education products.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/primer", categories: ["education", "saas-landing"] },
  { slug: "tailwind-plus-protocol", name: "Protocol", description: "API reference template for developer products, guides, docs, and technical reference content.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/protocol", categories: ["documentation"] },
  { slug: "tailwind-plus-commit", name: "Commit", description: "Changelog template for sharing product updates, release notes, and work in progress.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/commit", categories: ["documentation", "blog"] },
  { slug: "tailwind-plus-transmit", name: "Transmit", description: "Podcast website template for episodes, show notes, hosts, and subscription calls to action.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/transmit", categories: ["blog", "marketing"] },
  { slug: "tailwind-plus-pocket", name: "Pocket", description: "App marketing template for mobile app launches, features, pricing, and download prompts.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/pocket", categories: ["marketing", "startup"] },
  { slug: "tailwind-plus-syntax", name: "Syntax", description: "Documentation template for educating users with structured guides and reference content.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/syntax", categories: ["documentation"] },
  { slug: "tailwind-plus-keynote", name: "Keynote", description: "Conference template for speakers, schedules, tickets, venue details, and event launches.", sourceName: "Tailwind Plus", url: "https://tailwindcss.com/plus/templates/keynote", categories: ["events"] },
  { slug: "webflow-dwellis", name: "Dwellis", description: "Property portfolio and real estate agency Webflow template with listings, floor plans, CMS, and Figma file.", sourceName: "Webflow", url: "https://webflow.com/templates/html/dwellis-website-template", categories: ["real-estate"], featured: true },
  { slug: "webflow-the-citadel", name: "The Citadel", description: "Real estate Webflow template for agencies, property managers, rental services, and single-property listings.", sourceName: "Webflow", url: "https://webflow.com/templates/html/the-citadel-real-estate-website-template", categories: ["real-estate"] },
  { slug: "webflow-key-estates", name: "Key Estates", description: "Real estate sales and rentals template with listing pages, valuation content, blog, and contact flows.", sourceName: "Webflow", url: "https://webflow.com/templates/html/keyestates-real-estate-website-template", categories: ["real-estate"] },
  { slug: "webflow-saasflow", name: "SaasFlow", description: "Clean SaaS product Webflow template with features, integrations, pricing, blog, login, and signup pages.", sourceName: "Webflow", url: "https://webflow.com/templates/html/saasflow-software-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-regular", name: "Regular", description: "Minimal agency and freelancer Webflow template with CMS work, services, team, journal, and contact pages.", sourceName: "Webflow", url: "https://webflow.com/templates/html/regular-agency-website-template", categories: ["agency", "portfolio"] },
  { slug: "webflow-static", name: "Static", description: "Typography-driven portfolio Webflow template for visual designers, projects, and CMS case studies.", sourceName: "Webflow", url: "https://webflow.com/templates/html/static-portfolio-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-saaas", name: "Saaas", description: "Dark SaaS landing page template for presenting software products with polished interactions.", sourceName: "Webflow", url: "https://webflow.com/templates/html/saaas-saas-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-infinite", name: "Infinite", description: "Creative agency Webflow template for services, portfolio work, teams, and digital studio positioning.", sourceName: "Webflow", url: "https://webflow.com/templates/html/infinite-agency-website-template", categories: ["agency", "portfolio"] },
  { slug: "webflow-powerful-ecommerce", name: "Powerful Ecommerce", description: "Conversion-oriented Webflow startup and ecommerce template with a large set of reusable site sections.", sourceName: "Webflow", url: "https://webflow.com/templates/html/powerful-ecommerce-saas-website-template", categories: ["ecommerce", "startup"] },
  { slug: "webflow-simply", name: "Simply", description: "Minimal furniture and home decor Webflow Ecommerce template for timeless product storefronts.", sourceName: "Webflow", url: "https://webflow.com/templates/html/simply-retail-website-template", categories: ["ecommerce"] },
  { slug: "webflow-fullstack", name: "FullStack", description: "Dark Webflow template for AI SaaS startups, developer tools, and fullstack software platforms.", sourceName: "Webflow", url: "https://webflow.com/templates/html/fullstack-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-ecommerce-128", name: "Ecommerce 128", description: "Professional Webflow ecommerce template for shops, product catalogs, fashion, gifts, and online stores.", sourceName: "Webflow", url: "https://webflow.com/templates/html/ecommerce-128-shop-website-template", categories: ["ecommerce"] },
  { slug: "webflow-perfectly", name: "Perfectly", description: "Digital agency Webflow template for creatives, social media teams, and service businesses.", sourceName: "Webflow", url: "https://webflow.com/templates/html/perfectly-agency-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-charitable", name: "Charitable", description: "Nonprofit Webflow template for charities, foundations, NGOs, donation pages, and impact storytelling.", sourceName: "Webflow", url: "https://templates.webflow.com/html/charitable-website-template", categories: ["nonprofit"] },
  { slug: "webflow-thengo", name: "TheNGO", description: "Minimal nonprofit, NGO, fundraising, and charity Webflow template with CMS content structures.", sourceName: "Webflow", url: "https://webflow.com/templates/html/thengo-website-template", categories: ["nonprofit"] },
  { slug: "webflow-riseup", name: "Riseup", description: "Charity Webflow UI kit template for fundraising campaigns, NGOs, churches, and community projects.", sourceName: "Webflow", url: "https://webflow.com/templates/html/riseup-charity-website-template", categories: ["nonprofit", "events"] },
  { slug: "webflow-moral", name: "Moral", description: "Charity and fundraiser Webflow template with events, volunteer pages, donations, and news content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/moral-charity-website-template", categories: ["nonprofit", "events"] },
  { slug: "webflow-neighborly", name: "Neighborly", description: "Community and nonprofit Webflow template for donation campaigns, social programs, and volunteers.", sourceName: "Webflow", url: "https://webflow.com/templates/html/neighborly-website-template", categories: ["nonprofit", "events"] },
  { slug: "webflow-humo", name: "Humo", description: "Clean nonprofit and social impact Webflow template for charity, fundraising, and humanitarian sites.", sourceName: "Webflow", url: "https://webflow.com/templates/html/humo-website-template", categories: ["nonprofit"] },
  { slug: "webflow-hungry", name: "Hungry", description: "Restaurant Webflow template for food and drink businesses with polished interactions and menu content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/hungry-restaurant-website-template", categories: ["restaurant"] },
  { slug: "webflow-e-lab", name: "E-Lab", description: "Education and e-learning Webflow template for online courses, educators, coaches, and training companies.", sourceName: "Webflow", url: "https://webflow.com/templates/html/e-lab-website-template", categories: ["education"] },
  { slug: "webflow-flavorful", name: "Flavorful", description: "Restaurant Webflow template with menu, location, hours, blog CMS, forms, interactions, and responsive design.", sourceName: "Webflow", url: "https://webflow.com/templates/html/flavorful-restaurant-website-template", categories: ["restaurant"] },
  { slug: "webflow-forkly", name: "Forkly", description: "Restaurant and food ecommerce Webflow template for restaurants, cafes, bakeries, and food brands.", sourceName: "Webflow", url: "https://webflow.com/templates/html/forkly-website-template", categories: ["restaurant", "ecommerce"] },
  { slug: "webflow-fun1up", name: "Fun1Up", description: "Nonprofit charity and donation Webflow template for campaigns, volunteers, NGOs, and fundraising.", sourceName: "Webflow", url: "https://webflow.com/templates/html/fun1up-charity-website-template", categories: ["nonprofit"] },
  { slug: "webflow-mouly", name: "Mouly", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/mouly-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-large", name: "Large", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/large-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-focuslab", name: "Focuslab", description: "A SaaS HTML5 responsive website template for your SaaS website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/focuslab-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-crispo", name: "Crispo", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/crispo-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-superneon", name: "Superneon", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/superneon-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-syncc-eco", name: "Syncc", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/syncc-eco-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-logicforge", name: "LogicForge", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/logicforge-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-axiolance", name: "Axiolance", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/axiolance-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-codegent", name: "CodeGent", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/codegent-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-alterx", name: "Alterx", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/alterx-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-trailbase", name: "Trailbase", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/trailbase-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-synthesia-pro", name: "Synthesia Pro", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/synthesia-pro-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-mello-template", name: "Mello Template", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/mello-template-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-dark-co", name: "Dark co", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/dark-co-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-sirene", name: "Sirene", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/sirene-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-neurocall", name: "Neurocall", description: "A Technology HTML5 responsive website template for your Technology website. Customize it with Webflow's web design tools and connect it to a CMS.", sourceName: "Webflow", url: "https://webflow.com/templates/html/neurocall-website-template", categories: ["saas-landing", "startup"] },
  { slug: "webflow-karo", name: "Karo", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/karo-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-vixcra", name: "Vixcra", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/vixcra-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-wondr", name: "Wondr", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/wondr-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-flore", name: "Floree", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/flore-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-lunox", name: "Lunox", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/lunox-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-axgen", name: "Axgen", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/axgen-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-diroz", name: "Diroz", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/diroz-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-novasite", name: "Novasite", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/novasite-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-lyzen", name: "Lyzen", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/lyzen-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-studionf", name: "StudioNF", description: "An agency HTML5 responsive website template for creative portfolios, studio pages, and client-facing service launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/studionf-website-template", categories: ["portfolio", "personal"] },
  { slug: "webflow-hayden", name: "Hayden", description: "A portfolio HTML5 responsive website template for personal work, visual projects, and case study presentation.", sourceName: "Webflow", url: "https://webflow.com/templates/html/hayden-website-template-9cb5f", categories: ["portfolio", "personal"] },
  { slug: "webflow-rellinked", name: "Relinked", description: "A blog HTML5 responsive website template for publishing articles, newsletters, updates, and editorial content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/rellinked-website-template", categories: ["blog"] },
  { slug: "webflow-provision", name: "Provision", description: "A blog-friendly Webflow template for agencies and founders publishing updates, stories, and long-form content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/provision-website-template", categories: ["blog"] },
  { slug: "webflow-finox", name: "Finox", description: "A blog-friendly Webflow template for agencies and founders publishing updates, stories, and long-form content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/finox-website-template", categories: ["blog"] },
  { slug: "webflow-james-parker", name: "James Parker", description: "A blog-friendly Webflow template for personal publishing, creator profiles, and long-form writing.", sourceName: "Webflow", url: "https://webflow.com/templates/html/james-parker-website-template", categories: ["blog"] },
  { slug: "webflow-richardj", name: "Richard.J", description: "A portfolio and blog Webflow template for writing, projects, and personal brand pages.", sourceName: "Webflow", url: "https://webflow.com/templates/html/richardj-website-template", categories: ["blog"] },
  { slug: "webflow-nathan-miller", name: "Nathan Miller", description: "A blog-friendly Webflow template for personal publishing, creator profiles, and long-form writing.", sourceName: "Webflow", url: "https://webflow.com/templates/html/nathan-miller-website-template", categories: ["blog"] },
  { slug: "webflow-droid", name: "Droid", description: "A blog-friendly Webflow template for agencies and founders publishing updates, stories, and long-form content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/droid-website-template", categories: ["blog"] },
  { slug: "webflow-nuvilon", name: "Nuvilon", description: "A blog HTML5 responsive website template for publishing articles, newsletters, updates, and editorial content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/nuvilon-website-template", categories: ["blog"] },
  { slug: "webflow-sidenote", name: "Sidenote", description: "A personal blog Webflow template for writing, essays, updates, and lightweight publishing.", sourceName: "Webflow", url: "https://webflow.com/templates/html/sidenote-website-template", categories: ["blog"] },
  { slug: "webflow-ceilor", name: "Ceilor", description: "A blog-friendly Webflow template for agencies and founders publishing updates, stories, and long-form content.", sourceName: "Webflow", url: "https://webflow.com/templates/html/ceilor-website-template", categories: ["blog"] },
  { slug: "webflow-reflux", name: "Reflux", description: "An agency Webflow template for marketing teams, digital studios, service pages, and project-led sales funnels.", sourceName: "Webflow", url: "https://webflow.com/templates/html/reflux-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-echooks-studio", name: "Echook's Studio", description: "A business Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/echooks-studio-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-avynor", name: "Avynor", description: "An agency Webflow template for marketing teams, digital studios, service pages, and project-led sales funnels.", sourceName: "Webflow", url: "https://webflow.com/templates/html/avynor-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-ageenzi", name: "Ageenzi", description: "A technology Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/ageenzi-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-febos", name: "Febos", description: "A personal Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/febos-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-stuxen", name: "Stuxen", description: "A business Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/stuxen-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-lunvoro", name: "Lunvoro", description: "A technology Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/lunvoro-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-adstik", name: "Adstik", description: "A business Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/adstik-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-pixelrich", name: "PixelRich", description: "A business Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/pixelrich-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-digimarr", name: "Digimarr", description: "A business Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/digimarr-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-fractal", name: "Fractal", description: "A technology Webflow template for agency positioning, service pages, contact flows, and customer acquisition.", sourceName: "Webflow", url: "https://webflow.com/templates/html/fractal-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-mio-kain", name: "Mio Kain", description: "An agency Webflow template for marketing teams, digital studios, service pages, and project-led sales funnels.", sourceName: "Webflow", url: "https://webflow.com/templates/html/mio-kain-website-template", categories: ["agency", "marketing"] },
  { slug: "webflow-skytune", name: "Skytune", description: "A technology Webflow template suitable for finance, SaaS, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/skytune-website-template", categories: ["finance"] },
  { slug: "webflow-colonia", name: "Colonia", description: "A technology Webflow template suitable for finance, SaaS, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/colonia-website-template", categories: ["finance"] },
  { slug: "webflow-neurom", name: "Neurom", description: "A technology Webflow template suitable for finance, SaaS, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/neurom-website-template", categories: ["finance"] },
  { slug: "webflow-moneywises", name: "Moneywises", description: "A technology Webflow template suitable for finance, SaaS, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/moneywises-website-template", categories: ["finance"] },
  { slug: "webflow-layrinth", name: "Layrinth", description: "A technology Webflow template suitable for finance, SaaS, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/layrinth-website-template", categories: ["finance"] },
  { slug: "webflow-brava", name: "Brava", description: "A technology Webflow template suitable for finance, SaaS, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/brava-website-template", categories: ["finance"] },
  { slug: "webflow-fussion", name: "Fussion", description: "A technology Webflow template suitable for finance, SaaS, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/fussion-website-template", categories: ["finance"] },
  { slug: "webflow-alenai", name: "Alenai", description: "A SaaS Webflow template suitable for finance, analytics, and professional services launches.", sourceName: "Webflow", url: "https://webflow.com/templates/html/alenai-website-template", categories: ["finance"] },
  { slug: "figma-website-landing-page-design", name: "Website landing page design", description: "Responsive clean and modern landing page design from Figma's landing page template gallery.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1222060007934600841", categories: ["saas-landing", "marketing"] },
  { slug: "figma-50-landing-page-designs", name: "50+ landing page designs", description: "Community landing page design set with multiple customizable landing page styles.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1127302394641561751", categories: ["saas-landing", "marketing"] },
  { slug: "figma-landing-page-design-kit", name: "Landing page design kit", description: "Landing page kit from Figma's template gallery with reusable styles and components.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1222100666260862670", categories: ["saas-landing"] },
  { slug: "figma-agency-landing-page-design", name: "Agency landing page design", description: "Digital agency web design kit from Figma's landing page inspiration gallery.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1058767686059595687", categories: ["agency", "marketing"] },
  { slug: "figma-landing-page-builder-kit", name: "Landing page design builder kit", description: "Landing page builder kit with reusable blocks, dark mode, and white mode options.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1056210636141319486", categories: ["saas-landing", "marketing"] },
  { slug: "figma-travel-landing-page-design", name: "Travel landing page design", description: "Figma community landing page UI design for travel and destination websites.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1243486162245593034", categories: ["marketing", "events"] },
  { slug: "figma-brutalist-agency-landing-page", name: "Brutalist agency landing page", description: "Brutalist-style agency landing page design from Figma's landing page templates.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1230604708032389430", categories: ["agency", "portfolio"] },
  { slug: "figma-dashboards-ui-kit", name: "Dashboards UI kit", description: "Dashboard UI kit with widgets, statistics, styles, and reusable symbols.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1135477961222225742/dashboards-ui-kit/", categories: ["dashboard"] },
  { slug: "figma-purity-ui-dashboard", name: "Purity UI dashboard", description: "Trendy dashboard UI with additional sign-in and profile page designs.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1020707462188017225/purity-ui-dashboard-chakra-ui-dashboard/", categories: ["dashboard"] },
  { slug: "figma-vision-ui-dashboard", name: "Vision UI dashboard", description: "Dark mode skeuomorphic dashboard styling with sign-in and profile page concepts.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1060952013207459371/vision-ui-dashboard-react-mui-dashboard-free-version/", categories: ["dashboard"] },
  { slug: "figma-dashboard-layout-ideas", name: "Dashboard layout ideas", description: "Dashboard layout template set with responsive mobile screen ideas.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1208363071768116045/dashboards-layout-ideas/", categories: ["dashboard"] },
  { slug: "figma-simple-dashboard-mockup", name: "Simple dashboard mockup", description: "Minimal dashboard UI mockup with multiple chart styles and clean layout ideas.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1048559673287861086/dashboard/", categories: ["dashboard"] },
  { slug: "figma-saas-selling-dashboard", name: "SaaS selling dashboard", description: "SaaS sales dashboard template for revenue, pipeline, and performance reporting.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1140272887408902677/saas-selling-dashboard-admin-dashboard/", categories: ["dashboard", "saas-landing"] },
  { slug: "figma-power-bi-dashboards", name: "Power BI dashboards", description: "Logistics and finance-specific dashboard kit for analytics and reporting concepts.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1092948514982172510/power-bi-dashboards-atualizado/", categories: ["dashboard", "finance"] },
  { slug: "figma-tennis-dashboard", name: "Tennis dashboard", description: "Illustrative sports dashboard template with stats, rankings, and score surfaces.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/882171933811828307/dashboard-tennis/", categories: ["dashboard"] },
  { slug: "figma-daily-expenses-monitoring-dashboard", name: "Daily expenses monitoring dashboard", description: "Dashboard exploration for monitoring daily expenses and personal financial activity.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/977500202909795677/dashboard/", categories: ["dashboard", "finance"] },
  { slug: "figma-admin-dashboard-template", name: "Admin dashboard template", description: "Light and dark admin dashboard template with multiple reusable components.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1098131983383434513/horizon-ui-trendiest-open-source-admin-template-dashboard/", categories: ["dashboard"] },
  { slug: "figma-sales-dashboard-design", name: "Sales dashboard design", description: "Sales dashboard design for profits, customers, productivity, and business metrics.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1153320445661469840/sales-dashboard-design/", categories: ["dashboard", "finance"] },
  { slug: "figma-free-crypto-dashboard", name: "Free crypto dashboard", description: "Dark cryptocurrency dashboard template with glowing visual effects and chart-oriented layout.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/885716846179508986/free-crypto-dashboard-recehtok-dark/", categories: ["dashboard", "finance"] },
  { slug: "figma-dashboard-builder", name: "Dashboard builder", description: "Dashboard builder file with small, medium, and large UI kit components.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/993677252775666442/venus-dashboard-builder-2021-free-version/", categories: ["dashboard"] },
  { slug: "figma-analytics-dashboard", name: "Analytics dashboard", description: "Internal company metrics dashboard template for analytics and performance review.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1152266255337829742/analytics-dashboard/", categories: ["dashboard"] },
  { slug: "figma-healthcare-dashboard", name: "Healthcare Dashboard", description: "Healthcare KPI dashboard template for monitoring metrics in a dynamic analytics interface.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1026733583562048041/healthcare-dashboard/", categories: ["dashboard"] },
  { slug: "figma-crm-dashboard-customers-list", name: "CRM dashboard customers list", description: "CRM dashboard design with customer list views and high-level metric components.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1146467298668328949/crm-dashboard-customers-list/", categories: ["dashboard"] },
  { slug: "figma-car-rental-dashboard", name: "Car rental dashboard", description: "Car rental dashboard UI with income, expenses, and live tracking views.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1176998037566975720/car-rental-company-dashboard-ui/", categories: ["dashboard"] },
  { slug: "figma-cryptocurrency-dashboard", name: "Cryptocurrency dashboard", description: "Dark crypto dashboard design with banners, charts, icons, and financial product styling.", sourceName: "Figma Community", url: "https://www.figma.com/community/file/1016909990118023467/cryptocurrency-dashboard-freebie/", categories: ["dashboard", "finance"] },
];

const categoryLabels = {
  agency: "Agency",
  blog: "Blog",
  dashboard: "Dashboard",
  documentation: "Docs",
  ecommerce: "Commerce",
  education: "Education",
  events: "Events",
  finance: "Finance",
  marketplace: "Marketplace",
  marketing: "Marketing",
  nonprofit: "Nonprofit",
  personal: "Personal",
  portfolio: "Portfolio",
  "real-estate": "Real Estate",
  restaurant: "Restaurant",
  "saas-landing": "SaaS",
  startup: "Startup",
};

const palettes = [
  ["#0f172a", "#2563eb", "#f8fafc", "#93c5fd"],
  ["#111827", "#10b981", "#f9fafb", "#a7f3d0"],
  ["#18181b", "#f43f5e", "#fafafa", "#fecdd3"],
  ["#1f2937", "#f59e0b", "#fff7ed", "#fde68a"],
  ["#0f172a", "#8b5cf6", "#f5f3ff", "#ddd6fe"],
  ["#172554", "#06b6d4", "#ecfeff", "#a5f3fc"],
  ["#312e81", "#22c55e", "#f0fdf4", "#bbf7d0"],
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function previewSvg(template, index) {
  const [ink, accent, paper, soft] = palettes[index % palettes.length];
  const category = categoryLabels[template.categories[0]];
  const isDashboard = template.categories.includes("dashboard");
  const isCommerce = template.categories.includes("ecommerce");
  const isBlog = template.categories.includes("blog") || template.categories.includes("documentation");
  const cardRows = isDashboard ? [250, 430, 610] : [300, 470, 640];
  const cards = isDashboard
    ? `<rect x="86" y="238" width="270" height="160" rx="22" fill="${paper}" opacity=".98"/>
       <rect x="386" y="238" width="270" height="160" rx="22" fill="${paper}" opacity=".92"/>
       <rect x="686" y="238" width="270" height="160" rx="22" fill="${paper}" opacity=".86"/>
       <path d="M118 350 C160 286 196 372 240 308 S324 318 338 276" fill="none" stroke="${accent}" stroke-width="14" stroke-linecap="round"/>
       <rect x="118" y="286" width="110" height="18" rx="9" fill="${ink}" opacity=".18"/>
       <rect x="118" y="322" width="160" height="16" rx="8" fill="${ink}" opacity=".12"/>
       <rect x="418" y="286" width="164" height="18" rx="9" fill="${ink}" opacity=".18"/>
       <rect x="418" y="322" width="96" height="46" rx="12" fill="${soft}"/>
       <rect x="718" y="286" width="178" height="18" rx="9" fill="${ink}" opacity=".18"/>
       <rect x="718" y="330" width="206" height="14" rx="7" fill="${ink}" opacity=".11"/>
       <rect x="718" y="360" width="146" height="14" rx="7" fill="${ink}" opacity=".11"/>`
    : isCommerce
      ? `<rect x="88" y="278" width="236" height="270" rx="26" fill="${paper}" opacity=".96"/>
         <rect x="356" y="278" width="236" height="270" rx="26" fill="${paper}" opacity=".9"/>
         <rect x="624" y="278" width="236" height="270" rx="26" fill="${paper}" opacity=".84"/>
         <rect x="122" y="318" width="168" height="128" rx="22" fill="${soft}"/>
         <rect x="390" y="318" width="168" height="128" rx="22" fill="${soft}"/>
         <rect x="658" y="318" width="168" height="128" rx="22" fill="${soft}"/>
         <rect x="122" y="476" width="120" height="18" rx="9" fill="${ink}" opacity=".18"/>
         <rect x="390" y="476" width="120" height="18" rx="9" fill="${ink}" opacity=".18"/>
         <rect x="658" y="476" width="120" height="18" rx="9" fill="${ink}" opacity=".18"/>`
      : isBlog
        ? `<rect x="86" y="270" width="410" height="278" rx="28" fill="${paper}" opacity=".96"/>
           <rect x="536" y="270" width="360" height="72" rx="18" fill="${paper}" opacity=".86"/>
           <rect x="536" y="372" width="360" height="72" rx="18" fill="${paper}" opacity=".8"/>
           <rect x="536" y="474" width="360" height="72" rx="18" fill="${paper}" opacity=".74"/>
           <rect x="126" y="326" width="260" height="24" rx="12" fill="${ink}" opacity=".22"/>
           <rect x="126" y="376" width="310" height="14" rx="7" fill="${ink}" opacity=".12"/>
           <rect x="126" y="408" width="250" height="14" rx="7" fill="${ink}" opacity=".12"/>
           <rect x="126" y="462" width="130" height="44" rx="22" fill="${accent}"/>`
        : `<rect x="86" y="292" width="326" height="260" rx="30" fill="${paper}" opacity=".94"/>
           <rect x="452" y="292" width="326" height="260" rx="30" fill="${paper}" opacity=".82"/>
           <circle cx="250" cy="388" r="74" fill="${soft}"/>
           <rect x="136" y="494" width="228" height="18" rx="9" fill="${ink}" opacity=".14"/>
           <rect x="502" y="340" width="196" height="22" rx="11" fill="${ink}" opacity=".18"/>
           <rect x="502" y="390" width="226" height="14" rx="7" fill="${ink}" opacity=".11"/>
           <rect x="502" y="424" width="164" height="14" rx="7" fill="${ink}" opacity=".11"/>
           <rect x="502" y="476" width="116" height="44" rx="22" fill="${accent}"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="${escapeHtml(template.name)} template preview">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${ink}"/>
      <stop offset=".68" stop-color="${accent}"/>
      <stop offset="1" stop-color="${soft}"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#020617" flood-opacity=".22"/>
    </filter>
  </defs>
  <rect width="1200" height="800" fill="#f8fafc"/>
  <rect x="46" y="46" width="1108" height="708" rx="46" fill="url(#bg)"/>
  <rect x="86" y="86" width="948" height="600" rx="34" fill="#ffffff" opacity=".13" filter="url(#shadow)"/>
  <rect x="86" y="86" width="948" height="70" rx="34" fill="#ffffff" opacity=".9"/>
  <circle cx="128" cy="121" r="10" fill="${accent}" opacity=".8"/>
  <circle cx="160" cy="121" r="10" fill="${ink}" opacity=".22"/>
  <circle cx="192" cy="121" r="10" fill="${ink}" opacity=".14"/>
  <rect x="832" y="106" width="150" height="30" rx="15" fill="${ink}" opacity=".14"/>
  <text x="106" y="222" fill="#fff" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="3">${escapeHtml(category).toUpperCase()}</text>
  <text x="106" y="274" fill="#fff" font-family="Inter, Arial, sans-serif" font-size="58" font-weight="800">${escapeHtml(template.name)}</text>
  <text x="106" y="330" fill="#fff" fill-opacity=".78" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="600">${escapeHtml(template.sourceName)}</text>
  ${cards}
  <rect x="84" y="620" width="300" height="50" rx="25" fill="#ffffff" opacity=".92"/>
  <text x="116" y="653" fill="${ink}" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700">${escapeHtml(template.priceText ?? template.priceType)}</text>
  <g opacity=".35">
    ${cardRows.map((y, row) => `<circle cx="${1000 + row * 28}" cy="${y}" r="90" fill="#fff"/>`).join("")}
  </g>
</svg>
`;
}

function toTemplate(entry) {
  const source = sources[entry.sourceName];
  return {
    slug: entry.slug,
    name: entry.name,
    description: entry.description,
    sourceName: entry.sourceName,
    sourceUrl: source.sourceUrl,
    url: entry.url,
    referralUrl: entry.referralUrl ?? entry.url,
    previewImage: `/templates/previews/${entry.slug}.png`,
    categories: entry.categories,
    tools: source.tools,
    priceType: entry.priceType ?? source.priceType,
    priceText: entry.priceText ?? source.priceText,
    featured: entry.featured ?? false,
    sponsored: entry.sponsored ?? false,
  };
}

const templates = entries.map(toTemplate);

mkdirSync(dirname(dataFile), { recursive: true });
mkdirSync(previewDir, { recursive: true });

writeFileSync(
  dataFile,
  `import type { Template } from "./schema";\n\nexport const templates: Template[] = ${JSON.stringify(templates, null, 2)};\n`,
  "utf8"
);

console.log(`Generated ${templates.length} templates. Run download-template-preview-images.mjs for real previews.`);
