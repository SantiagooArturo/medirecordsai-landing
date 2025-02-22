'use client'

import React from 'react'
import './globals.css'
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Benefits from "@/components/Benefits"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import WaitlistForm from "@/components/WaitlistForm"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="font-poppins min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <WaitlistForm />
      <FAQ />
      <Footer />
    </main>
  )
} 