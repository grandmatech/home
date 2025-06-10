import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout
      title="关于我们"
      description="了解TechSolutions Pro - 专业的企业信息化解决方案提供商">
      <main>
        <div className="container section-padding">
        <div className="text--center margin-bottom--xl">
            <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>关于我们</h1>
            <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)'}}>
              专注于为企业提供卓越的信息化解决方案
            </p>
          </div>

          <div className="row margin-bottom--xl">
            <div className="col col--6">
              <h2>公司简介</h2>
              <p>
                TechSolutions Pro 成立于2015年，是一家专注于企业信息化服务的高新技术公司。
                我们拥有资深的技术团队和丰富的项目经验，致力于为客户提供全方位的数字化转型解决方案。
              </p>
              <p>
                经过多年的发展，我们已经服务了超过500家企业客户，涵盖制造业、金融、教育、
                医疗、电商等多个行业，帮助客户实现了显著的效率提升和成本优化。
              </p>
            </div>
            <div className="col col--6">
              <div className="feature-card">
                <h3>我们的使命</h3>
                <p>通过先进的技术和专业的服务，帮助企业实现数字化转型，提升竞争力和可持续发展能力。</p>

                <h3>我们的愿景</h3>
                <p>成为中国领先的企业信息化服务提供商，推动产业数字化升级。</p>

                <h3>核心价值观</h3>
                <ul>
                  <li>专业：持续提升技术能力和服务水平</li>
                  <li>创新：拥抱新技术，探索最佳实践</li>
                  <li>诚信：以客户为中心，诚信经营</li>
                  <li>共赢：与客户、合作伙伴共同成长</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="margin-bottom--xl">
            <h2 className="text--center margin-bottom--lg">团队优势</h2>
            <div className="features">
              <div className="feature-card">
                <div className="feature-card__icon">👥</div>
                <h3 className="feature-card__title">专业团队</h3>
                <p className="feature-card__description">
                  拥有50+技术专家，平均从业经验8年以上，涵盖前端、后端、
                  移动端、大数据、云计算等各个技术领域。
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">🏆</div>
                <h3 className="feature-card__title">丰富经验</h3>
                <p className="feature-card__description">
                  累计完成200+大型项目，服务500+企业客户，
                  在多个行业具有深厚的业务理解和技术积累。
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-card__icon">🔧</div>
                <h3 className="feature-card__title">技术实力</h3>
                <p className="feature-card__description">
                  掌握主流技术栈，紧跟技术发展趋势，
                  具备从需求分析到系统上线的全栈开发能力。
                </p>
              </div>
            </div>
          </div>

          <div className="margin-bottom--xl">
            <h2 className="text--center margin-bottom--lg">发展历程</h2>
            <div className="timeline">
              <div style={{background: 'var(--ifm-background-surface-color)', padding: '2rem', borderRadius: '12px'}}>
                <div className="row margin-bottom--lg">
                  <div className="col col--3">
                    <h3 style={{color: 'var(--ifm-color-primary)'}}>2015年</h3>
                  </div>
                  <div className="col col--9">
                    <h4>公司成立</h4>
                    <p>在北京成立，专注于企业级软件开发服务</p>
                  </div>
                </div>

                <div className="row margin-bottom--lg">
                  <div className="col col--3">
                    <h3 style={{color: 'var(--ifm-color-primary)'}}>2017年</h3>
                  </div>
                  <div className="col col--9">
                    <h4>业务扩展</h4>
                    <p>团队扩展到30人，服务客户数突破100家</p>
                  </div>
                </div>

                <div className="row margin-bottom--lg">
                  <div className="col col--3">
                    <h3 style={{color: 'var(--ifm-color-primary)'}}>2019年</h3>
                  </div>
                  <div className="col col--9">
                    <h4>技术升级</h4>
                    <p>全面拥抱云原生技术，建立DevOps能力</p>
                  </div>
                </div>

                <div className="row margin-bottom--lg">
                  <div className="col col--3">
                    <h3 style={{color: 'var(--ifm-color-primary)'}}>2021年</h3>
                  </div>
                  <div className="col col--9">
                    <h4>规模化发展</h4>
                    <p>团队规模达到50人，年营收突破5000万</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col col--3">
                    <h3 style={{color: 'var(--ifm-color-primary)'}}>2024年</h3>
                  </div>
                  <div className="col col--9">
                    <h4>AI时代</h4>
                    <p>积极布局AI应用，为客户提供智能化解决方案</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
