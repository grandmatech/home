import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const sidebars: SidebarsConfig = {
  solutionSidebar: [
    {
      type: "category",
      label: "客户案例",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "index", // solution_docs/index.mdx
      },
      items: ["digital", "integration", "ai"],
    },
  ],
};
export default sidebars;
