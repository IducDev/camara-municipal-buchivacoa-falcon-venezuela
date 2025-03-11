// Horario de transmisiones (puedes modificar estos valores)
const schedule = [
    { day: 1, startHour: 18, startMinute: 0, endHour: 19, endMinute: 0 }, // Lunes 18:00-19:00
    { day: 3, startHour: 20, startMinute: 0, endHour: 21, endMinute: 30 }, // Miércoles 20:00-21:30
    { day: 5, startHour: 17, startMinute: 0, endHour: 18, endMinute: 30 }, // Viernes 17:00-18:30
  ]
  
  export function isLiveNow(): boolean {
    const now = new Date()
    const currentDay = now.getDay() // 0 = Domingo, 1 = Lunes, etc.
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
  
    // Convertir la hora actual a minutos para facilitar la comparación
    const currentTimeInMinutes = currentHour * 60 + currentMinute
  
    // Comprobar si estamos dentro de alguno de los horarios programados
    return schedule.some((slot) => {
      if (slot.day !== currentDay) return false
  
      const startTimeInMinutes = slot.startHour * 60 + slot.startMinute
      const endTimeInMinutes = slot.endHour * 60 + slot.endMinute
  
      return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes
    })
  }
  
  