import Link from "next/link"
import { Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Volticar</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
            Acerca de
          </Link>
          <Link href="/#features" className="text-sm font-medium transition-colors hover:text-primary">
            Características
          </Link>
          <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Iniciar sesión
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Registrarse</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

