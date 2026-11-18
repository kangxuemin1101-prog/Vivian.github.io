// ============================================
// 个人名片页：所有要改的内容都在这个文件里，
// 找到标着「改这里」的注释，换成你自己的内容就行。
// ============================================

import { useState } from 'react'

// ↓↓↓ 改这里：你的基本信息 ↓↓↓
const profile = {
  name: '你的名字',
  role: '你的职业 / 身份，比如：市场运营 · 正在探索 AI',
  bio: '一句话介绍自己，比如：相信长期主义，正在把工科背景和市场经验拼成自己的路。',
  avatarText: '你', // 头像圆圈里显示的字，换成你的姓或名字首字
  email: 'you@example.com',
  wechat: 'your-wechat-id', // 公开页面建议别放真实微信号，容易被骚扰；可以留空
}

// ↓↓↓ 改这里：你要放的链接，不需要的行直接删掉 ↓↓↓
const links = [
  { label: '小红书', url: 'https://www.xiaohongshu.com/' },
  { label: 'B 站', url: 'https://www.bilibili.com/' },
  { label: 'GitHub', url: 'https://github.com/' },
]

// ↓↓↓ 改这里：关于我，写 3-4 条即可 ↓↓↓
const about = [
  '第一条：你正在做的事',
  '第二条：你擅长或感兴趣的方向',
  '第三条：你想连接什么样的人',
]

export default function App() {
  const [copied, setCopied] = useState(false)

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(profile.wechat)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // 剪贴板不可用时不做任何事，按钮保持原样
      setCopied(false)
    }
  }

  return (
    <main className="page">
      <section className="card">
        <div className="avatar">{profile.avatarText}</div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="bio">{profile.bio}</p>

        <div className="actions">
          <a className="btn primary" href={`mailto:${profile.email}`}>发邮件</a>
          <button className="btn" onClick={copyWechat}>
            {copied ? '微信号已复制' : '复制微信号'}
          </button>
        </div>

        <div className="links">
          {links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="card about">
        <h2>关于我</h2>
        <ul>
          {about.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer>用 React + Vite 搭建 · 部署在 GitHub Pages</footer>
    </main>
  )
}