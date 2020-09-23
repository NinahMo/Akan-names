
var daysOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function findAkanNames(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = document.getElementById("year").value;
    var gender = document.getElementById("gender").value;
   if (day <= 0 || day > 31 ){
        alert("Invalid day!");
    }
     else if (month <= 0 ||  month > 12  || (month == 2 && day >29)){
        alert("Invalid month!")
    }
    var centuryYear;
    var yearDigits;
    var weekDay;
    var name;
    var dOfWeek;
    var weekDayTrunc;
    centuryYear = parseInt(year.slice(0, 2));
    yearDigits = parseInt(year.slice(2, 4));
    weekDay = ( ( (centuryYear/4) -2*centuryYear-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + day ) % 7;
    document.getElementById('output').innerHTML = weekDay;
    weekDayTrunc = Math.trunc(weekDay);
    if (gender === "Male"){
       name = maleNames[weekDayTrunc];
       dOfWeek = daysOfTheWeek[weekDayTrunc];
    }
    else if (gender === "Female"){
      name = femaleNames[weekDayTrunc];
      dOfWeek = daysOfTheWeek[weekDayTrunc];
    }
     else {
        alert("Select gender")
    }
    document.getElementById('output').innerHTML = "Your Akan name " + name + " meaning you were born on " + dOfWeek;
}