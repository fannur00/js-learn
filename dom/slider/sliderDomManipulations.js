let left = document.querySelector('#left');
let right = document.querySelector('#right');
let items = document.querySelector('#items');
let cumputed = window.getComputedStyle(items);
const item = document.querySelectorAll(".item");
let isMoving = false;

// right.addEventListener('click', function(e){
//     e.preventDefault();
//     if(isMoving) return
//     let currentRight = parseInt(cumputed.right);

//     if (currentRight < 400){
//             items.style.right = currentRight + 100 +"px";
//     }
//     isMoving = true; 
//     setTimeout( () => {
//         isMoving = false;
//     }, 300);

//     console.log(currentRight);
   
// });
// left.addEventListener('click', function(e){
//     e.preventDefault();
//     let currentRight = parseInt(cumputed.right);

//     if (currentRight > 0) {
//             items.style.right = currentRight - 100 + "px";
//     }
   
// });

const minRight = 0;
const itemWidth = getComputedStyle(item[0]).width
const step = parseInt(itemWidth);
const preShownItem = 300 / step;
const maxRight = (item.length - preShownItem) * step ; 
let currentRight = 0;

right.addEventListener('click', e => {
    e.preventDefault();

    if(currentRight < maxRight) {
        currentRight += step;

        items.style.right = `${currentRight}px`;
    }
});

left.addEventListener('click', e => {
    e.preventDefault();

    if(currentRight > minRight) {
        currentRight -= step;

        items.style.right = `${currentRight}px`;
    }
});