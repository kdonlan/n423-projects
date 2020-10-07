$("#storeStudent").click(function() {
    //creates a container for the object
    var data = {};

    //names the values of the inputs
    let sname = $("#name").val();
    let sage = $("#age").val();
    let sphone = $("#phone").val();
    let semail = $("#email").val();
    let scourse = $("#course").val();

    //defines what a student is, when values taken from inputs
    var student = { name: sname, age: sage, phone: sphone, email: semail, course: scourse }

    //if nothing in local storage, then add it.
    if (localStorage.getItem("local-students") !== null) {
        data = JSON.parse(localStorage.getItem("local-students"));
        $("#message").html( //notifies the user that student was added to the database
            `<p>Student was added successfully!</p>`
        )

    } else { //put the data into an array
        data.students = [];
        $("#message").html( //notifies the user that student was added to the database
            `<p>Student was added successfully!</p>`
        )
    }
    // console.log(data.students);
    data.students.push(student); //pushes the data from local storage to the students object
    localStorage.setItem("local-students", JSON.stringify(data)); //puts into JSON formatting
})

// show Students button action
$("#showStudents").click(function() {
    showStudents();
})

//think it clears the form, but not working as is now
function submitForm() {
    document.form.submit();
    document.form.reset();
}

//takes the data from addStudent() and parses it out to the page
function showStudents(data) {
    let allStudents = JSON.parse(localStorage.getItem("local-students"));
    // console.log(allStudents);
    $("#allStudents").html(""); //clears it out from button clicking
    $.each(allStudents.students, function(idx, value) { //loops through each student's key (index) and value
        $("#allStudents").append(
            `<div class="oneStudent"><p>Name: ${value.name}<br>Age: ${value.age}<br>Phone: ${value.phone}<br>Email: ${value.email}<br>Course: ${value.course}</p></div>`
        )
    })
}