import type { ComponentSystemSource } from "../schema";

const markstream: ComponentSystemSource = {
    slug: "markstream",
    name: "Markstream",
    url: "https://markstream.simonhe.me/",
    logo: "/logos/component-systems/markstream.svg",
    latestVersion: "1.0.7-beta.4",
    github: "https://github.com/Simon-He95/markstream-vue",
    npm: "markstream-vue",
    description: "A streaming Markdown renderer family for AI chat and LLM responses, with Vue, React, Svelte, and Angular packages plus Mermaid, KaTeX, Shiki, and Monaco integrations.",
    frameworks: ["vue", "react", "svelte", "angular"],
    styling: [],
    category: ["documentation", "general"],
    maturity: "active",
    components: [
        {
            name: "MarkdownRenderer",
            description: "Streaming renderer for incomplete Markdown in AI and LLM responses.",
            link: "https://markstream.simonhe.me/guide/installation"
        },
        {
            name: "CodeBlock",
            description: "Streaming code blocks with Shiki and Monaco integrations.",
            link: "https://markstream.simonhe.me/guide/code-blocks"
        },
        {
            name: "MermaidBlock",
            description: "Progressive Mermaid diagram rendering for streaming content.",
            link: "https://markstream.simonhe.me/guide/mermaid"
        },
        {
            name: "MathBlock",
            description: "KaTeX math rendering for Markdown responses.",
            link: "https://markstream.simonhe.me/guide/math"
        }
    ],
    tags: ["markdown", "streaming", "ai-chat", "mermaid", "katex", "ssr", "monaco", "shiki"],
    featured: false,
    sponsored: false,
    license: "MIT"
};

export default markstream;
