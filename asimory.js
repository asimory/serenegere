let string = "";
let txtar = document.getElementsByClassName("txttae");
let buttons = document.querySelectorAll('.majbut');



  Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
      string = string + e.target.innerHTML;
      document.querySelector("textarea").value = string;
    })})

    function write() {
      document.querySelector('textarea').addEventListener('keydown', haqat);
  }

  function haqat(ev) {

    if(ev.ctrlKey && ev.key.toLowerCase() === 'a'){
    }
    else if(ev.key === 'a'){
      ev.preventDefault();
      string = string + 'ا';
    }
    if( ev.ctrlKey && ev.shiftKey && ev.key.toLowerCase() === 'a'){
      ev.preventDefault();
     string = string + 'آ';
    }
    else if( ev.shiftKey && ev.key.toLowerCase() === 'a'){
      ev.preventDefault();
     string = string + 'َ';
    }
    if(ev.key === 'e'){
      ev.preventDefault();
      if(string === ''){alert('گۄڈٕ ليٚـکھِو کانٛـہہ اۆر اَچھَر.')}
      else{string = string + 'ٔ'}
    }
    else if( ev.shiftKey && ev.key.toLowerCase() === 'e'){
      ev.preventDefault();
      string = string + 'ٲ';
    }
    if(ev.key === 'u'){
      ev.preventDefault();
      string = string + 'ُ';
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 'u'){
      ev.preventDefault();
     string = string + 'وٗ';
    }
    if(ev.key === 'i'){
      ev.preventDefault();
      string = string + 'ِ';
    }
    if( ev.ctrlKey && ev.shiftKey && ev.key.toLowerCase() === 'i'){
      ev.preventDefault();
     string = string + 'ی';
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 'i'){
      ev.preventDefault();
     string = string + 'يٖـ';
    }
    if(ev.key === 'o'){
      ev.preventDefault();
      string = string + 'ہ';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'o'){
      ev.preventDefault();
      string = string + 'ۄ';
     }
    if(ev.key === 'v'){
      ev.preventDefault();
      string = string + 'يٚـ';
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 'v'){
      ev.preventDefault();
     string = string + 'ےٚ';
    }
    if(ev.key === 'f'){
      ev.preventDefault();
      if(string === ''){alert('گۄڈٕ ليٚـکھِو کانٛـہہ اۆر اَچھَر.')}
      else{string = string + 'ٕ'}
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 'f'){
      ev.preventDefault();
     string = string + 'ٟ';
    }
    if(ev.key ==='w'){
      ev.preventDefault();
      string = string + 'و';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'w'){
      ev.preventDefault();
      string = string + 'ۆ';
     }
  
    //consonants
  
  
  
    if(ev.key === 'b'){
      ev.preventDefault();
      string = string + 'ب';
    }
    if(ev.key === 'p'){
      ev.preventDefault();
      string = string + 'پ';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'p'){
      ev.preventDefault();
      string = string + 'ف';
    }
    if(ev.key === 't'){
      ev.preventDefault();
      string = string + 'ت';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 't'){
      ev.preventDefault();
      string = string + 'ٹ';
    }
    if(ev.key === 'y'){
      ev.preventDefault();
      string = string + 'يـ'; 
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'y'){
      ev.preventDefault();
      string = string + 'ے';
    }
    if(ev.key === 'j'){
      ev.preventDefault();
      string = string + 'ج';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'j'){
      ev.preventDefault();
      string = string + 'ؠ';
    }
    if(ev.ctrlKey && ev.key.toLowerCase() === 'c'){
    }
    else if(ev.key === 'c'){
      ev.preventDefault();
      string = string + 'چ';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'h'){
      ev.preventDefault();
      string = string + 'ح';
    }
    if(ev.key === 'x'){
      ev.preventDefault();
      string = string + 'ش';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'x'){
      ev.preventDefault();
      string = string + 'خ';
    }
    if(ev.key === 'd'){
      ev.preventDefault();
      string = string + 'د';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'd'){
      ev.preventDefault();
      string = string + 'ڈ';
    }
    if(ev.key === 'r'){
      ev.preventDefault();
      string = string + 'ر';
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 'r'){
      ev.preventDefault();
      string = string + 'ڑ';
    }
    if(ev.key === 'z'){
      ev.preventDefault();
      string = string + 'ز';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'c'){
      ev.preventDefault();
      string = string + 'ژ';
    }
    if(ev.key === 's'){
      ev.preventDefault();
      string = string + 'س';
    }
    if(ev.ctrlKey && ev.shiftKey && ev.key.toLowerCase() === 's'){
      ev.preventDefault();
      string = string + 'ث';
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 's'){
      ev.preventDefault();
      string = string + 'ص';
    }
    if(ev.ctrlKey && ev.shiftKey && ev.key.toLowerCase() === 'z'){
      ev.preventDefault();
      string = string + 'ذ' ;
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 'z'){
      ev.preventDefault();
      string = string + 'ض' ;
    }
    if(ev.key === '.'){
      ev.preventDefault();
      string = string + '۔';
    }
    if(ev.key === ','){
      ev.preventDefault();
      string = string + '،';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'g'){
      ev.preventDefault();
      string = string + 'غ';
    }
    if(ev.key === 'k'){
      ev.preventDefault();
      string = string + 'ک';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'k'){
      ev.preventDefault();
      string = string + 'ق'; 
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'b'){
      ev.preventDefault();
      string = string +  'ٛ'; 
    }
    if(ev.key === 'g'){
      ev.preventDefault();
      string = string + 'گ';
    }
    if(ev.key === 'l'){
      ev.preventDefault();
      string = string + 'ل';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'l'){
      ev.preventDefault();
      string = string + 'ع';
    }
    if(ev.key === 'm'){
      ev.preventDefault();
      string = string + 'م';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'm'){
      ev.preventDefault();
      string = string + 'نٛـ';
    }
    if(ev.key === 'n'){
      ev.preventDefault();
      string = string + 'ن';
    }
    else if(ev.shiftKey && ev.key.toLowerCase() === 'n'){
      ev.preventDefault();
      string = string + 'ں';
    }
    if(ev.key === 'h'){
      ev.preventDefault();
      string = string + 'ھ';
    }
    if(ev.key === 'q'){
      ev.preventDefault();
      string = string + 'ط';
    }
    if(ev.shiftKey && ev.key.toLowerCase() === 'q'){
      ev.preventDefault();
      string = string + 'ظ';
    }
    if(ev.key === ' '){
      ev.preventDefault();
     string = string + ' ';
    }
    if(ev.key === 'Backspace'){
      ev.preventDefault();
      string = string.substring(0, string.length - 1);}
      if(ev.key === '1'){
        ev.preventDefault();
       string = string + '۱';}
       if(ev.key === '2'){
        ev.preventDefault();
       string = string + '۲';}
       if(ev.key === '3'){
        ev.preventDefault();
       string = string + '۳';}
       if(ev.key === '4'){
        ev.preventDefault();
       string = string + '۴';}
       if(ev.key === '5'){
        ev.preventDefault();
       string = string + '۵';}
       if(ev.key === '6'){
        ev.preventDefault();
       string = string + '۶';}
       if(ev.key === '7'){
        ev.preventDefault();
       string = string + '۷';}
       if(ev.key === '8'){
        ev.preventDefault();
       string = string + '۸';}
       if(ev.key === '9'){
        ev.preventDefault();
       string = string + '۹';}
       if(ev.key === '0'){
        ev.preventDefault();
       string = string + '۰';}
       if(ev.key === ';'){
        ev.preventDefault();
       string = string + '؛';}
       if(ev.key === '?'){
        ev.preventDefault();
       string = string + '؟';}
       if(ev.key === '!'){
        ev.preventDefault();
       string = string + '!';}
       if(ev.key === ':'){
        ev.preventDefault();
       string = string + ':';}


      document.querySelector("textarea").value = string;}

  write();

  function eraser () {
    string = string.substring(0, string.length - 1);
    document.querySelector("textarea").value = string;
  }
  function spacer(){
    string = string + ' ';
    document.querySelector("textarea").value = string;
  }
       