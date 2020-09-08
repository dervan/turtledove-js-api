# Goal
This repository contains classes and functions that can simplify creating  node.js ad network applications for bidding in the TURTLEDOVE system. It is written for our js simulation of TURTLEDOVE. More information about it may be found in main repository:

https://github.com/dervan/turtledove-js


To read about TURTLEDOVE itself check out proposal repository:

https://github.com/WICG/turtledove

## Usage
The simplest usage:

```
import { generateAdNetworkApp } from 'turtledove-js-api'
import { fetchAds } from './interest-group-bidding.js' // Function (groupName) -> InterestGroupAd[]
import { fetchContextualBid } from './context-bidding.js' // Function (object) -> ContextualBidResponse

const app = generateAdNetworkApp(fetchAds, fetchContextualBid)
app.listen(80, () => 'Ad network listening')
```

Both InterestGroupAd and ContextualBidResponse classes also are a part of this package and the argument of fetchContextualBid is the same object that publisher sends in ad rendering request
