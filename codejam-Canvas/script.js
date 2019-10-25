const url = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
let arr = [];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

async function getArr(){
  await fetch(url)
    .then(response => response.json() )
    .then(data => {
      console.log(data);
      data.forEach((elem, i) => {
      arr[i] = elem;
    })});
    console.log(arr);

    let x = 0;
    let y = 0;

    for( let i=0; i< arr.length; i++){

      arr[i].forEach(val => {
        console.log(val);
        ctx.fillStyle = `#${val}`;
        ctx.fillRect(x,y,50,50);
        x +=50;
      })

      x=0;
      y+=50;
  }
}
getArr();





//ctx.fillStyle = "red";
//ctx.fillRect(0,0,100,100);
