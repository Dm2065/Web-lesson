let imageArrray = [
   "img/img1.png",
   "img/img2.png",
   "img/img3.png",
   "img/img4.png",
   "img/img5.png"
];
window.Number = '0';
let imageCount = imageArrray.length;
function image(num){
   if (num==1){
      if (number < imageCount - 1){
         number++;
         document.getElementById('images').src = imageArrray[number];
         document.getElementById('num_img').innerHTML = number + 1 + '/' + imageCount;
      } 
      else{
         if (number > 0){
            number--;
            document.getElementById('images').src = imageArrray[number];
            document.getElementById('num_img').innerHTML = number + 1 + '/' + imageCount;
         }
      }
   }
}
