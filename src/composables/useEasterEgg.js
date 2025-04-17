// src/composables/useEasterEgg.js
import { ref } from 'vue'

export default function useEasterEgg(triggerLimit = 5, phrases = []) {
  const clickCount = ref(0)
  const showModal = ref(false)
  const selectedPhrase = ref('')
  let timer = null

  const defaultPhrases = [
    '🧾 Ni el sistema ni el cliente podrán contigo hoy!',
    '💊 Un buen día empieza con una sonrisa… y un escaneo exitoso del código de barras.',
    '🧠 Recuerda: si puedes dar cambio exacto sin ver la caja... ¡puedes con cualquier cosa!',
    '😄 Cliente feliz, tú feliz… ¡y la caja cuadrada al final del día!',
    '🔄 Si se te cae el sistema... ¡no tú! Tú te mantienes en línea siempre.',
    '🕐 Las filas se acaban, pero tu buena actitud no.',
    '💸 No eres un cajero cualquiera… ¡eres un farmacash hero!',
    '☕ No olvides tu break… ni tu sonrisa.',
    '🧮 El cliente puede confundirse… pero tú siempre sabes cuánto es 3x2 más el IVA.',
    '🎯 Código leído a la primera: hoy es tu día.',
    '🎁 Si alguien merece una promo exclusiva, ¡eres tú!',
    '📦 Stock agotado no significa energía agotada. ¡Ánimo!',
    '🐢 Aunque el sistema vaya lento... tu buena vibra siempre va rápido.',
    '🧘‍♂️ Respira... es solo otro pedido urgente sin receta.',
    '💙 Farmapronto sin ti no es lo mismo. Gracias por hacerlo funcionar todos los días.',
    '🦸‍♂️ Eres el superhéroe de la caja, ¡y no necesitas capa!',
    '🚀 Cada día es una nueva oportunidad para ser el mejor en lo que haces.',
    '🍀 La suerte no existe, pero tú siempre la traes contigo.',
    '🎉 Cada cliente es una nueva aventura. ¡Hazla memorable!',
    '🧩 Cada escaneo es una pieza más en el rompecabezas de tu día.',
    '💪 No importa cuántos clientes lleguen, tú siempre estás listo para el desafío.',
    '🌟 Cada día es una nueva oportunidad para brillar.',
    '🎈 La vida es como un escáner: a veces hay que ajustar el enfoque para ver lo mejor.',
    '💡 La creatividad es la clave para resolver cualquier problema.',
    '🌈 Cada cliente es una nueva oportunidad para hacer magia.',
    '🌻 La actitud positiva es la clave para un día exitoso.',
    '🎶 La música es el mejor compañero para un día de trabajo.',
    '📚 Cada día es una nueva lección. Aprende y crece.',
    '🔥 Hoy no sólo das cambio… ¡das buenas vibras también!',
    '💳 Tarjeta, efectivo… o mil gracias por tu paciencia.',
    '😎 ¡Ni la fila más larga puede con tu actitud pro!',
    '✨ Tus manos hacen más magia que el lector de códigos.',
    '😅 Recuerda: el cliente puede enojarse, pero tu paz mental es sagrada.',
    '🧴 Una sonrisa, un antibacterial y seguimos con la jornada.',
    '📦 ¿Medicamento agotado? Jamás tu paciencia.',
    '🦸 Eres más rápido que el sistema... y eso ya es decir mucho.',
    '💼 El mejor combo del día: tú + caja cuadrada + cero devoluciones.',
    '🧊 Cuando todo parece caótico, tú eres el ‘Paracetamol’ del momento.',
    '🚀 Cliente atendido, otro mundo salvado.',
    '🛒 Atender con buena actitud es el verdadero 2x1 del día.',
    '🧭 Hoy el sistema se cae... pero tú no. ¡Siempre en línea!',
    '🛟 En caso de emergencia: respirar, sonreír y seguir escaneando.',
    '⏳ Una venta más, un cliente feliz más. ¡Vamos bien!',
    '💁 Ser amable no cuesta... pero vale oro en caja.',
    '🧘 Hazlo con calma, que ni las ofertas se acaban ni tú estás solo.',
    '🔋 Recarga tu energía, no solo el celular del cliente.” '
  ]

  const allPhrases = phrases.length > 0 ? phrases : defaultPhrases

  const handleClick = () => {
    clickCount.value++
    clearTimeout(timer)
    timer = setTimeout(() => (clickCount.value = 0), 1000)

    if (clickCount.value === triggerLimit) {
      selectedPhrase.value = allPhrases[Math.floor(Math.random() * allPhrases.length)]
      showModal.value = true
      clickCount.value = 0
    }
  }

  const closeModal = () => {
    showModal.value = false
  }

  return {
    handleClick,
    showModal,
    selectedPhrase,
    closeModal
  }
}
