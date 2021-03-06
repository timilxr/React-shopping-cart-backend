import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        },
    password: {
        type: String,
        required: true,
      },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    {
      timestamps: true,
    });
    userSchema.methods.hashPassword = async password => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hashSync(password, salt);
    };

    userSchema.methods.matchPasswords = async enteredPassword => {
        return await bcrypt.compareSync(enteredPassword, this.password);
    };

    const User = mongoose.model('User', userSchema);
    export default User;
