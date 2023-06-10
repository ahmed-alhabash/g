let Layer = document.querySelector('.overlayLoading')
let index = 0
setInterval(()=>{
  Layer.style.display='none'
    },2000)
let box = document.querySelector('.box-show')
// let dataBox = [
//     'jjjj','ffff','jjjj','ffjj','ffjf','ffff','aaaa','llll','lala','xmmx','zmtm','next','we','without','girl','boy','second','mountain','miss','sea','man','hope','sad','happy','good','vary','too'
// ]
dataBox.forEach((w)=>{
  let word = `  <span>${w.split(" ")}</span>`
  box.innerHTML += word
})
  let inputFeildBg = document.querySelector('.inputs')
  function hello(){
    indexedDB.value.split('')
  }
  hello()
  // inputFeildBg.on
  

// function cutArray(){

//   let inputFeiled = input.value.split()[index]
//   let spaning = document.querySelectorAll('.beginner-page .box-show span')
//   console.log(inputFeiled)
// }


// document.addEventListener('input', cutArray)






// let box = document.querySelector('.box-show');
// let inp = document.querySelector('.inputs')
// let overLay = document.querySelector('.overlayStart')
// let start = document.querySelector('.overlayStart button');
// let user_name = document.querySelector('.overlayStart .userName');
// let Name = document.querySelector('.beginner-page .box-setting .name span')
// let timeLeft = document.querySelector('time-left')
// let alert = document.querySelector('.overlayStart .alart')

// inp.focus();
// function random(){
//     const rando = dataBox[Math.floor(Math.random()* dataBox.length)]
//     const index = dataBox.indexOf(rando);
//     dataBox.splice(index,1);
//     box.innerHTML = rando;
// }
// random()


// function show(){
//     if(dataBox.length > 0){
//         if(inp.value.toLowerCase() ===  box.innerHTML.toLowerCase()){
//             random()
//             inp.value = ''
//         }
// }else{
//     inp.remove()
//     box.remove()
// }
// }
// window.addEventListener('input',show);
// function time(){
//     let timedec = setInterval(()=>{
//         timeLeft.innerHTML --
//     },1000)
// }




// start.onclick = () =>{
// if (user_name.value != ''){
//     start.remove();
//     overLay.classList.add('removeWidth');

//     user_name.remove();
//     Name.innerHTML= user_name.value;

// }else{
//     alert.style.display='block'
//     setInterval(()=>{
//         alert.style.display='none'
//     },10000)
// }
// }