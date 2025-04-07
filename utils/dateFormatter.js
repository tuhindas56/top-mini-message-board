const { format: formatDate } = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
})

module.exports = formatDate
