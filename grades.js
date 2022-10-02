const gradesSecundaria = ['Séptimo', 'Octavo', 'Noveno', 'Décimo', 'Undécimo'];
const gradesPrimaria = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];

const gradeList = {
  1: 'Primero',
  2: 'Segundo',
  3: 'Tercero',
  4: 'Cuarto',
  5: 'Quinto',
  6: 'Sexto',
  7: 'Séptimo',
  8: 'Octavo',
  9: 'Noveno',
  10: 'Décimo',
  11: 'Undécimo',
}

let userGrade;

function createGradetlist(modality) {
  
  gradeSection_list.innerHTML = '';
  
  if (modality == 'primaria'){
    for (let i = 1; i <= 6; i++)  createItem(i);
   
  } else if (modality == 'secundaria'){
    for (let i = 7; i <= 11; i++)  createItem(i);
 
  }
  
  function createItem (grade){
    
    const item = document.createElement('div');
    const text = document.createElement('p');
    
    text.innerText = gradeList[grade];
    item.classList.add('item')
    item.appendChild(text);
    item.addEventListener('click', () => {
      userGrade = grade;
      createSubjectLlist();
      location.hash = '#subjects';
    });
    gradeSection_list.appendChild(item);
  }
}
