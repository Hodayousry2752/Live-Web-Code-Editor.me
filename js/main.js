
let outerOne=document.getElementById("outer-one");
let outerTwo=document.getElementById("outer-two");
let outerThree=document.getElementById("outer-three");
let reelResult=document.getElementById('reel-result');
let htmlBtn=document.getElementById('html-btn');
let cssBtn=document.getElementById('css-btn');
let jsBtn=document.getElementById('js-btn');
let resultBtn=document.getElementById('result-btn');
let codeHtml=document.getElementById('code-html');
let codeCss=document.getElementById('code-css');
let codeJs=document.getElementById('code-js');



let btns =document.getElementById('btns');
let body =document.getElementById('body');


// Saving the code to localStorage when user stops typing
     let timeoutIdHtml;
     let timeoutIdCss;
     let timeoutIdJs;

function saveToLocalHtml(){
      clearTimeout(timeoutIdHtml);
       timeoutIdHtml = setTimeout(() => {
         localStorage.setItem('autosave_code-html', codeHtml.value);
       }, 1000); 
}
function saveToLocalCss(){
      clearTimeout(timeoutIdCss);
       timeoutIdCss = setTimeout(() => {
         localStorage.setItem('autosave_code-css', codeCss.value);
       }, 1000); 
}
function saveToLocalJs(){
      clearTimeout(timeoutIdJs);
       timeoutIdJs = setTimeout(() => {
         localStorage.setItem('autosave_code-js', codeJs.value);
       }, 1000); 
}

    window.addEventListener('load', () => {
      codeHtml.value =localStorage.getItem('autosave_code-html')|| "<div>\n\n</div>";
      codeCss.value =localStorage.getItem('autosave_code-css') || "<style>\n\n</style>";
      codeJs.value =localStorage.getItem('autosave_code-js')|| "<script>\n\n</script>";

     });


function show(id){

    outerOne.style.display='none';
    outerThree.style.display='none';
    outerTwo.style.display='none';
    reelResult.style.display='none';
    document.getElementById(id).style.display="block";

}

function show_all(){
    if(window.innerWidth>=992)
    {
        outerOne.style.display="block";
        outerTwo.style.display="block";
        outerThree.style.display="block";
        reelResult.style.display='block';
    }else if(window.innerWidth<992 && outerOne.style.display=="block")
    {
        outerTwo.style.display="none";
        outerThree.style.display="none";
        reelResult.style.display='none';

    }
}

function textareaValues(){
    codeHtml.value=`<div>

</div>`;
codeCss.value=`<style>

</style>`;
codeJs.value=`<script>

</script>`;
}textareaValues();



function resultOfCode() {
  
    let iframe = document.createElement('iframe');
    
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.backgroundColor = "white";
  

    reelResult.innerHTML = '';
    reelResult.appendChild(iframe);

    const iframeDoc = iframe.contentDocument;

    iframeDoc.open();
    iframeDoc.write(codeHtml.value+codeCss.value+codeJs.value);
    iframeDoc.close();
  }
