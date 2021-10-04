const calculateBaseprice = function (priceIncludingVAT) {
    const baseprice = priceIncludingVAT / 1.21;
    return baseprice;
};
const calculateVAT = function (priceIncludingVAT) {
    const VAT = priceIncludingVAT - calculateBaseprice (priceIncludingVAT);
    return VAT;
};
const priceIncludingVAT = 1452;
console.log("Baseprice:", calculateBaseprice(priceIncludingVAT));
console.log("VAT:", calculateVAT(priceIncludingVAT));
