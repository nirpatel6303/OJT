let resultMessage = document.getElementById('resultMessage');
let paymentForm = document.getElementById('paymentForm');

let hideAllFieldGroups = function() {
    let paymentSections = document.querySelectorAll('.method-fields');
    paymentSections.forEach(function(section) {
        section.classList.remove('active');
    });
};

let showPaymentFields = function(method) {
    hideAllFieldGroups();
    let sectionId = method + 'Fields';
    let section = document.getElementById(sectionId);
    if(section) {
        section.classList.add('active');
    }
};

let processCreditCard = function() {
    showPaymentFields('credit');
};

let processDebitCard = function() {
    showPaymentFields('debit');
};

let processUPI = function() {
    showPaymentFields('upi');
};

let processNET = function() {
    showPaymentFields('netbanking');
};

let processCashOnDelivery = function() {
    showPaymentFields('cod');
};

let showMessage = function(message, type) {
    if(!resultMessage) {
        return;
    }
    resultMessage.textContent = message;
    resultMessage.className = 'result-message ' + type;
};

let validatePayment = function(method) {
    if(method === 'credit') {
        let cardNumber = document.getElementById('cardNumber');
        let cardName = document.getElementById('cardName');
        let expiry = document.getElementById('expiry');
        let cvv = document.getElementById('cvv');
        if(!cardNumber.value || !cardName.value || !expiry.value || !cvv.value) {
            return 'Please fill in all credit card details.';
        }
    }

    if(method === 'debit') {
        let debitNumber = document.getElementById('debitNumber');
        let debitName = document.getElementById('debitName');
        let debitExpiry = document.getElementById('debitExpiry');
        let debitCvv = document.getElementById('debitCvv');
        if(!debitNumber.value || !debitName.value || !debitExpiry.value || !debitCvv.value) {
            return 'Please fill in all debit card details.';
        }
    }

    if(method === 'upi') {
        let upiId = document.getElementById('upiId');
        if(!upiId.value) {
            return 'Please enter your UPI ID.';
        }
    }

    if(method === 'netbanking') {
        let bankName = document.getElementById('bankName');
        let netUser = document.getElementById('netUser');
        if(!bankName.value || !netUser.value) {
            return 'Please select a bank and enter your user ID.';
        }
    }

    return '';
};

let resetPaymentForm = function() {
    paymentForm.reset();
    hideAllFieldGroups();
};

let handlePaymentSubmit = function(event) {
    event.preventDefault();

    let selectedMethod = document.querySelector('input[name="payment-method"]:checked');
    if(!selectedMethod) {
        showMessage('Please choose a payment method.', 'error');
        return false;
    }

    let error = validatePayment(selectedMethod.value);
    if(error) {
        showMessage(error, 'error');
        return false;
    }

    let methodLabel = selectedMethod.nextElementSibling ? selectedMethod.nextElementSibling.textContent : selectedMethod.value;
    showMessage('Payment method "' + methodLabel + '" confirmed. Thank you!', 'success');
    resetPaymentForm();
    return false;
};

if(paymentForm) {
    paymentForm.addEventListener('submit', handlePaymentSubmit);
}
