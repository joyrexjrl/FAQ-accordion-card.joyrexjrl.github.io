const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", event => {
        const currentlyActiveQuestion = document.querySelector(".question.active");
        if(currentlyActiveQuestion && currentlyActiveQuestion!==question){
            currentlyActiveQuestion.classList.toggle("active");
            currentlyActiveQuestion.nextElementSibling.style.maxHeight = 0;
            currentlyActiveQuestion.style.fontWeight = "normal";
        }

        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        const bold = question;
        if(question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            bold.style.fontWeight = 700;
        }else{
            answer.style.maxHeight = 0;
            bold.style.fontWeight = "normal";
        }
    });
});