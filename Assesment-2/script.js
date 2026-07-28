let output = "";

function print(title, data) {
    output += "\n=============================\n";
    output += title + "\n";
    output += "-----------------------------\n";

    if (typeof data === "object") {
        output += JSON.stringify(data, null, 2);
    } else {
        output += data;
    }

    output += "\n";

    console.log(title);
    console.log(data);
}

let students = [
    { id: 101, name: "Aman", marks: 82, course: "Java" },
    { id: 102, name: "Priya", marks: 95, course: "Python" },
    { id: 103, name: "Rahul", marks: 67, course: "Java" },
    { id: 104, name: "Neha", marks: 76, course: "Web" },
    { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

print("Original Array", students);

// ================= Task 1 =================
// Add a student using push()

students.push({
    id: 106,
    name: "Simran",
    marks: 91,
    course: "Java"
});

print("Task 1 : After Push()", students);

// ================= Task 2 =================
// Remove last student using pop()

let removedLast = students.pop();

print("Task 2 : Removed Student", removedLast);

// ================= Task 3 =================
// Add student at beginning using unshift()

students.unshift({
    id: 100,
    name: "Ankit",
    marks: 80,
    course: "Web"
});

print("Task 3 : After Unshift()", students);

// ================= Task 4 =================
// Remove first student using shift()

let removedFirst = students.shift();

print("Task 4 : Removed First Student", removedFirst);

// ================= Task 5 =================
// Replace Rahul with Karan using splice()

let index = students.findIndex(student => student.id === 103);

students.splice(index, 1, {
    id: 107,
    name: "Karan",
    marks: 78,
    course: "Java"
});

print("Task 5 : After Splice()", students);

// ================= Task 6 =================
// Copy first three students using slice()

let firstThree = students.slice(0, 3);

print("Task 6 : First Three Students", firstThree);

// ================= Task 7 =================
// Display using for...of

output += "\n=============================\n";
output += "Task 7 : for...of\n";
output += "-----------------------------\n";

for (let student of students) {
    let text = `${student.name} - ${student.course} - ${student.marks}`;
    output += text + "\n";
    console.log(text);
}

// ================= Task 8 =================
// Print names using forEach()

output += "\n=============================\n";
output += "Task 8 : forEach()\n";
output += "-----------------------------\n";

students.forEach(student => {
    output += student.name + "\n";
    console.log(student.name);
});

// ================= Task 9 =================
// Create array of names using map()

let names = students.map(student => student.name);

print("Task 9 : Student Names", names);

// ================= Task 10 =================
// Students with marks >=80 using filter()

let filtered = students.filter(student => student.marks >= 80);

print("Task 10 : Marks >= 80", filtered);

// ================= Task 11 =================
// Total and Average using reduce()

let total = students.reduce((sum, student) => sum + student.marks, 0);

let average = total / students.length;

print("Task 11(a) : Total Marks", "Total Marks = " + total);
print("Task 11(b) : Average Marks", "Average = " + average);

// ================= Task 12 =================
// Sort Ascending

let ascending = [...students];

ascending.sort((a, b) => a.marks - b.marks);

print("Task 12(a) : Ascending Marks", ascending.map(student => student.marks));

// Sort Descending

let descending = [...students];

descending.sort((a, b) => b.marks - a.marks);

print("Task 12(b) : Descending Marks", descending.map(student => student.marks));

// Show output on webpage

document.getElementById("output").textContent = output;