function openPayPal() {
  alert("Getting In touch in you paypal...");
}

function showCashAmount() {
  document.getElementById("cash-amount").classList.remove("hidden");
  document.getElementById("bank-details").classList.add("hidden");
}

function showBankDetails() {
  document.getElementById("bank-details").classList.remove("hidden");
  document.getElementById("cash-amount").classList.add("hidden");
}

function setAmount(amount) {
  document.getElementById("custom-amount").value = `$${amount}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
  const donationAmount = document.getElementById("custom-amount").value || document.getElementById("cash-donation-amount").value;

  if (!donationAmount) {
    alert("Invalid Donation Amount.");
    return;
  }

  if (!selectedMethod) {
    alert("Invalid Payment Method!Please enter a valid Payment methods.");
    return;
  }

  if (selectedMethod.value === "bank") {
    const bankName = document.getElementById("bank-name").value;
    const accountNumber = document.getElementById("account-number").value;
    if (!bankName || !accountNumber) {
      alert("Please fill in all bank transfer details.");
      return;
    }
  }

  alert(`Thank you for your donation of ${donationAmount} via ${selectedMethod.value}.`);
}
