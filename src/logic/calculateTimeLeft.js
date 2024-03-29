export default function calculateTimeLeft(limitDate) {
  const currentDate = new Date()
  const targetDate = new Date(limitDate)
  // Diferencia en ms
  const difference = targetDate - currentDate

  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return timeLeft
}
