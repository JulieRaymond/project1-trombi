const SIZE_POLICE = 16;
/*
x = x0 + r*cos(t)
y = y0 + r*sin(t)

où (x0,y0) sont les coord du centre, r est le rayon, et t l'angle. 
*/
const unit = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--size-picture'));
const radius = 2.5 * unit;
//console.log("unit ", unit);
const div1 = document.getElementById("image1");
const posOriginX = parseInt(getComputedStyle(div1).top);
const posOriginY = parseInt(getComputedStyle(div1).left);

/* console.log(posOriginX);
console.log(posOriginY); */

function calcPosition(order, lenImages, originX, originY){
  //let angle = (360/lenImages) * order;
  let angle = 2*order*Math.PI/lenImages;
  //console.log("0, 0 = " + originX + "," + originY + " angle " + order + " = " +  angle);
  console.log(radius*16*Math.cos(angle));
  let x = originX + radius*20*Math.cos(angle);
  let y = originY + radius*20*Math.sin(angle);

  /* let x = originX + radius*16*Math.cos(angle);
  let y = originY + radius*16*Math.sin(angle); */
  
  return [x, y];
}

const pictures = document.getElementsByClassName("image");


for(let i = 0; i < pictures.length; i++){
  const xy = calcPosition(i , pictures.length, posOriginX, posOriginY);
  //console.log("div" + (i+1) + " " + xy);

  pictures[i].style.top = xy[0]+"px";
  pictures[i].style.left = xy[1]+"px";
  pictures[i].style.backgroundColor = "red";
  //console.log(pictures);
}

const posOriginX2 = parseInt(getComputedStyle(div1).top);
const posOriginY2 = parseInt(getComputedStyle(div1).left);

//console.log(posOriginX2);
//console.log(posOriginY2);