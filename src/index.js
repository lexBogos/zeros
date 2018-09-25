module.exports = function getZerosCount(number) {
    let count = 0;
    const a = Math.floor(number/5);
    let b = 0;
    while(number/Math.pow(5,b)>5) {b++}
            
    function schetchik(a,b){
    	if(b==0)
    		{return 0}
    	else
    		{return a + schetchik(Math.floor(a/5), b-1)}
        }	
    count = schetchik(a,b)
    return count
    
    }
