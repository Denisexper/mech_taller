import mongoose from "mongoose";

const mechanicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [100, 'name cannot exceed 100 characters']
    },
    lastName: {
        type: String,
        required: true,
        maxlength: [100, 'Lastname cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters']
    }

})

const mechanic = mongoose.model('mechanic', mechanicSchema);

export default mechanic