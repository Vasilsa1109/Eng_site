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
const checkCards = document.querySelectorAll('.check_card');

checkButton.addEventListener('click', () => {
  checkCards.forEach(card => {
    const engWord = card.querySelector('.eng_word').textContent;
    const userAnswer = card.querySelector('.user_answer').value;
    const correctAnswer = card.parentElement.dataset.text2;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      card.classList.add('correct');
    } else {
      card.classList.add('incorrect');
    }
  });
});
