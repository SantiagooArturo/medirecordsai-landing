"use client"

import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const WaitlistForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_role: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      if (!formRef.current) return

      const result = await emailjs.sendForm(
        'service_tak5hya',
        'template_gvbmr7h',
        formRef.current,
        'IxLTO8jLjRWeSLYCR'
      )

      console.log('Email enviado exitosamente:', result.text)

      // Reset form
      setFormData({ user_name: '', user_email: '', user_role: '' })
      alert('¡Gracias por unirte a la lista de espera! Nos pondremos en contacto pronto.')
    } catch (error) {
      console.error('Error detallado al enviar el correo:', error)
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
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
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
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Tu correo electrónico"
                required
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <select
                name="user_role"
                value={formData.user_role}
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

