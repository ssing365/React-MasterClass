export function fetchCoin() {
    return fetch("https://api.coinpaprika.com/v1/coins").then(response => response.json());
}