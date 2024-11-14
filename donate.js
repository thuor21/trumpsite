// Set the donation amount when a preset button is clicked
function setDonation(amount) {
  // Set the selected amount to the display area
  document.getElementById('selected-amount').textContent = `$${amount}`;
  // Clear custom amount input if a preset amount is selected
  document.getElementById('custom-amount').value = '';
}

// Update the donation amount based on user input in the custom amount field
function updateCustomAmount() {
  const customAmount = document.getElementById('custom-amount').value;
  // If there is a custom amount, display it, otherwise default to $0
  document.getElementById('selected-amount').textContent = customAmount ? `$${customAmount}` : '$0';
}

// Toggle between recurring and one-time donation
function toggleRecurring() {
  const recurring = document.getElementById('recurring').checked;
  const recurringText = recurring ? 'Recurring Monthly Donation' : 'One-Time Donation';
  alert(`You selected a ${recurringText}`);
}

// Handle form submission
function submitDonation(event) {
  event.preventDefault(); // Prevent actual form submission

  const selectedAmount = document.getElementById('selected-amount').textContent;
  const paymentMethod = document.getElementById('payment').value;

  // Validate if donation amount is selected
  if (selectedAmount === '$0') {
    alert('Please select a donation amount.');
    return;
  }

  // Validate if payment method is selected
  if (!paymentMethod) {
    alert('Please select a payment method.');
    return;
  }

  // Determine the redirect URL based on the payment method
  let paymentUrl = '';
  switch (paymentMethod) {
    case 'paypal':
      paymentUrl = 'https://www.paypal.com/donate';
      break;
    case 'chase':
      paymentUrl = 'https://www.chase.com/donations';
      break;
    case 'bankofamerica':
      paymentUrl = 'https://www.bankofamerica.com/donations';
      break;
    case 'wellsfargo':
      paymentUrl = 'https://www.wellsfargo.com/donations';
      break;
    case 'creditcard':
      paymentUrl = 'https://www.paymentgateway.com';
      break;
  }

  // Notify the user and redirect to the payment page
  alert(`You are being redirected to: ${paymentUrl}`);
  window.location.href = paymentUrl;
}

// Populate the state dropdown with all US states
const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

// Populate the state dropdown when the page loads
window.onload = function () {
  const stateSelect = document.getElementById('state');
  states.forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
};
