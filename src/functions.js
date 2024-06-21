class myFunctions {
    constructor () {
        console.log("initiate");
    }
 
        //moja pierwsza funkcja, obliiczanie sredniej arytmetycznej
    srednia (x, y, z) {
        let sum;
        sum = x + y + z; 
        return sum/3;
        }
     

        // moja druga funckja, sprawdzanie czy wyraz jest palindromem
    palindrom(s){
        let j = s.length - 1
        for (let i = 0; i < s.length / 2; i++) {
            if (s[i] != s[j]) {
                return false;
            }
            j--;
        }
        return true;
    }

};

export default myFunctions;