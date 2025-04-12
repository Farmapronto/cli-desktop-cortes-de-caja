// cortes.services.js
export const crearCorte = async (payload) => {
  const res = await fetch('http://localhost:3000/api/cortes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}))
    console.error('❗ Error body del backend:', errorBody)
    throw new Error(errorBody.message || 'Error al crear corte')
  }

  return res.json()
}
