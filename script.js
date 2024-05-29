const canvas=document.getElementById("canvas");
const body=document.getElementById("body");
console.dir(canvas);
const ctx=canvas.getContext("2d");
const width=canvas.width=600;
const height=canvas.height=450;
const img = new Image();
img.src = 'https://images.unsplash.com/photo-1716393763723-64e389f248fc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


let x=10;
let y=10;
let xv=8;
let yv=8;
function gameEngine(){
    x+=xv;
    y+=yv;
   
   
    ctx.clearRect(0,0,width,height);
    ctx.drawImage(img, x, y,10,10);

    ctx.fillStyle=`rgba(150,150,150,0.01)`;
    if(x>width*0.98){
        xv=-xv;
        canvas.style.left="55%";
        body.style.backgroundColor="red";
        canvas.width*=1.005;
        canvas.style.backgroundSize=`cover`;
        canvas.style.backgroundImage=`url(https://images.unsplash.com/photo-1428366890462-dd4baecf492b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkaW5nfGVufDB8fDB8fHww)`;

    }
    else if(x<-10){
       xv=-xv;
       canvas.style.left="50%";
       body.style.backgroundColor="orange";
       canvas.style.backgroundImage=`url(https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a?q=80&w=2780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
        canvas.style.backgroundSize=`cover`;


    }
    if(y>height*0.99) {
        yv=-yv;
        canvas.style.top="55%";
        body.style.backgroundColor="purple";
        canvas.height*=1.005;
        canvas.style.backgroundSize=`cover`;

        canvas.style.backgroundImage=`url(https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D)`




    
    }
        
    else if(y<-5) {
        yv=-yv;
        canvas.style.top="50%";
        body.style.backgroundColor="black";
        canvas.style.backgroundSize=`cover`;
        canvas.style.backgroundImage=`url(https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D)`;



    
    
    }
    ctx.fillRect(x,y,20,20);
    requestAnimationFrame(()=>{
        setTimeout(gameEngine,30)
    })
}
gameEngine();