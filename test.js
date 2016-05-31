'use strict'

var test = require('tape')
var ravenClean = require('./')

test(function (t) {
  var clean = ravenClean(/[0-9A-Fa-f]{12}_/)
  var url = 'https://foo.com/d8ca74fa15f0_bundle.js'
  var cleanUrl = 'https://foo.com/bundle.js'

  var input = {
    culprit: url,
    exception: {
      values: [{
        stacktrace: {
          frames: [
            {filename: url},
            {filename: url}
          ]
        }
      }]
    }
  }

  var output = {
    culprit: cleanUrl,
    exception: {
      values: [{
        stacktrace: {
          frames: [
            {filename: cleanUrl},
            {filename: cleanUrl}
          ]
        }
      }]
    }
  }

  t.deepEqual(clean(input), output)

  var noFile = {
    culprit: undefined,
    exception: {
      values: [{
        stacktrace: {
          frames: [
            {filename: undefined},
            {filename: undefined}
          ]
        }
      }]
    }
  }

  var noFileOutput = {
    culprit: undefined,
    exception: {
      values: [{
        stacktrace: {
          frames: [
            {filename: undefined},
            {filename: undefined}
          ]
        }
      }]
    }
  }

  t.deepEqual(clean(noFile), noFileOutput)

  var noException = {
    culprit: undefined,
    exception: null
  }

  var noExceptionOutput = {
    culprit: undefined,
    exception: null
  }

  t.deepEqual(clean(noException), noExceptionOutput)

  t.end()
})
