"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronRight, QrCode, ClipboardCheck, Users, Battery, Car } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FeatureCard } from "@/components/FeatureCard"
import { TestimonialCard } from "@/components/TestimonialCard"
import { getAuthToken } from "../lib/auth"

export default function LandingPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const token = await getAuthToken()
      setIsLoggedIn(!!token)
    }

    checkAuth()
  }, [])

  const handleMyCarsClick = () => {
    if (isLoggedIn) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }

  const features = [
    {
      icon: QrCode,
      title: "Escaneo QR",
      description: "Identifica rápidamente cada vehículo mediante códigos QR, facilitando el registro y seguimiento.",
    },
    {
      icon: ClipboardCheck,
      title: "Registro detallado",
      description:
        "Documenta el estado de llantas, chasis, puertas y añade observaciones específicas para cada vehículo.",
    },
    {
      icon: Users,
      title: "Asignación a empleados",
      description:
        "Gestiona fácilmente qué empleado utiliza cada vehículo y mantén un historial completo de asignaciones.",
    },
    {
      icon: Battery,
      title: "Control de carga",
      description: "Monitorea el estado de carga de la batería y programa recargas de manera eficiente.",
    },
    {
      icon: Car,
      title: "Historial completo",
      description:
        "Accede al historial completo de cada vehículo, incluyendo mantenimientos, incidencias y asignaciones.",
    },
  ]

  const testimonials = [
    {
      name: "María Rodríguez",
      position: "Gerente de Flota, Empresa Energía Verde",
      testimonial:
        '"Volticar ha simplificado enormemente nuestra gestión de vehículos eléctricos. El sistema de escaneo QR y el registro detallado nos permiten mantener un control preciso de nuestra flota."',
    },
    {
      name: "Carlos Méndez",
      position: "Director de Operaciones, Transportes Eléctricos S.A.",
      testimonial:
        '"Desde que implementamos Volticar, hemos reducido los tiempos de asignación de vehículos y mejorado el mantenimiento preventivo. Una herramienta indispensable para nuestra operación diaria."',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gestiona tus carros eléctricos de manera sencilla y eficiente
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Volticar te permite asignar, monitorear y mantener tu flota de vehículos eléctricos con facilidad.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" onClick={handleMyCarsClick}>
                    {isLoggedIn ? "Ver mis carros" : "Comenzar ahora"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Conocer más
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/images/carro_electrico.webp"
                  width={800}
                  height={550}
                  alt="Carro eléctrico"
                  className="w-full rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Acerca de Volticar</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Volticar es una plataforma integral para la gestión de flotas de vehículos eléctricos empresariales.
                Nuestra solución permite asignar carros a empleados, registrar el estado del vehículo (llantas, chasis,
                puertas) y realizar un seguimiento detallado mediante tecnología de escaneo QR.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Características principales
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre cómo Volticar simplifica la gestión de tu flota de vehículos eléctricos
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                  <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comienza a gestionar tu flota hoy mismo
              </h2>
              <p className="max-w-[85%] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Únete a las empresas que ya optimizan la gestión de sus vehículos eléctricos con Volticar
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" onClick={handleMyCarsClick}>
                  {isLoggedIn ? "Ver mis carros" : "Solicitar demostración"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contactar con ventas
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Lo que dicen nuestros clientes
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Descubre cómo Volticar ha transformado la gestión de flotas eléctricas en diferentes empresas
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    position={testimonial.position}
                    testimonial={testimonial.testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
