const { format: formatDate } = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
})

export default formatDate
