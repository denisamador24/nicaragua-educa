homeSection_btnPrimaria.addEventListener('click', ()=> {
  createGradetlist('primaria');
  location.hash = '#grade';
});
homeSection_btnSecundaria.addEventListener('click', () => {
  createGradetlist('secundaria');
  location.hash = '#grade';
});
homeSectionAddButton.addEventListener('click', () => {
  location.hash = '#login';
})
