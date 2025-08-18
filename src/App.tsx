import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
import AboutMe from './views/AboutMe'
import Projects from './views/Projects'
import Contact from './views/Contact'

const App = () => {
  return (
    <main className='bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen flex flex-col'>
      <HeaderApp />
      
      <section id='home' className='scroll py-8 px-4 sm:px-6 lg:px-8'>
        <AboutMe />
      </section>

      <section id='projects' className='scroll py-8 px-4 sm:px-6 lg:px-8'>
        <Projects />
      </section>

      <section id='contact' className='scroll py-8 px-4 sm:px-6 lg:px-8'>
        <Contact />
      </section>

      <FooterApp />
    </main>
  )
}

export default App
