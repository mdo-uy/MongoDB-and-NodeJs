const mongoose = require('mongoose');

// Connection
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', errr))


// Schema    
const couseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});


// Model
const Course = mongoose.model('Course', couseSchema)

async function createCourse() {
    // Instance of Course
    const course = new Course({
        name: 'Angular Course',
        author: 'Mauricio De Oliveira',
        tags: [ 'Angular', 'Frontend'],    
        isPublished: true  
    });

    // Save data
    const result = await course.save();
    console.log(result);
}    
//createCourse();

// Get all Courses
async function getAllCourses() {
    const courses = await Course.find();
    console.log(courses);
}
getAllCourses();


// Get filtered Courses 
async function getCourses() {
    const courses = await Course
        .find( { author: 'Mauricio De Oliveira', isPublished: true })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}
getCourses();

