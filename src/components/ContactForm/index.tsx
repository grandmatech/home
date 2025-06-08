import React, { useState } from 'react';

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    console.log('表单数据:', formData);
    alert('感谢您的咨询，我们会尽快与您联系！');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 style={{marginBottom: '2rem', textAlign: 'center'}}>立即咨询</h3>

      <div className="form-group">
        <label htmlFor="name">姓名 *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">公司名称 *</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="row">
        <div className="col col--6">
          <div className="form-group">
            <label htmlFor="email">邮箱 *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col col--6">
          <div className="form-group">
            <label htmlFor="phone">联系电话</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service">感兴趣的服务</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">请选择服务类型</option>
          <option value="enterprise-app">企业级应用开发</option>
          <option value="cloud-native">云原生解决方案</option>
          <option value="data-platform">数据平台建设</option>
          <option value="mobile-app">移动应用开发</option>
          <option value="consulting">技术咨询服务</option>
          <option value="other">其他</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">项目描述</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="请简要描述您的项目需求..."
        />
      </div>

      <div className="text--center">
        <button type="submit" className="btn-primary">
          提交咨询
        </button>
      </div>
    </form>
  );
}
