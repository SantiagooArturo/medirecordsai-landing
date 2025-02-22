import React from 'react'
import { ScanLine, Brain, Share2 } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <ScanLine className="w-16 h-16" />,
      title: "Escanea o sube tus documentos médicos",
      description: "Recetas, exámenes, diagnósticos."
    },
    {
      icon: <Brain className="w-16 h-16" />,
      title: "La IA organiza todo automáticamente",
      description: "Y te notifica sobre citas."
    },
    {
      icon: <Share2 className="w-16 h-16" />,
      title: "Accede y comparte con un clic",
      description: "Cuando lo necesites."
    }
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Cómo funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="text-blue-600 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 