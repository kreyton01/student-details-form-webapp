function validateForm() {
    var name = document.forms["studentform"]["name"].value;
    var matric_no = document.forms["studentform"]["matric_no"].value;
    var email = document.forms["studentform"]["email"].value;
    
    // Check if first and last name only contains letters and spaces
    var nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }
    
    // Check if matric_no only contains numbers
    var numberRegex = /^\d+$/;
    if (!numberRegex.test(matric_no)) {
        alert("Please enter a valid matric number.");
        return false;
    }
    
    // Check if email only contains letters, numbers, and @ symbol
    var emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
}
