const PROMOTIONS = {
  AAAAA: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('AAAAA', ''), total + 200);
  },
  AAA: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('AAA', ''), total + 130);
  },
  EE: function ({skus, total, getTotalFor}) {
    const newSkus = skus.replace('EE', '').replace('B', '');
    return getTotalFor(newSkus, total + 80);
  },
  BB: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('BB', ''), total + 45);
  },
  FF: function ({skus, total, getTotalFor}) {
    const newSkus = skus.replace('FF', '').replace('F', '');
    return getTotalFor(newSkus, total + 20);
  },
  HHHHHHHHHH: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('HHHHHHHHHH', ''), total + 80);
  },
  HHHHH: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('HHHHH', ''), total + 45);
  },
  KK: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('KK', ''), total + 150);
  },
  NNN: function ({skus, total, getTotalFor}) {
    const newSkus = skus.replace('NNN', '').replace('M', '');
    return getTotalFor(newSkus, total + 120);
  },
  PPPPP: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('PPPPP', ''), total + 200);
  },
  RRR: function ({skus, total, getTotalFor}) {
    const newSkus = skus.replace('RRR', '').replace('Q', '');
    return getTotalFor(newSkus, total + 150);
  },
  QQQ: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('QQQ', ''), total + 80);
  },
  UUU: function ({skus, total, getTotalFor}) {
    const newSkus = skus.replace('UUU', '').replace('U', '');
    return getTotalFor(newSkus, total + 120);
  },
  VVV: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('VVV', ''), total + 130);
  },
  VV: function ({skus, total, getTotalFor}) {
    return getTotalFor(skus.replace('VV', ''), total + 90);
  },
}

const PROMO_CODES = Object.keys(PROMOTIONS);

module.exports = {PROMOTIONS, PROMO_CODES};