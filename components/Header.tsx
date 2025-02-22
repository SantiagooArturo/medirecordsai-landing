import React from 'react'

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MediRecords AI</div>
        <div className="hidden md:flex space-x-6">
          <a href="#benefits" className="hover:text-blue-600">Beneficios</a>
          <a href="#how-it-works" className="hover:text-blue-600">Cómo funciona</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonios</a>
          <a href="#faq" className="hover:text-blue-600">Preguntas frecuentes</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Únete a la lista
        </button>
      </nav>
    </header>
  )
}

export default Header 