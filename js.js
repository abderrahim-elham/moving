



var haut= window.innerHeight;
 onscroll = function (){

    var Position = document.documentElement.scrollTop;
    
    var element_1=document.getElementById('div22');
     var element_2=document.getElementById('div31');
     var element_3=document.getElementById('div32');
     var element_4=document.getElementById('div44');
     var element_5=document.getElementById('div55');
      if( element_1.offsetTop <= Position + haut)
            element_1.className='div2 anim-div2';
         else
            element_1.className='div2';

      if( element_2.offsetTop <= Position +haut)
             element_2.className='div3 anim-div2 anim-div3';
        else
            element_2.className='div3';

      if( element_3.offsetTop <= Position +haut)
            element_3.className='div3 anim-div2 anim-div32';
        else
           element_3.className="div3";

      if( element_4.offsetTop <= Position +haut)
           element_4.className='div4 anim-div2 anim-div4';
       else
           element_4.className="div4";
      if( element_5.offsetTop <= Position +haut)
           element_5.className='div4 anim-div2';
       else
           element_5.className="div4";


 
  };
  