function yHandler(){

	var wrap = document.getElementById('wrap');
	var contentHeight = wrap.offsetHeight;
	var yOffset = window.pageYOffset; 
	var y = yOffset + window.innerHeight;
	
	if(y >= contentHeight && contentHeight < 8000){
		// Ajax call to get more dynamic data goes here
		wrap.innerHTML += '<div class="newData"><iframe width="370" height="215" src="//www.youtube.com/embed/xeBHshlQu88" frameborder="0" allowfullscreen></iframe><div class="inner">Check This Out!!!</div></div>';
		wrap.innerHTML += '<div class="newData1">Lets go, take it to the top do '+
		'not stop short ever!!!!<img src="city.jpg" height="100px" width="100px"></div>';
		wrap.innerHTML += '<div class="newData2"> 2There is no trying, only doing. By totaly cutting of the possibility'+
		'of giving up or failing, you willfind a way to make it happen.Oxford-Dictionary Onlinet. <textarea name="comments" id="comments" rows="5" cols="78"></textarea>'+
		'<button>Post</button></div>';
		wrap.innerHTML += '<div class="newData3"> There is no trying, only doing. By totaly cutting of the possibility'+
		'of giving up or failing, you willfind a way to make it happen.Oxford-Dictionary Online. </div>';
		wrap.innerHTML += '<div class="newData4"> There is no trying, only doing. By totaly cutting of the possibility'+
		'of giving up or failing, you willfind a way to make it happen.Oxford-Dictionary Online. </div>';
	}
	var status = document.getElementById('status');
	status.innerHTML = contentHeight+" | "+y;
}


/*
There is no trying, only doing. By totaly cutting
of the possibility of giving up or failing, you will
find a way to make it happen.

g)There is a passionate fire burning inside of me, any challenge
that comes in front of me is jsut embraced by the flames of my
passion and allows me to grow stronger.


Enlarging Ball with positive sayings.

My name is courage, you name is life, your
name is power.

g)There is no fear in love. Release your inner strength,
courageoulsy sacrifice and give to others.

Make a difference, weave your your unique, courage, love,
passion, courage and joy into the fabric of the Universe.

Sometimes truly caring about someone requires you to deny them
of what

g)Your beliefs effect the way the others treat you. Your reactions
to how others treat you encourage your beliefs.

Sometimes caring for other requires you to courageoulsy
stand up in there defence.

g)Give a hungry man an apple and he will return for more food.
Teach him how to plant apple trees and he will feed others.
*/



