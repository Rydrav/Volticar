import { TestimonialCard } from "./TestimonialCard"

export function TestimonialsSection() {
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
  )
}

