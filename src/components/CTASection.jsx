import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
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
            <Button size="lg" variant="secondary">
              Solicitar demostración
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
  )
}
