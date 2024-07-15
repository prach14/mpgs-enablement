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
                    { text: "merchantInitiatedTransactions", highlight: false, imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/merchant initite.JPG' },
                    { text: "credentialOnFile", highlight: false,imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/cof.JPG'},
                    { text: "Toggles Enablment on MSO level", highlight: true },
                    { text: "Enable S2I Mastercard Mandate CardOnFile", highlight: false },
                    { text: "Enable S2I Visa Mandate CardOnFile", highlight: false },
                    { text: "RSC and LCS level changes", highlight: true },
                    { text: "N/A", highlight: false},
                    { text: "DCF changes/Output", highlight: true },
                    { text: "Point-of-Service (POS) Entry Mode DE22.1 = 10", highlight: false },
                    { text: "POS Data Code SF7 - Card Data Input Mode DE22SE7=7", highlight: false },
                ];
                break;
            case "Payment facilator/Agregator":
                
                displayContent = [
                   { text: "MSO Level Changes", highlight: true },
					 { text: " Go to Previlege tab aand Enable the “Aggregator”  Previlege", highlight: false,imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/mso agggr.JPG' },
					{ text: "Acuire Link Level Changes", highlight: true },
					{ text: "Enable “Aggregatorsupport” ", highlight: false,imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/agrr.JPG' },
                                       { text: "Toggles Enablment on MSO level", highlight: true },
					{ text: "N/A",highlight:false},
					{text:"RSC and LCS level changes", highlight: true },
					{ text: "RSC: Add “PAY_AGGER” on ACQUIRER_CERT table", highlight: false },
					{ text: "LCS: Add “-B A” on dcf_dcfs table in existing script", highlight: false },
					{ text: "DCF Changes/Output", highlight: true },
					{ text: "6270 records added for aggegaror", highlight: false },
					{ text: "Check the 6221 records for submerchant name", highlight: false },
                ];
                break;
            case "CIT/MIT Indicator":
               
                displayContent = [
                    { text: "MSO Level Changes", highlight: true },
                    { text: "In acquirer tab added transaction source as “MERCHANT” for acquirer link", highlight: false },
					{ text: "Acuire Link Level Changes", highlight: true },
					{ text: "merchantInitiatedTransactions", highlight: false,imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/merchant initite.JPG' },
					{ text: "credentialOnFile", highlight: false,imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/cof.JPG' },
                    { text: "Toggles Enablment on MSO level", highlight: true },
					{ text: "Enable CIT MIT indicators for Mastercard",highlight:false},
					{ text: "Enable indicators for Mastercard Stored CIT for Target",highlight:false},
					{ text: "Enable New COF Token Value for Target",highlight:false},
					{ text: "Enable S2I Mastercard Mandate CardOnFile",highlight:false},
					{ text: "Enable S2I Visa Mandate CardOnFile",highlight:false},
					{ text: "Enable CIT/MIT Indicators for Mastercard",highlight:false},
					{ text: "RSC OR LCS level changes", highlight: true },
					{ text: "LCS: "Add “-B I” on dcf_dcfs table to existing script", highlight: false },
			{ text: "RSC: "N/A", highlight: false },
					{ text: "DCF Changes/Output", highlight: true },
					{ text: "In record 6220 Point-of-Service (POS) Entry Mode DE22.1 = 10", highlight: false },
					{ text: "In record 6220 POS Data Code SF7 - Card Data Input ModeDE22SE7=7", highlight: false },
					{ text: "In record 6222 DE 48 SE22 SF5 = Cardholder/Merchant Initiated Transaction Indicator", highlight: false },
					{ text: "CIT/MIT DE 48SE22SF5 values examples:C101,C102,C103,C104,M101,M102,M103,M104", highlight: false },
					
                ];
                break;
            case "TAP ON PHONE":
                
                displayContent = [
                    { text: "In Acquirer tab added transaction source as “Card_present” for acquirer link", highlight: false },
			{ text: "In Previleged tab Enable “EMV” parameter for MSO", highlight: false }
					{ text: "EMV ", highlight: false,imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/emv.JPG' },
					{ text: "Acuire Link Level Changes", highlight: true },
			{ text: "In General tab Enable “OnlinePIN” parameter", highlight: false },
					{ text: "OnlinePIN", highlight: false,imageSrc:'https://raw.githubusercontent.com/prach14/mpgs-enablement/main/pin.JPG' },
                    { text: "Toggles Enablment on MSO level", highlight: true },
					{ text: "Enable pay operation for EMV Request",highlight:false},
					{ text: "Enable emv tags for first class fields for Pay S2I",highlight:false},
					{ text: "Populate service code in DE123 in Capture for S2I",highlight:false},
					{ text: "Enable Online PIN keys from CredentialService",highlight:false},
					{ text: "Enable Single Tap Transactions",highlight:false},
					{ text: "Enable Software Online PIN for S2I",highlight:false},
					{ text: "Tap on Phone InputCapability for Visa S2I",highlight:false},
					{ text: "Enable New COF Token Value for Target",highlight:false},
					{ text: "Enable PAR functionality for S2I transactions",highlight:false},
					{ text: "RSC OR LCS level changes", highlight: true },
					{ text: "LCS: Add “-B Stef” on dcf_dcfs table in existing script", highlight: false },
			                { text: "RSC: "N/A", highlight: false },
					{ text: "DCF Changes/NA", highlight: true },
					{ text: "In record 6221 (DE48 SE21 SF1)", highlight: false },
					{ text: "In record 6222 DE48 SE52 ", highlight: false },
					{ text: "In record 6271 DE55 (9F6E)", highlight: false },
					{ text: "In record 6225 EMV Tag 9F34", highlight: false },
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
