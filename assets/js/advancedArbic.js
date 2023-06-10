let dataArbic = [
    'البرت انشتاين عالم الماني الجنسية اشتهر بأب النسبية وقد طور العديد من النظريات العلمية التي ساعدت البشر بشكل كبير جدا في مجال الفيزياءوقد حصل علي جائزة نوبل في الفزياء البرت انشتاين عالم الماني الجنسية اشتهر بأب النسبية وقد طور العديد من النظريات العلمية التي ساعدت البشر بشكل كبير جدا في مجال الفيزياء',
    'ولد ابن تيمية في حران للفقيه الحنبلي عبد الحليم ابن تيمية ونشأ نشأته الاولى في مدينة حران بعد بلوغه سن السابعة هاجرت عائلته منها الى مدينة دمشق بسبب اغارة التتار عليها واجه ابن تيمية السجن عدة مرات لقد بنى أصحاب هذا القانون موقفهم على أن العقل هو أساس النقل، فبالعقل عرفنا ربنا، وبالعقل عرفنا صدق النبي محمد صلى الله عليه وسلم',
    'تونس مدينة عصرية ومزدهرة  ومجيدة التاريخ  ،فهي  لا تتوقف  عن مفاجأتك. من جانب المدينة العتيقة ، عديد  البناءات القديمة تفتح أبوابها،  بعضها  تحولت إلى متاحف وأخرى إلى دور ثقافة أو  إلى مطاعم  و مقاهى وقاعات شاي. مدرجة من قبل منظمة اليونسكو على قائمة التراث العالمي، المدينة العتيقة تحتوي على نفائس معمارية مما',
    'هاجر الرسول محمّد عليه السلام من مكّة المكرّمة بعد 13 عاماً منذ بعثته وذلك لشدّة الأذى الذي تعرّض له ولأصحابه من المشركين النبي محمّد عليه الصلاة والسلام، من مكة المكرمة، من قبيلة قريش، وهو يتيم الأب، وأمه آمنة بنت وهب التي توفيت وهو في عمر الـ 6 سنوات، ومرضعته حليمة السعدية، إذ رباه جده عبد المطلب وعندما توفي جده رباه عمه أبو طالب، ',
    'جافا سكريبت هي لغة برمجة صممت في الأصل لإضافة مؤثرات وتفاعلات لصفحات الويب، ويعنى بالتفاعلات كل ما يتم عمله أو إجراؤه على مستوى المتصفح من دون الحاجة لإعادة تحميل الصفحة. نذكر على سبيل المثال هناك حدود يحاط بها الجافا سكريبت في المتصفح بحيث لا يستطيع تجاوزها، والهدف بكل تأكيد هو حماية بيانات '    
]

let index = type = mistake =  0
let timeLeft = document.querySelector('.time')
let arbicBar = document.querySelector('.SettingsArbic ')
let boxArbic = document.querySelector('.advacedArbic .box-word')
let mistakesArbic = document.querySelector('.mistakes-arbic p')
let wordCorect = document.querySelector('.correct-word-arbic p')
let corectLetter = document.querySelector('.correct-letters-arbic p')
let boxResoult = document.querySelector('.boxResoult')
// first step random array 
function random(){
    let input =  document.getElementById('input-word-arbic')
    const arbicRandom = Math.floor(Math.random() * dataArbic.length)
    let boxArbic = document.querySelector('.advacedArbic .box-word')
    dataArbic[arbicRandom].split('').forEach((e)=>{
    let ArbicSpan = `<span>${e}</span>`
    boxArbic.innerHTML += ArbicSpan
    })
    document.addEventListener('keypress',() => input.focus())
}
random()
function showData(){
    if(!type){
        time();
        timeLeft.style.opacity = '1'
        type = true;
    }
    let input =  document.getElementById('input-word-arbic')
    let inputsArbic = input.value.split('')[index]
    let spanLetter = document.querySelectorAll('.advacedArbic .box-word span')
if(inputsArbic == null){
index -- 
if(spanLetter[0].classList.contains('mistake')){
    mistake --
}
spanLetter[index].classList.remove('correct','mistake')
}else{
if(spanLetter[index].innerText === inputsArbic){
    spanLetter[index].classList.add('correct');
}else{
    spanLetter[index].classList.add('mistake')
    mistake ++;
}
index ++ 
  }

  spanLetter.forEach(act =>{
    act.classList.remove('active')
})
spanLetter[index].classList.add('active')
  mistakesArbic.innerHTML = mistake
  corectLetter.innerHTML = index - mistake
  let wpm = Math.round((( index + mistake ) / 5 - 2))
  wordCorect.innerHTML = wpm
  if(mistakesArbic.innerHTML == 30){
    location.reload()
  }
}

