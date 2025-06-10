import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';

export default function Hero(): JSX.Element {
  return (
    <header className="hero">
      <div className="container">
       {/* <div className="refine-grid"> */}
        <div className="text--center">
          <h1 className="hero__title fade-in-up" style={{marginTop: '1.8rem', marginBottom: '1.8rem'}}>
            {/* 引领企业数字化转型 */}
            格岚玛科技
          </h1>
          <p className="hero__subtitle fade-in-up">
            {/* 我们是 */}
            专业的信息化服务提供商，致力于通过创新技术帮助企业实现数字化转型，提升竞争力
          </p>

        </div>


        {/* <div className="tw-col tw-col--1 tw-text-center" style={{ marginRight: '1.2vw' }}>1</div>
        <div className="tw-col tw-col--6 tw-text-center">2</div> */}
        {/* <div className="tw-col tw-hero-image" style={{marginRight: '0vw'}}>
          <ThemedImage
            sources={{
              light: 'https://cdn.jsdelivr.net/gh/Jakkwj/simpo_resource@master/simpo_resource/source/_static/images/banner/banner3.png',
              dark: 'https://cdn.jsdelivr.net/gh/Jakkwj/simpo_resource@master/simpo_resource/source/_static/images/banner/banner3.png',
              // light: siteConfig.customFields.imgUrlBanner,
              // dark: siteConfig.customFields.imgUrlBanner,
            }}
            alt="Preview of using SIMPO"
            width='75%'
          />
        </div> */}
{/* </div> */}

          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link
              className="refine-button"
              to="/services">
              了解服务 →
            </Link>
            <Link
              className="refine-button refine-button--secondary"
              to="/contact">
              联系我们
            </Link>
          </div>


        {/* 统计数据 */}
        {/* <div className="refine-grid2" style={{marginTop: '4rem'}}>
          <div className="stats-card2 fade-in-up">
            <span className="stats-number">100+</span>
            <span className="stats-label">成功案例</span>
          </div>
          <div className="stats-card2 fade-in-up">
            <span className="stats-number">50+</span>
            <span className="stats-label">合作企业</span>
          </div>
          <div className="stats-card2 fade-in-up">
            <span className="stats-number">5年+</span>
            <span className="stats-label">行业经验</span>
          </div>
        </div> */}

      </div>
    </header>
  );
}
