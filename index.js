const projectBtns = document.querySelectorAll('.card-btn');
const showProjectHandler=(ev)=>{    
    const descriptionEl = ev.target.nextElementSibling;
    const btnValue = descriptionEl.classList.contains("hidden")?"Close description":"Read description";
    ev.target.innerHTML =btnValue;
    ev.target.classList.toggle('expanded');
    descriptionEl.classList.toggle('hidden');   
}

for(const btn of projectBtns){
   
    btn.addEventListener('click', showProjectHandler);
}
