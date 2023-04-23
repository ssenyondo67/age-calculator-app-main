var day;
var month;
var year;

function handleInput(event){
   var maxValue;
   if(event.target.name ==='day'){
    maxValue=31
   }else if(event.target.name ==='month'){
    maxValue=12
   }
   {
        let value =event.target.value
        if(value){
            if( parseInt(value)>=0 &&parseInt(value)<=maxValue){
                if(maxValue==31){
                     day=parseInt(value);
                }else{
                    month=parseInt(value); 
                }
            }else{
                event.target.parentNode.parentNode.classList.add('input-error');
                event.target.nextElementSibling.innerHTML=`This must be valid ${event.target.name}.`;
                setTimeout(() => {
                    event.target.parentNode.parentNode.classList.remove('input-error');
                    event.target.nextElementSibling.innerHTML='';
                }, 1000);
            }
        }else{
            event.target.nextElementSibling.innerHTML='This field is required.';
            event.target.parentNode.parentNode.classList.add('input-error');
            setTimeout(() => {
                event.target.nextElementSibling.innerHTML='';
                event.target.parentNode.parentNode.classList.remove('input-error');
            }, 1000);
        }
   }
   document.getElementById('inputYear').value='';
}

document.getElementById('inputDay').addEventListener('keyup',handleInput);

document.getElementById('inputMonth').addEventListener('keyup',handleInput);

document.getElementById('inputYear').addEventListener('keyup',(event)=>{
    let value =event.target.value    
        if(value){
            const currentDate =new Date();
            if( parseInt(value)>=0 && parseInt(value)<=currentDate.getFullYear() && !value.toString().length <= 2){
                year=parseInt(value); 
                
            }else{
                event.target.parentNode.parentNode.classList.add('input-error');
                event.target.nextElementSibling.innerHTML='Must be in the past';
                setTimeout(() => {
                    event.target.parentNode.parentNode.classList.remove('input-error');
                event.target.nextElementSibling.innerHTML='';
                }, 1000);
            }
        }else{
            event.target.nextElementSibling.innerHTML='This field is required.';
            event.target.parentNode.parentNode.classList.add('input-error');
            setTimeout(() => {
                event.target.nextElementSibling.innerHTML='';
                event.target.parentNode.parentNode.classList.remove('input-error');
            }, 1000);
        }
       
    if(Boolean(day) && Boolean(month)){
        calculateAge();
    }else{
        event.target.parentNode.parentNode.classList.add('input-error');
        event.target.parentNode.previousElementSibling.children[2].innerHTML='This field is required.';
        event.target.parentNode.previousElementSibling.previousElementSibling.children[2].innerHTML='This field is required.';
        setTimeout(() => {
            event.target.parentNode.parentNode.classList.remove('input-error');
            event.target.parentNode.previousElementSibling.children[2].innerHTML='';
            event.target.parentNode.previousElementSibling.previousElementSibling.children[2].innerHTML='';
        }, 1000); 
    }
});

function calculateAge(){
    const currentDate =new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    const diffInMilliseconds=currentDate-birthDate
    const diffInSeconds=diffInMilliseconds/1000 
    const diffInMinutes=diffInSeconds/60
    const diffInHours=diffInMinutes/60
    const diffInDays=diffInHours/24
   
    const diffInMonths=diffInDays/30.41672192709486
    
    const diffInYears=diffInMonths/12
    displayValue('yearNumber',diffInYears);
    {
        let birthMonths=(diffInMonths % 12)
        displayValue('monthNumber',birthMonths)
        let birthDays=diffInDays%30.41672192709486
        displayValue('dayNumber',birthDays)
        
    }
    
}
function displayValue(elementId, number){
    number=Math.floor(number);
    const element=document.getElementById(elementId);
    element.classList.remove('no-value');
    element.innerHTML=number;
    if(number===1){
        element.nextElementSibling.innerHTML=''
    }

}

console.log('2034'.length)