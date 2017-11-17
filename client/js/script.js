function loginFB(){
  FB.login(function(rensponse){
      if(rensponse.status == "unknown"){
          $('#login').show()
          
      } else {
          $('#login').hide()
      }
  })
}
function logoutFB(){
  FB.logout(function(rensponse){
      if(rensponse.status == "unknown"){
          $('#login').show()
          
      } else {
          $('#login').hide()
      }
  })
}

function statusChangeCallback(response) {
  // console.log('statusChangeCallback');
  // console.log(response);
  axios.post('http://localhost:3001/api/login',{},{headers:{token:response.authResponse.accessToken , id: response.authResponse.userID}})
  .then(function (rsponse){
    localStorage.setItem('jwtToken',rsponse.data.token)
    localStorage.setItem('name', rsponse.data.name)
  })
  .catch(function(err){
    console.log(err);
  })
  // if (response.status === 'connected') {
  //   testAPI();
  //   $.ajax({
  //     type: "post",
  //     url : "http://localhost:3001/api/login",
  //     data: {
  //       token: response.authResponse.accessToken
  //     },
  //     success: function(result){
  //       let auth ={
  //         id:result.id,
  //         name:result.name,
  //         accessToken: result.token
  //       }
  //       localStorage.setItem('autentifikasi', JSON.stringify(auth))
  //     }
  //   })
  // } else{

  // }
  // else {
  //   document.getElementById('status').innerHTML = 'Please log ' +
  //     'into this app.';
  // }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
FB.init({
  appId      : '192170831347257',
  cookie     : true,  // enable cookies to allow the server to access 
                      // the session
  xfbml      : true,  // parse social plugins on this page
  version    : 'v2.11' // use graph api version 2.8
});

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  console.log(response);
});

};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
$(document).ready(function(){
  let status = false
  let token = localStorage.getItem
})