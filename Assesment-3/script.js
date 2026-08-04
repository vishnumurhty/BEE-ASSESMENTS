const form = document.getElementById("feedbackForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const feedback = document.getElementById("feedback");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const feedbackError = document.getElementById("feedbackError");

const storedData = document.getElementById("storedData");
const sessionUser = document.getElementById("sessionUser");

function validateEmail(emailValue){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(emailValue);
}

function clearError(input,error){
    input.addEventListener("input",function(){

        if(input.value.trim()!=""){
            error.innerText="";
        }

        if(input==email && validateEmail(email.value)){
            emailError.innerText="";
        }

        if(input==course && course.value!=""){
            courseError.innerText="";
        }

    });
}

clearError(name,nameError);
clearError(email,emailError);
clearError(course,courseError);
clearError(feedback,feedbackError);

form.addEventListener("submit",function(e){

    e.preventDefault();

    let valid=true;

    nameError.innerText="";
    emailError.innerText="";
    courseError.innerText="";
    feedbackError.innerText="";

    if(name.value.trim()==""){
        nameError.innerText="Student Name is required";
        valid=false;
    }

    if(email.value.trim()==""){
        emailError.innerText="Email is required";
        valid=false;
    }
    else if(!validateEmail(email.value)){
        emailError.innerText="Invalid Email";
        valid=false;
    }

    if(course.value==""){
        courseError.innerText="Please select a course";
        valid=false;
    }

    if(feedback.value.trim()==""){
        feedbackError.innerText="Feedback is required";
        valid=false;
    }

    if(valid){

        const student={
            name:name.value,
            email:email.value,
            course:course.value,
            feedback:feedback.value
        };

        localStorage.setItem("studentFeedback",JSON.stringify(student));

        sessionStorage.setItem("currentUser",name.value);

        displayData();

        form.reset();

        alert("Feedback Submitted Successfully!");

    }

});

function displayData(){

    const data=JSON.parse(localStorage.getItem("studentFeedback"));

    if(data){

        storedData.innerHTML=`
        <p><b>Student Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Course:</b> ${data.course}</p>
        <p><b>Feedback:</b> ${data.feedback}</p>
        `;

    }
    else{
        storedData.innerHTML="No feedback stored.";
    }

    const user=sessionStorage.getItem("currentUser");

    if(user){
        sessionUser.innerHTML="Current Session User: <b>"+user+"</b>";
    }
    else{
        sessionUser.innerHTML="No Active Session";
    }

}

document.getElementById("deleteBtn").addEventListener("click",function(){

    localStorage.removeItem("studentFeedback");

    sessionStorage.removeItem("currentUser");

    storedData.innerHTML="No feedback stored.";

    sessionUser.innerHTML="No Active Session";

    alert("Stored Data Deleted Successfully!");

});

displayData();