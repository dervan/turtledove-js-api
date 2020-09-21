import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

export function generateAdNetworkApp (fetchAdsMethod, fetchContextualBidMethod, fetchProductsMethod) {
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.get('/fetch-ads', (req, res) => {
    res.json(fetchAdsMethod(decodeURIComponent(req.query.interest_group)))
  })
  if (fetchProductsMethod !== undefined) {
    app.get('/fetch-products', (req, res) => {
      res.json(fetchProductsMethod(decodeURIComponent(req.query.owner), decodeURIComponent(req.query.product)))
    })
  } else {
    app.get('/fetch-products', (req, res) => res.status(404).send('Not found'))
  }
  app.post('/fetch-contextual-bid', (req, res) => res.json(fetchContextualBidMethod(req.body)))
  return app
}

export function generateAdNetworkAppAsync (fetchAdsMethod, fetchContextualBidMethod, fetchProductsMethod) {
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.get('/fetch-ads', async (req, res) => {
    res.json(await fetchAdsMethod(decodeURIComponent(req.query.interest_group)))
  })
  if (fetchProductsMethod !== undefined) {
    app.get('/fetch-products', async (req, res) => {
      res.json(await fetchProductsMethod(decodeURIComponent(req.query.owner), decodeURIComponent(req.query.product)))
    })
  } else {
    app.get('/fetch-products', (req, res) => res.status(404).send('Not found'))
  }
  app.post('/fetch-contextual-bid', async (req, res) => res.json(await fetchContextualBidMethod(req.body)))
  return app
}
