/*\
title: NumberFormat.js
type: application/javascript
module-type: macro

Returns a formatted number.

Intl.NumberFormat specification:
[from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat]
* style: formatting style to use
  - "decimal" for plain number formatting (default)
  - "currency" for currency formatting
  - "percent" for percent formatting
  - "unit" for unit formatting
* currency: required if style = 'currency' (no default)
  - for allowed values see
    http://www.currency-iso.org/en/home/tables/table-a1.html
* compactDisplay: used when notation = 'compact'
  - "short" is not explained (default)
  - "long" is not explained
* currencyDisplay: how to display the currency
  - "symbol" to use a localized currency symbol such as € (default)
  - "narrowSymbol" to use narrow format symbol -- "$100", not "US$100"
  - "code" to use the ISO currency code
  - "name" to use a localized currency name such as "dollar"
* currencySign: how to signify a negative amount
  - "standard" to use minus sign (default)
  - "accounting" to use locale's accounting practice, e.g., parentheses
* localeMatcher: locale matching algorithm to use
  - "best fit" is not explained (default)
  - "lookup" is not explained
* notation: formatting that should be displayed for the number
  - "standard" is plain number formatting (default)
  - "scientific" returns the order-of-magnitude for formatted number
  - "engineering" returns the exponent of ten when divisible by three
  - "compact" string representing exponent, see compactDisplay
* numberingSystem: numbering system (no default specified)
  - possible values include: "arab", "arabext", " bali", "beng", "deva",
    "fullwide", " gujr", "guru", "hanidec", "khmr", " knda", "laoo",
    "latn", "limb", "mlym", " mong", "mymr", "orya", "tamldec", "telu",
    "thai", "tibt"
* signDisplay: when to display the sign for the number
  - "auto" is display for negative numbers only (default)
  - "never" is never displaying sign
  - "always" is always displaying sign
  - "exceptZero" is displaying for positive and negative, but not zero
* unit: unit to use if style = 'unit' (no default)
  - for allowed values see
    https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier
* unitDisplay: unit formatting style
  - "short" e.g., 16 l (default)
  - "long" e.g., 16 litres
  - "narrow" e.g., 16l
* useGrouping: whether to use grouping (e.g., thousands) separators
  - true (default)
  - false
* minimumIntegerDigits: minimum number of integer digits to use
  - allowed = 1 to 21
  - default = 1
  - see Note
* minimumFractionDigits: minimum number of fraction digits to use
  - allowed = 0 to 20
  - default for plain number and percent formatting = 0
  - default for currency formatting depends on currency
  - see Note
* maximumFractionDigits: maximum number of fraction digits to use
  - allowed = 0 to 20
  - default for plain number formatting is the larger of
    minimumFractionDigits and 3
  - default for currency formatting is the larger of
    minimumFractionDigits and currecy-specific value
  - default for percent formatting is the larger of
    minimumFractionDigits and 0
  - see Note
* minimumSignificantDigits: minimum number of significant digits to use
  - allowed = 1 to 21
  - default = 1
  - see Note
* maximumSignificantDigits: maximum number of significant digits to use
  - allowed = 1 to 21
  - default = 21
Note: first three 'min-max' properties are ignored if one of the
      last two 'min-max' properties are defined

Function parameters:
* value: [number to be formatted, no default]
* country: "en-AU"
* style: "decimal"
* currency: "AUD"
* compactDisplay: "short"
* currencyDisplay: "symbol"
* currencySign: "standard"
* localeMatcher: "best fit"
* notation: "standard"
* signDisplay: "auto"
* unit: null
* unitDisplay: "short"
* useGrouping: true

Warning: mapping Intl.Numberformat properties other than "country", 
         "style" and "currency" to macro parameters results in runtime
         "uncaught reference" errors, so they are not currently
         implemented. (They are commented out in the javascript below.)

\*/
(function(){
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";
exports.name   = "number-format";
exports.params = [
    { name: "value" }, { name: "country" },
    { name: "style" }, { name: "currency" },
  /*{ name: "compactDisplay" }, { name: "currencyDisplay" },
    { name: "currencySign" }, { name: "localeMatcher" },
    { name: "notation" }, { name: "signDisplay" },
    { name: "unit" }, { name: "unitDisplay" },
    { name: "useGrouping" }*/
];
exports.run = function(value,country,style,currency) {
    return Intl.NumberFormat(
        country||"en-AU", {
            style:style||"decimal",
            currency:currency||"AUD",
          /*compactDisplay:compactDisplay||"short",
            currencyDisplay:currencyDisplay||"symbol",
            currencySign:currencySign||"standard",
            localeMatcher:localeMatcher||"best fit",
            notation:notation||"standard",
            signDisplay:signDisplay||"auto",
            unit:unit||null,
            unitDisplay:unitDisplay||"short",
            useGrouping:useGrouping||true*/
        }
    ).format(value);
};
})();
