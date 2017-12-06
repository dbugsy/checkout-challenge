'use strict';
const applyPromotions = require('./applyPromotions');

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

function checkout(skus) {
    if (containsInvalidCharacters(skus)) return -1;
    return getTotalFor(parse(skus));
};

function getTotalFor(skus, total = 0, promotion = true) {
    if (skus === '') return total;
    if (promotion) return applyPromotions({skus, total, getTotalFor});
    return getTotalFor(skus.slice(1), total + getValueFor(skus.charAt(0)));
}

function containsInvalidCharacters(skus) {
    return !skus.split('').every(isValid);
}

function isValid(char) {
    return SKU_VALUES.some( skuValue => skuValue[0] === char );
}

function getValueFor(sku) {
    const skuValuePair = SKU_VALUES.find( skuValuePair => skuFrom(skuValuePair) === sku );
    return valueFrom(skuValuePair);
}

function parse(skus) {
    return skus.split('').sort().join('');
}

function valueFrom(skuValuePair) {
    return skuValuePair[1];
}

function skuFrom(skuValuePair) {
    return skuValuePair[0];
}

module.exports = checkout;