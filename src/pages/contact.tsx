import React from 'react';
import Layout from '@theme/Layout';
import ContactForm from '@site/src/components/ContactForm';

export default function Contact(): JSX.Element {
  return (
    <Layout
      title="联系我们"
      description="联系TechSolutions Pro，获取专业的信息化解决方案">
      <main>
        <div className="container section-padding">
          <div className="text--center margin-bottom--xl">
            <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>联系我们</h1>
            <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)'}}>
              让我们一起探讨您的数字化转型需求
            </p>
          </div>

          <div className="row margin-bottom--xl">
            <div className="col col--8">
              <ContactForm />
            </div>

            <div className="col col--4">
              <div className="feature-card">
                <h3>联系信息</h3>

                <div style={{marginBottom: '1.5rem'}}>
                  <h4>🏢 公司地址</h4>
                  <p>北京市朝阳区建国门外大街1号<br/>国贸大厦A座2000室</p>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <h4>📞 联系电话</h4>
                  <p>销售热线：400-888-0001<br/>技术支持：400-888-0002</p>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <h4>📧 邮箱地址</h4>
                  <p>商务合作：business@techsolutions.com<br/>技术支持：support@techsolutions.com</p>
                </div>

                <div style={{marginBottom: '1.5rem'}}>
                  <h4>🕐 工作时间</h4>
                  <p>周一至周五：9:00 - 18:00<br/>周六：9:00 - 12:00</p>
                </div>

                <div>
                  <h4>🌐 关注我们</h4>
                  <p>
                    <a href="#" style={{marginRight: '1rem'}}>微信公众号</a>
                    <a href="#" style={{marginRight: '1rem'}}>LinkedIn</a>
                    <a href="#">GitHub</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
