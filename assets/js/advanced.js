// languge
const iconClick = document.querySelector('.advancedPage .SettingsBar .language div .arrowDown')
const boxLang = document.querySelector('.advancedPage .SettingsBar .language .boxlanguage')
iconClick.onclick = function(){
boxLang.classList.toggle('show')
}
/*start mood toggle */
let pageAdvanced = document.querySelector('.advancedPage')
let boxMood = document.querySelector('.mood .moodBoxSetting')
const mood = document.querySelector('.mood')
const lightMood = document.querySelector('.lightMood')
const arrowToggle = document.querySelector('.arrowBox')
const boxIcons = document.querySelector('.mood .boxIcons')
const light =    document.querySelector('.mood .moodBoxSetting .lightMood')
const dark =     document.querySelector('.mood .moodBoxSetting .darkMood')
const autoMood = document.querySelector('.mood .moodBoxSetting .autoMood')
let bar = document.querySelector('.advancedPage .SettingsBar')
let box_word = document.querySelector('.box-word');
let iconChange = document.querySelectorAll('.mood .moodBoxSetting div')
let moodIcon = document.querySelector('.advancedPage .SettingsBar li .toggleMood')
let boxTimes = document.querySelector('.advancedPage .SettingsBar .time-box .time')
moodIcon.onclick = function(){
    boxIcons.classList.toggle('show')
}
console.log(iconChange)
arrowToggle.onclick = function(){
    boxIcons.classList.toggle('hide')
}
// light 
light.onclick = function(){
   pageAdvanced.classList.remove('DARK')
   boxLang.classList.remove('DarkBar')
   bar.classList.remove('DarkBar') 
   boxMood.classList.remove('DarkBar')
   box_word.style.color = 'black'
}
// dark 
dark.onclick = function(){
    pageAdvanced.classList.add('DARK')
    boxLang.classList.add('DarkBar')
    bar.classList.add('DarkBar')
    boxMood.classList.add('DarkBar')
    box_word.style.color= '#646669'
}
// auto 
autoMood.onclick = function(){
    let date = new Date().getHours()
 console.log(date)
 if(date >= 8){
    pageAdvanced.classList.add('DARK')
    bar.classList.add('DarkBar')
    boxMood.classList.add('DarkBar')
    boxMood.classList.add('barBlack')
 }else{
    pageAdvanced.classList.remove('DARK')
    bar.classList.remove('DarkBar')
    boxMood.classList.remove('DarkBar')
    boxMood.classList.remove('barBlack')
 }
}
// loop end 

// get class name 
const names = document.getElementsByClassName('suns')
let Layer = document.querySelector('.overlayLoading')


// // varibels 
let inputKey = document.querySelector('.advancedPage .input #input-word');
let mistakes = document.querySelector('.advancedPage .SettingsBar .mistakes p')
let timeLeft = document.querySelector('.advancedPage .SettingsBar .time-box .time')
let boxTime = document.querySelectorAll('.advancedPage .SettingsBar .time-box p')
let correct_letters = document.querySelector('.advancedPage .SettingsBar .correct-letters p')
let corect = document.querySelector('.advancedPage .SettingsBar .correct-letters p')
let correct_word = document.querySelector('.advancedPage .SettingsBar .correct-word p')
let resultchange = document.querySelector('.advancedPage .result .circle p ')
let box_span =document.querySelectorAll('.advancedPage .box-word span')
let result =document.querySelector('.boxResoult')
let index = mistake = type =  0;
// // varibels 
//     //   data english 
let dataEnglish = [
    "between one over water thing saw tree America untill America close around only side for really group side for really group men know world high and by been let that set eye still let blew hand air then he read began city head city try try no she stop life mean sentence ",
    'now three after night river but would had are hear well he under try childern write head for have could thought learn quick they grow hight get word stop number four its learn back very once does river great and car keep light anther grow man long world through would around face page',
    'sometimes world been  does water spell still earth plant way big second get help began miss many old much open quite its call way above down three quick if take always its they would never qustion hand white make once or lice tree answer is mile tme great always sentence call',
    'take water my like like togther enough any these such which on old does grow on light may came list name list kind go along girl small your really list sea had its di part began young both point father hand house by you start form so because through been intro boy each food paper',
    'konw set somthings leave different school every by she house own with untill threr give and follow my without animal mother been more mean below without feet right cut start very men back next imporant walk look is America though litle said air tell near her then around large with for',
    'know seem while long up fact which her each come lead might people many must begin how which no those out end through present give year uf before with feel public might well present back up problem little turn too feel real other nation this',
    'during point much be say begin on go too for new on would be part people like other which make develop head too year get right do state house both also during public some if than out still help find each many still for house who tell real home fact ',
    'begin very off never eye take there it this same school but you word system have day another school get by could because same world over real program just she the think system course how problem interest off with those few from point against',
    'ask from work under one change year people day lead large again mean over keep call also see up against of up end down program do take late thing or people the high develop not way time up take this come become see day whice during program still'
] 
//         //   data english 
//         // random data 
        function randomEnglish(){
            let random = Math.floor(Math.random()* dataEnglish.length)
            box_word.textContent = ''
            dataEnglish[random].split('').forEach(el=>{
              
           let spans = `<span>${el}</span>`
            box_word.innerHTML += spans

            })
            document.addEventListener('keypress',() => inputKey.focus())
        }
        randomEnglish()
