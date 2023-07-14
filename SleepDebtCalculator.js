const getSleepHours = day => {
    switch(day) {
        case 'sunday':
            return 8;
        case 'monday':
            return 7;
        case 'tuesday':
            return 8.5;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 6.5;
        case 'friday':
            return 6;
        case 'saturday':
            return 8;
        default:
            return 'Error!';
    } 
}

console.log(`On Tuesday you slept ${getSleepHours('tuesday')} hours.`);

const getActualSleepHours = () => 
    getSleepHours('sunday') + 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday');

console.log(`This week you slept ${getActualSleepHours()} hours.`);

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
}

console.log(`This week you actually slept ${getActualSleepHours()} hours.`);
console.log(`This week you should have slept ${getIdealSleepHours()} hours.`);