let question = document.querySelectorAll('.question');
let section = document.querySelector('section');

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function() {
        let questionId = this.getAttribute('id');
        let questions = document.getElementById('q' + questionId);
        let answers = document.getElementById('a' + questionId);

        section.style.display = 'block';
        questions.style.display = 'block';
            questions.addEventListener('click', function() {
                this.style.display = 'none';
                answers.style.display = 'block';
            })
    })
}