loginSection_loginButton.addEventListener('click', () => {
  const username = loginSection_inpUsername.value;
  const password = loginSection_inpPassword.value;
  
  
  if (username === 'class@gaspar.com' && password === 'gaspar'){
     location.hash = '#register';
  } else if (username === 'classtv@gaspar.com' && password === 'gaspar'){
     location.hash = '#register-tv';
  } else {
    alert('Datos incorrectos');
  }
 
});
