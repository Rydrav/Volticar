"use client"

import Cookies from "js-cookie"

const TOKEN_KEY = "volticar_auth_token"

export async function login(username, password) {
  try {
    console.log("Intentando iniciar sesión con:", { username, password })

    // Verificar si las credenciales son admin/admin para desarrollo local
    if (username === "admin" && password === "admin") {
      // Para desarrollo, simular un token exitoso
      const mockToken = "mock_token_" + Math.random().toString(36).substring(2)
      Cookies.set(TOKEN_KEY, mockToken, { expires: 1 })
      console.log("Login exitoso con credenciales hardcodeadas")
      return true
    }

    // Si no son las credenciales hardcodeadas, intentar con la API
    const response = await fetch("https://carros-electricos.wiremockapi.cloud/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })

    console.log("Respuesta de la API:", response.status)

    if (!response.ok) {
      console.error("Error en la respuesta de la API:", response.status)
      return false
    }

    const data = await response.json()
    console.log("Datos recibidos:", data)

    if (data.token) {
      // Store token in cookie (expires in 1 day)
      Cookies.set(TOKEN_KEY, data.token, { expires: 1 })
      return true
    }

    return false
  } catch (error) {
    console.error("Login error:", error)
    return false
  }
}

export async function logout() {
  Cookies.remove(TOKEN_KEY)
}

export async function getAuthToken() {
  return Cookies.get(TOKEN_KEY)
}

export async function isAuthenticated() {
  const token = await getAuthToken()
  return !!token
}
