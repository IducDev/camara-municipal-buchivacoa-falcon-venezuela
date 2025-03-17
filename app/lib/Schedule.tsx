// Horario de transmisiones (puedes modificar estos valores)


const schedule = [{ day: 2, startHour: 10, startMinute: 0, endHour: 12, endMinute: 0 },];
  
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
  
  