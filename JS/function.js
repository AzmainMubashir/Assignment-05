function showSection(id){

    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

};

function chnageBtnColor(id){

    document.getElementById('donate-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById(id).classList.add('bg-lime-400');

};

function getInputValue(id){
    
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;

};

function getTextValue(id){

    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;

}