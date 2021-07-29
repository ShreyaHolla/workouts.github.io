

function bmi()
{
   
    var height = parseFloat(document.getElementById("h").value);
    var weight = parseFloat(document.getElementById("w").value);

    if(isNaN(height) || isNaN(weight))
    {
        alert("Enter both details");
        return false;
    }
    
    var userbmi = weight/(height/100 * height/100);
    var bmi = (userbmi.toFixed(2));
    var res=document.getElementById("type");

    document.getElementById("result").innerHTML = bmi;

    if(bmi<18.5)
    {
        res.innerHTML = "UNDERWEIGHT";
     
    }
    else if(bmi>=18.5 && bmi<24.9)
    {
        res.innerHTML = "NORMAL WEIGHT";
    
    }
    else if(bmi>=25.0 && bmi<29.9)
    {
        res.innerHTML = "OVERWEIGHT";
       
    }
    else
    {
        res.innerHTML = "OBESE";
        
    }
    
}