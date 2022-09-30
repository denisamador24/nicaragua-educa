const gradesSecundaria = ['Séptimo', 'Octavo', 'Noveno', 'Décimo', 'Undécimo'];
const gradesPrimaria = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];


function createGradetlist(modality) {
  let gradeList;
  if (modality == 'primaria'){
    gradeList = gradesPrimaria;
  } else if (modality == 'secundaria'){
    gradeList = gradesSecundaria;
  }
  
  gradeList.forEach((grade) => {
    const item = document.createElement('div');
    const text = document.createElement('p');
    
    text.innerText = grade;
    item.classList.add('item')
    item.appendChild(text);
    item.addEventListener('click', () => {
      createSubjectLlist(grade, modality);
      location.hash = '#subjects';
    });
    gradeSection_list.appendChild(item);
  });
  
}
