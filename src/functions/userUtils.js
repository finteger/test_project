//Bug found in condition where user has only first name 
function getUserFullName(user){
    if(!user || !user.firstName){
        throw new Error('Invalid user data');
    }
    return `${user.firstName} ${user.lastName || ''}`.trim();
}

function calculateAge(birthYear, currentYear){

    if (
        isNaN(birthYear) || 
        isNaN(currentYear) || 
        birthYear % 1 !== 0 || 
        currentYear % 1 !== 0
    ) {
        throw new Error('Invalid year');
    }

   const age = currentYear - birthYear;

    //Boundary condition
    if(age <= 0 || age > 124){
        throw new Error('Invalid birth year');
    } else {
        return age;
    }
}

//Assume that user object has user.firstName & user.lastName
function getUserInitials(user){
    if(!user || !user.firstName || !user.lastName){
        throw new Error('Invalid user data');
    }
    return `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;
}

module.exports = {
    getUserFullName,
    calculateAge,
    getUserInitials,
}
