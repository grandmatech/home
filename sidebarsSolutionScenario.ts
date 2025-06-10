import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const sidebars: SidebarsConfig = {
  solutionSidebar: [
    {
      type: "category",
      label: "应用场景",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "index", // solution_docs/index.mdx
      },
      items: ["digital", "integration", "ai", "bi", "train"],
    },
  ],
};
export default sidebars;
