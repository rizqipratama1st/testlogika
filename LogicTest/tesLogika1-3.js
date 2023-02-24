

// Soal Ke 1
function soal1(value){
    let digit = String(value);
    for (var i = 0; i < digit.length; i++ )
    {
        var x = String(digit.substring(i)).charAt(i.length);
        var y = String(digit.substring(i)).length-1;
        console.log(x+"0".repeat(y));
    }


};

soal1(9327421);


// Soal2
function soal2(value){
    let digit = String(value);
    for (var i = 0; i < digit.length; i++ )
    {
        var x = String(digit.substring(i));
        console.log(x);
    }
};

soal2("123456789");



// Soal 3
function ganjil(num) { 
    let gan = parseInt(num);
        for (j=0; j<=num; j++)
        {
            if (j%2===1) {
                var arr = [j];
                console.log(arr);
                
            }
        }    
 }

 ganjil(15)

