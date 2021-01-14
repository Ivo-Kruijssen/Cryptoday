
// Refreshing
setInterval(function() { 
    UpdatePrice("BTCUSDT");
    UpdatePrice("ETHUSDT");
    UpdatePrice("XRPUSDT");
}, 1000);

function UpdatePrice(symbol) {
    GetPrice(symbol).then(data => {
        document.getElementById("PRICE_" + symbol).textContent = "$" + parseFloat(data.price).toFixed(2);
    });

    GetChange(symbol).then(data => {
        
        const PriceChange = document.getElementById("CHANGE_" + symbol)
        const Caret = document.getElementById("CARET_" + symbol)
    
    
        if (data.priceChangePercent >= 0) {
            PriceChange.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
            PriceChange.setAttribute('class', 'Positive')
            Caret.textContent = '▲';
            Caret.setAttribute('class', 'Positive')
        }
        else
        {
            PriceChange.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
            PriceChange.textContent = PriceChange.textContent.replace("-", "");
            PriceChange.setAttribute('class', 'Negative')
            Caret.textContent = '▼';
            Caret.setAttribute('class', 'Negative')
        }
    });

    GetMarketCap(symbol).then(data => {
        document.getElementById("VOLUME_" + symbol).textContent = "$" + parseFloat(data.price).toFixed(2);
    });
}     

// Get the Price
function GetPrice(symbol) {
    let api = "https://api.binance.com/api/v3/ticker/price?symbol=" + symbol;

    // fetch the JSON from data
    return fetch(api).then(
        response => response.json().then(
            data => {return data}
    ));
}

// Get the 24hr price change in %
function GetChange(symbol) {
    let api = "https://api.binance.com/api/v3/ticker/24hr?symbol=" + symbol;

    return fetch(api).then(
        response => response.json().then(
            data => {return data}
    ));
    
}

// Get the Volume of a coin (Volume is daily traded amount of the coin in Dollar)
function GetMarketCap(symbol) {
    let api = "https://api.binance.com/api/v3/klines?symbol=" + symbol;

    return fetch(api).then(
        response => response.json().then(
            data => {return data}
    ));
    
}







// //XRP 24h change ophalen
// var query = '/api/v3/ticker/24hr';

// query += '?symbol=XRPUSDT';

// var url = burl + query;


// var ourRequest6 = new XMLHttpRequest();

// ourRequest6.open('GET',url,true);
// ourRequest6.onload = function(){
//     var data = JSON.parse(ourRequest6.responseText);

//     const XRP24h = document.getElementById('XRP24h')
//     const XRPCaret = document.getElementById('XRPCaret')
    

//     if (data.priceChangePercent >= 0) {
//         XRP24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
//         XRP24h.setAttribute('class', 'Positive')
//         XRPCaret.textContent = '▲';
//         XRPCaret.setAttribute('class', 'Positive')
//     }
//     else
//     {
//         XRP24h.textContent = parseFloat(data.priceChangePercent).toFixed(2) + '%';
//         XRP24h.textContent = XRP24h.textContent.replace("-", "");
//         XRP24h.setAttribute('class', 'Negative')
//         XRPCaret.textContent = '▼';
//         XRPCaret.setAttribute('class', 'Negative')
//     }

// }

// ourRequest6.send();








