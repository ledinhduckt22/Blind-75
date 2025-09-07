// Description: Given a list of prices, where each element prices[i] represents the price of a particular stock on day i, determine the maximum profit to be made by purchasing the stock and selling it on a future date. If it is not possible to generate a profit, return 0

// two pointer chỉ dùng khi mảng đã được sắp xếp -> không áp dụng được cho bài này
// C1: Dùng 2 vòng lặp -> O(n2) -> time limit complexity
// function optimalStockTrading(prices) {
//   let profit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const current = prices[j] - prices[i];

//       if (current > profit) {
//         profit = current;
//       }
//     }
//   }

//   return profit;
// }

// C2: Start từ đầu -> lấy max giá trị phía sau -> tính profi
function optimalStockTrading(prices) {
  let profit = 0;
  let buy_price = prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - buy_price);

    if (prices[i] < buy_price) buy_price = prices[i];
  }

  return profit;
}
