const blocks = document.querySelector('.blocks');
const wordsEng = document.querySelector('.words_eng');
const phrasesEng = document.querySelector('.phrases_eng');
const tensesEng = document.querySelector('.tenses_eng'); 
const checkEng = document.querySelector('.check_eng'); 

blocks.addEventListener('click', (event) => {
    const clickedBlock = event.target;
    const targetSection = clickedBlock.classList[0]; 

    if (targetSection === 'words') 
    {
        console.log("words");
        wordsEng.scrollIntoView({ behavior: 'smooth' });
    } 
    else if (targetSection === 'phrases') 
    {
        console.log("phrases");
        phrasesEng.scrollIntoView({ behavior: 'smooth' });
    } 
    else if (targetSection === 'tenses') 
    { 
        console.log("tenses");
        tensesEng.scrollIntoView({ behavior: 'smooth' }); 
    }
    else if (targetSection === 'check') 
      { 
          console.log("check");
          checkEng.scrollIntoView({ behavior: 'smooth' }); 
      }
})
const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', (e) => {
    const userAnswers = document.querySelectorAll('.user_answer');
    let correctCount = 0; // Счетчик правильных ответов
    let incorrectCount = 0; // Счетчик неправильных ответов

    userAnswers.forEach(input => {
        const userInput = input.value.trim();
        const correctAnswer = input.dataset.text2;

        // Убираем предыдущие классы
        input.classList.remove("correct", "incorrect");

        // Проверяем ответ
        if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
            input.classList.add("correct");
            correctCount++;
        } else {
            input.classList.add("incorrect");
            incorrectCount++;
            input.value = `Правильный ответ: ${correctAnswer}`;
        }
    });

    // Отображаем результаты
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `Правильные ответы: ${correctCount}, неправильные ответы: ${incorrectCount}`;
});

// Обработчик для кнопки очистки
const cliningButton = document.getElementById('cliningButton');
cliningButton.addEventListener('click', (e) => {
    const userAnswers = document.querySelectorAll('.user_answer');
    userAnswers.forEach(input => {
        input.value = ''; // Очищаем значение в input
        input.classList.remove("correct", "incorrect"); // Убираем классы
    });

    // Сброс результатов
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Очищаем результаты
});

