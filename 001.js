function multiplicationTable(num){
    
    n=10;
    for(i=1;i<=n;i++){
        var product= num * i;
        console.log(num + " * " + i +" = " +product);
    }
}

multiplicationTable(3);

//different input
multiplicationTable(9)