import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Contact = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    }
});

export default mongoose.model( 'Contact', Contact );