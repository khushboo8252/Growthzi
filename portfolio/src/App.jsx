import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import CaseStudies from './components/CaseStudies/CaseStudies'
import Testimonials from './components/Testimonials/Testimonials'
import RecentWork from './components/Recentwork/Recentwork'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Footer from './components/Footer/Footer'
function App() {
  

  return (
    <>
      <Navbar className="homepage"/>
      <main>
        <section id="home">
          <Header/>
        </section>
        <section id="case-studies">
          <CaseStudies/>
        </section>
        <section id="testimonials">
          <Testimonials/>
        </section>
        <section id="recent-work">
          <RecentWork/>
        </section>
        <section id="get-in-touch">
          <GetInTouch/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
