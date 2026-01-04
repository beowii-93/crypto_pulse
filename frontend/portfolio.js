let holdings = JSON.parse(localStorage.getItem("holdings")) || {};

async function loadPortfolio() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20"
  );
  const coins = await res.json();
  let total = 0;

  const div = document.getElementById("portfolio");
  div.innerHTML = "";

  coins.forEach(c => {
    const qty = holdings[c.id] || 0;
    const value = qty * c.current_price;
    total += value;

    div.innerHTML += `
      <div class="card">
        <h3>${c.name}</h3>
        <input type="number" value="${qty}"
          onchange="update('${c.id}',this.value)">
        <p>Value: $${value.toFixed(2)}</p>
      </div>
    `;
  });

  document.getElementById("total").innerText =
    `Total Value: $${total.toFixed(2)}`;
}

function update(id,val){
  holdings[id]=Number(val);
  localStorage.setItem("holdings",JSON.stringify(holdings));
  loadPortfolio();
}

loadPortfolio();
