let url = '';
let arr = [];

const selectedCase = document.querySelector('.select-case');
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

selectedCase.addEventListener("click", (event)=>{
  if(event.target.innerHTML === '4*4'){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
  } else if (event.target.innerHTML === '32*32'){
    url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
  } else if (event.target.innerHTML === '256*256'){
    url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';
    base_image = new Image();
    base_image.src = url;

    return base_image.onload = function(){
      ctx.drawImage(base_image, 0, 0, 512,512);
    }
  }
  getArr();
})

async function getArr(){
  await fetch(url)
    .then(response => response.json() )
    .then(data => {
      data.forEach((elem, i) => {
      arr[i] = elem;
    })});

    let size = arr.length;
    let pixelSize = 512/size;

    let x = 0;
    let y = 0;

    for( let i=0; i< arr.length; i++){
      if(arr[0][0].length === 6){
        arr[i].forEach(val => {
          ctx.fillStyle = `#${val}`; // # FFFFFF
          ctx.fillRect(x,y,pixelSize,pixelSize);
          x +=pixelSize;
        })

      } else if (arr[0][0].length === 4) {
        arr[i].forEach(val => {
          ctx.fillStyle = `rgb(${val[0]}, ${val[1]}, ${val[2]}, ${val[3]})`; // rgb(x,y,z,t)
          ctx.fillRect(x,y,pixelSize,pixelSize);
          x +=pixelSize;
        })
      }

      x=0;
      y+=pixelSize;
    }

  arr = [];
}
