//! conditional loop

let addendence = 75;
if(addendence >= 90){
    console.log("Grade O");
}
else if(addendence >= 80){
    console.log("Grade A+");
}
else if(addendence >= 70){
    console.log("Grade A");
}
else{
    console.log("Fail");
}

//! Switch Case

let day = 'Tuesday'
switch(day){
    case 'Monday':
        console.log('First day of the week');
        break;
    case 'Tuesday':
        console.log('second day of the week');
        break;
    case 'Wedensday':
        console.log('third day of the week');
        break;
    case 'Thursday':
        console.log('Fourth day of the week');
        break;
    case 'Friday':
        console.log('Fiveth day of the week');
        break;
    case 'Saturday':
        console.log('sixth day of the week');
        break;
    case 'Sunday':
        console.log('seventh day of the week');
        break;
}