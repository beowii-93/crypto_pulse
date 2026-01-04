let chart;
let currentCoin = "bitcoin";
let days = 7;

async function loadCoins() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50"
  );
  const coins = await res.json();
  const grid = document.getElementById("coinGrid");
  grid.innerHTML = "";

  coins.forEach(c => {
    const div = document.createElement("div");
    div.className = "card";
    div.onclick = () => {
      currentCoin = c.id;
      loadChart(days);
    };
    div.innerHTML = `
      <h3>${c.name}</h3>
      <p>$${c.current_price}</p>
      <span class="${c.price_change_percentage_24h>=0?'up':'down'}">
        ${c.price_change_percentage_24h.toFixed(2)}%
      </span>
    `;
    grid.appendChild(div);
  });
}

async function loadChart(d) {
  days = d;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${currentCoin}/market_chart?vs_currency=usd&days=${d}`
  );
  const data = await res.json();

  const labels = data.prices.map(p =>
    new Date(p[0]).toLocaleDateString()
  );
  const prices = data.prices.map(p => p[1]);

  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        data: prices,
        fill: true,
        tension: 0.4
      }]
    },
    options: { plugins:{legend:{display:false}} }
  });
}

loadCoins();
loadChart(7);
