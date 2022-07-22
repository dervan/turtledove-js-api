# This repository is archived
Now, as [FLEDGE](https://github.com/WICG/turtledove/blob/main/FLEDGE.md) experiment is live, we don't need to simulate TURTLEDOVE.  Additionally, with shared storage partitioning based on the toplevel site, the proposed demo does not work like expected. Because of that, there is no need for keeping this repository alive.

# Goal
This repository contains classes and functions that can simplify creating  node.js ad network applications for bidding in the TURTLEDOVE system. It is written for our js simulation of TURTLEDOVE. More information about it may be found in main repository:

https://github.com/dervan/turtledove-js


To read about TURTLEDOVE itself check out proposal repository:

https://github.com/WICG/turtledove

## Usage
A simple product-level usage:

```
import { generateAdNetworkApp } from 'turtledove-js-api'
import { fetchAds } from './interest-group-bidding.js' // Function (groupName) -> InterestGroupAd[]
import { fetchContextualBid } from './context-bidding.js' // Function (object) -> ContextualBidResponse
import { fetchProduct } from './products.js' // Function (ownerName, productId) -> Product

const app = generateAdNetworkApp(fetchAds, fetchContextualBid, fetchProduct)
app.listen(80, () => 'Ad network listening')
```

InterestGroupAd, ContextualBidResponse and Product classes also are a part of this package and the argument of fetchContextualBid is the same object that publisher sends in ad rendering request. Product-related part is required only if ad network supports PLTD.
