// Lesson 4 — Debugging Workbook
// Objective: Find and fix all 4 bugs so the program runs correctly.
//
// WHAT THIS PROGRAM SHOULD DO (when all bugs are fixed):
//   Display an order summary in the console, like this:
//
//   === ORDER SUMMARY ===
//   Customer: Taylor
//   Product: Web Dev Starter Kit
//   Quantity: 3
//   Discount code: PROMO20
//   Subtotal: $89.97
//   Tax (5%): $4.50
//   Total: $94.47
//
// HOW TO WORK THROUGH THIS:
//   1. Open the console (F12 → Console)
//   2. Read the error message — it tells you the error TYPE and LINE NUMBER
//   3. Fix that bug, then reload the page
//   4. Repeat until the full summary appears
//   5. Commit your fixed version with a meaningful commit message

// ─── ORDER DETAILS ────────────────────────────────────────────────────────────

const customerName = "Taylor";           // BUG 1 — string not closed
const productName = "Web Dev Starter Kit";
const pricePerItem = 29.99;
const quantityOrdered = 3;

// ─── CALCULATIONS ─────────────────────────────────────────────────────────────

const subTotal = pricePerItem * quantityOrdered;   // BUG 2 — pricPerItem
const taxRate = 0.05;
const taxAmount = subTotal * taxRate;

// ─── OUTPUT ───────────────────────────────────────────────────────────────────

const discountCode = "PROMO20";

console.log("=== ORDER SUMMARY ===");
console.log("Customer:", customerName);
console.log("Product:", productName);
console.log("Quantity:", quantityOrdered);
console.log("Discount code:", discountCode);    // BUG 3 — .toFixed() is a function for use with numbers. It takes a number and returns a string containing the number with the specified number of decimal places. There is no such function for strings.
console.log("Subtotal: $" + subTotal.toFixed(2));          // BUG 4 — relevant variable above was named with different capitalization. changed all of them to camelCase
console.log("Tax (5%): $" + taxAmount.toFixed(2));
console.log("Total: $" + (subTotal + taxAmount).toFixed(2));
