
headerClassCategory_class.addEventListener('click', () => {
  tvOrClass = 1;
}); 
headerClassCategory_tvclass.addEventListener('click', () => {
  tvOrClass = 0;
});

headerNav_en.addEventListener('click', () => {
  localSubject = 'Inglés';
  createSubjectLlist();
});
headerNav_lyl.addEventListener('click', () => {
  localSubject = 'Lengua y Literatura';
  createSubjectLlist();
});
headerNav_mat.addEventListener('click', () => {
  localSubject = 'Matemáticas';
  createSubjectLlist();
});
headerNav_ccnn.addEventListener('click', () => {
  localSubject = 'Ciencias Naturales';
  createSubjectLlist();
});
headerNav_ccss.addEventListener('click', () => {
  localSubject = 'Estudios Sociales';
  createSubjectLlist();
});

let tvOrClass = 1;
let localSubject = 'Matemáticas';

function createSubjectLlist() {
  let classGradeList;
  
  if (tvOrClass === 1){
    classGradeList = classes.filter((it) => {
      console.log(it);
      console.log(userGrade, localSubject);
      if (it.grade == userGrade && it.subject == localSubject) {
        return it;
      }
    });
    
  } else {
    classGradeList = classesTv.filter((it) => {
      console.log(it);
      if (it.grade == userGrade && it.subject == localSubject) {
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
        location.hash = '#watch';
        renderViewClass(subject);
        headerTitle_h1.innerText = subject.title;
      } else {
        location.hash = '#watchtv';
        rederViewTvClass(subject);
        headerTitle_h1.innerText = subject.title;
      }
    });
    subjectSection_list.appendChild(item);
  });
  
}
