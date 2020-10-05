var data = {
    students: [],
};

$("#storeStudent").click(function() {
    let name = $("#name").val();
    let age = $("#age").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let course = $("#course").val();
    var students = { name, age, phone, email, course }

    // console.log(name, age, phone, course);
    // var student = { name, age, phone, email, course }
    data.students.push(data);


    if (localStorage.getItem("#section") === null) {
        data = [];
    } else {
        data = JSON.parse(localStorage.getItem("students"));
    }

    data.push(students);
    localStorage.setItem("data", JSON.stringify(students));

    function showStudents(data) {
        let allStudents = JSON.parse(localStorage.getItem("data.student"))
        $("#allStudents").html(
            `<p>${data.student.name}</p>
            <p>${data.allStudent.age}</p>
            <p>${data.allStudents.phone}</p>
            <p>${data.allStudent.email}</p>
            <p>${data.allStudent.course}</p>`
        )
    }
})

function initListeners() {
    showStudents();
}