import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

export function generateAdNetworkApp (fetchAdsMethod, fetchContextualBidMethod) {
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.get('/fetch-ads', (req, res) => {
    res.json(fetchAdsMethod(decodeURIComponent(req.query.interest_group)))
  })
  app.post('/fetch-contextual-bid', (req, res) => res.json(fetchContextualBidMethod(req.body)))
  return app
}

export function generateAdNetworkAppAsync (fetchAdsMethod, fetchContextualBidMethod) {
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.get('/fetch-ads', async (req, res) => {
    res.json(await fetchAdsMethod(decodeURIComponent(req.query.interest_group)))
  })
  app.post('/fetch-contextual-bid', async (req, res) => res.json(await fetchContextualBidMethod(req.body)))
  return app
}
