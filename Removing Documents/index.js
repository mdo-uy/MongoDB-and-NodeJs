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


// Remove
async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}
removeCourse('5ef16b54ceae851f64f048d8');


// Remove many
async function removeCoursesNotPublished() {
    const result = await Course.deleteMany({ isPublished: false });
    console.log(result);
}
removeCoursesNotPublished();
