let question = document.querySelectorAll('.question');
let section = document.querySelector('section');
section.style.display = 'none';

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function() {
        let questionId = this.getAttribute('id');
        let questions = document.getElementById('q' + questionId);
        let answers = document.getElementById('a' + questionId);

        section.style.display = 'flex';
        questions.style.display = 'block';
            questions.addEventListener('click', function() {
                this.style.display = 'none';
                answers.style.display = 'block';
            })

        document.querySelector('#closeBtn').addEventListener('click', function() {
            section.style.display = 'none';
            questions.style.display = 'none';
            answers.style.display = 'none';
        })
    })
}
