function renderViewClass (objClass) {
  
  watchSection_files.innerHTML = '';
  
  const classFiles = objClass.path_files;
  
  classFiles.forEach( (it) => {
    if (it.endsWith('.jpg') || it.endsWith('.png')) {
      const img = document.createElement('img');
      img.src = URL + it;
      watchSection_files.appendChild(img);
    }
  });
  
  watchSection_description.innerText = objClass.description;
  

}
