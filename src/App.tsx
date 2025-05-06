import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'


const App = () => {
  return (
    <main className='bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen'>
      <HeaderApp />
      
      <section id='home' className='h-screen flex items-center justify-center'>
        <h2 className='text-2xl font-semibold'>Bienvenido a mi portafolio</h2>
      </section>

      <section id='projects' className='h-screen flex items-center justify-center'>
        <h2 className='text-2xl font-semibold'>Proyectos</h2>
      </section>

      <section id='contact' className='h-screen flex items-center justify-center'>
        <h2 className='text-2xl font-semibold'>Contacto</h2>
      </section>

      <FooterApp />
    </main>
  )
}

export default App
