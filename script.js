
//BTC Prijs in USD Tether ophalen
var burl = "https://api.binance.com";

var query = '/api/v3/ticker/price';

query += '?symbol=BTCUSDT';

var url = burl + query;


var ourRequest = new XMLHttpRequest();

ourRequest.open('GET',url,true);
ourRequest.onload = function(){
    var data = JSON.parse(ourRequest.responseText);

    // var currency = '';
    // currency = data.symbol;

    // console.log(currency);

    if (currency = "BTCUSDT") {
        const BTCPrice = document.getElementById('BTCPrice')
        BTCPrice.textContent = '$' + parseFloat(data.price).toFixed(2);
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
    var data = JSON.parse(ourRequest2.responseText);

    const ETHPrice = document.getElementById('ETHPrice')
    ETHPrice.textContent = '$' + parseFloat(data.price).toFixed(2);

}

ourRequest2.send();




//BTC 24h change ophalen
var query = '/api/v3/ticker/24hr';

query += '?symbol=BTCUSDT';

var url = burl + query;


var ourRequest3 = new XMLHttpRequest();

ourRequest3.open('GET',url,true);
ourRequest3.onload = function(){
    var data = JSON.parse(ourRequest3.responseText);

    const BTC24h = document.getElementById('BTC24h')
    const BTCCaret = document.getElementById('BTCCaret')


    if (data.priceChangePercent >= 0) {
        BTC24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
        BTC24h.setAttribute('class', 'Positive')
        BTCCaret.textContent = '▲';
        BTCCaret.setAttribute('class', 'Positive')
    }
    else
    {
        BTC24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
        BTC24h.textContent = BTC24h.textContent.replace("-", "");
        BTC24h.setAttribute('class', 'Negative')
        BTCCaret.textContent = '▼';
        BTCCaret.setAttribute('class', 'Negative')    }

}

ourRequest3.send();




//ETH 24h change ophalen
var query = '/api/v3/ticker/24hr';

query += '?symbol=ETHUSDT';

var url = burl + query;


var ourRequest4 = new XMLHttpRequest();

ourRequest4.open('GET',url,true);
ourRequest4.onload = function(){
    var data = JSON.parse(ourRequest4.responseText);

    const ETH24h = document.getElementById('ETH24h')
    const ETHCaret = document.getElementById('ETHCaret')
    

    if (data.priceChangePercent >= 0) {
        ETH24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
        ETH24h.setAttribute('class', 'Positive')
        ETHCaret.textContent = '▲';
        ETHCaret.setAttribute('class', 'Positive')
    }
    else
    {
        ETH24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
        ETH24h.textContent = ETH24h.textContent.replace("-", "");
        ETH24h.setAttribute('class', 'Negative')
        ETHCaret.textContent = '▼';
        ETHCaret.setAttribute('class', 'Negative')
    }

}

ourRequest4.send();





//XRP Prijs in USD Tether ophalen
var query = '/api/v3/ticker/price';

query += '?symbol=XRPUSDT';

var url = burl + query;


var ourRequest5 = new XMLHttpRequest();

ourRequest5.open('GET',url,true);
ourRequest5.onload = function(){
    var data = JSON.parse(ourRequest5.responseText);

    const XRPPrice = document.getElementById('XRPPrice')
    XRPPrice.textContent = '$' + parseFloat(data.price).toFixed(4);

}

ourRequest5.send();




//XRP 24h change ophalen
var query = '/api/v3/ticker/24hr';

query += '?symbol=XRPUSDT';

var url = burl + query;


var ourRequest6 = new XMLHttpRequest();

ourRequest6.open('GET',url,true);
ourRequest6.onload = function(){
    var data = JSON.parse(ourRequest6.responseText);

    const XRP24h = document.getElementById('XRP24h')
    const XRPCaret = document.getElementById('XRPCaret')
    

    if (data.priceChangePercent >= 0) {
        XRP24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
        XRP24h.setAttribute('class', 'Positive')
        XRPCaret.textContent = '▲';
        XRPCaret.setAttribute('class', 'Positive')
    }
    else
    {
        XRP24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
        XRP24h.textContent = XRP24h.textContent.replace("-", "");
        XRP24h.setAttribute('class', 'Negative')
        XRPCaret.textContent = '▼';
        XRPCaret.setAttribute('class', 'Negative')
    }

}

ourRequest6.send();








