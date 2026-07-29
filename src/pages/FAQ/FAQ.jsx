import React, { useRef, useEffect, useState } from 'react'
import "./FAQ.css";
import "/src/App.css"
import img1 from '../../assets/images/faqp.jpg'
import Nav from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BTT from '../../components/BTT/BTT';
  
const FAQ_DATA = [
  {
    question: 'What types of electronics do you recycle?',
    answer:
      'We recycle a wide range of electronics including computers, laptops, smartphones, tablets, printers, and other electronic devices.',
  },
  {
    question: 'How does the data destruction process work?',
    answer:
      'We use certified data destruction methods that completely erase all data from devices, ensuring your information remains secure.',
  },
  {
    question: 'What are the pickup options available?',
    answer: 'We offer both scheduled pickups and drop-off locations for your convenience.',
  },
  {
    question: 'What are the environmental benefits of recycling with Electrycle?',
    answer:
      'Recycling with us helps reduce electronic waste in landfills, conserves natural resources, and prevents hazardous materials from polluting the environment.',
  },
  {
    question: 'Is there a cost associated with recycling?',
    answer:
      'Most of our recycling services are free for individuals. For businesses and large quantities, we offer competitive pricing.',
  },
]

export default function FAQ({ theme, toggleTheme}) {
  const [openIndex, setOpenIndex] = useState(null)
  const answerRefs = useRef([])

  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return
      if (idx === openIndex) {
        el.style.maxHeight = el.scrollHeight + 'px'
      } else {
        el.style.maxHeight = null
      }
    })
  }, [openIndex])

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
   < div>
      <div className="nav-bar">
        <Nav theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div 
        className="hero-img">
          <img src={img1} alt="Recycling"  />
        </div>
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        <ul className="faq-list">
          {FAQ_DATA.map((item, i) => (
            <li className={`faq-item ${openIndex === i ? 'active' : ''}`} key={i}>
              <div
                className="faq-question"
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggle(i)
                }}
              >
                <span>{item.question}</span>
                <i
                  className="fas fa-chevron-down arrow"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                />
              </div>

              <div
                className="faq-answer"
                ref={(el) => (answerRefs.current[i] = el)}
                aria-hidden={openIndex === i ? 'false' : 'true'}
              >
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Footer/>
    <BTT/>
    </div>
  )
}