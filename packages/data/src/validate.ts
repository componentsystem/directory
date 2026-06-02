import { ComponentSystemSchema, TemplateSchema } from "./schema.js";
import { systems, templates } from "./index.js";

let hasErrors = false;
const systemSlugs = new Set<string>();
const templateSlugs = new Set<string>();

for (const system of systems) {
  const result = ComponentSystemSchema.safeParse(system);
  if (!result.success) {
    console.error(`❌ Invalid entry: ${system.slug || "unknown"}`);
    for (const issue of result.error.issues) {
      console.error(`   ${issue.path.join(".")}: ${issue.message}`);
    }
    hasErrors = true;
  }

  if (systemSlugs.has(system.slug)) {
    console.error(`❌ Duplicate slug: ${system.slug}`);
    hasErrors = true;
  }
  systemSlugs.add(system.slug);
}

for (const template of templates) {
  const result = TemplateSchema.safeParse(template);
  if (!result.success) {
    console.error(`❌ Invalid template: ${template.slug || "unknown"}`);
    for (const issue of result.error.issues) {
      console.error(`   ${issue.path.join(".")}: ${issue.message}`);
    }
    hasErrors = true;
  }

  if (templateSlugs.has(template.slug)) {
    console.error(`❌ Duplicate template slug: ${template.slug}`);
    hasErrors = true;
  }
  templateSlugs.add(template.slug);
}

if (hasErrors) {
  console.error(`\n❌ Validation failed.`);
  process.exit(1);
} else {
  console.log(`✅ All ${systems.length} systems and ${templates.length} templates are valid.`);
}
