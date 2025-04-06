import formatDate from "../utils/dateFormatter.js"

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
]

function getMessages() {
  return [...messages]
}

export { getMessages }
