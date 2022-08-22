// function addingEventListener() {
//     let input = document.getElementById('button');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });
// }

function addingEventListener(){
  let input = document.getElementById('button');
  input.addEventListener('click', clickAlert)
}
function clickAlert(){
  alert('I was clicked')
}