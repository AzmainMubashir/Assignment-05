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
        const donateMoneyNoakhali = getInputValue('noakhali-input');
        const donatedMoneyNoakhali = getTextValue('donated-money-noakhali');
        const date = new Date();
        
        if (donateMoneyNoakhali > 0 && currentBalance >= donateMoneyNoakhali) {
              
            const newBalance = currentBalance - donateMoneyNoakhali;
            const totalDonationNoakhali = donateMoneyNoakhali + donatedMoneyNoakhali;
            document.getElementById('current-balance').innerText = newBalance;
            document.getElementById('donated-money-noakhali').innerText = totalDonationNoakhali;
            my_modal_1.showModal();
            document.getElementById('noakhali-input').value = "";
            const div = document.createElement('div');
            div.classList.add('p-8');
            div.classList.add('border');
            div.classList.add('rounded-2xl');
            div.innerHTML = `
            <h3 class="text-xl font-bold text-neutral-900">${donateMoneyNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh.</h3>
            <p class="font-light">Date: ${date}</p>
            `;
            document.getElementById('history-section').appendChild(div);
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
        const date = new Date();
        
        if (donateMoneyFeni > 0 && currentBalance >= donateMoneyFeni) {
              
            const newBalance = currentBalance - donateMoneyFeni;
            const totalDonationFeni = donateMoneyFeni + donatedMoneyFeni;
            document.getElementById('current-balance').innerText = newBalance;
            document.getElementById('donated-money-feni').innerText = totalDonationFeni;
            my_modal_1.showModal();
            document.getElementById('feni-input').value = "";
            const div = document.createElement('div');
            div.classList.add('p-8');
            div.classList.add('border');
            div.classList.add('rounded-2xl');
            div.innerHTML = `
            <h3 class="text-xl font-bold text-neutral-900"> ${donateMoneyFeni} Taka is Donated for Flood Relief in Feni,Bangladesh.</h3>
            <p class="font-light">Date: ${date}</p>
            `;
            document.getElementById('history-section').appendChild(div);
            
        } else {

            alert('Invalid Donate Amount.');
            return;
            
        }

});

document.getElementById('donate-students')
    .addEventListener('click', function(event){

        event.preventDefault();
        const currentBalance = getTextValue('current-balance');
        const donateMoneyStudents = getInputValue('students-input');
        const donatedMoneyStudents = getTextValue('donated-money-students');
        const date = new Date();
        
        if (donateMoneyStudents > 0 && currentBalance >= donateMoneyStudents) {
              
            const newBalance = currentBalance - donateMoneyStudents;
            const totalDonationStudents = donateMoneyStudents + donatedMoneyStudents;
            document.getElementById('current-balance').innerText = newBalance;
            document.getElementById('donated-money-students').innerText = totalDonationStudents;
            my_modal_1.showModal();
            document.getElementById('students-input').value = "";
            const div = document.createElement('div');
            div.classList.add('p-8');
            div.classList.add('border');
            div.classList.add('rounded-2xl');
            div.innerHTML = `
            <h3 class="text-xl font-bold text-neutral-900"> ${donateMoneyStudents} Taka is Donated for Aid for Injured in the Quota Movement.</h3>
            <p class="font-light">Date: ${date}</p>
            `;
            document.getElementById('history-section').appendChild(div);

            
        } else {

            alert('Invalid Donate Amount.');
            return;
            
        }

});



