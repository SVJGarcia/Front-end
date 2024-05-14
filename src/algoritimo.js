function SelectionSort(array){
    for(i = 0; i < array.length; i ++){
        let aux=array[i];
        for(j=1; array.length; j ++){
            if(array[i]>array[j]){
                array[i]=array[j];
                array[i+1]=aux;
            }
        }
    }
    return array;
}

let dados=[1,5,7,8];
console.log(SelectionSort(dados));