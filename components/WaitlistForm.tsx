"use client"

import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Inicializar EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const templateParams = {
        to_email: 'medirecordsai@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        role: formData.role,
        message: `
Nuevo registro en la lista de espera:

Nombre: ${formData.name}
Email: ${formData.email}
Rol: ${formData.role}
        `.trim()
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      )

      // Reset form
      setFormData({ name: '', email: '', role: '' })
      alert('¡Gracias por unirte a la lista de espera! Nos pondremos en contacto pronto.')
    } catch (error) {
      console.error('Error al enviar el correo:', error)
      alert('Hubo un error al enviar tu información. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="waitlist" className="py-32 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Únete a la lista de espera</h2>
          <p className="mb-8">Sé de los primeros en experimentar el futuro de la gestión de registros médicos.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu correo electrónico"
                required
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                disabled={isSubmitting}
              >
                <option value="">Selecciona tu rol</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Paciente</option>
                <option value="medical_admin">Administrador médico</option>
                <option value="other_health">Otro profesional de la salud</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Unirme a la lista de espera'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default WaitlistForm

