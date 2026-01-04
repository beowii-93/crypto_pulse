let chart;

async function init() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50"
  );
  const coins = await res.json();

  coins.forEach(c => {
    coin1.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    coin2.innerHTML += `<option value="${c.id}">${c.name}</option>`;
  });
}

async function compare() {
  const c1 = coin1.value;
  const c2 = coin2.value;

  const [r1,r2] = await Promise.all([
    fetch(`https://api.coingecko.com/api/v3/coins/${c1}/market_chart?vs_currency=usd&days=7`),
    fetch(`https://api.coingecko.com/api/v3/coins/${c2}/market_chart?vs_currency=usd&days=7`)
  ]);

  const d1 = await r1.json();
  const d2 = await r2.json();

  if(chart) chart.destroy();

  chart = new Chart(compareChart,{
    type:"line",
    data:{
      labels:d1.prices.map(p=>new Date(p[0]).toLocaleDateString()),
      datasets:[
        {label:c1,data:d1.prices.map(p=>p[1])},
        {label:c2,data:d2.prices.map(p=>p[1])}
      ]
    }
  });
}

init();
