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
        name: 'Node.Js Course',
        author: 'Mauricio De Oliveira',
        tags: [ 'Node.Js', 'Backend'],    
        isPublished: true  
    });

    // Save data
    const result = await course.save();
    console.log(result);
}
    
createCourse();
