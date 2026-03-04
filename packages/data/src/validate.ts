import { ComponentSystemSchema } from "./schema.js";
import { systems } from "./index.js";

let hasErrors = false;
const slugs = new Set<string>();

for (const system of systems) {
  const result = ComponentSystemSchema.safeParse(system);
  if (!result.success) {
    console.error(`❌ Invalid entry: ${system.slug || "unknown"}`);
    for (const issue of result.error.issues) {
      console.error(`   ${issue.path.join(".")}: ${issue.message}`);
    }
    hasErrors = true;
  }

  if (slugs.has(system.slug)) {
    console.error(`❌ Duplicate slug: ${system.slug}`);
    hasErrors = true;
  }
  slugs.add(system.slug);
}

if (hasErrors) {
  console.error(`\n❌ Validation failed.`);
  process.exit(1);
} else {
  console.log(`✅ All ${systems.length} entries are valid.`);
}
