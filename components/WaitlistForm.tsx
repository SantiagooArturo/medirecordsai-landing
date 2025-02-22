"use client"

import React, { useState } from 'react'

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', role: '' })
    alert('¡Gracias por unirte a la lista de espera! Nos pondremos en contacto pronto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="py-20 bg-blue-600">
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
              />
            </div>
            <div>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg text-gray-900"
              >
                <option value="">Selecciona tu rol</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Enfermero/a</option>
                <option value="admin">Administrador médico</option>
                <option value="other">Otro profesional de la salud</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Unirme a la lista de espera
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default WaitlistForm

