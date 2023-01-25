
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
  //dark-light
  var checkbox=document.getElementById('light-dark');
    checkbox.addEventListener('change',function(){
        document.querySelector('.girl').classList.toggle('dark');
    });

  //chuyen trang
  const movielist=[
    {
      link:'./filmitem/onepiece.html',
      image:'https://animehay.pro/upload/poster/34.jpg',
      episode:'1048/??',
      name:'One piece'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3594.jpg',
      episode:'16/25',
      name:'Học viện anh hùng'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3660.jpg',
      episode:'6/20',
      name:'Tinh Thần Biến'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3689.jpg',
      episode:'3/??',
      name:'Benriya Saitou-san, Isekai ni Iku'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3677.jpg',
      episode:'3/??',
      name:'Isekai Nonbiri Nouka '

    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3518-1659146047.jpg',
      episode:'28/52',
      name:'Đấu Phá Thương Khung'

    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3084-1657774875.jpg',
      episode:'81/108',
      name:'Nhất Niệm Vĩnh Hằng'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3690.jpg',
      episode:'2/??',
      name:'Kami-tachi ni Hirowareta Otoko'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3621.jpg',
      episode:'14/24',
      name:'Blue clock'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3684.jpg',
      episode:'2/??',
      name:'Saikyou Onmyouji no Isekai Tenseiki'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3695.jpg',
      episode:'2/??',
      name:' Vinland Saga Season 2'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3575.jpg',
      episode:'104 phút',
      name:'Jujutsu Kaisen 0 Movie'

    },
        {
      link:'#',
      image:'https://animehay.pro/upload/poster/14.jpg',
      episode:'13/13',
      name:' Overlor 4'

    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/2451-1659688080.jpg',
      episode:'243/250',
      name:'Đấu La Đại Lục'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3698.jpg',
      episode:'2/12',
      name:'Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu.s2 '

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3704.jpg',
      episode:'2/??',
      name:'Shin Shinka no Mi'

    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3697.jpg',
      episode:'2/??',
      name:'Tondemo Skill De Isekai Hourou Meshi  '

    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3397-1639936367.jpg',
      episode:'71/78',
      name:'Thôn Phệ tinh không'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3663.jpg',
      episode:'5/5',
      name:' Gokushufudou Part 2'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3628.jpg',
      episode:'12/12',
      name:' Chainsaw Man'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3599.jpg',
      episode:'13/13',
      name:'Yuusha Party wo Tsuihou sareta Beast Tamer '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3611.jpg',
      episode:'13/13',
      name:' Mob Psycho 100 III'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3659.jpg',
      episode:'full',
      name:'5-toubun no Hanayome Movie'
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3578.jpg',
      episode:'12/12',
      name:'Nhật Ký Thường Ngày Của Tiên Nhân 2 '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3588.jpg',
      episode:'full',
      name:'Haikyuu!! Movie 3: Sainou to Sense '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3583.jpg',
      episode:'full',
      name:'Doraemon Movie 40: Nobita no Shin Kyouryuu  '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3500.jpg',
      episode:'12/12',
      name:'Kakkou no Iinazuke '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3565-1658731352.jpg',
      episode:'24/24',
      name:' Tru Tiên'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3681.jpg',
      episode:'2/??',
      name:'Maou Gakuin no Futekigousha '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3680.jpg',
      episode:'2/??',
      name:'Thiên Thần Phòng Bên'
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/375.jpg',
      episode:'1066/??',
      name:' thám tử lừng danh'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3433.jpg',
      episode:'12/12',
      name:'Arifureta Shokugyou de Sekai Saikyou 2nd Season'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3545.jpg',
      episode:'12/??',
      name:'Soredemo Ayumu wa Yosetekuru '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3551-1656970112.jpg',
      episode:'12/12',
      name:'Orient: Awajishima Gekitou-hen  '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3550.jpg',
      episode:'12/12',
      name:'Isekai Yakkyoku '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3526-1656100623.jpg',
      episode:'13/??',
      name:'Lycoris Recoil '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3537.jpg',
      episode:'12/12',
      name:'Mamahaha no Tsurego ga Motokano datta  '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3540.jpg',
      episode:'13/??',
      name:'Kumichou Musume to Sewagakari '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3552.jpg',
      episode:'12/12',
      name:'Kinsou no Vermeil:'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3535.jpg',
      episode:'12/12',
      name:'Isekai Meikyuu de Harem wo '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3574.jpg',
      episode:'Full',
      name:'Tòa Nhà Trôi Dạc'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3528.jpg',
      episode:'12/12',
      name:'bạn gái thêu'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3532.jpg',
      episode:'12/12',
      name:'Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3474.jpg',
      episode:'12/12',
      name:'Yuusha, Yamemasu '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3569.jpg',
      episode:'Full',
      name:'Blue Thermal  '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/2761-1649173338.jpg',
      episode:'36/36',
      name:'Vũ Động Càn Khôn'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3491.jpg',
      episode:'12/??',
      name:'Kawaii dake ja Nai Shikimori-san '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3511.jpg',
      episode:'12/12',
      name:'Triệu Hồi Sư Cuối Cùng'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3492.jpg',
      episode:'13/13',
      name:'Kunoichi Tsubaki no Mune no Uchi '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3476.jpg',
      episode:'13/13',
      name:'khiên hiệp sĩ'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3344.jpg',
      episode:'24/24',
      name:'Kyoukai Senki   '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3487.jpg',
      episode:'13/13',
      name:'Kaguya-sama wa Kokurasetai: Ultra Romantic'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3486.jpg',
      episode:'12/12',
      name:'Koi wa Sekai Seifuku no Ato de'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3482.jpg',
      episode:'12/12',
      name:'Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3582.jpg',
      episode:'12/??',
      name:'Tensei shitara Ken Deshita '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3247-1659317834.jpg',
      episode:'94/130',
      name:'thế giới hoàn mĩ'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3610.jpg',
      episode:'16/20',
      name:'Kage no Jitsuryokusha ni Naritakute!      '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3497-1656097916.jpg',
      episode:'25/25',
      name:' Summertime Render'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3587.jpg',
      episode:'89 phút',
      name:'Haikyuu!! Movie Tập 2 - Shousha to Haisha '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3551-1656970112.jpg',
      episode:'12/12',
      name:' Orient: Awajishima Gekitou-hen'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3568.png',
      episode:'16/16',
      name:'Long Tộc '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3078-1665185016.jpg',
      episode:'72/72',
      name:' Phàm Nhan Tu Tiên'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3564.jpg',
      episode:'12/12',
      name:' Fuuto Tantei'
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3696-1672732687.jpg',
      episode:'2/??',
      name:' Kubo-san wa Mob o Yurusanai  '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3676.jpg',
      episode:'3/??',
      name:' Ars no Kyojuu    '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3664.jpg',
      episode:'3/??',
      name:' Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu  '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3694.jpg',
      episode:'2/??',
      name:'Eiyuu-ou, bu o Kiwameru tame tensei su - Soshite... '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3620.jpg',
      episode:'14/21',
      name:' Mairimashita! Iruma-kun 3rd Season    '
    },
    {
      link:'#',
      image:'https://animehay.pro/upload/poster/3489-1663949277.jpg',
      episode:'25/25',
      name:' Spy x Family'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3661.png',
      episode:'Full',
      name:' Violet Evergarden: Recollections'
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3662.jpg',
      episode:'Full',
      name:' Dragon Ball Super: Super Hero 2022'
    },
    {
      link:'#',
      image:'',
      episode:'',
      name:'    '
    },
    {
      link:'#',
      image:'',
      episode:'',
      name:'    '
    },
    {
      link:'#',
      image:'',
      episode:'',
      name:'    '
    },
    {
      link:'#',
      image:'',
      episode:'',
      name:'    '
    },
    {
      link:'#',
      image:'',
      episode:'',
      name:'    '
    },
    {
      link:'#',
      image:'',
      episode:'',
      name:'    '
    },
    {
      link:'#',
      image:'https://animehay.pro//upload/poster/3626.jpg',
      episode:'13/13',
      name:'Bleach: Sennen Kessen-he     '
    }
    
    
    
  ]
  function render(){
    const htmls=movielist.map(movie =>{
      return`
            <div class="movie-item">
              <a href="${movie.link}">
                  <div class="">
                      <img src="${movie.image}" class="zoom" alt="">
                  </div>
                  <div class="episode-latest">
                      <span>${movie.episode}</span>
                  </div>
                  <div class="name-movie">
                  ${movie.name}
                  </div>
              </a>
              </div>
      `
    })
    document.querySelector('.movie-list').innerHTML=htmls.join('');
  }
  render();
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
    
    document.querySelector('.paginattion').innerHTML='<div class="page_to_page"> <div class="listpage"> </div></div>';

    if(thispage!=1){
      let first= document.createElement('div');
        first.innerText='First';
        first.setAttribute('onclick',"changepage0("+ thispage +")")
        document.querySelector('.paginattion').insertBefore(first,document.querySelector('.page_to_page'))
        let prev= document.createElement('div');
          prev.innerText='Prev';
          prev.setAttribute('onclick',"changepage1("+ (thispage-1) +")")
          document.querySelector('.paginattion').insertBefore(prev,document.querySelector('.page_to_page'))
    }    
    for(i=1;i<=cout;i++){
      let newpage = document.createElement('div')
      newpage.innerText=i;
      if(i==thispage){
        newpage.classList.add('active');

      }
      newpage.setAttribute('onclick',"changepage("+ i +")")
      document.querySelector('.listpage').appendChild(newpage)
    }
    if(thispage!=cout){
      let next= document.createElement('div');
        next.innerText='Next';
        next.setAttribute('onclick',"changepage2("+ (thispage + 1) +")")
        document.querySelector('.paginattion').appendChild(next)
        
    }
  }
  let positionX=0;
  function changepage(i){
    thispage=i;
    loaditem();
  }
  function changepage0(i){
    positionX=positionX+50*(thispage-1);
    thispage=1;
    loaditem();
    
    document.querySelector('.listpage').style =`transform: translateX(${positionX}px)`
    

  }
  function changepage1(i){
    thispage=i;
    loaditem();
    positionX=positionX+50;
    document.querySelector('.listpage').style =`transform: translateX(${positionX}px)`
    

  }
  function changepage2(i){
    thispage=i;
    loaditem();
    positionX=positionX-50;
    document.querySelector('.listpage').style =`transform: translateX(${positionX}px)`
    

  }
  //menu
 document.querySelector('.navbar-mobile').addEventListener('click',function(event){
  document.querySelector('.opacity').style.display='block'
  document.querySelector('.navbar-mobile-item').style=`transform: translateX(0%);`
 })
 document.querySelector('.navbar-mobile--close').addEventListener('click',function(event){
  document.querySelector('.opacity').style.display='none'
  document.querySelector('.navbar-mobile-item').style=`transform: translateX(100%);`
 })
  

  
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
  
