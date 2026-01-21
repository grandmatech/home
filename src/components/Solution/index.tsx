import React, { JSX, ReactNode } from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
// import DocusaurusSvg from '/static/img/logo.svg';
import DocusaurusSvg from "/static/img/icons/database-svgrepo-com.svg";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon: string | ReactNode;
  iconColor: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  // svg: https://www.svgrepo.com/
  {
    // title: "企业数字化转型",
    title: "数字化转型",
    icon: "💻",
    iconColor: "grey",
    link: "/solution_docs/digital",
    description: (
      <>
        {/* 为企业提供 */}
        {/* 全方位的数字化转型咨询和实施服务。 */}
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
    link: "/solution_docs/integration",
    description: (
      <>
        通过API、RPA等技术，打破企业信息系统间的数据孤岛，让数据自由流动，实现跨部门无缝协同，流程自动化管理，提高企业效率。
      </>
    ),
  },
  // {
  //   title: "AI解决方案",
  //   icon: "🤖",
  //   iconColor: "green",
  //   link: "/solution_docs/ai",
  //   description: (
  //     <>
  //       结合最新AI技术，为企业提供智能化的业务解决方案，提升运营效率和决策质量。
  //       显著降低运营成本，大幅提升工作效率，创造更大商业价值。
  //     </>
  //   ),
  // },
  // {
  //   title: "数据分析与洞察",
  //   icon: "📈",
  //   iconColor: "red",
  //   link: "/solution_docs/bi",
  //   description: (
  //     <>
  //       通过数据分析和可视化技术，化繁为简，帮助企业从数据中发现商业洞察和增长机会。
  //       精准定位目标客户，数据驱动增长，洞察成就未来。
  //     </>
  //   ),
  // },
  {
    // title: "数字化人才培训",
    title: "人才培训",
    icon: "💡",
    iconColor: "yellow",
    link: "/solution_docs/train",
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
    link: "/solution_docs/standard",
    description: (
      <>
        助力企业规范运营，发布专属企业、团体标准，树立行业标杆，提升产品和服务质量，
        {/* 确保符合标准和法规， */}
        提升品牌形象，赢得客户信任和市场认可。
      </>
    ),
  },
];

function Feature({ title, description, icon, iconColor, link }: FeatureItem) {
  return (
    <div className="refine-card fade-in-up">
      <div className={`refine-card__icon refine-card__icon--${iconColor}`}>
        {icon}

        {/* <DocusaurusSvg className="themedDocusaurus" width="100" height="100"/> */}
        {/* <img id="mySvgImage" src="/img/icons/database-svgrepo-com.svg" alt="My SVG" /> */}
      </div>
      {/* <div className="row"> */}
      {/* <div className="tw-grid tw-grid-cols-2 tmd:tw-grid-cols-2 lg:tw-grid-cols-4"> */}
      {/* <div className="tw-columns-2 tw-sm:tw-columns-6"> */}

      {/* <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
        <div className="tw-bg-red-500">Item 1</div>
        <div className="tw-bg-green-500">Item 2</div>
        <div className="tw-bg-blue-500">Item 3</div>
        <div className="tw-bg-yellow-500">Item 4</div>
      </div> */}

      <div className="tw-grid md:tw-grid-cols-1 lg:tw-grid-cols-2">
        {/* <div className="tw-grid tw-grid-cols-1"> */}
        {/* <div className="col col--7"> */}
        <div
          className=""
          style={
            {
              // fontSize: "1rem",
            }
          }
        >
          {/* <h3>{title}</h3> */}
          <h4>{title}</h4>
          {/* <b>{title}</b> */}
        </div>
        {/* <div className="col tw-col--5 text--right"> */}
        <div className="sm:tw-text-left md:tw-text-right">
          <Link
            to={`${link}`}
            className="btn-gradient"
            // className="refine-button refine-button--secondary"
            style={{
              // display: "flex",
              fontSize: "0.8rem",
              // color: "var(--ifm-color-emphasis-700)",
              marginTop: "-0.5rem",
              marginRight: "-0.8rem",
              // marginTop: "-52.5rem",
              // paddingLeft: "0rem",
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
          fontSize: "0.88rem",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Solution(): JSX.Element {
  return (
    <section className="features-section">
      <div className="container" style={{ width: "80%" }}>
        {/* <div className="text--center"> */}
        <div>
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

        {/* <DocusaurusSvg className="themedDocusaurus" width="100" height="100"/> */}

        {/* <img id="mySvgImage" src="/img/icons/database-svgrepo-com.svg" alt="My SVG" /> */}

        {/* <svg src="/img/icons/database-svgrepo-com.svg"></svg> */}
        {/* <svg> */}
        {/* {DocusaurusSvg} */}
        {/* </svg> */}

        {/* <DocusaurusSvg fill="#323231" width="100" height="100" ></DocusaurusSvg> */}

        {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="red"
    >
      {DocusaurusSvg}
    </svg> */}

        <div className="refine-grid">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* <div className="tw-max-w-screen-xl tw-mx-auto tw-px-4 tw-md:px-6 tw-lg:px-8"> */}
        {/* <div className="tw-max-w-4xl tw-mx-auto tw-text-center"> */}
        {/* <h2 className="tw-text-3xl tw-leading-9 tw-font-extrabold tw-md:text-4xl tw-md:leading-10">
              Already trusted by your favorite docs
            </h2> */}
        {/* </div> */}
        {/* </div> */}

        {/* <span className="gradient-text" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
            专业的选择
        </span>

        应用场景（简道云）

        客户案例简洁版 （解决方案， 客户案例）

        品牌墙

        联系我们 */}
      </div>
    </section>
  );
}
