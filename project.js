var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
	{
		question: "What computer beat Garry Kasparov",
		answers: {
			a: 'Alpha-Zero',
			b: 'Deep Blue',
			c: 'Stockfish'
		},
		correctAnswer: 'b'
	},
	{
		question: "Who here has the highest peak rating",
		answers: {
			a: 'Bobby Fischer',
			b: 'Garry Kasparov',
			c: 'Magnus Carlsen' 
		},
		correctAnswer: 'c'
	}, 
    {
		question: "What country created chess",
		answers: {
			a: 'India',
			b: 'Iraq',
			c: 'Iran'
		},
		correctAnswer: 'a'
	}, 
    {
		question: "Which country has produced the most World Champions",
		answers: {
			a: 'USA',
			b: 'Russia',
			c: 'China'
		},
		correctAnswer: 'b'
	},
    {
		question: "Which grandmaster has been accused of cheating recently",
		answers: {
			a: 'Hans Neimann',
			b: 'Magnus Carlsen',
			c: 'Beads'
		},
		correctAnswer: 'a'
	},
    
];
function showQuestions(questions, quizContainer){
	var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		
		answers = [];

		for(letter in questions[i].answers){

			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
}
showQuestions(myQuestions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	var userAnswer = '';
	var numCorrect = 0;
	
	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			
			answerContainers[i].style.color = 'lightgreen';
		}
		else{   
			answerContainers[i].style.color = 'red';
		}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
submitButton.onclick = function(){
	showResults(myQuestions, quizContainer, resultsContainer);
}
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);