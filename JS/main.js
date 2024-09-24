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
        

})



