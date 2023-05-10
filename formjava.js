var personarr=[];

function saveDetails(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let gender= document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;


// applying conditon for name
    if(name.trim().length>1)     //for space
    {
        console.log("correct");
    }else{
        alert("name cannot be blank");
        return;
    }

    if(isNaN(name)==false){
        alert("Name cannot be a number");
        return;
    }
 //applying condition for email
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email)) {
        console.log('The email address is valid');
    }
    else {
        alert("The email address is not valid");
        return;
    }
    //applying condition for mobile
    if(mobile.length<10 || mobile.length>10){
        alert("Mobile number must be 10 digit");
        return;
        }else if(isNaN(mobile)==true){
       alert("It must be a number");
       return;
        }else if(mobile[0]!=9 && mobile[0]!=6){
            alert("Mobile number must start with 6 or 9");
return;
        }

        //applying condition for gender
        if(gender.length>1==true){
            alert("gender must be single");
            return;
        }else if(gender[0]!=='m' && gender[0]!=='f' && gender[0]!=='t'){
            alert("Gender is not valid");
            return;
        }

        //applying condition for age
        if(age<18){
     alert("You are not eligible");
            return;
        }
        if(isNaN(age)==true){
            alert("Age must be a number");
            return;
        }

        //applying condition for password
        if(password.length<8){
            alert("password must conatin atleast 8 characters");
            return;
        }
        var regEx = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
        if(password.match(regEx))
          {
      
          }
        else
          {
          alert("password must contain small alplabets and numeric values");
          return;
          }
        
        

let person={                                     //here person is a object and name email is person property i.e parameter
    name:name,
    email:email,
    mobile:mobile,
    gender:gender,
    age:age,
  password:password,
}
personarr.push(person);     //array of object pushing the elements of object into array
displayDetails();
erasetext();
}

function displayDetails(){
let list=""
    personarr.forEach(element=>{
       list=list+"<tr>"+"<td>"+element.name +"</td>"+"<td>"+element.email+"</td>"+"<td>"+element.mobile+"</td>"+"<td>"+element.gender+"</td>"+"<td>"+element.age+"</td>"+"<td>"+element.password+"</td>"+"<td>"+"<button onclick=deleteRow(this)>"+"Delete"+"</button>"+"</td>"+"</tr>";
    });
    document.getElementById('display').innerHTML=list;  

}


function erasetext(){
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('mobile').value="";
    document.getElementById('gender').value="";
    document.getElementById('age').value="";
    document.getElementById('password').value="";
 }
 function deleteRow(r){
    let delrow=r.parentNode.parentNode.rowIndex;
    console.log(delrow);
 }