import { QrCode, ClipboardCheck, Users, Battery, Car } from "lucide-react"
import { FeatureCard } from "./FeatureCard"

export function FeaturesSection() {
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

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Características principales</h2>
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
  )
}
