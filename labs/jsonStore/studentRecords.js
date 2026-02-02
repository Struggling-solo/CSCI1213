const fs = require('fs');
const readline = require('readline-sync');

function collectStudent() {
    console.log('\n--- Enter Student Information ---')

    const name = readline.question('Student name: ');
    const major = readline.question('Major: ');
    const gpaInput = readline.question('GPA: ');
    const gpa = parseFloat(gpaInput);

    const student = {
        name: name,
        major: major,
        gpa: gpa,
        enrollmentDate: new Date().toISOString()
    };

    return student;
}

function collectStudents() {
    const students = [];

    const count = readline.questionInt('How many students? ');

    for (let i = 0; i < count; i++) {
        console.log(`\nStudent ${i + 1} of ${count}`);
        const student = collectStudent();
        students.push(student);
        console.log('Student added successfully!');
    }

    return students;
}
function saveStudents(students, filename) {
    try {
        // Convert JavaScript array to JSON string
        const jsonData = JSON.stringify(students, null, 2);
        
        // Write to file
        fs.writeFileSync(filename, jsonData, 'utf-8');
        
        console.log(`\nSuccessfully saved ${students.length} student(s) to ${filename}`);
    } catch (error) {
        console.error('Error saving students:', error.message);
    }
}

function loadStudents(filename) {
    try {
        // Check if file exists
        if (!fs.existsSync(filename)) {
            console.log(`File ${filename} does not exist.`);
            return [];
        }
        
        // Read file contents
        const jsonData = fs.readFileSync(filename, 'utf-8');
        
        // Parse JSON string back to JavaScript array
        const students = JSON.parse(jsonData);
        
        console.log(`\nSuccessfully loaded ${students.length} student(s) from ${filename}`);
        return students;
    } catch (error) {
        console.error('Error loading students:', error.message);
        return [];
    }
}

function displayStudents(students) {
    console.log('\n========== STUDENT RECORDS ==========');
    
    if (students.length === 0) {
        console.log('No students found.');
        return;
    }
    
    students.forEach((student, index) => {
        console.log(`\nStudent ${index + 1}:`);
        console.log(`  Name: ${student.name}`);
        console.log(`  Major: ${student.major}`);
        console.log(`  GPA: ${student.gpa.toFixed(2)}`);
        console.log(`  Enrolled: ${new Date(student.enrollmentDate).toLocaleDateString()}`);
    });
    
    console.log('\n====================================');
}

function showMenu() {
    console.log('\n===== STUDENT RECORD SYSTEM =====');
    console.log('1. Add students');
    console.log('2. View all students');
    console.log('3. Save to file');
    console.log('4. Load from file');
    console.log('5. Exit');
    console.log('=================================');
}

function main() {
    let students = [];
    const filename = 'students.json';
    let running = true;
    
    console.log('Welcome to the Student Record System!');
    
    while (running) {
        showMenu();
        const choice = readline.questionInt('Choose an option: ');
        
        switch (choice) {
            case 1:
                const newStudents = collectStudents();
                students = students.concat(newStudents);
                console.log(`Total students in memory: ${students.length}`);
                break;
                
            case 2:
                displayStudents(students);
                break;
                
            case 3:
                saveStudents(students, filename);
                break;
                
            case 4:
                students = loadStudents(filename);
                break;
                
            case 5:
                console.log('\nGoodbye!');
                running = false;
                break;
                
            default:
                console.log('Invalid option. Please try again.');
        }
    }
}
 

// Start the application
main();
