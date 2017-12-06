const {PROMOTIONS, PROMO_CODES} = require('./promotions');

function applyPromotions(basket) {
  if (containsValidPromotion(basket.skus)) return applyValidPromotion(basket);
  return basket.getTotalFor(basket.skus, basket.total, false);
}

function containsValidPromotion(skus) {
  return PROMO_CODES.some(promotion => skus.includes(promotion));
}

function applyValidPromotion(basket) {
  for (promoCode of PROMO_CODES) {
    if (basket.skus.includes(promoCode))
      return applyPromotionFor(promoCode, basket);
  }
}

function applyPromotionFor(promoCode, basket) {
  return PROMOTIONS[promoCode](basket);
}

module.exports = applyPromotions;