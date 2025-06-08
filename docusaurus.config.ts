import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "格岚玛科技",
  tagline: "专业的企业信息化解决方案提供商",
  favicon: "img/favicon.ico",

  // url: "https://your-company-website.com",
  url: "https://grandmatech.github.io",
  baseUrl: "/home/", // must be your repo name.

  // GitHub pages deployment config.
  organizationName: "grandmatech", // must be your GitHub org/user name.
  projectName: "home", // must be your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages", // 必须提前新建好 gh-pages 分支

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "en"],
  },

  presets: [
    [
      // "classic",
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // editUrl: "https://github.com/your-org/your-repo/tree/main/",
        },
        blog: {
          // showReadingTime: true,
          // editUrl: "https://github.com/your-org/your-repo/tree/main/",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // plugins: [tailwindLoader], // plugins: [myLoaders, tailwindLoader],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: "信息化, 云计算, 大数据, 网络安全, 软件开发",
      },
    ],
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "格岚玛科技",
      logo: {
        alt: "格岚玛科技 Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/", label: "首页", position: "left" },
        { to: "/solution_docs", label: "解决方案", position: "left" },
        { to: "/scenario_docs", label: "应用场景", position: "left" },
        { to: "/case_docs", label: "客户案例", position: "left" },
        { to: "/blog", label: "新闻动态", position: "left" },
        // { to: "/contact", label: "联系我们", position: "left" },
        // { to: "/about", label: "关于我们", position: "left" },
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
        // {
        //   href: "https://github.com/your-org/your-repo",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: "公司",
          items: [
            // {
            //   label: "关于我们",
            //   to: "/about",
            // },
            {
              label: "解决方案",
              to: "/solution_docs",
            },
            {
              label: "应用场景",
              to: "/scenario_docs",
            },
            {
              label: "客户案例",
              to: "/case_docs",
            },
          ],
        },
        {
          title: "资源",
          items: [
            // {
            //   label: "技术文档",
            //   to: "/docs",
            // },
            {
              label: "新闻动态",
              to: "/blog",
            },
            {
              label: "免费试用",
              to: "/contact",
            },
            // {
            //   label: "API 参考",
            //   href: "/docs/api",
            // },
          ],
        },
        // {
        //   title: "联系方式",
        //   items: [
        //     {
        //       label: "联系我们",
        //       to: "/contact",
        //     },
        //     {
        //       label: "商务合作",
        //       href: "mailto:business@techsolutions.com",
        //     },
        //     // {
        //     //   label: "技术支持",
        //     //   href: "mailto:support@techsolutions.com",
        //     // },
        //   ],
        // },
        // {
        //   title: "更多",
        //   items: [
        //     // {
        //     //   label: "GitHub",
        //     //   href: "https://github.com/your-org/your-repo",
        //     // },
        //     // {
        //     //   label: "LinkedIn",
        //     //   href: "https://linkedin.com/company/your-company",
        //     // },
        //     {
        //       label: "微信公众号",
        //       href: "#",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 格岚玛（广州）科技有限公司. All Rights Reserved. <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备XXXXXXXX号</a>`, // 替换备案号
    },
    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,
    // },
    // colorMode: {
    //   defaultMode: "dark",
    //   disableSwitch: false,
    //   respectPrefersColorScheme: true,
    // },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    "docusaurus-tailwindcss", // 添加这一行
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "solution_docs",
        path: "solution_docs",
        routeBasePath: "solution_docs",
        sidebarPath: "./sidebarsSolutionDocs.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "scenario_docs",
        path: "scenario_docs",
        routeBasePath: "scenario_docs",
        sidebarPath: "./sidebarsSolutionScenario.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "case_docs",
        path: "case_docs",
        routeBasePath: "case_docs",
        sidebarPath: "./sidebarsSolutionCase.ts",
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "enhanced-sitemap",
        changefreq: "weekly",
        priority: 0.7,
        filename: "sitemap.xml",
        createSitemapItems: async (params) => {
          const defaultItems = await params.defaultCreateSitemapItems(params);
          return defaultItems.map((item) => ({
            ...item,
            lastmod: new Date().toISOString(),
          }));
        },
      },
    ],
  ],
};

export default config;
