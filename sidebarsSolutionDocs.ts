import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const sidebars: SidebarsConfig = {
  solutionSidebar: [
    // "solution_docs_index",
    {
      type: "category",
      label: "解决方案",
      collapsible: false,
      collapsed: false,
      link: {
        // type: "generated-index",
        // description: "Tutorials of SIMPO.",
        type: "doc",
        id: "index", // solution_docs/index.mdx
      },
      items: ["digital", "integration", "ai", "bi", "train", "standard"],
    },
  ],
};
export default sidebars;
