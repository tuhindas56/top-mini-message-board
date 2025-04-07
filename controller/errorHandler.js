function handle404(req, res, next) {
  res.status(400).send("404 | Page not found")
}

function handleError(err, req, res, next) {
  console.error(err)
  res.sendStatus(500)
}

module.exports = { handle404, handleError }
