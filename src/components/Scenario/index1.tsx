import React, { JSX } from "react";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const ServiceList = [
  {
    title: "企业级应用开发",
    description:
      "定制化的企业应用系统开发，包括ERP、CRM、OA等核心业务系统，采用最新的技术栈确保系统的稳定性和可扩展性。",
    features: ["微服务架构", "前后端分离", "容器化部署", "自动化测试"],
    icon: "💻",
  },
  {
    title: "云原生解决方案",
    description:
      "基于Kubernetes的云原生应用开发和部署，帮助企业实现敏捷开发、持续集成和自动化运维。",
    features: ["Kubernetes集群", "DevOps流水线", "微服务治理", "服务网格"],
    icon: "🔮",
  },
  {
    title: "数据平台建设",
    description:
      "构建企业级数据中台，提供数据采集、存储、处理、分析和可视化的一站式解决方案。",
    features: ["实时数据处理", "数据湖架构", "BI可视化", "AI算法集成"],
    icon: "📈",
  },
  {
    title: "移动应用开发",
    description:
      "跨平台移动应用开发，支持iOS、Android和小程序，提供原生性能和用户体验。",
    features: ["React Native", "Flutter开发", "小程序开发", "PWA应用"],
    icon: "📱",
  },
];

// 事件条目组件
const EventItem: React.FC<{ time: string; title: string }> = ({
  time,
  title,
}) => (
  <div className="tw-flex tw-items-center tw-p-3 hover:tw-bg-gray-50 tw-rounded-md">
    <div className="tw-w-2 tw-h-2 tw-bg-blue-600 tw-rounded-full tw-mr-3" />
    <div>
      <p className="tw-text-sm tw-text-gray-500">{time}</p>
      <p className="tw-text-gray-800">{title}</p>
    </div>
  </div>
);

function ServiceCard({ title, description, features, icon }) {
  return (
    <div className="service-card">
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: "var(--ifm-color-emphasis-900)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginBottom: "1.5rem",
          color: "var(--ifm-color-emphasis-700)",
        }}
      >
        {description}
      </p>
      <ul
        style={{
          marginBottom: "1.5rem",
          color: "var(--ifm-color-emphasis-700)",
        }}
      >
        {features.map((feature, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>
            ✓ {feature}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="btn-primary">
        了解详情
      </Link>
    </div>
  );
}

export default function Solution(): JSX.Element {
  return (
    <div className="custom-tabs-container">
      <Tabs className="custom-tabs">
        <TabItem value="crm" label="CRM Application">
          <div style={{ padding: "20px" }}>
            {/* 您的 CRM 内容 */}
            <p>CRM Application Content</p>
          </div>
        </TabItem>

        <TabItem value="ecommerce" label="E-Commerce Application" default>
          <div style={{ padding: "20px" }}>
            {/* 您的 E-Commerce 内容 */}
            <p>E-Commerce Application Content</p>
          </div>
        </TabItem>

        <TabItem value="hr" label="HR Application">
          <div style={{ padding: "20px" }}>
            {/* 您的 HR 内容 */}
            <p>HR Application Content</p>
          </div>
        </TabItem>

        <TabItem value="devops" label="DevOps Dashboard">
          <div style={{ padding: "20px" }}>
            {/* 您的 DevOps 内容 */}
            <p>DevOps Dashboard Content</p>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
