function calculateTotal(childTickets, adultTickets, seniorTickets) {
  // Step 1: calculate child total
  const childTicketsTotal = 8 * childTickets;

  // Step 2: calculate adult total
  const adultTicketsTotal = 12 * adultTickets;

  // Step 3: calculate senior total
  const seniorTicketsTotal = 10 * seniorTickets;

  // Step 4: add them up
  let totalTickets = childTicketsTotal + adultTicketsTotal + seniorTicketsTotal;

  // Step 5: apply discount if total >= 50
  if (totalTickets >= 50) {
    totalTickets = totalTickets * 0.9; // apply 10% discount
    totalTickets = Math.round(totalTickets * 100) / 100; // round cleanly
  }

  // Step 6: return final total
  return totalTickets;
}


console.log(calculateTotal(2, 4, 2));
