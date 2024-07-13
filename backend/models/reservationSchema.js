import mongoose from 'mongoose';
import validator from 'validator';


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minLength: [3,"First name must contain at least 3 characters!"],
        maxLength: [30,"First name cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        require: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        require: true,
        validate: [validator.isEmail, "Provide a valid email!"],   
    },
    phone: {
        type: String,
        require: true,
        minLength: [10, "Phone number must contaion only 10 digits!"],
        maxLength: [10, "Phone number must contaion only 10 digits!"],
    },
    time: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    }

});

export const Reservation = mongoose.model('Reservation',reservationSchema);
