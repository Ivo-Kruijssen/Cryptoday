
// Refreshing om de seconde
setInterval(function() { 
    // Geef als parameter de coin mee waarvan je de info wilt ophalen
    UpdateData("BTCUSDT");
    UpdateData("ETHUSDT");
    UpdateData("XRPUSDT");
}, 1000);

function UpdateData(symbol) {

    // Zet de prijs die je ophaalt op de website
    GetPrice(symbol).then(data => {
        document.getElementById("PRICE_" + symbol).textContent = "$" + parseFloat(data.price).toFixed(2);
    });

    // Zet de change die je ophaalt op de website
    GetChange(symbol).then(data => {
        
        const PriceChange = document.getElementById("CHANGE_" + symbol)
        const Caret = document.getElementById("CARET_" + symbol)
    
        // Check of priceChangePercent is positive or negative
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

}     

// Haal de Prijs van een coin op
function GetPrice(symbol) {
    let api = "https://api.binance.com/api/v3/ticker/price?symbol=" + symbol;

    // fetch de JSON van de data
    return fetch(api).then(
        response => response.json().then(
            data => {return data}
    ));
}

// Haal de 24hr price change op in %
function GetChange(symbol) {
    let api = "https://api.binance.com/api/v3/ticker/24hr?symbol=" + symbol;

    return fetch(api).then(
        response => response.json().then(
            data => {return data}
    ));
    
}