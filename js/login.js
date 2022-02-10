document.getElementById('login-btn').addEventListener('click', function(){
    var userEmail= document.getElementById('user-email').value
    var userPassword= document.getElementById('user-password').value
    
    if(userEmail=='user@gmail.com' && userPassword=='user'){
        window.location.href='dashboard.html';
    }
    else if(userEmail!='user@gmail.com' || userPassword!='user'){
        var error=document.getElementById('errorMessage').innerText='Invalid Email or Password.';
    }
    
    
})