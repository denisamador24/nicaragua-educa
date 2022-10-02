const URL = 'https://tvclass.000webhostapp.com/';
headerClassCategory_class.addEventListener('click', () => {
  tvOrClass = 1;
}); 
headerClassCategory_tvclass.addEventListener('click', () => {
  tvOrClass = 0;
});

headerNav_en.addEventListener('click', () => {
  createSubjectLlist('Ingles');
});
headerNav_lyl.addEventListener('click', () => {
  createSubjectLlist('Lengua y Literatura');
});
headerNav_mat.addEventListener('click', () => {
  createSubjectLlist('Matematicas');
});
headerNav_ccnn.addEventListener('click', () => {
  createSubjectLlist('Ciencias Naturales');
});
headerNav_ccss.addEventListener('click', () => {
  createSubjectLlist('Estudios Sociales');
});

let tvOrClass = 1;

function createSubjectLlist(subject = 'Matematicas') {
  let classGradeList;
  
  if (tvOrClass === 1){
    classGradeList = classes.filter((it) => {
      console.log(it);
      console.log(userGrade, subject);
      if (it.grade == userGrade && it.subject == subject) {
        return it;
      }
    });
    
  } else {
    classGradeList = classesTv.filter((it) => {
      console.log(it);
      if (it.grade == userGrade && it.subject == subject) {
        return it;
      }
    });
  }
  // llamda api rest ....
  subjectSection_list.innerHTML = '';
  
  console.log(classGradeList);
  classGradeList.forEach((subject) => {
    const item = document.createElement('div');
    const text = document.createElement('h3');
    console.log(subject);
    text.innerText = subject.title;
    item.classList.add('item')
    item.appendChild(text);
    item.addEventListener('click', () => {
      
      if (tvOrClass === 1){
        
      } else {
        location.hash = '#watchtv';
        rederViewTvClass();
      }
    });
    subjectSection_list.appendChild(item);
  });
  
}
