import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MediRecords AI</h3>
            <p className="text-gray-400">
              Transformando la gestión de registros médicos con inteligencia artificial.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-gray-400 hover:text-white">Beneficios</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white">Cómo funciona</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonios</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Términos de servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cumplimiento HIPAA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Correo: info@medirecordsai.com</li>
              <li className="text-gray-400">Teléfono: (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediRecords AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 