document.addEventListener('input',showData)
function time(){
    let timeLeft = document.querySelector('.time')
 let setArbic =   setInterval(()=>{
    timeLeft.innerHTML --
    if(timeLeft.innerHTML == 0){
        clearInterval(setArbic)
        arbicBar.remove()
        boxArbic.remove()
        boxResoult.style.display = 'block'
        resoultCount()
        reloud()
    }
   },1000)
}
// loop on time 

function changeTime(){
    let timeBox = document.querySelectorAll('.advacedArbic .SettingsArbic .time-box-arbic p')
console.log(timeBox)
    timeBox.forEach((e)=>{
            
        e.addEventListener('click',(el)=>{
           
              timeLeft.innerHTML= e.innerHTML 
              e.classList.add('gold')
        })
    })

}

changeTime()


// resoult function
let timeResoult = document.querySelector('.advacedArbic .circle .timeResoult')
let wordRight   = document.querySelector('.advacedArbic .circle .wordRight')
let letterRight   = document.querySelector('.advacedArbic .circle .letterRight')
let letterWrong   = document.querySelector('.advacedArbic .circle .letterWrong')
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
        if( wordRight.innerHTML == wordCorect.innerHTML){
            clearInterval(wordSet)
        }
    },50)
    let letterSet = setInterval(()=>{
        letterRight.innerHTML ++
        if( letterRight.innerHTML == corectLetter.innerHTML || corectLetter.innerHTML == 0 ){
            clearInterval(letterSet)
        }
    },50)
    let letterWrongSet = setInterval(()=>{
        letterWrong.innerHTML ++
        if( letterWrong.innerHTML == mistakesArbic.innerHTML || mistakesArbic.innerHTML == 0 ){
            clearInterval(letterWrongSet)
        }
    },50)
}
let page = document.querySelector('.advacedArbic')
let moodIcon = document.querySelector('.advacedArbic .SettingsArbic .arrowBox i')
let moodBox  = document.querySelector('.advacedArbic .SettingsArbic .toggle-mood-arbic .mood-arbic .boxIcons')
let boxTool =   document.querySelector('.SettingsArbic ')
let boxMood =   document.querySelector('.advacedArbic .SettingsArbic .toggle-mood-arbic .mood-arbic .boxIcons')
let boxTime =   document.querySelector('.advacedArbic .SettingsArbic .time-box-arbic .time')
let resoultBox = document.querySelector('.advacedArbic .result  .circle:nth-child(2)')
let lightMood = document.querySelector('.advacedArbic .SettingsArbic .toggle-mood-arbic .mood-arbic .moodBoxSetting .lightMood')    
let darkMood =  document.querySelector('.advacedArbic .SettingsArbic .toggle-mood-arbic .mood-arbic .moodBoxSetting .darkMood ')

moodIcon.onclick = function(){
    moodBox.classList.toggle('show')
}
lightMood.onclick = ()=>{
    page.classList.remove('DARK')
    boxTool.classList.remove('DarkBar')
    boxMood.classList.remove('DarkBar') 
    boxTime.classList.remove('DarkBar')
    resoultBox.classList.remove('DarkBar')
    languageBox.classList.remove('DARK')
    boxTime.style.color = 'gold'
    boxArbic.style.color = 'black'
}
darkMood.onclick = ()=>{
    page.classList.add('DARK')
    boxTool.classList.add('DarkBar')
    boxMood.classList.add('DarkBar') 
    resoultBox.style.background = 'green' 
    boxTime.classList.add('DarkBar')
    boxTime.style.color = 'white'
    languageBox.classList.add('DARK')
    boxArbic.style.color = '#646669'
}

// mood function
// function language
let languageIcon = document.querySelector('.advacedArbic .SettingsArbic li .arrowLanguage')
let languageBox = document.querySelector('.advacedArbic .SettingsArbic .languageChange .boxlanguage')
languageIcon.onclick = () =>{
    languageBox.classList.toggle('show')
}
function reloud(){
    let setReloud = setInterval(()=>{
        location.reload()
    },10000)
}
let Layer = document.querySelector('.overlayGame')
setInterval(()=>{
  Layer.style.display='none'
    },2000)


