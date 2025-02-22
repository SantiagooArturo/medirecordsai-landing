import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Paciente oncológica",
      quote: "Con tantos exámenes y diagnósticos diferentes, antes tenía que explicar mi historial una y otra vez. Ahora solo comparto mi perfil y cada doctor tiene toda mi información al instante.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Usuario Beta",
      role: "Paciente",
      quote: "Antes perdía mis exámenes, ahora los tengo siempre listos en mi celular.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Médico Internista",
      quote: "Con MediRecords AI, mis pacientes llegan a consulta con su historial completo y organizado. Esto me permite dar un mejor diagnóstico y seguimiento.",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 