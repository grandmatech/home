import React, { JSX } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import showcaseProjects from "./showcase-projects.json";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon: string;
  iconColor: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "企业级数字化转型",
    icon: "🏢",

    iconColor: "blue",
    description: (
      <>
        为企业提供全方位的数字化转型咨询和实施服务，
        帮助传统企业实现业务流程数字化升级。
      </>
    ),

    id: 1,
    width: 50,
    height: 50,
    path: "M150 0 L75 200 L225 200 Z",
  },
  {
    title: "企业信息系统集成",
    icon: "🏢",
    iconColor: "blue",
    description: <>打破企业信息系统数据孤岛。</>,
  },
  {
    title: "人工智能解决方案",
    icon: "🤖",
    iconColor: "purple",
    description: (
      <>
        结合最新的AI技术，为企业提供智能化的业务解决方案，
        提升运营效率和决策质量。
      </>
    ),
  },
  {
    title: "数据分析与洞察",
    icon: "📊",
    iconColor: "green",
    description: (
      <>通过大数据分析和可视化技术，帮助企业从数据中 发现商业洞察和增长机会。</>
    ),
  },
  {
    title: "企业数字化人才培训",
    icon: "☁️",
    iconColor: "cyan",
    description: <>人才培训。</>,
  },

  {
    title: "标准化服务",
    icon: "🔒",
    iconColor: "orange",
    description: <>为企业提供企业标准、团体标准等服务。</>,
  },
  // {
  //   title: '技术咨询服务',
  //   icon: '💡',
  //   iconColor: 'pink',
  //   description: (
  //     <>
  //       资深技术专家团队提供专业咨询服务，
  //       为企业技术决策提供有力支撑。
  //     </>
  //   ),
  // },
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

export default function Brand(): JSX.Element {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <section className="features-section">
      <div className="container" style={{ width: "80%" }}>
        {/* <div className="tw-max-w-screen-xl tw-mx-auto tw-px-4 tw-md:px-6 tw-lg:px-8"> */}
        {/* <div className="tw-max-w-4xl tw-mx-auto tw-text-center"> */}
        {/* <h2 className="tw-text-3xl tw-leading-9 tw-font-extrabold tw-md:text-4xl tw-md:leading-10">
              Already trusted by your favorite docs
            </h2> */}
        {/* </div> */}
        {/* </div> */}

        <span
          className="gradient-text"
          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          {/* Already trusted by your favorite docs */}
          专业的选择
        </span>

        {/* <div className="refine-grid2  tw-mx-auto " style={{marginTop: '4rem', width: '98%'}}>
          <div className="stats-card2 fade-in-up tw-shadow-xl">
            <span className="stats-number">100+</span>
            <span className="stats-label">成功案例</span>
          </div>
          <div className="stats-card2 fade-in-up tw-shadow-xl">
            <span className="stats-number">50+</span>
            <span className="stats-label">合作企业</span>
          </div>
          <div className="stats-card2 fade-in-up tw-shadow-xl">
            <span className="stats-number">5年+</span>
            <span className="stats-label">行业经验</span>
          </div>
        </div> */}

        {/* <div className="tw-py-16 tw-overflow-hidden">
          <div className="tw-relative tw-max-w-xl tw-mx-auto tw-px-4 tw-md:px-6 tw-lg:px-8 tw-lg:max-w-screen-xl">

          <div className="tw-max-w-screen-xl tw-mx-auto tw-px-4 tw-md:px-6 tw-lg:px-8">
              <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
                <h2 className="tw-text-3xl tw-leading-9 tw-font-extrabold tw-md:text-4xl tw-md:leading-10">
                  Already trusted by your favorite docs
                </h2>
              </div>
            </div>
            <div className="tw-pt-4 tw-pb-12 tw-md:pb-16">
              <div className="tw-relative">
                <div className="tw-relative tw-max-w-screen-xl tw-mx-auto tw-px-4 tw-lg:px-6">
                  <div className="tw-max-w-4xl tw-mx-auto">
                    <dl className="tw-rounded-lg tw-shadow-xl tw-lg:grid tw-lg:grid-cols-3 tw-showcase">

                      <div className="tw-flex tw-flex-col tw-border-b tw-p-6 tw-text-center tw-lg:border-0 tw-showcase-border">
                        <dt className="tw-order-2 tw-mt-2 tw-text-lg tw-leading-6 tw-font-medium tw-text-description" id="item-1">
                          Free Service
                        </dt>
                        <dd
                          className="tw-order-1 tw-text-5xl tw-leading-none tw-font-extrabold tw-text-algolia"
                          aria-describedby="tw-item-1"
                        >
                          100%
                        </dd>
                      </div>

                      <div className="tw-flex tw-flex-col tw-border-t tw-border-b tw-p-6 tw-text-center tw-lg:border-0 tw-lg:border-l tw-showcase-border">
                        <dt className="tw-order-2 tw-mt-2 tw-text-lg tw-leading-6 tw-font-medium tw-text-description">
                          Searches per month
                        </dt>
                        <dd className="tw-order-1 tw-text-5xl tw-leading-none tw-font-extrabold tw-text-algolia">+170M</dd>
                      </div>

                      <div className="tw-flex tw-flex-col tw-border-t tw-p-6 tw-text-center tw-lg:border-0 tw-lg:border-l tw-showcase-border">
                        <dt className="tw-order-2 tw-mt-2 tw-text-lg tw-leading-6 tw-font-medium tw-text-description">DocSearch Live</dt>
                        <dd className="tw-order-1 tw-text-5xl tw-leading-none tw-font-extrabold tw-text-algolia">+7000</dd>
                      </div>

                    </dl>
                  </div>
                </div>
              </div>
            </div>

            </div>
        </div> */}

        {/* <div className="refine-card"> */}
        <div className="">
          {/* <div className="tw-mt-8 tw-grid tw-grid-cols-4 tw-gap-0.5 tw-md:grid-cols-6 tw-lg:mt-0 tw-lg:grid-cols-8"> */}
          <div className="tw-mt-8 tw-grid tw-gap-0.5 md:tw-grid-cols-4 tw-grid-cols-2">
            {showcaseProjects
              // .sort((a, b) => {
              //   return a.index.localeCompare(b.index);
              // })
              .map(({ name, href, image, width, height, marginTop }) => (
                <div
                  key={href}
                  className="tw-col-span-1 tw-flex tw-justify-center tw-py-6 tw-px-2 tw-text-center"
                  // className=""
                >
                  <a
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                    alt={`Discover DocSearch on the ${name} documentation`}
                  >
                    <img
                      // className="tw-inline-block tw-h-10 tw-w-10"
                      // className={`tw-inline-block tw-h-${height} tw-w-${width}`}
                      // className="tw-inline-block tw-h-16"
                      className={`tw-inline-block tw-h-${height}`}
                      // height={height}
                      style={{ marginTop: marginTop }}
                      width={width}
                      src={withBaseUrl(image)}
                      alt={`Discover DocSearch on the ${name} documentation`}
                    />
                    {/* <div className="tw-text-description tw-uppercase tw-text-xs tw-py-2 tw-font-semibold">
                      {name}
                    </div> */}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
