const PRICE_PHONE = 99.99;
const PRICE_ACCESSORY = 9.99;
const TAX_RATE = 800; // in base-points

//var bankBalanceStart = prompt("How much money are we starting with?");
//bankBalanceStart = parseInt(bankBalanceStart);
var bankBalanceStart = 1000000
var bankBalance = bankBalanceStart;
var priceSubtotal = PRICE_PHONE + PRICE_ACCESSORY;
var tax = priceSubtotal * (TAX_RATE * 0.0001);
var priceTotal = priceSubtotal + parseFloat(tax);

function truncateToInt(x) {
  if (x > 0) {
    return Math.floor(x);
  } else {
    return Math.ceil(x);
  }
} //truncateToInt

function formatAmountEnd(amount) {
  return (
    " " +
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }) +
    "<br>"
  );
} //formatAmountEnd
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

function numUsa(amount) {
  return amount.toLocaleString("en-US", {});
} //formatNumberUsa

function hLine(mark, number) {
  for (i = 0; i < number; i++) {
    document.write(mark);
  } //for
  document.write("<br>");
} //hLine

var numberOfPhones = 0;

var display = function() {
  document.write(
    "Number of phones purchased:  " +
      numUsa(numberOfPhones) +
      "  bankBalance:" +
      formatAmountEnd(bankBalance)
  );
}; //display

hLine("=", 80);
document.write("PRICE_PHONE:" + formatAmountEnd(PRICE_PHONE));
document.write("PRICE_ACCESSORY:" + formatAmountEnd(PRICE_ACCESSORY));
document.write("TAX_RATE: " + TAX_RATE + " ‱ (base points)<br>");
document.write("bankBalanceStart:" + formatAmountEnd(bankBalanceStart));
document.write("priceSubtotal:" + formatAmountEnd(priceSubtotal));
document.write("tax:" + formatAmountEnd(tax));
document.write("priceTotal:" + formatAmountEnd(priceTotal) + "<br>");

hLine("=", 80);
var looping = bankBalance / priceTotal; //calculate number of phones
document.write("looping: " + looping + "<br>");
looping = truncateToInt(looping); //truncate number of phones
document.write(
  "looping: " + numUsa(looping) + " truncateToInt() numUsa() <br><br>"
);

hLine("=", 80);
for (i = -1; i < looping; i++) {
  // (-1) alowes a printing of a 'zero case' (before any subtractions).
  display();
  bankBalance = bankBalance - priceTotal;
  numberOfPhones += 1;
} // for i

hLine("=", 80);
