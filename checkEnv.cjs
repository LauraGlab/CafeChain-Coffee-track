require("dotenv").config();

console.log(
  "SEPOLIA_PRIVATE_KEY:",
  process.env.SEPOLIA_PRIVATE_KEY ? "✅ Załadowano" : "❌ Brak"
);
console.log(
  "INFURA_SEPOLIA_URL:",
  process.env.INFURA_SEPOLIA_URL ? process.env.INFURA_SEPOLIA_URL : "❌ Brak"
);