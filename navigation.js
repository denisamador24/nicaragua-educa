window.addEventListener('hashchange', navigation)

function navigation (){
  const hash = location.hash;
  console.log(hash);
  if (hash === '#grade') {
    hideAllSections();
    gradeSection.classList.remove('hide');
  } else if (hash === '#subjects'){
    hideAllSections();
    subjectSection.classList.remove('hide');
  } else {
    hideAllSections();
    homeSection.classList.remove('hide')
  }
}


function hideAllSections (){
  homeSection.classList.add('hide');
  gradeSection.classList.add('hide');
  registerTvSection.classList.add('hide');
  registerClassSection.classList.add('hide');
}
