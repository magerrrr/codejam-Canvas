let url = '';
let arr = [];

const selectedCase = document.querySelector('.selectCase');
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

selectedCase.addEventListener("click", (event)=>{
  console.log(event.target.innerHTML);
  if(event.target.innerHTML === '4*4'){
    url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
    console.log('1');
  } else if (event.target.innerHTML === '32*32'){
    url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
    console.log('2');
  } else if (event.target.innerHTML === '256*256'){
    url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';
    base_image = new Image();
    base_image.src = url;
    base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0, 512,512);
  }
    console.log('3');
  }
  getArr();
})



async function getArr(){
  await fetch(url)
    .then(response => response.json() )
    .then(data => {
      console.log(data);
      data.forEach((elem, i) => {
      arr[i] = elem;
    })});
    console.log(arr);

    let size = arr.length;

    let pixelSize = 512/size;
    let x = 0;
    let y = 0;

    for( let i=0; i< arr.length; i++){

      if(arr[0][0].length === 6){
        console.log('первый случай');

        arr[i].forEach(val => {
          console.log(val);
          ctx.fillStyle = `#${val}`; // # FFFFFF
          ctx.fillRect(x,y,pixelSize,pixelSize);
          x +=pixelSize;
        })
      } else if (arr[0][0].length === 4) {
        console.log('второй');
        arr[i].forEach(val => {
          console.log(val);
          ctx.fillStyle = `rgb(${val[0]}, ${val[1]}, ${val[2]}, ${val[3]})`; // rgb(x,y,z,t)
          ctx.fillRect(x,y,pixelSize,pixelSize);
          x +=pixelSize;
        })
      }

      x=0;
      y+=pixelSize;
  }
}
