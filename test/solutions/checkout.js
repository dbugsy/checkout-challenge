const checkout = require('../../lib/solutions/checkout');

// Our price table and offers: 
// +------+-------+------------------------+
// | Item | Price | Special offers         |
// +------+-------+------------------------+
// | A    | 50    | 3A for 130, 5A for 200 |
// | B    | 30    | 2B for 45              |
// | C    | 20    |                        |
// | D    | 15    |                        |
// | E    | 40    | 2E get one B free      |
// | F    | 10    | 2F get one F free      |
// | G    | 20    |                        |
// | H    | 10    | 5H for 45, 10H for 80  |
// | I    | 35    |                        |
// | J    | 60    |                        |
// | K    | 80    | 2K for 150             |
// | L    | 90    |                        |
// | M    | 15    |                        |
// | N    | 40    | 3N get one M free      |
// | O    | 10    |                        |
// | P    | 50    | 5P for 200             |
// | Q    | 30    | 3Q for 80              |
// | R    | 50    | 3R get one Q free      |
// | S    | 30    |                        |
// | T    | 20    |                        |
// | U    | 40    | 3U get one U free      |
// | V    | 50    | 2V for 90, 3V for 130  |
// | W    | 20    |                        |
// | X    | 90    |                        |
// | Y    | 10    |                        |
// | Z    | 50    |                        |
// +------+-------+------------------------+
const SKU_VALUES = [
  ['A', 50],
  ['B', 30],
  ['C', 20],
  ['D', 15],
  ['E', 40],
  ['F', 10],
  ['G', 20],
  ['H', 10],
  ['I', 35],
  ['J', 60],
  ['K', 80],
  ['L', 90],
  ['M', 15],
  ['N', 40],
  ['O', 10],
  ['P', 50],
  ['Q', 30],
  ['R', 50],
  ['S', 30],
  ['T', 20],
  ['U', 40],
  ['V', 50],
  ['W', 20],
  ['X', 90],
  ['Y', 10],
  ['Z', 50],
];

SKU_VALUES.forEach( sku => {
  exports[`${sku[0]}HasValue${sku[1]}`] = function (test) {
    test.equal(checkout(sku[0]), sku[1]);
    test.done();
  }
})

exports.testHasNoItems = function (test) {
  test.equal(checkout(''), 0);
  test.done();
};

exports.whenLowerCaseInputIsRecievedReturnsMinusOne = function (test) {
  test.equal(checkout('AaA'), -1);
  test.done();
};

exports.whenInputIsInvalidReturnsMinusOne = function (test) {
  test.equal(checkout('AxA'), -1);
  test.done();
};

exports.testHasTwoAs = function (test) {
  test.equal(checkout('AA'), 100);
  test.done();
};

exports.testHasFiveDs = function (test) {
  test.equal(checkout('DDDDD'), (5 * 15));
  test.done();
};

exports.testHasTwoBs = function (test) {
  test.equal(checkout('BB'), 45);
  test.done();
};

exports.testHasFourBs = function (test) {
  test.equal(checkout('BBBB'), 90);
  test.done();
};

exports.testHasFourBsAndOneA = function (test) {
  test.equal(checkout('BBBAB'), 140);
  test.done();
};

exports.testHasThreeAs = function (test) {
  test.equal(checkout('AAA'), 130);
  test.done();
};

exports.testHasFiveAs = function (test) {
  test.equal(checkout('AAAAA'), 200);
  test.done();
};

exports.whenOneBFreeWithTwoE = function (test) {
  test.equal(checkout('EEB'), 80);
  test.done();
};

exports.fourEsAndTwoBs = function (test) {
  test.equal(checkout('EEEEBB'), 160);
  test.done();
};

exports.twoBsAndFourEsJumbled = function (test) {
  test.equal(checkout('BEBEEE'), 160);
  test.done();
};

exports.ABCDEABCDEis280 = function (test) {
  test.equal(checkout('ABCDEABCDE'), 280);
  test.done();
};

exports.twoFsGetOneFFree = function (test) {
  test.equal(checkout('FFF'), 20);
  test.done();
};

exports.testFiveHsForFortyFive = function (test) {
  test.equal(checkout('HHHHH'), 45);
  test.done();
};

exports.testTenHsForEighty = function (test) {
  test.equal(checkout('HHHHHHHHHH'), 80);
  test.done();
};

exports.testTwoKsFor150 = function (test) {
  test.equal(checkout('KK'), 150);
  test.done();
};

exports.testThreeNsGetOneMFree = function (test) {
  test.equal(checkout('NMNMN'), 120 + 15);
  test.done();
};

exports.testThreeNsGetOneMFree = function (test) {
  test.equal(checkout('NMNMN'), 120 + 15);
  test.done();
};

exports.testFivePsFor200 = function (test) {
  test.equal(checkout('PPPPP'), 200);
  test.done();
};

exports.testThreeQsFor80 = function (test) {
  test.equal(checkout('QQQ'), 80);
  test.done();
};

exports.testThreeRsGetOneQFree = function (test) {
  test.equal(checkout('RQRQRQ'), ((3 * 50) + (2 * 30)));
  test.done();
};

exports.testThreeUsGetOneUFree = function (test) {
  test.equal(checkout('UUUU'), 3 * 40);
  test.done();
};

exports.testTwoVsFor90 = function (test) {
  test.equal(checkout('VV'), 90);
  test.done();
};

exports.testThreeVsFor130 = function (test) {
  test.equal(checkout('VVV'), 130);
  test.done();
};