const inpCard = document.getElementById('num');

inpCard.addEventListener('keyup', () => {
    
    let val = inpCard.value;
    let newval = '';

    val = val.replace(/\s/g, '');
    
    for(let i = 0; i < val.length; i++) {

        if(i % 4 === 0 && i > 0) {
            newval = newval.concat(' ');
        }

        newval = newval.concat(val[i]);
        
    }

    inpCard.value = newval;

})
