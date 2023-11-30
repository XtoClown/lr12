$(document).ready(test);
function test(){
    console.log(123);
    $("#wordInput1").text(englishWordsEasy[indexArrayEasy[0]]);
    $("#wordInput2").text(englishWordsEasy[indexArrayEasy[1]]);
    $("#wordInput3").text(englishWordsEasy[indexArrayEasy[2]]);
    $("#wordInput4").text(englishWordsEasy[indexArrayEasy[3]]);
    $("#wordInput5").text(englishWordsEasy[indexArrayEasy[4]]);
    $("#wordInput6").text(englishWordsEasy[indexArrayEasy[5]]);
    $("#wordInput7").text(englishWordsEasy[indexArrayEasy[6]]);
    $("#wordInput8").text(englishWordsEasy[indexArrayEasy[7]]);
    $("#wordInput9").text(englishWordsEasy[indexArrayEasy[8]]);
    $("#wordInput10").text(englishWordsEasy[indexArrayEasy[9]]);
    $("#leftArrow").attr("disabled", "disabled");
}
let mode = 1;
let englishWordsEasy = new Array("Hello", "Good", "Bad", "Door", "Window", "Phone", "Computer", "World", "Car", "World");
let ukrainianWordsEasy = new Array("Привіт", "Добре", "Погано", "Двері", "Вікно", "Телефон", "Комп'ютер", "Світ", "Машина", "Світ");
let englishWordsMedium = new Array("Science", "Bizarre", "Thief", "Goofie", "Conductivity", "Strange", "Reel", "Application", "Hoodie", "Savings");
let ukrainianWordsMedium = new Array("Наука", "Дивакуватий", "Злодій", "Бовдур", "Провідність", "Дивний", "Котушка", "Аплікація", "Худі", "Заощадження");
let englishWordsHard = new Array("Tithing", "Incomprehensible", "Government", "Equipment", "Confidential", "Fabulous", "Transcendent", "Ascendant", "Untreated", "Adorable");
let ukrainianWordsHard = new Array("Десятина", "Незбагненний", "Уряд", "Обладнання", "Конфіденційний", "Казковий", "Трансцендентний", "Висхідний", "Необроблений", "Чарівний");
let ukrainianWordsEasyLowerCase = new Array();
for(let i = 0; i < ukrainianWordsEasy.length; i++){
    ukrainianWordsEasyLowerCase[i] = ukrainianWordsEasy[i].toLowerCase();
}
let ukrainianWordsMediumLowerCase = new Array();
for(let i = 0; i < ukrainianWordsMedium.length; i++){
    ukrainianWordsMediumLowerCase[i] = ukrainianWordsMedium[i].toLowerCase();
}
let ukrainianWordsHardLowerCase = new Array();
for(let i = 0; i < ukrainianWordsEasy.length; i++){
    ukrainianWordsHardLowerCase[i] = ukrainianWordsHard[i].toLowerCase();
}
let work = 0;
let indexArrayEasy = new Array(englishWordsEasy.length);
for(let i = 0; i < indexArrayEasy.length; i++){
    indexArrayEasy[i] = i;
}
let indexArrayMedium = new Array(englishWordsMedium.length);
for(let i = 0; i < indexArrayMedium.length; i++){
    indexArrayMedium[i] = i;
}
let indexArrayHard = new Array(englishWordsHard.length);
for(let i = 0; i < indexArrayHard.length; i++){
    indexArrayHard[i] = i;
}
indexArrayEasy = randomArray(indexArrayEasy);
indexArrayMedium = randomArray(indexArrayMedium);
indexArrayHard = randomArray(indexArrayHard);
function randomArray(array){
    for(let i = 0; i < array.length; i++){
        let randomIndex = Math.floor(Math.random() * array.length);
        temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp; 
    }
    return array;
}
let ukrainianWord = new Array();
for(let i = 0; i < ukrainianWordsEasy.length; i++){
    ukrainianWord[i] = ukrainianWordsEasy[i];
}
let ukrainianWordLowerCase = new Array();
for(let i = 0; i < ukrainianWordsEasyLowerCase.length; i++){
    ukrainianWordLowerCase[i] = ukrainianWordsEasyLowerCase[i];
}
let englishWord = new Array();
for(let i = 0; i < englishWordsEasy.length; i++){
    englishWord[i] = englishWordsEasy[i];
}
let indexArray = new Array();
for(let i = 0; i < indexArrayEasy.length; i++){
    indexArray[i] = indexArrayEasy[i];
}
$(function(){
    $("#rightArrow").on("click",next);
})
$(function(){
    $("#leftArrow").on("click",previous);
})
$(function(){
    $("#translate").keydown(function(event){
        let key = event.which;
        if(key == 13){
            setTimeout(()=>{
                if(answers < 10){
                    $("#rightArrow").click();
                    $(".carousel").carousel("next");
                }
                else{
                    $("#btnEnd").click();
                }
            },500);
        }
    })
})
let currentPos = 0;
let backIndex = 0;
let answers = 0;
let outPutArray = new Array(10);
function next(){
    $("#rightArrow").attr("disabled","disabled");
    setTimeout(()=>{
        if(currentPos < 11){
            $("#rightArrow").removeAttr("disabled");
        }
    },1500)
    if(currentPos == backIndex){
        if($("#translate").val() == ""){
            if(backIndex == currentPos){
                falseAnswer++;
                answers++;
                if(answers == 11){
                    $("#btnEnd").click();
                }
                else{
                    $(".progress-bar").attr("style",`width: ${answers*10}%`);
                    $(".answerNumber").text(`Progress: ${answers}/10`)
                    $(".falseAnswersAmount").text(falseAnswer);
                }
            }
        }
        if($("#translate").val() != ""){
            checkTranslation();
            answers++;
            if(answers == 10){
                $("#btnEnd").click();
            }
            else{
                $(".progress-bar").attr("style",`width: ${answers*10}%`);
                $(".answerNumber").text(`Progress: ${answers}/10`);
            }
        }
        currentPos++;
        backIndex++;
        if(currentPos > 0){
            $("#leftArrow").removeAttr("disabled");
        }
    }
    else{
        answers++;
        currentPos++;
        if(currentPos > 0){
            $("#leftArrow").removeAttr("disabled");
        }
        $(".progress-bar").attr("style",`width: ${answers*10}%`);
        $(".answerNumber").text(`Progress: ${answers}/10`);
    }
    
}
function previous(){
    $("#leftArrow").attr("disabled","disabled");
    setTimeout(()=>{
        if(currentPos > 0){
            $("#leftArrow").removeAttr("disabled");
        }
    },1500)
    currentPos--;
    answers--;
    $(".progress-bar").attr("style",`width: ${answers*10}%`);
    $(".answerNumber").text(`Progress: ${answers}/10`);
}
let trueAnswer = 0;
let falseAnswer = 0;
let points = 0;
function checkTranslation(){
    let found = 0;
    let enteredWord = (($("#translate").val()).toLowerCase());
    for(let i = 0; i < ukrainianWord.length; i++){
        if(enteredWord == ukrainianWordLowerCase[i]){
            if(englishWord[i]==englishWord[indexArray[currentPos]] && currentPos == backIndex){
                trueAnswer++;
                points+=mode;
                $(".trueAnswersAmount").text(trueAnswer);
                $("#translate").val("");
                found = 1;
                break;
            }
            else{
                found = 0;
                break;  
            }
        }
    }
    if(found == 0){
        falseAnswer++;
        $(".falseAnswersAmount").text(falseAnswer);
        $("#translate").val("");
    }
}
$(function(){
    $("#btnEnd").on("click",endFunc);
})
function endFunc(){
    let englishSkill = "";
    if(points < 5){
        englishSkill = ":(";
    }
    if(points > 5){
        englishSkill = "Newbie";
    }
    if(points >= 10){
        englishSkill = "Good";
    }
    if(points >= 15){
        englishSkill = "Master";
    }
    if(points >= 20){
        englishSkill = "God";
    }
    if(points >= 25){
        englishSkill = "Demiurge";
    }
    $(".modal-header").css("color","white");
    $(".modal-body").css("color","white");
    $(".questionsNumber").append(`<span>${answers}</span>`);
    $(".result").append(`<span>${trueAnswer}</span>`);
    $(".resultFail").append(`<span>${falseAnswer}</span>`);
    $(".gameResult").append(`<span>${englishSkill}</span>`);
}
$(function(){
    $("#exampleRadios3").on("click",hardMode);
})
$(function(){
    $("#exampleRadios2").on("click",mediumMode);
})
$(function(){
    $("#exampleRadios1").on("click",easyMode);
})
function hardMode(){
    mode = 3;
    for(let i = 0; i < ukrainianWordsHard.length; i++){
        ukrainianWord[i] = ukrainianWordsHard[i];
    }
    for(let i = 0; i < ukrainianWordsHardLowerCase.length; i++){
        ukrainianWordLowerCase[i] = ukrainianWordsHardLowerCase[i];
    }
    for(let i = 0; i < englishWordsHard.length; i++){
        englishWord[i] = englishWordsHard[i];
    }
    for(let i = 0; i < indexArrayHard.length; i++){
        indexArray[i] = indexArrayHard[i];
    }
    for(let i = currentPos; i < 10; i++){
        $(`#wordInput${i+1}`).text(englishWordsHard[indexArrayHard[i]]);
    }
}
function mediumMode(){
    mode = 2;
    for(let i = 0; i < ukrainianWordsMedium.length; i++){
        ukrainianWord[i] = ukrainianWordsMedium[i];
    }
    for(let i = 0; i < ukrainianWordsMediumLowerCase.length; i++){
        ukrainianWordLowerCase[i] = ukrainianWordsMediumLowerCase[i];
    }
    for(let i = 0; i < englishWordsMedium.length; i++){
        englishWord[i] = englishWordsMedium[i];
    }
    for(let i = 0; i < indexArrayMedium.length; i++){
        indexArray[i] = indexArrayMedium[i];
    }
    for(let i = currentPos; i < 10; i++){
        $(`#wordInput${i+1}`).text(englishWordsMedium[indexArrayMedium[i]]);
    }
}
function easyMode(){
    mode = 1;
    for(let i = 0; i < ukrainianWordsEasy.length; i++){
        ukrainianWord[i] = ukrainianWordsEasy[i];
    }
    for(let i = 0; i < ukrainianWordsEasyLowerCase.length; i++){
        ukrainianWordLowerCase[i] = ukrainianWordsEasyLowerCase[i];
    }
    for(let i = 0; i < englishWordsEasy.length; i++){
        englishWord[i] = englishWordsEasy[i];
    }
    for(let i = 0; i < indexArrayEasy.length; i++){
        indexArray[i] = indexArrayEasy[i];
    }
    for(let i = currentPos; i < 10; i++){
        $(`#wordInput${i+1}`).text(englishWordsEasy[indexArrayEasy[i]]);
    }
}
$(function(){
    $("#btnReload").on("click",endReload);
})
function endReload(){
    location.reload();
}