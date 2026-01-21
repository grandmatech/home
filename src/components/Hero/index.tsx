import React, { JSX } from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import config from "@generated/docusaurus.config";

// const Hero: React.FC = () => {
export default function Hero(): JSX.Element {
  return (
    <div className="hero tw-bg-white tw-py-16">
      <div className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-items-center">
          {/* 左侧：企业标题和描述 */}
          <div
            className="tw-text-left"
            style={{
              marginTop: "1rem",
              marginLeft: "10%",
            }}
          >
            <h1
              className="hero__title fade-in-up"
              style={{ marginTop: "1.8rem", marginBottom: "2.2rem" }}
            >
              {/* 引领企业数字化转型 */}
              格岚玛科技
            </h1>
            <p
              className="hero__subtitle fade-in-up"
              style={{ marginBottom: "2.2rem" }}
            >
              {/* 我们是 */}
              专业的信息化服务提供商，致力于通过创新技术帮助企业实现数字化转型，提升竞争力
            </p>
            <div className="tw-flex tw-flex-wrap tw-gap-4">
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link className="refine-button" to="/solution_docs">
                  了解服务 →
                </Link>
                <Link
                  className="refine-button refine-button--secondary"
                  to="/contact"
                >
                  {/* 联系我们 */}
                  免费试用
                </Link>
              </div>
              {/*
              <a
                href="/docs/intro" // 替换为您的文档链接
                className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"
              >
                <Translate id="hero.button.primary" description="The primary button text">
                  了解更多
                </Translate>
              </a>
              <a
                href="/contact" // 替换为您的联系页面链接
                className="tw-bg-gray-200 hover:tw-bg-gray-300 tw-text-gray-800 tw-font-bold tw-py-2 tw-px-4 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"
              >
                <Translate id="hero.button.secondary" description="The secondary button text">
                  联系我们
                </Translate>
              </a> */}
            </div>
          </div>

          {/* 右侧：图片 */}
          <div className="tw-flex tw-justify-left">
            <img
              // src="img/hero.png" // 替换为您的图片路径
              // src={config.customFields.imgUrlHero as string}
              src="img/crm_数据可视.gif"
              alt="企业信息化解决方案"
              width="80%"
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginTop: "2rem",
                marginLeft: "10%",
              }}
            />
            {/* className="tw-rounded-lg tw-shadow-lg" */}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Hero;
