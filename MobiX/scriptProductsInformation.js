// Data structure for the product details
const productDetails = {
  name: "Apple iPhone 15 Pro",
  details: [
    { title: "Color Options", value: "Blue Titanium" },
    { title: "Bluetooth Specifications", value: "5.3, A2DP, LE" },
    { title: "Ports", value: "USB Type-C 3.0, DisplayPort" },
    // Add more details as needed
  ]
};

// Function to create and append detail items
function createDetailItem(detail) {
  const detailItem = document.createElement('div');
  detailItem.className = 'detail-item';

  const detailTitle = document.createElement('span');
  detailTitle.className = 'detail-title';
  detailTitle.textContent = detail.title + ':';

  const detailValue = document.createElement('span');
  detailValue.className = 'detail-value';
  detailValue.textContent = detail.value;

  detailItem.appendChild(detailTitle);
  detailItem.appendChild(detailValue);

  return detailItem;
}

// Function to populate the details container
function populateDetails(detailsData) {
  const detailsContainer = document.querySelector('.phone-details');
  
  // Set the product name
  const productName = detailsContainer.querySelector('h2');
  productName.textContent = detailsData.name;

  // Clear any existing detail items
  detailsContainer.querySelectorAll('.detail-item').forEach(item => item.remove());

  // Create and append new detail items
  detailsData.details.forEach(detail => {
    detailsContainer.appendChild(createDetailItem(detail));
  });
}

// Call the function to populate details on page load
document.addEventListener('DOMContentLoaded', () => populateDetails(productDetails));
