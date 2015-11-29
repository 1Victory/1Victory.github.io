(function(){

function init(){
     var canvas = document.getElementsByTagName('canvas')[0];
     var c = canvas.getContext('2d');

     var container = {x:0,y:0,width:1400,height:1400};
     var circles = [{x:200,y:100,r:50,color:25,vx:12,vy:15},
                    {x:400,y:250,r:100,color:125,vx:2,vy:-8},
                    {x:300,y:150,r:25,color:285,vx:20,vy:-20},
					{x:100,y:250,r:30,color:105,vx:-55,vy:-8},
                    {x:500,y:150,r:85,color:205,vx:40,vy:-20},
                    {x:200,y:300,r:75,color:325,vx:15,vy:-12},
					{x:400,y:400,r:120,color:275,vx:34,vy:-16},
                    {x:100,y:400,r:120,color:175,vx:-24,vy:-16}
					
     ];


     function draw(){
         c.fillStyle = 'black';
         c.strokeStyle = 'black';
         c.fillRect(container.x,container.y,container.width,container.height);
         //c.clearRect(container.x,container.y,container.width,container.height);
         //c.strokeRect(container.x,container.y,container.width,container.height);

         for(var i=0; i <circles.length; i++){
             c.fillStyle = 'hsl(' + circles[i].color + ',100%,50%)';
             c.beginPath();
             c.arc(circles[i].x,circles[i].y,circles[i].r,0,2*Math.PI,false);
             c.fill();

             if((circles[i].x + circles[i].vx + circles[i].r > container.x + container.width) || (circles[i].x - circles[i].r + circles[i].vx < container.x)){
                circles[i].vx = - circles[i].vx;
             }
             if((circles[i].y + circles[i].vy + circles[i].r > container.y + container.height) || (circles[i].y - circles[i].r + circles[i].vy < container.y)){
                 circles[i].vy = - circles[i].vy;
             }
             circles[i].x +=circles[i].vx;
             circles[i].y +=circles[i].vy;
         }



         requestAnimationFrame(draw);

     }


    requestAnimationFrame(draw);


}

//invoke function init once document is fully loaded
window.addEventListener('load',init,false);

}());  //self invoking function