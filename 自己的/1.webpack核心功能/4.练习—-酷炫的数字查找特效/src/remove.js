



export function remove(arr) {
    for (var i = 1; i < arr.length; i++) {
         if(getComputedStyle(arr[i-1]).opacity === '0'){
             arr[i-1].remove();
         }   
    }
}