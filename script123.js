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
                    { text: "merchantInitiatedTransactions", highlight: false, imageSrc:'Capture1.JPG' },
                    { text: "credentialOnFile", highlight: false},
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
                
                displayContent = [
                    { text: "Payment Aggregation", highlight: true},
                    { text: "Combines multiple merchant accounts into a single account.", highlight: false},
                    { text: "Onboarding Services", highlight: true },
                    { text: "Helps merchants get set up with payment processing.", highlight: false },
                    { text: "Compliance Management", highlight: true },
                    { text: "Ensures merchants comply with payment industry regulations.", highlight: false },
                ];
                break;
            case "CIT/MIT Indicator":
               
                displayContent = [
                    { text: "CIT (Cardholder Initiated Transaction)", highlight: true },
                    { text: "Transactions initiated by the cardholder, such as online purchases.", highlight: false },
                    { text: "MIT (Merchant Initiated Transaction)", highlight: true },
                    { text: "Transactions initiated by the merchant, such as recurring billing.", highlight: false},
                    { text: "Transaction Management", highlight: true},
                    { text: "Differentiates between different types of transactions for reporting and analysis.", highlight: false },
                ];
                break;
            case "TAP ON PHONE":
                
                displayContent = [
                    { text: "Contactless Payments", highlight: true },
                    { text: "Uses NFC technology for quick and secure transactions.", highlight: false},
                    { text: "Convenience", highlight: true },
                    { text: "Allows users to make payments without physical contact.", highlight: false },
                    { text: "Wide Acceptance", highlight: true},
                    { text: "Compatible with various payment terminals and systems.", highlight: false},
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
