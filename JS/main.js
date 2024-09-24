document.getElementById('donate-btn')
    .addEventListener('click', function(){

        showSection('donate-section');
        chnageBtnColor('donate-btn');

});

document.getElementById('history-btn')
    .addEventListener('click', function(){

        showSection('history-section');
        chnageBtnColor('history-btn');

});

document.getElementById('donate-noakhali')
    .addEventListener('click', function(event){

        event.preventDefault();
        const currentBalance = getTextValue('current-balance');
        const donateMoneynoakhali = getInputValue('noakhali-input');
        const donatedMoneyNoakhali = getTextValue('donated-money-noakhali');
        
        if (donateMoneynoakhali > 0 && currentBalance >= donateMoneynoakhali) {
              
            const newBalance = currentBalance - donateMoneynoakhali;
            const totalDonationNoakhali = donateMoneynoakhali + donatedMoneyNoakhali;
            document.getElementById('current-balance').innerText = newBalance;
            document.getElementById('donated-money-noakhali').innerText = totalDonationNoakhali;
            my_modal_1.showModal();
            document.getElementById('noakhali-input').value = "";
            
        } else {

            alert('Invalid Donate Amount.');
            return;
            
        }

});

document.getElementById('donate-feni')
    .addEventListener('click', function(event){

        event.preventDefault();
        const currentBalance = getTextValue('current-balance');
        const donateMoneyFeni = getInputValue('feni-input');
        const donatedMoneyFeni = getTextValue('donated-money-feni');
        
        if (donateMoneyFeni > 0 && currentBalance >= donateMoneyFeni) {
              
            const newBalance = currentBalance - donateMoneyFeni;
            const totalDonationFeni = donateMoneyFeni + donatedMoneyFeni;
            document.getElementById('current-balance').innerText = newBalance;
            document.getElementById('donated-money-feni').innerText = totalDonationFeni;
            my_modal_1.showModal();
            document.getElementById('feni-input').value = "";
            
        } else {

            alert('Invalid Donate Amount.');
            return;
            
        }

});



