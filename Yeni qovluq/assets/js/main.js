var num=prompt("ededi daxil edin");
if( num>99 && num<1000){
    var teklik=num%10;
    var onluq=((num-teklik)%100)/10;
    var b=(onluq*10)+teklik ;
    var yuzluk=(num-b)/100;
    if(teklik==onluq && onluq==yuzluk)
    {
        alert("eynidi");    }
       else 
        {
            alert("fərqlidir") }
        }
        else{
            alert("3 reqemli ededi daxil et") 
        }

    
   
    
 