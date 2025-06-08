import React, { JSX } from "react";
import Link from "@docusaurus/Link";

// const CaseList = [
//   {
//     title: "某大型制造企业数字化转型",
//     company: "制造业龙头企业",
//     description:
//       "为客户构建了完整的智能制造平台，实现了从订单管理到生产执行的全流程数字化，提升生产效率30%。",
//     technologies: ["Spring Cloud", "React", "MySQL", "Redis", "Docker"],
//     results: ["生产效率提升30%", "成本降低20%", "质量管控率99.5%"],
//   },
//   {
//     title: "金融科技公司核心业务系统",
//     company: "新兴金融科技公司",
//     description:
//       "开发了高并发、高可用的金融交易系统，支持每秒万级交易处理，确保系统稳定性和数据安全。",
//     technologies: ["Node.js", "Vue.js", "PostgreSQL", "RabbitMQ", "Kubernetes"],
//     results: ["交易处理能力提升500%", "系统可用性99.99%", "响应时间<100ms"],
//   },
//   {
//     title: "教育行业在线学习平台",
//     company: "知名教育集团",
//     description:
//       "构建了支持百万用户并发的在线教育平台，包含直播教学、作业管理、考试系统等完整功能。",
//     technologies: ["Django", "Angular", "MongoDB", "WebRTC", "AWS"],
//     results: ["用户满意度95%", "平台稳定性99.9%", "功能覆盖率100%"],
//   },
// ];

const CaseList = [
  {
    title: "鹏凯环境",
    description:
      "集成水质监测、管网管理、营收管理等功能，实现水务企业的全方位数字化管理。",
    icon: "🌊",
    img: "/img/pengkai.png",
    link: "/case_docs/digital",
    features: ["实时水质监测", "智能管网巡检", "客户服务管理", "数据分析决策"],
  },
  {
    title: "水清环保",
    description:
      "通过物联网、大数据等技术，构建城市级的智慧管理平台，提升城市治理水平。",
    icon: "🏙️",
    img: "/img/shuiqing.png",
    link: "/case_docs/integration",
    features: ["城市运行监测", "应急指挥调度", "公共服务优化", "数据融合分析"],
  },
  {
    title: "乐邦环境",
    description: "为企业提供全面的数字化转型服务，优化业务流程，提升运营效率。",
    icon: "🏢",
    img: "/img/lebang.png",
    link: "/case_docs/ai",
    features: ["业务流程重构", "系统集成整合", "数据资产管理", "智能分析决策"],
  },
];

// function CaseCard({ title, company, description, technologies, results }) {
//   return (
//     <div className="case-study-card">
//       <div className="case-study-image">{title}</div>
//       <div className="case-study-content">
//         <h3
//           style={{
//             marginBottom: "0.5rem",
//             color: "var(--ifm-color-emphasis-900)",
//           }}
//         >
//           {title}
//         </h3>
//         <p
//           style={{
//             color: "var(--ifm-color-primary)",
//             marginBottom: "1rem",
//             fontWeight: "600",
//           }}
//         >
//           {company}
//         </p>
//         <p
//           style={{
//             marginBottom: "1.5rem",
//             color: "var(--ifm-color-emphasis-700)",
//           }}
//         >
//           {description}
//         </p>

//         <div style={{ marginBottom: "1.5rem" }}>
//           <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>技术栈:</h4>
//           <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
//             {technologies.map((tech, idx) => (
//               <span
//                 key={idx}
//                 style={{
//                   background: "var(--ifm-color-primary-lightest)",
//                   color: "var(--ifm-color-primary-dark)",
//                   padding: "0.25rem 0.5rem",
//                   borderRadius: "4px",
//                   fontSize: "0.875rem",
//                 }}
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div style={{ marginBottom: "1.5rem" }}>
//           <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
//             项目成果:
//           </h4>
//           <ul style={{ margin: 0, color: "var(--ifm-color-emphasis-700)" }}>
//             {results.map((result, idx) => (
//               <li key={idx} style={{ marginBottom: "0.25rem" }}>
//                 ✓ {result}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Case(): JSX.Element {
  return (
    <section className="features-section">
      <div className="container" style={{ width: "80%" }}>
        {/* <div className="text--center margin-bottom--xl"> */}
        <div className="text--start">
          <h2
            className="gradient-text"
            style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
          >
            客户案例
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--ifm-color-emphasis-700)",
            }}
          >
            我们为各行业客户提供的优质解决方案和显著成果
          </p>
        </div>
        {/* <div className="service-grid"> */}

        <div className="refine-grid">
          {CaseList.map((solution, index) => (
            <div key={index} className="case-study-card">
              {/* <div className="refine-card fade-in-up"> */}
              <img src={solution.img}></img>
              <div
                className="case-study-content"
                style={{
                  // marginLeft: "1rem",
                  padding: "1rem",
                }}
              >
                <div className="row">
                  <div className="col col--6">
                    <h2
                      className="gradient-text"
                      style={{
                        fontSize: "1.5rem",
                        marginTop: "0.5rem",
                        marginBottom: "0.8rem",
                      }}
                    >
                      {solution.title}
                    </h2>
                  </div>
                  <div className="col col--6 text--right">
                    <Link
                      to={solution.link}
                      className="btn-gradient"
                      // className="refine-button refine-button--secondary"
                      style={{
                        // fontSize: "0.8rem",
                        // color: "var(--ifm-color-emphasis-700)",
                        marginTop: "0rem",
                        // color: "grey",
                        // color: "#3b82f6",
                        // marginBottom: "1rem",
                        // paddingTop: "0.5rem",
                        // paddingBottom: "0.5rem",
                        // paddingLeft: "1rem",
                        // paddingRight: "1rem",
                        // borderRadius: "18px",
                      }}
                    >
                      了解更多
                    </Link>
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--ifm-color-emphasis-700)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {solution.description}
                </p>

                <div className="aa">
                  {/* <ul> */}
                  {solution.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "0.9rem",
                        paddingTop: "0.2rem",
                        paddingBottom: "0.2rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    >
                      {/* ✓ {feature} */}
                      {feature}
                    </li>
                  ))}
                  {/* </ul> */}
                  {/* <Link
                    to="/solution"
                    className="btn-gradient"
                    // className="refine-button refine-button--secondary"
                    style={{
                      // fontSize: "0.8rem",
                      // color: "var(--ifm-color-emphasis-700)",
                      marginTop: "0.6rem",

                      // paddingTop: "0.5rem",
                      // paddingBottom: "0.5rem",
                      // paddingLeft: "1rem",
                      // paddingRight: "1rem",
                      // borderRadius: "18px",
                    }}
                  >
                    了解更多
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text--center"
          style={{
            marginTop: "-0.8rem",
            marginBottom: "-1.8rem",
          }}
        >
          <Link
            to="/case_docs"
            // className="btn-primary"
            className="refine-button"
            // className="btn-gradient"
          >
            查看更多案例
          </Link>
        </div>
      </div>
    </section>
  );
}
