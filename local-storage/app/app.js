var students = {
    students: [{
        "name": "Kim Donlan",
        "age": 22,
        "phone": "317-554-9958",
        "email": "kimdonl@iu.edu",
        "classes": [
            { "classOne": "I425" },
            { "classTwo": "N320" },
            { "classThree": "N315" }
        ]
    }, {
        "name": "Alice Smith",
        "age": 25,
        "phone": "317-444-5555",
        "email": "asmith@iu.edu",
        "classes": [
            { "classOne": "N485" },
            { "classTwo": "N415" },
            { "classThree": "N220" }
        ]
    }, {
        "name": "Andrew Howard",
        "age": 24,
        "phone": "317-744-4458",
        "email": "ahoward@iu.edu",
        "classes": [
            { "classOne": "N201" },
            { "classTwo": "N315" },
            { "classThree": "N101" }
        ]
    }, {
        "name": "Ben Kramer",
        "age": 28,
        "phone": "317-445-7748",
        "email": "bkramer@iu.edu",
        "classes": [
            { "classOne": "I330" },
            { "classTwo": "S478" },
            { "classThree": "I415" }
        ]
    }, {
        "name": "Megan Siefert",
        "age": "",
        "phone": "317-588-9458",
        "email": "msiefert@iu.edu",
        "classes": [
            { "classOne": "N405" },
            { "classTwo": "I425" },
            { "classThree": "N115" }
        ]
    }]
}

console.log(students);

$("#storeStudent").click(function() {
    let name = $("#name").val();
    let age = $("#age").val();
    let phone = $("#phone").val();
    let course = $("#course").val();
    // console.log(name, age, phone, course);


    let storedStudents;
    if (localStorage.getItem("#section") === null) {
        students = [];
    } else {
        students = JSON.parse(localStorage.setItem("students"));
    }
    students.push(name);
    students.push(age);
    students.push(phone);
    students.push(course);
    students.push(students);

    localStorage.setItem("students", JSON.stringify(students));
})