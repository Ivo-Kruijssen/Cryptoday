
//BTC Prijs in USD Tether ophalen
var burl = "https://api.binance.com";

var query = '/api/v3/ticker/price';

query += '?symbol=BTCUSDT';

var url = burl + query;

var ourRequest = new XMLHttpRequest();

ourRequest.open('GET',url,true);
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
    var data = JSON.parse(ourRequest.responseText);
    console.log(data.price);

    var currency = '';
    currency = data.symbol;

    console.log(currency);

if (currency = "BTCUSDT") {
    const BTCPrice = document.getElementById('BTCPrice')
    BTCPrice.textContent = parseFloat(data.price).toFixed(2);
}

}

ourRequest.send();



//ETH Prijs in USD Tether ophalen
var query = '/api/v3/ticker/price';

query += '?symbol=ETHUSDT';

var url = burl + query;



var ourRequest2 = new XMLHttpRequest();

ourRequest2.open('GET',url,true);
ourRequest2.onload = function(){
    console.log(ourRequest2.responseText);
    var data = JSON.parse(ourRequest2.responseText);
    console.log(data.price);

const ETHPrice = document.getElementById('ETHPrice')
ETHPrice.textContent = parseFloat(data.price).toFixed(2);

}

ourRequest2.send();

