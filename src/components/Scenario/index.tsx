import React, { JSX, useState } from "react";
import Link from "@docusaurus/Link";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import config from "@generated/docusaurus.config";

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
                        src={config.customFields.imgUrlHero as string}
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
                        src={config.customFields.imgUrlHero as string}
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
                        src={config.customFields.imgUrlHero as string}
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
                        src={config.customFields.imgUrlHero as string}
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
                        src={config.customFields.imgUrlHero as string}
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
      </div>
    </section>
  );
}
