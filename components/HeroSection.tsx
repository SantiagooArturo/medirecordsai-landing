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
    <section className="pt-24 md:pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
          {/* Texto principal */}
          <div className="text-center md:text-left w-full md:w-[45%]">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Tu salud,
              <span className="text-blue-600 block">más inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Digitaliza tus documentos médicos con IA y accede a tu historial desde cualquier lugar.
            </p>
            <div className="flex justify-center md:justify-start">
              <button 
                onClick={scrollToWaitlist}
                className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Descarga la app
              </button>
            </div>
          </div>

          {/* Cards de características */}
          <div className="w-full md:w-[55%]">
            <div className="bg-blue-50 rounded-2xl p-4 md:p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md">
                  <div className="text-xl md:text-2xl mb-2">📋</div>
                  <h3 className="font-semibold text-sm md:text-base">Documentos</h3>
                  <p className="text-xs md:text-sm text-gray-600">Digitaliza Recetas, exámenes, etc.</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md">
                  <div className="text-xl md:text-2xl mb-2">🤖</div>
                  <h3 className="font-semibold text-sm md:text-base">IA</h3>
                  <p className="text-xs md:text-sm text-gray-600">Organización automática de tus documentos</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md">
                  <div className="text-xl md:text-2xl mb-2">📱</div>
                  <h3 className="font-semibold text-sm md:text-base">Acceso</h3>
                  <p className="text-xs md:text-sm text-gray-600">Desde cualquier lugar</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-md">
                  <div className="text-xl md:text-2xl mb-2">🔒</div>
                  <h3 className="font-semibold text-sm md:text-base">Comparte</h3>
                  <p className="text-xs md:text-sm text-gray-600">Comparte tus documentos con tu doctor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 