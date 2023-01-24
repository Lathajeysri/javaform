var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
function budgetDetails(){
      

    // get type, name, date, and amount
    let amount = document.getElementById('amount').value;  //getting amount value from form

let type="";                                                  //type of transaction debit or credit
    let  rdtype1= document.getElementById('debit');
    let  rdtype2= document.getElementById('credit');

    if(rdtype1.checked==true)
{
  type=rdtype1.value;
}
else if(rdtype2.checked==true){
  type=rdtype2.value;
  }
else{
    alert("select any type debit or credit");
    return;
}


let spendBy="";              //Taking values of spend by 
let  rdspendBy1= document.getElementById('cash');
let  rdspendBy2 = document.getElementById('cheque');

    if(rdspendBy1.checked==true)
{
    spendBy=rdspendBy1.value;
}
else if(rdspendBy2.checked==true){
    spendBy=rdspendBy2.value;
  }
else{
    alert("select type of spendby");
    return;
}
console.log(spendBy);

let date = document.getElementById('spendOnDate').value;   //The date amount spend on
let reason = document.getElementById('reason').value;     //The reason for what the amt spend on
if(date==0){
    alert("select a date");
    return;
}
if(reason.length<1){
    alert("Add a reason");
    return;
}
if(amount.length<1){
alert("Enter the appropriate amount");
return;
}
else if (isNaN(amount)==true){
    alert("Amount  must be a number");
    return;
}

const expense = {       //creating an object
   amount,
   type,
   spendBy,
   date,
   reason,
    
}
expenses.push(expense);
console.log(expenses);
// localStorage 
localStorage.setItem('expenses', JSON.stringify(expenses));
showExpenses();
function showExpenses(){
    let list=""
    expenses.forEach(element=>{
      list=list+"<tr>"+"<td>"+element.amount +"</td>"+"<td>"+element.type+"</td>"+"<td>"+element.spendBy+"</td>"+"<td>"+element.date+"</td>"+"<td>"+element.reason+"</td>"+"</tr>";
    });
    document.getElementById('display').innerHTML=list;  

}

}


function getDetails(){
    let startDate= document.getElementById('startDate').value;
    let endDate= document.getElementById('endDate').value;

    var selectedRecords=expenses.filter(function(dates){
        return dates.date>=startDate && dates.date<=endDate;
     });  
    console.log(selectedRecords);  
    let list=""
    selectedRecords.forEach(element=>{
       list=list+"<tr>"+"<td>"+element.amount +"</td>"+"<td>"+element.type+"</td>"+"<td>"+element.spendBy+"</td>"+"<td>"+element.date+"</td>"+"<td>"+element.reason+"</td>"+"</tr>";
    });
    document.getElementById('display').innerHTML=list;  

}

