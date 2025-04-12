// api/cortes.js
export const crearCorte = async (payload) => {
    const res = await fetch('http://localhost:3000/api/cortes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  
    if (!res.ok) {
      throw new Error('Error al crear corte')
    }
  
    return res.json()
  }
  