const projectBtns = document.querySelectorAll('.card-btn');
const showProjectHandler=(ev)=>{    
    const descriptionEl = ev.target.nextElementSibling;
    const btnValue = descriptionEl.classList.contains("hidden")?"Close description":"Read description";
    ev.target.innerHTML =btnValue;
    descriptionEl.classList.toggle('hidden');   
}

for(const btn of projectBtns){
   
    btn.addEventListener('click', showProjectHandler);
}

/*
const ul = document.querySelector('.cards');
const showHideDescriptionHandler = (ev) => {
  if (ev.target.classList.contains('card-btn')) {
    //prevent execution of code in 'if block', if event occurs on other ul elements
    const descriptionEl = ev.target.nextElementSibling;
    const btnValue = descriptionEl.classList.contains('hidden')
      ? 'Close description'
      : 'Read description';
    ev.target.innerHTML = btnValue;
    ev.target.classList.toggle('expanded');
    descriptionEl.classList.toggle('hidden');
  }
};

ul.addEventListener('click', showHideDescriptionHandler);
*/