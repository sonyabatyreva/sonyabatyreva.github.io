var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}


var title = 'Викторина';
var subtitle = "Этот тест позволяет оценить Ваши знания";
var questions=[
{
	text: " Первый элемент Периодической системы Д.И. Менделеева",
	answers: ["Водород",
		  "Кислород",
		  "Азот"],
	correctAnswer: 0 
},
{
	text: "Наука о веществах и их свойствах",
	answers: ["Элементология",
		  "Химия",
		  "Веществология"],
	correctAnswer: 1
},
{
	text: "В огне не горит и в воде не тонет",
	answers: ["Лед",
		  "Дерево",
		  "Жир"],
	correctAnswer: 0
},
{
	text: "Сколько групп в Периодической системе Д.И. Менделеева",
	answers: ["Семь",
		  "Пять",
		  "Восемь"],
	correctAnswer: 2 
},
{
	text: "Формула воды",
	answers: ["HO2",
		  "H2O",
		  "H202"],
	correctAnswer: 1 
},
{
	text: "В этой стеклянной посуде смешивают малые количества вещества и проводят химические реакции",
	answers: ["Стакан",
		  "Чашка",
		  "Пробирка"],
	correctAnswer: 2 
},
{
	text: "О каком веществе писал Антуан де Сент-Экзюпери «Ты самое большое богатство на свете...»",
	answers: ["О кобальте",
		  "О кислороде",
		  "О воде"],
	correctAnswer: 2 
},





];






var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
	var num = i+1;
	answerText=answerText+"\n    Вопрос №"+ num +"";
	if(yourAns[i]!=questions[i].correctAnswer){
	    answerText=answerText+"\n    Правильный ответ: " +
		questions[i].answers[questions[i].correctAnswer] + "\n";
	  }
        else{
	    answerText=answerText+": Верно! \n";
	    ++score;
	    }
       }

   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

   alert(answerText);
   yourAns = [];
   score = 0;
   clearForm("quiz");
}
function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
	if(f.elements[i].checked)
		f.elements[i].checked = false;
}
}

document.getElementsByTagName('a')[0].onclick = function() {
  let text = document.getElementById('text').value;
  if(text != '') {
    let csvData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(text);
    this.href = csvData;
    this.target = '_blank';
    this.download = 'txt.txt';
  }
  else {
    return false;
  }
}