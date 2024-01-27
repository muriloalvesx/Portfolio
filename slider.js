let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>12){
        count = 1;
    }
    else(count = 0){
        count = false;
    }
    

document.getElementById("radio"+count).checked = true;

}
