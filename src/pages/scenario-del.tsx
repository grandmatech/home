import React, { JSX, ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon: string | ReactNode;
  iconColor: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "企业数字化转型",
    icon: "💻",
    iconColor: "grey",
    description: (
      <>
        助力企业实现全方位的数字化升级。
        定制化开发数据中台、ERP、CRM等核心系统，
        包括数据采集、处理、分析和可视化的一站式解决方案。
      </>
    ),
  },
  {
    title: "信息系统集成",
    icon: "🌐",
    iconColor: "blue",
    description: (
      <>
        通过RPA、API接口等技术，打破企业信息系统间的数据孤岛，让数据自由流动，实现跨部门无缝协同，流程自动化管理，提高企业效率。
      </>
    ),
  },
  {
    title: "AI解决方案",
    icon: "🤖",
    iconColor: "green",
    description: (
      <>
        结合最新AI技术，为企业提供智能化的业务解决方案，提升运营效率和决策质量。
        显著降低运营成本，大幅提升工作效率，创造更大商业价值。
      </>
    ),
  },
  {
    title: "数据分析与洞察",
    icon: "📈",
    iconColor: "red",
    description: (
      <>
        通过数据分析和可视化技术，化繁为简，帮助企业从数据中发现商业洞察和增长机会。
        精准定位目标客户，数据驱动增长，洞察成就未来。
      </>
    ),
  },
  {
    title: "数字化人才培训",
    icon: "💡",
    iconColor: "yellow",
    description: (
      <>
        赋能人才掌握前沿技能，提升企业核心竞争力，打造企业未来核心力量，
        助力企业业务增长和转型升级，为数字化转型提供源源不断的动力。
      </>
    ),
  },

  {
    title: "标准化服务",
    icon: "🏗️",
    iconColor: "orange",
    description: (
      <>
        助力企业规范运营，发布专属企业、团体标准，树立行业标杆，提升产品和服务质量，
        {/* 确保符合标准和法规， */}
        提升品牌形象，赢得客户信任和市场认可。
      </>
    ),
  },
];

function Feature({ title, description, icon, iconColor }: FeatureItem) {
  return (
    <div className="refine-card fade-in-up">
      <div className={`refine-card__icon refine-card__icon--${iconColor}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Solution(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const className = isMobile ? "custom-tabs" : "custom-tabs tw-justify-center";

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="专业的企业信息化解决方案提供商"
    >
      <section className="features-section">
        <div className="container" style={{ width: "80%" }}>
          <div className="text--center">
            {/* <div> */}
            <span
              className="gradient-text"
              style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
            >
              {/* 核心服务 */}
              企业数字化转型解决方案
            </span>
            <div style={{ marginTop: "0.6rem" }}>
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "var(--ifm-color-emphasis-700)",
                  maxWidth: "600px",
                  margin: "0 auto 3rem",
                }}
              >
                专注于为企业提供专业的信息化服务，助力企业数字化转型
              </span>
            </div>
          </div>

          <div className="refine-grid3">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
