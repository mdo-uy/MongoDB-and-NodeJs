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


// Update
async function updateCourse(id) {
   const course = await Course.findById(id);
    
   if(!course) return;

   course.author = 'Another Author';
   const result = await course.save();
   console.log(result);
}
updateCourse('5ef16b54ceae851f64f048d8');