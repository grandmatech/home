import React, { JSX } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/Hero";
import Scenario from "@site/src/components/Scenario";
import Solution from "@site/src/components/Solution";
import Case from "@site/src/components/Case";
import Brand from "@site/src/components/Brand";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="专业的企业信息化解决方案提供商"
    >
      <Hero />
      <main>
        <Solution />
        {/* <Scenario /> */}
        {/* <Case /> */}
        <Brand />
        <section className="features-section2">
          <div className="container" style={{ width: "80%" }}>
            <div className="text--center">
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "2.5rem",
                  marginTop: "-0.8rem",
                  marginBottom: "1rem",
                  color: "white",
                }}
              >
                准备好开启您企业的数智化转型之旅了吗？
              </h2>
            </div>
            <p
              className="text--center"
              style={{
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              立即联系我们的专家，获取专属咨询和解决方案。
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "1rem",
                marginBottom: "-2rem",
              }}
            >
              <Link className="refine-button2" to="/contact">
                免费试用
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
