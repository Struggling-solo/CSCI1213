const fs = require('fs');
const path = require('path');
console.log('='.repeat(60));
console.log('SETTING UP LAB FILES');
console.log('='.repeat(60));
// Create public directory
console.log('\n1. Creating public directory...');
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
fs.mkdirSync(publicDir);
console.log('Created: public/');
} else {
console.log('Already exists: public/');
}
// Create css directory
console.log('\n2. Creating css directory...');
const cssDir = path.join(publicDir, 'css');
if (!fs.existsSync(cssDir)) {
fs.mkdirSync(cssDir);
console.log('Created: public/css/');
} else {
console.log('Already exists: public/css/');
}
// Create student-form.html
console.log('\n3. Creating student-form.html...');
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Information Form</title>
<!-- External CSS - will be requested from the server -->
<link rel="stylesheet" href="/css/styles.css">
</head>
<body>
<div class="form-container">
<h1>Student Information Form</h1>
<form action="/submit-student" method="POST">
<div class="form-group">
<label for="fullname">Full Name <span
class="required">*</span></label>
<input type="text" id="fullname" name="fullname" required>
</div>
<div class="form-group">
<label for="email">Email Address <span
class="required">*</span></label>
<input type="email" id="email" name="email" required>
</div>
<div class="form-group">
<label for="studentid">Student ID <span
class="required">*</span></label>
<input type="text" id="studentid" name="studentid" required>
</div>
<div class="form-group">
<label for="major">Major <span class="required">*</span></label>
<select id="major" name="major" required>
<option value="">-- Select Major --</option>
<option value="Computer Science">Computer Science</option>
<option value="Information Technology">Information
Technology</option>
<option value="Software Engineering">Software
Engineering</option>
<option value="Data Science">Data Science</option>
<option value="Cybersecurity">Cybersecurity</option>
<option value="Web Development">Web Development</option>
</select>
</div>
<div class="form-group">
<label for="year">Expected Graduation Year <span
class="required">*</span></label>
<select id="year" name="year" required>
<option value="">-- Select Year --</option>
<option value="2025">2025</option>
<option value="2026">2026</option>
<option value="2027">2027</option>
<option value="2028">2028</option>
</select>
</div>
<div class="form-group">
<label>Programming Languages (check all that apply):</label>
<div class="checkbox-group">
<label><input type="checkbox" name="languages" value="Python">
Python</label>
<label><input type="checkbox" name="languages"
value="JavaScript"> JavaScript</label>
<label><input type="checkbox" name="languages" value="Java">
Java</label>
<label><input type="checkbox" name="languages" value="C++"> C+
+</label>
<label><input type="checkbox" name="languages" value="C#">
C#</label>
</div>
</div>
<div class="form-group">
<label for="comments">Additional Comments:</label>
<textarea id="comments" name="comments"
placeholder="Tell us about your goals and
interests..."></textarea>
</div>
<button type="submit">Submit Information</button>
</form>
</div>
</body>
</html>`;
fs.writeFileSync(path.join(publicDir, 'student-form.html'), htmlContent);
