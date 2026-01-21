import React from "react";
import Layout from "@theme/Layout";
import ContactForm from "@site/src/components/ContactForm";

export default function Contact(): JSX.Element {
  return (
    <Layout
      title="联系我们"
      description="联系TechSolutions Pro，获取专业的信息化解决方案"
    >
      <main>
        <div className="container section-padding">
          <div className="text--center margin-bottom--xl">
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>联系我们</h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--ifm-color-emphasis-700)",
              }}
            >
              让我们一起探讨您的数字化转型需求
            </p>
          </div>

          <div className="row margin-bottom--xl">
            <div
              className="col col--8"
              // style={{
              //   width: "92%",
              //   height: "90%" /* 或者是固定的 px，如 600px */,
              //   overflow: "hidden" /* 关键：切掉多余部分 */,
              //   margin: "0 auto" /* 可选：居中 */,
              // }}
            >
              {/* <ContactForm /> */}
              <iframe
                width="94%"
                height="99%"
                style={{
                  padding: "0",
                  border: "none",
                  overflow: "hidden", // CSS 辅助禁止
                }}
                src="https://t5yytcfgmv.jiandaoyun.com/f/696eddcf7e2d3b970bcb9e29?embed=true"
              ></iframe>
            </div>

            <div className="col col--4">
              <div className="feature-card">
                <h3>联系信息</h3>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h4>🏢 公司地址</h4>
                  <p>
                    · 广州市番禺区新造镇和平路1号19号仓105
                    {/* <br /> */}
                    {/* 19号仓105 */}
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h4>📞 联系电话</h4>
                  <p>
                    · 139 xxxx xxxx
                    {/* 销售热线： */}
                    {/* <br /> */}
                    {/* 技术支持：400-888-0002 */}
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h4>📧 邮箱地址</h4>
                  <p>
                    · grandmatech@126.com
                    {/* 商务合作： */}
                    {/* <br /> */}
                    {/* 技术支持：support@techsolutions.com */}
                  </p>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h4>🕐 工作时间</h4>
                  <p>
                    周一至周五：9:00 - 18:00
                    <br />
                    周六：9:00 - 12:00
                  </p>
                </div>

                {/* <div>
                  <h4>🌐 关注我们</h4>
                  <p>
                    <a href="#" style={{ marginRight: "1rem" }}>
                      微信公众号
                    </a>
                    <a href="#" style={{ marginRight: "1rem" }}>
                      LinkedIn
                    </a>
                    <a href="#">GitHub</a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
