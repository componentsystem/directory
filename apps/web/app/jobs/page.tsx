import type { Metadata } from "next";
import { JobsBoard } from "@/components/jobs-board";

export const metadata: Metadata = {
  title: "Frontend & Design System Jobs — componentsystem.directory",
  description:
    "Find frontend jobs focused on component systems, design systems, UI engineering, design tooling, and developer experience.",
};

export default function JobsPage() {
  return <JobsBoard />;
}
