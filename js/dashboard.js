// for deposit amount//
document.getElementById('depositBtn').addEventListener('click',function(){

    
   if(typeof(document.getElementById('depositAmount').value)!=Number){
    if(parseFloat(document.getElementById('depositAmount').value)>0){
        document.getElementById('pushDeposit').innerText=parseFloat(document.getElementById('depositAmount').value)+parseFloat(document.getElementById('pushDeposit').innerText);
   
    // update balance
    document.getElementById('balanceAmount').innerText= parseFloat(document.getElementById('depositAmount').value)+parseFloat(document.getElementById('balanceAmount').innerText);
    document.getElementById('depositAmount').value='';
    }
   }
   
})
// for widraw amount//
document.getElementById('widrawBtn').addEventListener('click',function(){
    
    if(typeof(document.getElementById('widrawAmount').value)!=Number){
        if(parseFloat(document.getElementById('widrawAmount').value)>0){
            if(parseFloat(document.getElementById('widrawAmount').value)>parseFloat(document.getElementById('balanceAmount').innerText)){
                document.getElementById('alart').removeAttribute('hidden');
            }
            else{
                document.getElementById('widrawbalance').innerText= parseFloat(document.getElementById('widrawbalance').innerText) + parseFloat(document.getElementById('widrawAmount').value)

                // update balance
                document.getElementById('balanceAmount').innerText= parseFloat(document.getElementById('balanceAmount').innerText)- parseFloat(document.getElementById('widrawbalance').innerText);
                document.getElementById('widrawAmount').value='';
            }
        }
    }
 
})



