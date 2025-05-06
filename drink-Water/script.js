document.getElementById("userForm").addEventListener("submit",function(event)
{
    event.preventDefault();
    const age= parseInt(document.getElementById("age").value);
    const gender= document.getElementById("gender").value;
    const interval =parseInt(document.getElementById("interval").value);

    //calculate recommended water intake
    let waterIntake = calculateWaterIntake(age,gender);

    //display suggestion
    document.getElementById("suggestion").innerText ="you should drink water around ${WaterIntake} liters of water per day.";

    //set interval for notification
    setInterval(function(){
        alert("Time to drink Water!");
    }, interval * 60000);
});
function calculateWaterIntake(age, gender) {
    let waterIntake;
    
    if (gender === 'male') {
        waterIntake = age < 30 ? 3.7 : 3.3;
    } else {
        waterIntake = age < 30 ? 2.7 : 2.3;
    }
    
    return waterIntake;
}