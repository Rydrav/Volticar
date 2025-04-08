export function AboutSection() {
    return (
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Acerca de Volticar</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Volticar es una plataforma integral para la gestión de flotas de vehículos eléctricos empresariales. Nuestra
              solución permite asignar carros a empleados, registrar el estado del vehículo (llantas, chasis, puertas) y
              realizar un seguimiento detallado mediante tecnología de escaneo QR.
            </p>
          </div>
        </div>
      </section>
    )
  }
    