//         // random data 
//         // data show 
        function show(){
            let catogery = document.querySelectorAll('span')
            let inputfiled = inputKey.value.split('')[index]
            if(!type){
                time();
                timeLeft.style.display = 'block'
                type = true;
            }
            if(inputfiled == null){
                index --;
                if( catogery[index].classList.contains('mistake')){
                  mistake --
                }
                catogery[index].classList.remove('correct','mistake')
            }else{
                if(catogery[index].innerText === inputfiled){
                    catogery[index].classList.add('correct');
           
                    }else{
                        catogery[index].classList.add('mistake')
                        mistake ++;
                    }
                    index ++;
            }
            catogery.forEach(act =>{
                act.classList.remove('active')
            })
            catogery[index].classList.add('active')
            mistakes.innerHTML = mistake
            correct_letters.innerHTML = index - mistake
             let wpm = Math.round((( index + mistake ) /5 -2))
             correct_word.innerHTML = wpm
             if(mistakes.innerHTML == 30){
              location.reload()
             }
        }
        window.addEventListener('input', show)
        function time(){
            let timer = setInterval(()=>{
                timeLeft.innerHTML --;
               if(timeLeft.innerHTML == 0){
                 box_word.classList.add('hide')
                 result.style.display = 'block'
                 resultchange.innerHTML = correct_word.innerHTML
                 bar.style.display = 'none'
                clearInterval(timer)
                resoultCount()
                reloud()
               }else{
                
               }

            },1000)
        }  
        boxTime.forEach((e)=>{
            
            e.addEventListener('click',(el)=>{
               
                  timeLeft.innerHTML= e.innerHTML 
                  e.classList.add('gold')
            })
        })
   


// resoult function
let timeResoult = document.querySelector('.boxResoult .result .circle .timeResoult')
let wordRight   = document.querySelector(' .circle .wordRight')
let letterRight = document.querySelector(' .circle .letterRight')
let letterWrong = document.querySelector(' .circle .letterWrong')
console.log(timeResoult)
console.log(letterRight ,letterWrong)
function resoultCount(){
    let defolut = 0
    
    let timeSet = setInterval(()=>{
        timeResoult.innerHTML ++
        if( timeResoult.innerHTML == 60){
            clearInterval(timeSet)
        }
    },50)
    let wordSet = setInterval(()=>{
        wordRight.innerHTML ++
        if( wordRight.innerHTML == correct_word.innerHTML){
            clearInterval(wordSet)
        }
    },50)
    let letterSet = setInterval(()=>{
        letterRight.innerHTML ++
        if( letterRight.innerHTML == correct_letters.innerHTML || correct_letters.innerHTML == 0 ){
            clearInterval(letterSet)
        }
    },50)
    let letterWrongSet = setInterval(()=>{
        letterWrong.innerHTML ++
        if( letterWrong.innerHTML == mistakes.innerHTML || mistakes.innerHTML == 0 ){
            clearInterval(letterWrongSet)
        }
    },50)
}
function reloud(){
    let setReloud = setInterval(()=>{
        location.reload()
    },10000)
}













let Layers = document.querySelector('.overlayGame')
setInterval(()=>{
  Layers.style.display='none'
    },2000)