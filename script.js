const blocks = document.querySelector('.blocks');
const wordsEng = document.querySelector('.words_eng');
const phrasesEng = document.querySelector('.phrases_eng');
const tensesEng = document.querySelector('.tenses_eng'); 

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
})
