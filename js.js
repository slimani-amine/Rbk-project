$('#imcButton').on("click", function () {
  var weight = $('#weight').val();
  var height = $('#height').val();

  if (weight && height) {
    // s'assurer que les champs ne sont pas vides
    var imc = weight / (height * height);
  }
  var resultat = $('#resultat')
  if (imc) // checker la condition précédente
  {
    resultat.html('Your Body Mass Index is   ' + imc.toFixed(2))
  }
  var inter = $('#Interpretation')
  if (imc < 18.5) {
    inter.html('This is considered : Underweight')
  }
  else if (imc >= 18.5 && imc < 25) {
    inter.html('This is considered : Normal weight')
  }
  else if (imc >= 25 && imc < 30) {
    inter.html("This is considered : Overweight")
  }
  else if (imc >= 30 && imc < 35) {
    inter.html("This is considered : Moderate obesity")
  }
  else if (imc >= 35 && imc < 40) {
    inter.html('This is considered : Severe obesity')
  }
  else if (imc > 40) {
    inter.html('This is considered : Morbid or massive obesity')
  }
  else {
    resultat.html("") // effacer l'ancien résultat //
    inter.html('Please enter your weight and your height')
  }
})



$(".home-button").on("click", function () {
  window.location.href = "html.html";
});


$("#random-button").on("click", function () {
  var x = Math.floor(Math.random() * 4);
  if (x === 0) {
    window.location.href = "chest.html";
  }
  else if (x === 1) {
    window.location.href = "legs.html";
  }
  else if (x === 2) {
    window.location.href = "back.html"
  }
  else {
    window.location.href = "shoulders.html"
  }
}
);



$("#signupButton").on("click", function () {
  var users = JSON.parse(localStorage.getItem('users'));
  var username = $("#username").val();
  var password = $("#password").val();

  if (username && password) // checker si les champs sont remplis ou pas sinon passer au else directement
  {

    if (!users) {
      var arr = [];
      arr.push({ username: username, password: password });
      localStorage.setItem("users", JSON.stringify(arr));
      $("#username").val(""); // vider les champs
      $("#password").val(""); // vider les champs
      alert("Account created");
    } else {
      users.push({ username: username, password: password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created");
      $("#username").val(""); // vider les champs
      $("#password").val(""); // vider les champs
    }
  }
  else { // else (champs vides)
    alert("You need to enter a valid username and password");
  }
});


$("#loginButton").on("click", function () {
  var users = JSON.parse(localStorage.getItem('users'));
  var user = $("#loginUsername").val();
  var pass = $("#loginPassword").val();
  var isAuthenticated = false;

  if (users) // checker si le sign up est respecté ou pas (éviter le login direct en tant que première étape )
  {
    for (var i = 0; i < users.length; i++) {
      if (user === users[i].username && pass === users[i].password) {
        isAuthenticated = true;
      }
    }
    if (isAuthenticated) {
      window.location.href = "html.html";
    } else {
      alert("Incorrect username or password");
      $("#loginUsername").val(""); // vider les champs
      $("#loginPassword").val(""); // vider les champs
    }
  }
  else { // else du login du 1er user sans sign up 
    alert("You need to sign up first")
    $("#loginUsername").val(""); // vider les champs
    $("#loginPassword").val(""); // vider les champs
  }

});


$("#logOut").on("click", function () {
  window.location.href = "sign up.html";
});
