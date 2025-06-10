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
        {/* 助力企业实现全方位的数字化升级。
        定制化开发数据中台、ERP、CRM等核心系统，
        包括数据采集、处理、分析和可视化的一站式解决方案。 */}
        定制化开发数据中台、ERP、CRM等核心系统，包括数据采集、处理、分析和可视化的一站式解决方案。我们深知每个企业的独特性，因此拒绝千篇一律，坚持以客户需求为导向，打造真正贴合业务场景的数字化引擎。
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

const ProcessList: FeatureItem[] = [
  {
    title: "需求调研",
    icon: "📋",
    iconColor: "red",
    description: <>深入了解客户需求，制定详细的解决方案</>,
  },
  {
    title: "方案设计",
    icon: "🎨",
    iconColor: "orange",
    description: <>基于需求分析，设计最优的技术架构方案</>,
  },
  {
    title: "快速开发",
    icon: "⚡",
    iconColor: "green",
    description: <>采用敏捷开发模式，确保项目快速交付</>,
  },
  {
    title: "持续维护",
    icon: "🛠️",
    iconColor: "grey",
    description: <>提供专业的运维服务和技术支持</>,
  },
];

function Feature({ title, description, icon, iconColor }: FeatureItem) {
  return (
    <div className="refine-card fade-in-up">
      {/* <div className={`refine-card__icon refine-card__icon--${iconColor}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p> */}

      <div className="row">
        <div className="col col--1">
          <div
            className={`refine-card__icon refine-card__icon--${iconColor}`}
            style={
              {
                // height: "60px",
                // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                // borderRadius: "12px",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // fontSize: "5rem",
                // color: "white",
              }
            }
          >
            {icon}
          </div>
        </div>
        <div className="col col--11">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div
        className="row"
        style={{ marginLeft: "2.8rem", marginTop: "1.8rem" }}
      >
        <div className="col col--3">
          <img
            src="/img/hero.png"
            style={
              {
                // alignItems: "center",
                // justifyContent: "center",
                // width: "50%",
              }
            }
          />
        </div>
        <div className="col col--8">
          <strong>数据中台</strong>
          <p>
            打破数据孤岛，构建企业级数据资产。我们提供从数据源接入、清洗转换、建模分析到API服务的一整套数据中台解决方案，帮助企业沉淀数据价值，赋能业务创新。通过实时数据监控和预警，助力企业快速响应市场变化，实现精细化运营。
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{ marginLeft: "2.8rem", marginTop: "1.8rem" }}
      >
        <div className="col col--3">
          <img
            src="/img/hero.png"
            style={
              {
                // alignItems: "center",
                // justifyContent: "center",
                // width: "50%",
              }
            }
          />
        </div>
        <div className="col col--8">
          <strong>ERP</strong>
          <p>
            整合企业核心业务流程，提升运营效率。我们的ERP系统涵盖财务管理、供应链管理、生产制造、人力资源等多个模块，实现信息共享和流程自动化，降低运营成本，提高决策效率。支持灵活定制，满足不同行业和规模企业的需求。
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{ marginLeft: "2.8rem", marginTop: "1.8rem" }}
      >
        <div className="col col--3">
          <img
            src="/img/hero.png"
            style={
              {
                // alignItems: "center",
                // justifyContent: "center",
                // width: "50%",
              }
            }
          />
        </div>
        <div className="col col--8">
          <strong>CRM</strong>
          <p>
            以客户为中心，提升客户满意度和忠诚度。我们的CRM系统提供客户信息管理、销售自动化、营销自动化、客户服务等功能，帮助企业更好地了解客户需求，优化客户体验，提升销售业绩。通过数据分析，挖掘潜在客户，实现精准营销。
          </p>
        </div>
      </div>
    </div>
  );
}

function Process({ title, description, icon, iconColor }: FeatureItem) {
  return (
    <div className="refine-card fade-in-up text--center">
      <div className={`refine-card__icon2 refine-card__icon--${iconColor}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Solution(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
              {/* 企业数字化转型解决方案 */}
              解决方案
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
                专业信息化服务，助力企业数字化转型
              </span>
            </div>
          </div>

          <div className="refine-grid3">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>

        <div className="container">
          <div
            className="text--center"
            style={{
              fontSize: "2.5rem",
              marginTop: "2.6rem",
              marginBottom: "1rem",
            }}
          >
            {/* <div> */}
            <span
              className="gradient-text"
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              服务流程
            </span>
            <div style={{ marginTop: "-0.6rem" }}>
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "var(--ifm-color-emphasis-700)",
                  maxWidth: "600px",
                  margin: "0 auto 3rem",
                }}
              >
                专业信息化服务，助力企业数字化转型
              </span>
            </div>
          </div>

          <div className="refine-grid4">
            {ProcessList.map((props, idx) => (
              <Process key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
