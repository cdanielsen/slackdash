const greetings = [
  'Smooth jams!',
  'A hoy hoy!',
  'Booya!',
  'Holy COW!',
  'Wut Wut!',
  'Awwwww yeah!',
  'This. Just. Happened!',
  'Buenos Dias!'
]

const randomGreeting = () => {
  const randomIndex = Math.floor(Math.random() * greetings.length)
  return greetings[randomIndex]
}

module.exports = { randomGreeting }