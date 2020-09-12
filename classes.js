export class ContextualBidResponse {
  constructor (contextSignals, contextualAd, contextualBidValue) {
    this.contextSignals = contextSignals // Custom JSON that later will be an argument for biddingFunction of interest-group-based ads.
    this.contextualAd = contextualAd // Optional ad based only on received context information.
    this.contextualBidValue = contextualBidValue // Fixed value of included contextual ad
  }
}

export class Ad {
  constructor (id, iframeContent, type, adPartner) {
    this.id = id // Id of this ad. Should be unique for ad partner (ad may be overwritten on collision).
    this.iframeContent = iframeContent // Proper content of ad.
    this.type = type // Type of an ad. Now can be either "contextual" or "interest-group".
    this.adPartner = adPartner // Partner that generated this ad.
  }
}

export class InterestGroupAd extends Ad {
  constructor (id, groupName, iframeContent, interestGroupSignals, bidFunctionSrc, adPartner) {
    super(id, iframeContent, 'interest-group', adPartner)
    this.groupName = groupName // interest group for which ad is intended
    this.interestGroupSignals = interestGroupSignals // Interest-group-related object that further will be propagated to bid function.
    this.bidFunctionSrc = bidFunctionSrc // Address to a function that consumes context signals with interestGroupSignals and returns bidValue.
  }
}

export class ProductLevelInterestGroupAd extends InterestGroupAd {
  constructor (id, groupName, iframeContent, interestGroupSignals, bidFunctionSrc, productsCount, adPartner) {
    super(id, groupName, iframeContent, interestGroupSignals, bidFunctionSrc, adPartner)
    this.productsCount = productsCount // States how many products have to be provided to ad to render it.
  }
}

export class ContextualAd extends Ad {
  constructor (id, iframeContent, adPartner) {
    super(id, iframeContent, 'contextual', adPartner)
  }
}
