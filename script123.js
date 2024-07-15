function handleSubmit(event) {
    event.preventDefault();

    const dropdown = document.getElementById('dropdown');
    const info = document.getElementById('info');
    const selectedValue = dropdown.value;

    let mainImageSrc = '';
    let displayContent = [];

    if (selectedValue) {
        switch (selectedValue) {
            case "Creditials on File(COF)":
                
                displayContent = [
                    { text: "MSO Level Changes", highlight: true },
                    { text: "In acquirer tab added transaction source as “MERCHANT” for acquirer link", highlight: false },
                    { text: "Acquire Link Level Changes", highlight: true },
                    { text: "merchantInitiatedTransactions", highlight: false, imageSrc: 'Capture1.JPG' },
                    { text: "credentialOnFile", highlight: false, imageSrc: 'images/cof-credential-on-file.jpg' },
                    { text: "Toggles enablment on MSO level", highlight: true },
                    { text: "Enable S2I Mastercard Mandate CardOnFile", highlight: false },
                    { text: "Enable S2I Visa Mandate CardOnFile", highlight: false },
                    { text: "RSC and LCS level changes", highlight: true },
                    { text: "N/A", highlight: false},
                    { text: "DCF changes", highlight: true },
                    { text: "Point-of-Service (POS) Entry Mode DE22.1 = 10", highlight: false },
                    { text: "POS Data Code SF7 - Card Data Input Mode DE22SE7=7", highlight: false },
                ];
                break;
            case "Payment facilator/Agregator":
                mainImageSrc = 'images/payment-facilitator-image.jpg';  // Path to the Payment Facilitator main image
                displayContent = [
                    { text: "Payment Aggregation", highlight: true, imageSrc: 'images/payment-aggregation.jpg' },
                    { text: "Combines multiple merchant accounts into a single account.", highlight: false, imageSrc: 'images/payment-combined-accounts.jpg' },
                    { text: "Onboarding Services", highlight: true, imageSrc: 'images/payment-onboarding.jpg' },
                    { text: "Helps merchants get set up with payment processing.", highlight: false, imageSrc: 'images/payment-setup.jpg' },
                    { text: "Compliance Management", highlight: true, imageSrc: 'images/payment-compliance.jpg' },
                    { text: "Ensures merchants comply with payment industry regulations.", highlight: false, imageSrc: 'images/payment-regulations.jpg' },
                ];
                break;
            case "CIT/MIT Indicator":
                mainImageSrc = 'images/cit-mit-image.jpg';  // Path to the CIT/MIT main image
                displayContent = [
                    { text: "CIT (Cardholder Initiated Transaction)", highlight: true, imageSrc: 'images/cit-indicator.jpg' },
                    { text: "Transactions initiated by the cardholder, such as online purchases.", highlight: false, imageSrc: 'images/cit-transactions.jpg' },
                    { text: "MIT (Merchant Initiated Transaction)", highlight: true, imageSrc: 'images/mit-indicator.jpg' },
                    { text: "Transactions initiated by the merchant, such as recurring billing.", highlight: false, imageSrc: 'images/mit-transactions.jpg' },
                    { text: "Transaction Management", highlight: true, imageSrc: 'images/transaction-management.jpg' },
                    { text: "Differentiates between different types of transactions for reporting and analysis.", highlight: false, imageSrc: 'images/transaction-types.jpg' },
                ];
                break;
            case "TAP ON PHONE":
                mainImageSrc = 'images/tap-on-phone-image.jpg';  // Path to the Tap on Phone main image
                displayContent = [
                    { text: "Contactless Payments", highlight: true, imageSrc: 'images/tap-on-phone-contactless.jpg' },
                    { text: "Uses NFC technology for quick and secure transactions.", highlight: false, imageSrc: 'images/tap-on-phone-nfc.jpg' },
                    { text: "Convenience", highlight: true, imageSrc: 'images/tap-on-phone-convenience.jpg' },
                    { text: "Allows users to make payments without physical contact.", highlight: false, imageSrc: 'images/tap-on-phone-contact.jpg' },
                    { text: "Wide Acceptance", highlight: true, imageSrc: 'images/tap-on-phone-acceptance.jpg' },
                    { text: "Compatible with various payment terminals and systems.", highlight: false, imageSrc: 'images/tap-on-phone-terminals.jpg' },
                ];
                break;
            default:
                mainImageSrc = '';
                displayContent = [];
                break;
        }

        // Generate HTML content for the main image and description
        const descriptionHTML = displayContent.map(item => 
            `<li class="${item.highlight ? 'highlight' : ''}">
                ${item.imageSrc ? `<img src="${item.imageSrc}" alt="${item.text} Image">` : ''}
                ${item.text}
            </li>`
        ).join('');

        // Update the info div with the main image and list of descriptions
        info.innerHTML = `
            ${mainImageSrc ? `<img src="${mainImageSrc}" alt="${selectedValue} Image">` : ''}
            <ul>${descriptionHTML}</ul>
        `;
    }
}
