"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Car, Battery, RefreshCw, LogOut } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { getAuthToken, logout } from "../../lib/auth"
import { fetchCarros } from "../../lib/api"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [carros, setCarros] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const checkAuthAndFetchCarros = async () => {
      const token = await getAuthToken()

      if (!token) {
        toast({
          title: "Acceso denegado",
          description: "Debe iniciar sesión para acceder a esta página",
          variant: "destructive",
        })
        router.push("/login")
        return
      }

      try {
        const data = await fetchCarros(token)
        setCarros(data)
      } catch (err) {
        console.error("Error fetching cars:", err)
        setError("No se pudieron cargar los carros. Por favor, intente nuevamente.")
        toast({
          title: "Error",
          description: "No se pudieron cargar los carros. Por favor, intente nuevamente.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    checkAuthAndFetchCarros()
  }, [router, toast])

  const handleRefresh = async () => {
    setLoading(true)
    const token = await getAuthToken()

    try {
      const data = await fetchCarros(token)
      setCarros(data)
      toast({
        title: "Actualizado",
        description: "Lista de carros actualizada correctamente",
      })
    } catch (err) {
      console.error("Error refreshing cars:", err)
      toast({
        title: "Error",
        description: "No se pudieron actualizar los carros. Por favor, intente nuevamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await logout()
    toast({
      title: "Sesión cerrada",
      description: "Ha cerrado sesión correctamente",
    })
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Mis Carros Eléctricos</h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleRefresh} disabled={loading}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Actualizar
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-24 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-10 w-full" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={handleRefresh}>Intentar nuevamente</Button>
            </div>
          ) : carros.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No tienes carros eléctricos asociados a tu cuenta.</p>
              <Button onClick={handleRefresh}>Actualizar</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carros.map((carro) => (
                <Card key={carro.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Car className="mr-2 h-5 w-5 text-primary" />
                      {carro.modelo}
                    </CardTitle>
                    <CardDescription>ID: {carro.id}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Marca:</p>
                        <p className="text-muted-foreground">{carro.marca}</p>
                      </div>
                      <div>
                        <p className="font-medium">Año:</p>
                        <p className="text-muted-foreground">{carro.año}</p>
                      </div>
                      <div className="flex items-center">
                        <Battery className="mr-2 h-5 w-5 text-green-500" />
                        <p className="font-medium">Nivel de batería: {carro.bateria}%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Ver detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
