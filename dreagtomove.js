let div = document.createElement('div');
div.style.position = "absolute";
div.style.left = "0px";
div.style.top = "0px";
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "blue";
document.body.appendChild(div);
let mouseposition={};
let offset={};
let isdown = false;



document.addEventListener('mousedown',(e)=>{
     isdown = true;
     offset = {
         x : div.offsetLeft - e.clientX,
         y : div.offsetTop - e.clientY  
     };
 },true);


document.addEventListener('mouseup',(e)=>{
    isdown = false;
},true);


document.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    if(isdown){
        mouseposition ={ 
            x : e.clientX,
            y : e.clientY
        };
         div.style.left = (mouseposition.x + offset.x) + 'px';
         div.style.top = (mouseposition.y + offset.y) + 'px';
    }
},true);
