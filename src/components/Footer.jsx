import Link from "next/link"
import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-muted py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Volticar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluciones inteligentes para la gestión de flotas de vehículos eléctricos empresariales.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Términos de uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: info@volticar.com</li>
              <li className="text-muted-foreground">Teléfono: +57 (444) 444-4444</li>
              <li className="text-muted-foreground">Dirección: 4444</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Volticar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
