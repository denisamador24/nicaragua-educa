window.addEventListener('hashchange', navigation)

function navigation (){
  const hash = location.hash;
  
  hideAllSections();
  
  if (hash === '#grade') {
    hideAllSections();
    gradeSection.classList.remove('hide');
    headerForHome();
    
  } else if (hash === '#subjects'){
    subjectSection.classList.remove('hide');
    headerForSubjects();
  } else if (hash = '#watchtv'){
    watchtvSectiom.classList.remove('hide');
    
  } else if (hash === '#login'){
    loginSection.classList.remove('hide');
    
  } else if (hash === '#register'){
    registerClassSection.classList.remove('hide');
    headerForTitle();
  } else if (hash === '#register-tv'){
    registerTvSection.classList.remove('hide');
    headerForTitle();
  } else {
    homeSection.classList.remove('hide');
    headerForHome();
  }
} 


function hideAllSections (){
  homeSection.classList.add('hide');
  gradeSection.classList.add('hide');
  subjectSection.classList.add('hide');
  watchtvSectiom.classList.add('hide');
  loginSection.classList.add('hide');
  registerTvSection.classList.add('hide');
  registerClassSection.classList.add('hide');
}

function headerForSubjects (){
  headerOtherLink.classList.add('hide');
  headerTitle.classList.add('hide');
  headerClassCategory.classList.remove('hide');
  headerDown.classList.remove('hide');
}
function headerForHome (){
  headerTitle.classList.add('hide');
  headerClassCategory.classList.add('hide');
  headerDown.classList.add('hide')
  headerOtherLink.classList.remove('hide');
}

function headerForTitle (){
  headerClassCategory.classList.add('hide');
  headerDown.classList.add('hide');
  headerOtherLink.classList.add('hide');
  headerTitle.classList.remove('hide');
}
