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
    // <section className="features-section" style={{ marginTop: "-1px" }}>
    <section style={{ marginTop: "-1.5rem", marginBottom: "2rem" }}>
      <div className="container">
        {/* <div
          className="text--center"
          style={{
            fontSize: "2.5rem",
            marginTop: "2.6rem",
            marginBottom: "1rem",
          }}
        >
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
        </div> */}

        <div className="refine-grid4">
          {ProcessList.map((props, idx) => (
            <Process key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
