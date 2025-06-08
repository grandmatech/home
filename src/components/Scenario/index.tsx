import React, { JSX, useState } from "react";
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
    features: ["Kubernetes集群", "case4流水线", "微服务治理", "服务网格"],
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

export default function Scenario(): JSX.Element {
  const [activeTab, setActiveTab] = useState("case1");

  return (
    // <section className="section-padding" style={{background: 'var(--ifm-background-surface-color)'}}>
    <section className="features-section">
      <div className="container" style={{ width: "80%" }}>
        {/* <div className="text--center margin-bottom--xl"> */}
        {/* <div className="text--center"> */}
        <div className="text--start">
          <h2
            className="gradient-text"
            style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
          >
            应用场景
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            为不同业务的企业提供专业、可靠、高效的信息化解决方案
          </p>

          <div className="custom-tabs-container">
            <Tabs
              className="custom-tabs tw-justify-center"
              defaultValue="case1"
              values={[
                { label: "污水厂运营管理", value: "case1" },
                { label: "站点工艺优化", value: "case2" },
                { label: "站点综合管理驾驶舱", value: "case3" },
                { label: "污水厂财务分析", value: "case4" },
                { label: "安全管理与培训", value: "case5" },
              ]}
              onTabChange={(value) => setActiveTab(value)}
            >
              <TabItem value="case1" label="污水厂运营管理">
                <div className="tab-content">
                  <div className="content-wrapper">
                    <Link to="/scenario_docs/digital">
                      <img
                        src="/img/hero.png" // 替换为您的图片路径
                        alt="企业信息化解决方案"
                        width="60%"
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          marginTop: "2rem",
                          marginLeft: "20%",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </TabItem>

              <TabItem value="case2" label="站点工艺优化">
                <div className="tab-content">
                  <div className="content-wrapper">
                    {/* 您的 E-Commerce 内容 */}
                    <Link to="/scenario_docs/integration">
                      <img
                        src="/img/hero.png" // 替换为您的图片路径
                        alt="企业信息化解决方案"
                        width="60%"
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          marginTop: "2rem",
                          marginLeft: "20%",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </TabItem>

              <TabItem value="case3" label="站点综合管理驾驶舱">
                <div className="tab-content">
                  <div className="content-wrapper">
                    <Link to="/scenario_docs/ai">
                      <img
                        src="/img/hero.png" // 替换为您的图片路径
                        alt="企业信息化解决方案"
                        width="60%"
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          marginTop: "2rem",
                          marginLeft: "20%",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </TabItem>

              <TabItem value="case4" label="污水厂财务分析">
                <div className="tab-content">
                  <div className="content-wrapper">
                    <Link to="/scenario_docs/bi">
                      <img
                        src="/img/hero.png" // 替换为您的图片路径
                        alt="企业信息化解决方案"
                        width="60%"
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          marginTop: "2rem",
                          marginLeft: "20%",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </TabItem>

              <TabItem value="case5" label="安全管理与培训">
                <div className="tab-content">
                  <div className="content-wrapper">
                    <Link to="/scenario_docs/train">
                      <img
                        src="/img/hero.png" // 替换为您的图片路径
                        alt="企业信息化解决方案"
                        width="60%"
                        style={{
                          borderRadius: "10px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          marginTop: "2rem",
                          marginLeft: "20%",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </TabItem>
            </Tabs>
          </div>
        </div>
        {/* <div className="service-grid"> */}
        {/* <div className="refine-grid">
          {ServiceList.map((props, idx) => (
            <ServiceCard key={idx} {...props} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
