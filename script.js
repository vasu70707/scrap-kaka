// Fake real-time scrap prices (random update every 3 sec)
const prices = {
  "Iron": 30,
  "Copper": 720,
  "Aluminium": 150,
  "Plastic": 18,
  "Paper": 10
};

function updatePrices() {
  const list = document.getElementById("price-list");
  list.innerHTML = "";
  Object.keys(prices).forEach(item => {
    // simulate price fluctuation
    let change = (Math.random() * 5 - 2).toFixed(2);
    prices[item] = Math.max(1, (prices[item] + parseFloat(change))).toFixed(2);

    const li = document.createElement("li");
    li.textContent = `${item}: ₹${prices[item]} per kg`;
    list.appendChild(li);
  });
}

setInterval(updatePrices, 3000);
updatePrices();

// Pickup form
document.getElementById("pickup-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Pickup request submitted! Our team will contact you.");
});
