import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
import AboutMe from './view/AboutMe'

const App = () => {
  return (
    <main className='bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen'>
      <HeaderApp />
      
      <section id='home' >
        <AboutMe />
      </section>

      <section id='projects' >
        
      </section>

      <section id='contact' >
        
      </section>

      <FooterApp />
    </main>
  )
}

export default App
