export async function fetchCarros(token) {
  try {
    console.log("Fetching carros with token:", token)
    if (token && token.startsWith("mock_token_")) {
      console.log("Usando datos mock para desarrollo")
      return [
        {
          id: "1",
          marca: "Tesla",
          modelo: "Model 3",
          año: 2023,
          bateria: 85,
        },
        {
          id: "2",
          marca: "Nissan",
          modelo: "Leaf",
          año: 2022,
          bateria: 72,
        },
        {
          id: "3",
          marca: "Chevrolet",
          modelo: "Bolt EV",
          año: 2021,
          bateria: 65,
        },
      ]
    }

    const response = await fetch("https://carros-electricos.wiremockapi.cloud/carros", {
      method: "GET",
      headers: {
        Authentication: token,
      },
    })

    if (!response.ok) {
      console.error("Error en la respuesta de la API:", response.status)
      throw new Error(`Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching cars:", error)
    throw error
  }
}
