import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
import AboutMe from './views/AboutMe'
import Projects from './views/Projects'
import Contact from './views/Contact'

const App = () => {
  return (
    <main className='bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen'>
      <HeaderApp />
      
      <section id='home' className='scroll-mt-20'>
        <AboutMe />
      </section>

      <section id='projects' className='scroll-mt-20'>
        <Projects />
      </section>

      <section id='contact' className='scroll-mt-20'>
        <Contact />
      </section>

      <FooterApp />
    </main>
  )
}

export default App
