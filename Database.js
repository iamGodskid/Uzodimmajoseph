function saveData(name, age, email, password){
  var name = "";
  var age = "";
  var email = "";
  var password = "";
  
  window.localStorage.setItem('dataname', name);
  
  window.localStorage.setItem('dataage', age);
  
  window.localStorage.setItem('dataemail', email);
  
  window.localStorage.setItem('datapass', password);
  
}
function call(){
  alert(window.localStorage.getItem("dataname"));
}
export {saveData, call};