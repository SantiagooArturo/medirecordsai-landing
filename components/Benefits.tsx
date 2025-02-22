import React from 'react'

const Benefits = () => {
  const benefits = [
    {
      title: "Historial unificado",
      description: "Escanea y guarda tus exámenes, recetas y diagnósticos fácilmente.",
      icon: "🤖"
    },
    {
      title: "Recordatorio de citas",
      description: "Nunca más olvides una consulta médica.",
      icon: "⏱️"
    },
    {
      title: "Mejor atención",
      description: "Comparte tu historial con tus médicos de confianza.",
      icon: "✓"
    },
    {
      title: "Seguridad total",
      description: "Tus datos están protegidos con cifrado de nivel médico.",
      icon: "🔒"
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Beneficios clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits 