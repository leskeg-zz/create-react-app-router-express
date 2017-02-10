const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(path.resolve(__dirname, 'build')))

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('./config/webpack.config.dev.js')
  const compiler = webpack(webpackConfig)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }))
  app.use('/*', (req, res, next) => {
    const filename = path.join(compiler.outputPath,'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) return next(err)
      res.set('content-type','text/html')
      res.send(result)
      res.end()
    })
  })
}

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
