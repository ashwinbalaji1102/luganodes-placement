const { default: mongoose } = require("mongoose");

module.exports = () => {
    const userSchema = new mongoose.Schema({
        password: {
        type: String,
        required: [true, 'Password is required.'],
        },
        email: {
        type: String,
        required: [true, 'This is the way of communication.',],
        unique: [true, 'Email needs to be unique'],
        },
    });
    const User = mongoose.model('User', userSchema);
    return User;
}