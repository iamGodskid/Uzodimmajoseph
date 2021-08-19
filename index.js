var count = 0;
var arr = [];

let counter = true;

function follow(){
  if(counter == true){
    count++;
    counter = true;
  }
  
  arr.unshift(count);
  window.localStorage.setItem('counter', arr[0]);
  
  var _count = [0];
  
  var store = window.localStorage.getItem('counter');
  
  var calculator = _count[0] + store;
  _count.shift();
  _count.unshift(calculator);
  
  window.localStorage.setItem('final', _count[0]);
  
var collect = window.localStorage.getItem('final');



var countor = document.querySelector("#btn");
countor.innerHTML= "Following";
}
  
  var following = {
    counting: window.localStorage.getItem('final')
  }
  
  function view(){
var countor = document.querySelector("#btn");
countor.innerHTML= following.counting + " " + "Followers";
}