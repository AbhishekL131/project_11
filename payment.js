document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');

    if (plan) {
        document.getElementById('plan').value = plan;
    }

    const paymentMethodSelect = document.getElementById('paymentMethod');
    const cardDetails = document.getElementById('cardDetails');

    paymentMethodSelect.addEventListener('change', function() {
        if (this.value === 'card') {
            cardDetails.style.display = 'block';
        } else {
            cardDetails.style.display = 'none';
        }
    });

    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const paymentMethod = paymentMethodSelect.value;

        switch (paymentMethod) {
            case 'card':
                // Collect card details and redirect to card payment gateway (mocked here)
                alert('Redirecting to card payment gateway...');
                window.location.href = 'https://example-card-payment-gateway.com';
                break;
            case 'paytm':
                // Redirect to Paytm payment gateway with number 9028631966
                alert('Redirecting to Paytm payment gateway...');
                window.location.href = `https://paytm.com/pay?to=9028631966&amount=your_amount`;
                break;
            case 'phonepe':
                // Redirect to PhonePe payment gateway with number 9028631966
                alert('Redirecting to PhonePe payment gateway...');
                window.location.href = `https://phonepe.com/pay?to=9028631966&amount=your_amount`;
                break;
            case 'googlepay':
                // Redirect to Google Pay payment gateway with number 9028631966
                alert('Redirecting to Google Pay payment gateway...');
                window.location.href = `https://pay.google.com/intl/en_in/about/`;
                break;
            default:
                alert('Please select a valid payment method.');
        }
    });
});
