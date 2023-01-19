
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
      $(".slide_image1").slick({
          slidesToShow: 2,
          slidesToScroll:1,
          dots: true,
          arrows:false,
          autoplay: true,
          autoplaySpeed: 1500,
  
      });
  });

  //chuyen trang
  let thispage=1
  let limit=20
  let list=document.querySelectorAll('.movie-list .movie-item')
  function loaditem(){
    let beginpage=limit  *(thispage - 1)
    let endpage=limit * thispage - 1
    list.forEach((item,key)=>{
      if(key>=beginpage && key<=endpage){
        item.style.display='block'
      }else{
        item.style.display='none'
      }
    })
    listpage();
  }
  loaditem();
  function listpage(){
    let cout=Math.ceil(list.length / limit);
    document.querySelector('.paginattion').innerHTML='';
    if(thispage!=1){
      let first= document.createElement('li');
        first.innerText='First';
        first.setAttribute('onclick',"changepage("+ 1 +")")
        document.querySelector('.paginattion').appendChild(first)
        let prev= document.createElement('li');
          prev.innerText='Prev';
          prev.setAttribute('onclick',"changepage("+ (thispage-1) +")")
          document.querySelector('.paginattion').appendChild(prev)
    }
    
    for(i=1;i<=cout;i++){
      let newpage = document.createElement('li')
      newpage.innerText=i;
      if(i==thispage){
        newpage.classList.add('active');

      }
      newpage.setAttribute('onclick',"changepage("+ i +")")
      document.querySelector('.paginattion').appendChild(newpage)
    }
    if(thispage!=cout){
      let next= document.createElement('li');
        next.innerText='Next';
        next.setAttribute('onclick',"changepage("+ (thispage + 1) +")")
        document.querySelector('.paginattion').appendChild(next)
    }
  }
  function changepage(i){
    thispage=i;
    loaditem();

  }
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
  
