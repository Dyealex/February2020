

var timerStart

    
     function buttonStart (){
        // document.getElementById('buttonStart').onclick=timerStart;
         timerStart = window.setTimeout(window.alert, 2*1000, 'Man, you are slow!');
          
          function clearAlert ( ) {
              window.clearTimeout (timerStart);
          }
        }