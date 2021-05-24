var firebaseConfig = {
    apiKey: "AIzaSyA-UI_MgE89PzpEiVZbe953PVcrhoE3hag",
    authDomain: "covid-19virus.firebaseapp.com",
    projectId: "covid-19virus",
    storageBucket: "covid-19virus.appspot.com",
    messagingSenderId: "754582561801",
    appId: "1:754582561801:web:a2d769bc95cbd8dac504d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var UserInputsRef=firebase.database().ref('UserInputs')
document.getElementById('formcov').addEventListener('submit',submitForm);

function submitForm(e){
e.preventDefault();
var firstname=getInputValue("firstname")
var lastname=getInputValue("lastname")
var profession=getInputValue("profession")
var number=getInputValue("number")
var date=getInputValue("date")
var state_un=getInputValue("state_un")
}

function getInputValue(id){
  return getElementById(id).value;
}

function email()
{ if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.formcov.email.value)
{return true}
else
{return false;
alert("You have entered an incorrect email.");
}
}

function symptoms()
{
  var checkBox=document.getElementById("symptoms");
}