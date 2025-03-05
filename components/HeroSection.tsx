import React from 'react'

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
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
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="flex flex-col gap-4 text-5xl md:text-7xl font-bold tracking-tight">
          <span>Digitaliza y Organiza</span>
          <span>tus Documentos Médicos</span>
          <span className="text-blue-600 bg-blue-50 inline-block px-6 py-2 rounded-2xl mx-auto">
            Con IA
          </span>
        </h1>
        <p className="text-xl text-gray-600 mt-12 mb-12 max-w-2xl mx-auto leading-relaxed">
          Digitaliza tus exámenes, recetas y diagnósticos en segundos. Nunca más pierdas un documento médico y accede a tu historial desde cualquier lugar.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={scrollToWaitlist}
            className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Únete a la lista de espera
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 