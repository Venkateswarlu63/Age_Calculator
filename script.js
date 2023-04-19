let months = [31,28,31,30,31,30,31,30,31,30,31,30,31];
function ageCalculate()
{
    let today = new Date();
    let inputDate  = new Date(document.getElementById("date-input").value);
    let birthYear, birthMonth, birthDate;
    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth()+1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();
    leapYearCheck(currentYear);
    if(
         birthDetails.year> currentYear ||
         (birthDetails.month>currentMonth && birthDetails.year==currentYear) ||
         (birthDetails.date>currentDate && birthDetails.month==currentMonth && birthDetails.date>currentDate)
    )
    {
        alert("Not born yet");
        displayDetails("-","-","-");
        return;
    }
    birthYear = currentYear - birthDetails.year;
    if(currentMonth >= birthDetails.month)
    {
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12+ currentMonth- birthDetails.month;
    }
    if(currentDate >= birthDetails.date)
    {
        birthDate = currentDate-birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth-2];
        birthDate = days+currentDate-birthDetails.date;
        if(birthDate<0)
        {
            birthMonth = 11;
            birthYear--;
        }
    }
    displayDetails(birthYear,birthMonth,birthDate);
}
function displayDetails(bYear,bMonth,bDate)
{
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}
 function leapYearCheck(year)
{
    if(
       year % 4 == 0 || (year%100==0 && year%400==0)
    ){
        months[1] = 29;
    }
    else{
       months[1] = 28;
    }
    //console.log(year,months[1])
    
}