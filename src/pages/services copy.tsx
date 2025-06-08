import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Solutions(): JSX.Element {
  const solutions = [
    {
      id: "smart-water",
      title: "智慧水务解决方案",
      icon: "💧",
      description: "基于物联网、大数据、AI等技术的智慧水务整体解决方案",
      features: [
        "水质实时监测与预警",
        "管网智能巡检与维护",
        "供水调度优化",
        "客户服务数字化",
        "营收管理系统",
        "决策分析平台",
      ],
      benefits: [
        "提升水质监管效率60%",
        "降低管网漏损率30%",
        "优化运营成本25%",
        "提升客户满意度85%",
      ],
    },
    {
      id: "smart-city",
      title: "智慧城市解决方案",
      icon: "🏙️",
      description: "构建城市级智慧管理平台，提升城市治理现代化水平",
      features: [
        "城市运行态势感知",
        "应急指挥调度系统",
        "公共服务优化",
        "交通智能管理",
        "环境监测治理",
        "数据融合分析",
      ],
      benefits: [
        "提升城市管理效率40%",
        "缩短应急响应时间50%",
        "优化公共资源配置",
        "增强市民获得感",
      ],
    },
    {
      id: "digital-enterprise",
      title: "企业数字化解决方案",
      icon: "🏢",
      description: "为企业提供全面的数字化转型服务和技术支持",
      features: [
        "业务流程数字化",
        "数据资产管理",
        "智能分析决策",
        "移动办公平台",
        "供应链优化",
        "客户关系管理",
      ],
      benefits: [
        "提升业务效率45%",
        "降低运营成本35%",
        "提高决策准确性",
        "增强市场竞争力",
      ],
    },
  ];

  return (
    <Layout
      title="解决方案"
      description="专业的行业数字化解决方案，助力企业数字化转型"
    >
      {/* Solutions Overview */}
      <section className="features-section" style={{ padding: "4rem 0" }}>
        <div className="container" style={{ width: "40%" }}>
          <div className="refine-grid">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="col col--12 margin-bottom--xl">
                <div
                  className="solution-card"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="col col--6">
                    <div className="solution-card__content">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <span style={{ fontSize: "3rem", marginRight: "1rem" }}>
                          {solution.icon}
                        </span>
                        <h2 className="solution-card__title">
                          {solution.title}
                        </h2>
                      </div>
                      <p className="solution-card__description">
                        {solution.description}
                      </p>

                      <h4>核心功能</h4>
                      <ul>
                        {solution.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <Link
                        to={`/solutions/${solution.id}`}
                        className="btn-gradient"
                      >
                        了解详情
                      </Link>
                    </div>
                  </div>
                  <div className="col col--6">
                    <div className="margin-left--lg">
                      <h4>核心价值</h4>
                      <div className="row">
                        {solution.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="col col--6 margin-bottom--md"
                          >
                            <div
                              style={{
                                background:
                                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white",
                                padding: "1rem",
                                borderRadius: "8px",
                                textAlign: "center",
                                fontSize: "0.9rem",
                              }}
                            >
                              {benefit}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section section--light">
        <div className="container">
          <h2 className="section__title">技术架构</h2>
          <div className="row">
            <div className="col col--3">
              <div className="feature-card">
                <div className="feature-card__icon">🔧</div>
                <h3 className="feature-card__title">前端技术</h3>
                <ul>
                  <li>React / Vue.js</li>
                  <li>TypeScript</li>
                  <li>微前端架构</li>
                  <li>移动端适配</li>
                </ul>
              </div>
            </div>
            <div className="col col--3">
              <div className="feature-card">
                <div className="feature-card__icon">⚙️</div>
                <h3 className="feature-card__title">后端技术</h3>
                <ul>
                  <li>Spring Boot</li>
                  <li>微服务架构</li>
                  <li>分布式系统</li>
                  <li>API Gateway</li>
                </ul>
              </div>
            </div>
            <div className="col col--3">
              <div className="feature-card">
                <div className="feature-card__icon">🗄️</div>
                <h3 className="feature-card__title">数据技术</h3>
                <ul>
                  <li>大数据处理</li>
                  <li>实时数据流</li>
                  <li>数据仓库</li>
                  <li>AI/ML算法</li>
                </ul>
              </div>
            </div>
            <div className="col col--3">
              <div className="feature-card">
                <div className="feature-card__icon">☁️</div>
                <h3 className="feature-card__title">云平台</h3>
                <ul>
                  <li>容器化部署</li>
                  <li>Kubernetes</li>
                  <li>DevOps流程</li>
                  <li>监控告警</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text--center">
          <h2>准备开始您的数字化转型之旅？</h2>
          <p>联系我们的专家团队，获取专业的咨询服务和定制化解决方案</p>
          <div className="margin-top--lg">
            <Link className="btn-gradient margin-right--md" to="/contact">
              立即咨询
            </Link>
            <Link className="button button--secondary button--lg" to="/cases">
              查看案例
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
