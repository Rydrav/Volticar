import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
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
              <Button size="lg">
                Comenzar ahora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Conocer más
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <Image
              src="/placeholder.svg?height=550&width=800"
              width={800}
              height={550}
              alt="Carro eléctrico"
              className="w-full rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
