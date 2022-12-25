$(document).ready(function(){
    $(".slide_image").slick({
        slidesToShow: 4,
        slidesToScroll:1,
        dots: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1500,

    });
  });
  $(document).ready(function(){
    $(".paginattion").slick({
        slidesToShow: 3,
        arrows:true,
        slidesToScroll:1,
        infinite:false,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='bx bxs-left-arrow-circle'></i></button>",
            nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='bx bxs-right-arrow-circle'></i></button>"

    });
  });
  //wifi
  let alerts = document.querySelectorAll('.alert');
    alerts.forEach(item=>{
      item.addEventListener('click',function(event){
        if(event.target.classList.contains('close')){
          item.style.display ='none';
        }
      })
    })
  window.addEventListener('offline',function(event){
    document.getElementById('success').style.display='none'
    document.getElementById('error').style.display='grid'
  })
  window.addEventListener('online',function(event){
     document.getElementById('error').style.display='none'
    document.getElementById('success').style.display='grid'
  })
  //search
  function searchfun(){
    let search=document.querySelector('#search');
    document.querySelector('.menu_search').style.display='block';
    let itemsearch=Array.from(document.querySelectorAll('.item_search'));
    search.value=search.value.toLowerCase();
    itemsearch.forEach(function (e) {
      let text=e.innerText;
      if(text.indexOf(search.value)>-1)
      e.style.display="";
      else e.style.display="none"
    })
  }
  