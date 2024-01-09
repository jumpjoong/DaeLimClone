jQuery(document).ready(function(){
  const closeWrap = document.querySelector('.toggle');
  $('.close img').click(function() {
    closeWrap.style.display = 'none'
  })
  $('.header-right > .open-img').click(function() {
    if(closeWrap.style.display == "none") {
      closeWrap.style.display = 'block'
    } else {
      closeWrap.style.display = 'none'
    }
  })
})