// 'use strict'

// const winston = require('winston')
// const winstonConfig = winston.config
// const config = require('config')
// const httpContext = require('express-http-context')
// const constants = require('../../common/constants')
// //const uuidv4 = require('uuid/v4')

// winston.emitErrs = true

// const logger = new winston.Logger({
//   transports: [
//     new winston.transports.File({
//       level: config.get('logs.level') || 'debug',
//       filename: config.get('logs.file') || 'yb-kabsa.log',
//       silent: config.get('logs.silent') || false,
//       handleExceptions: true,
//       json: false,
//       maxsize: 5242880, // 5MB
//       maxFiles: 5,
//       colorize: false,
//       humanReadableUnhandledException: true,
//       formatter: (options) => logFormatter(winstonConfig, options)
//     }),
//     new winston.transports.Console({
//       level: config.get('logs.level') || 'debug',
//       silent: config.get('logs.silent') || false,
//       handleExceptions: true,
//       json: false,
//       colorize: config.get('logs.colorize'),
//       formatter: options => logFormatter(winstonConfig, options)
//     })
//   ],
//   exitOnError: false
// })

// const getTimestamp = () => new Date().toISOString()

// const logFormatter = (winstonConfig, options) => {
//   //const requestId = httpContext.get(constants.app.headerRequestId) || 'int-' + uuidv4()
//   const requestId = httpContext.get(constants.app.headerRequestId)
//   let timestamp = trimOrExtendText(24, getTimestamp())
//   let level = options.colorize
//     ? winstonConfig.colorize(options.level, trimOrExtendText(5, options.level.toUpperCase()))
//     : trimOrExtendText(5, options.level.toUpperCase())
//   let file = trimOrExtendText(50, options.message.substring(0, options.message.indexOf(':')), true)
//   let message = options.message.substring(options.message.indexOf(':') + 2)
//   return (
//     '[' +
//     timestamp +
//     '] [' +
//     requestId +
//     '] [' +
//     level +
//     '] [' +
//     file +
//     '] - ' +
//     message +
//     (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '')
//   )
// }

// const trimOrExtendText = (length, text, inverted = false) => {
//   if (text.length < length) {
//     text += ' '.repeat(length - text.length)
//   }
//   if (text.length > length) {
//     if (!inverted) {
//       text = text.substring(0, text.length - length - 3) + '...'
//     } else {
//       text = '...' + text.substring(text.length - length + 3)
//     }
//   }
//   return text
// }

// // module.exports = logger;
// module.exports = function (fileName) {
//   let loggerWithFile = {
//     error: function (text) {
//       logger.error(fileName + ': ' + text)
//     },
//     warn: function (text) {
//       logger.warn(fileName + ': ' + text)
//     },
//     info: function (text) {
//       logger.info(fileName + ': ' + text)
//     },
//     verbose: function (text) {
//       logger.verbose(fileName + ': ' + text)
//     },
//     debug: function (text) {
//       logger.debug(fileName + ': ' + text)
//     },
//     silly: function (text) {
//       logger.silly(fileName + ': ' + text)
//     }
//   }
//   loggerWithFile.stream = {
//     write: message => {
//       logger.info(message)
//     }
//   }
//   return loggerWithFile
// }
