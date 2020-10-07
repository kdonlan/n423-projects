$("#storeStudent").click(function() {
    var data = {};
    let sname = $("#name").val();
    let sage = $("#age").val();
    let sphone = $("#phone").val();
    let semail = $("#email").val();
    let scourse = $("#course").val();
    var student = { name: sname, age: sage, phone: sphone, email: semail, course: scourse }



    if (localStorage.getItem("local-students") !== null) {
        data = JSON.parse(localStorage.getItem("local-students"));
        $("#message").html(
            `<p>Student was added successfully!</p>`
        )

    } else {
        data.students = [];
    }
    // console.log(data.students);
    data.students.push(student);
    localStorage.setItem("local-students", JSON.stringify(data));
})

$("#showStudents").click(function() {
    showStudents();
})

function submitForm() {
    document.form.submit();
    document.form.reset();
}



function showStudents(data) {
    let allStudents = JSON.parse(localStorage.getItem("local-students"));
    // console.log(allStudents);
    $("#allStudents").html(""); //clears it out from button clicking
    $.each(allStudents.students, function(idx, value) { //key and value
        $("#allStudents").append(
            `<div class="oneStudent"><p>Name: ${value.name}<br>Age: ${value.age}<br>Phone: ${value.phone}<br>Email: ${value.email}<br>Course: ${value.course}</p></div>`
        )
    })
}