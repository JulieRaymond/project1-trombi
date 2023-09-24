const SIZE_POLICE = 16;
/*
x = x0 + r*cos(t)
y = y0 + r*sin(t)

où (x0,y0) sont les coord du centre, r est le rayon, et t l'angle. 
*/
const unit = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--size-picture'));
let radius = 1.7* unit;
//console.log("unit ", unit);
const div1 = document.getElementById("image1");
let posOriginX = parseInt(getComputedStyle(div1).top);
let posOriginY = parseInt(getComputedStyle(div1).left);
posOriginX -= radius/2;

/* console.log(posOriginX);
console.log(posOriginY); */

function calcPosition(order, lenImages, originX, originY){
  let newOrder;
  if (order < 5){
    radius = radius / 2;
    lenImages = 5;
    newOrder = order;
  }

  else {
    newOrder = order-5;
    lenImages = 10;
  }
  //let angle = (360/lenImages) * order;
  let angle = (2*newOrder*Math.PI/lenImages) + Math.PI;
  //console.log("0, 0 = " + originX + "," + originY + " angle " + order + " = " +  angle);
  //console.log(radius*16*Math.cos(angle));
  let x = radius*20*Math.cos(angle);

  let y = radius*20*Math.sin(angle);
  console.log("angle = " + angle + " radius " + radius + " x, y " + x + " " + y);
  let mod = 1;
  if (y < 0) {
    mod = -1;
  }

/*   if (Math.abs(x) < radius /2 * 20){

    console.log("plif" + order);
    y += mod * radius * 20;
  }
  
  else if (Math.abs(x) > 3 * 4 * 20){
    console.lof("plaf" + order);

    y += mod * radius / 4 * 20;
  }
  else {
    console.log("plouf" + order);
    y += mod * radius * 20;
  }  */

    y += originY;
    x += originX;
  /* let x = originX + radius*16*Math.cos(angle);
  let y = originY + radius*16*Math.sin(angle); */
 
  if (order < 5){
    radius = radius * 2;

  }

  return [x, y];
}

const pictures = document.getElementsByClassName("image");


for(let i = 0; i < pictures.length; i++){
  const xy = calcPosition(i , pictures.length, posOriginX, posOriginY);
  //console.log("div" + (i+1) + " " + xy);

  pictures[i].style.top = xy[0]+"px";
  pictures[i].style.left = xy[1]+"px";
  /*pictures[i].style.backgroundColor = "red";*/
  //console.log(pictures);
}

const posOriginX2 = parseInt(getComputedStyle(div1).top);
const posOriginY2 = parseInt(getComputedStyle(div1).left);

//console.log(posOriginX2);
//console.log(posOriginY2);