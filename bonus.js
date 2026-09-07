function createCounter(num){
    let current = num ;
    return {
        increment : function(){
            current++ ;
            return current ;
        },
        reset : function(){
            current = num ;
            return current ;
        },
        decrement : function(){
            current-- ;
            return current ;
        }
    }
}
