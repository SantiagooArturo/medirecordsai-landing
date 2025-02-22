import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cómo funciona el escaneo de documentos médicos?",
      answer: "Es muy sencillo: solo toma una foto de tu receta, examen o diagnóstico con tu celular. Nuestra IA extraerá automáticamente la información importante como fechas, medicamentos y valores de laboratorio, organizándolo todo por ti. No necesitas escribir nada manualmente."
    },
    {
      question: "¿Qué pasa si cambio de médico o clínica?",
      answer: "Con MediRecords AI puedes compartir tu historial médico completo con cualquier doctor en segundos. Generamos un resumen PDF organizado que incluye tus exámenes, diagnósticos y tratamientos anteriores, facilitando la continuidad de tu atención médica."
    },
    {
      question: "¿Cómo me ayuda con mis medicamentos?",
      answer: "La app te envía recordatorios inteligentes para tomar tus medicamentos y renovar recetas antes de que se acaben. También te alerta sobre próximas citas médicas y cuando es momento de repetir exámenes de control."
    },
    {
      question: "¿Es seguro guardar mi información médica en la app?",
      answer: "Tu privacidad es nuestra prioridad. Utilizamos el mismo nivel de encriptación que los bancos y cumplimos con todas las regulaciones de protección de datos médicos (HIPAA). Solo tú decides con quién compartir tu información."
    },
    {
      question: "¿Cuánto cuesta usar la aplicación?",
      answer: "Puedes comenzar gratis y guardar tus primeros documentos sin costo. Para funciones avanzadas como escaneo ilimitado con IA, recordatorios inteligentes y almacenamiento adicional, ofrecemos planes premium accesibles. Próximamente también tendremos descuentos exclusivos en farmacias para nuestros usuarios."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ 