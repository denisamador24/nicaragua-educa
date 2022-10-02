// variables de prueba
const classes = [
    {
      title: 'Contenido',
      grade: '11',
      subject: 'Matematicas',
      path_files: [
          'files/facebook.png',
          'files/facebook.png'
        ],
      description: 'variables de prueba'
    },
     {
      title: 'Contenido',
      grade: '8',
      subject: 'Matematicas',
      path_files: [
          'files/facebook.png',
          'files/facebook.png'
        ],
      description: 'variables de prueba'
    },
     {
      title: 'Contenido',
      grade: '6',
      subject: 'Matematicas',
      path_files: [
          'files/facebook.png',
          'files/facebook.png'
        ],
      description: 'variables de prueba'
    }
  ];
  
const objLink = '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fnicaraguaeduca%2Fvideos%2F948894502692462%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'

const classesTv = [
  
    {
      title: 'Contenido',
      grade: '11',
      subject: 'Matemáticas',
      link: objLink,
    },
    {
      title: 'Contenido',
      grade: '7',
      subject: 'Matemáticas',
      link: objLink,
    },
    {
      title: 'Contenido',
      grade: '1',
      subject: 'Matemáticas',
      link: objLink,
    },
    {
      title: 'Contenido',
      grade: '6',
      subject: `Matemáticas`,
      link: objLink,
    },
  ]



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


/*
<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fnicaraguaeduca%2Fvideos%2F948894502692462%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
*/
