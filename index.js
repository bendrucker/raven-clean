'use strict'

module.exports = ravenClean

function ravenClean (regex) {
  return function cleanException (data) {
    data.culprit = clean(data.culprit)
    data.exception.values.forEach(function (value) {
      value.stacktrace.frames.forEach(function (frame) {
        frame.filename = clean(frame.filename)
      })
    })

    return data
  }

  function clean (url) {
    return url.replace(regex, '')
  }
}
