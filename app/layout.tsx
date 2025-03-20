import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "VitalDum AI",
  description: "Tu historial médico digital, seguro y accesible.",
  openGraph: {
    title: 'VitalDum AI',
    description: 'Tu historial médico digital, seguro y accesible.',
    images: [
      {
        url: '/og-image.png', // Esta será la ruta de la imagen
        width: 1200,
        height: 630,
        alt: 'VitalDum AI Logo'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VitalDum AI',
    description: 'Tu historial médico digital, seguro y accesible.',
    images: ['/og-image.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  )
} 