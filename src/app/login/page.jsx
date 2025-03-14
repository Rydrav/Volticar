"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PasswordInput } from "@/components/PasswordInput"
import { SocialLoginButtons } from "@/components/SocialLoginButtons"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-3">Iniciar Sesión</h1>
            <p className="text-muted-foreground text-center text-lg mb-12">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Correo electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      className="pl-10 py-6 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-base">
                      Contraseña
                    </Label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <PasswordInput />
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-lg">
                Iniciar Sesión
              </Button>

              <div className="text-center">
                <span className="text-muted-foreground text-base">
                  ¿No tienes una cuenta?{" "}
                  <Link href="/register" className="text-primary hover:underline font-medium">
                    Regístrate
                  </Link>
                </span>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-background px-4 text-muted-foreground">O continúa con</span>
                </div>
              </div>

              <SocialLoginButtons />

              <div className="text-center text-sm text-muted-foreground">
                Al iniciar sesión, aceptas nuestros{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Términos de servicio
                </Link>{" "}
                y{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}