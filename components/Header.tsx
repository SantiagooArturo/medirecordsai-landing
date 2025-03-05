import React from 'react'

const Header = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // altura del header
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          MediRecords AI
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-blue-600">Beneficios</a>
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="hover:text-blue-600">Cómo funciona</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="hover:text-blue-600">Testimonios</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-blue-600">Preguntas frecuentes</a>
        </div>
        <button 
          onClick={(e) => scrollToSection(e, 'waitlist')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Únete a la lista
        </button>
      </nav>
    </header>
  )
}

export default Header 