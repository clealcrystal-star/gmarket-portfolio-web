import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { ArrowUp, Download } from 'lucide-react'
import './style.css'

const slides = Array.from({ length: 20 }, (_, i) => ({
  no: i + 1,
  src: `/slides/slide-${String(i + 1).padStart(2, '0')}.png`,
}))

function App() {
  return (
    <main className="app">
      <header className="topbar">
        <a className="brand" href="#slide-1">JUNG SUJUNG PORTFOLIO</a>
        <nav>
          <a href="#slide-2">Profile</a>
          <a href="#slide-5">Kakao</a>
          <a href="#slide-11">App Push</a>
          <a href="#slide-16">LMS</a>
          <a href="#slide-18">DM</a>
        </nav>
      </header>

      <section className="hero" id="slide-1">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-inner"
        >
          <p className="eyebrow">CRM MARKETER PORTFOLIO</p>
          <h1>G마켓 CRM<br />포트폴리오</h1>
          <p className="desc">원본 PPT 내용을 유지하면서 웹에서 보기 좋게 구성한 스크롤형 React 포트폴리오입니다.</p>
          <div className="hero-actions">
            <a href="#slide-2">포트폴리오 보기</a>
            <a href="/slides/slide-01.png" download><Download size={18} /> 첫 장 이미지 저장</a>
          </div>
        </motion.div>
      </section>

      <div className="slide-list">
        {slides.slice(1).map((slide) => (
          <motion.section
            key={slide.no}
            id={`slide-${slide.no}`}
            className="slide-section"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <div className="slide-label">SLIDE {String(slide.no).padStart(2, '0')}</div>
            <img src={slide.src} alt={`정수정 G마켓 CRM 포트폴리오 슬라이드 ${slide.no}`} />
          </motion.section>
        ))}
      </div>

      <a className="floating" href="#slide-1" aria-label="맨 위로 이동"><ArrowUp size={22} /></a>
    </main>
  )
}

export default App
createRoot(document.getElementById('root')).render(<App />)
