function addAndSubtract(arr){
    let originalSum = 0;
    let modifiedSum = 0;

    for(let i = 0; i < arr.length; i++){
        
        originalSum += arr[i];

        if(arr[i] % 2 === 0){
            arr[i] += i;
        } else{
            arr[i] -= i;
        }
        modifiedSum += arr[i];
    }

    console.log(arr);
    console.log(originalSum);
    console.log(modifiedSum);
}
addAndSubtract([-5, 11, 3, 0, 2]);