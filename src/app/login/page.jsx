"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { SocialLoginButtons } from "@/components/SocialLoginButtons"
import { login } from "../../lib/auth"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(formData.username, formData.password)

      if (success) {
        toast({
          title: "Inicio de sesión exitoso",
          description: "Redirigiendo al dashboard...",
          variant: "success",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Error de autenticación",
          description: "Usuario o contraseña incorrectos",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al iniciar sesión. Intente nuevamente.",
        variant: "destructive",
      })
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

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

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-base">
                    Usuario
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Nombre de usuario"
                      className="pl-10 py-6 text-base"
                      value={formData.username}
                      onChange={handleChange}
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
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Ingresa tu contraseña"
                      className="pl-10 py-6 text-base"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-lg" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
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
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
