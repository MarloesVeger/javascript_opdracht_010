const calculateVAT = function (baseprice) {
const VAT = baseprice * 0.21;
return VAT;
};
const calculateIncludingVAT = function (baseprice) {
const includingVAT = calculateVAT(baseprice) + baseprice;
return includingVAT
};
const baseprice = 1200;
console.log("VAT:", calculateVAT(baseprice));
console.log("price including VAT:", calculateIncludingVAT(baseprice));
