function allNames(){

    var mydate = document.getElementById("mydate");
    
    var gender = document.akanform.gender;

    var bday = mydate.value;
    var date = new Date(document.getElementById("mydate").value);
    var dateday = date.getDay();
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = weekdays[dateday];
    var mName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var fName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var valid = false; 

    
    var display = document.getElementById('display');
    if(mydate.value == ""){
        mydateerror.innerHTML = "Please enter a valid date ";
        mydate.focus();
        return false;
    }else{
    
        for(var i = 0;i<gender.length;i++){
            if(gender[i].checked){
                valid = true;
                break;
            }
        }
        if(valid){
            if(gender[i].value == "male"){
                display.innerHTML = "You were born on a "+day+".<br>"+"Your Akan Name is " + mName[dateday]; 
            }else{
            if(gender[i].value == "female"){
                display.innerHTML = "You were born on a "+day+".<br>"+"Your Akan Name is " + fName[dateday]; 
            }
            }
        }else{
            gendererror.innerHTML = "Please select gender";
            return false;
        }    
    }
}
function refresh(){
    document.getElementById('mydateerror').innerHTML = "";
    document.getElementById('gendererror').innerHTML = "";
    document.getElementById('display').innerHTML = "";
    mydate.value = "";
    mydate.style.backgroundColor = "white";
    mydate.style.border = "none";
    mydate.style.borderBottom = "2px solid #ff5722";
    var ele = document.getElementsByName("gender");

    for(var j=0;j<gender.length;j++)
       gender[j].checked = false;
}