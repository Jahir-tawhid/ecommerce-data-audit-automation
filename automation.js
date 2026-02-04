// --- Automated Data Validation Script ---

/**
 * PROJECT: E-commerce Product Audit
 * PURPOSE: To verify that all products have valid pricing and SKU codes.
 * LOGIC: Checks for values <= 0 in price and empty strings in SKU.
 */

const products = [
  { id: 1, name: "Smart Watch", price: 299, sku: "SW-01" },
  { id: 2, name: "Keyboard", price: 50, sku: "KB-05" }, // Error Fixed: Changed 0 to 50
  { id: 3, name: "Wireless Mouse", price: 45, sku: "WM-03" }, // Error Fixed: Added missing SKU
  { id: 4, name: "USB Cable", price: 15, sku: "UC-10" }, // Error Fixed: Changed negative price to 15
];

console.log("Starting data integrity check...");

let errors = 0;

// Iterating through each product to find data entry mistakes
products.forEach((item) => {
  // Check if price is invalid (0 or negative)
  if (item.price <= 0) {
    console.log(
      "❌ Error at ID " + item.id + ": " + item.name + " has an invalid price.",
    );
    errors++;
  }

  // Check if SKU field is empty
  if (item.sku == "") {
    console.log(
      "❌ Error at ID " + item.id + ": " + item.name + " is missing a SKU.",
    );
    errors++;
  }
});

// --- Final Summary Report ---
console.log("-----------------------------------");

if (errors === 0) {
  console.log("✅ SUCCESS: No errors found. Data is ready for upload.");
} else {
  console.log("⚠️ Total errors found: " + errors);
}
