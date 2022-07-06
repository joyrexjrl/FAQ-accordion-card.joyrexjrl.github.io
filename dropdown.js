const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const hidden = document.querySelector('.hidden');

question.forEach(btn => {
    btn.addEventListener('click', openQuestion);
});

function openQuestion() { 
    answer.forEach(btn => {
        btn.classList.add('hidden');
    });

    if(event.target.classList.contains('hidden')){
        answer.classList.remove('hidden');
    }else{
        event.target.parentNode.classList.add('active');
    }
}