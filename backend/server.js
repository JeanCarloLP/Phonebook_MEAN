import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Contact from './models/contact';
// import { runInNewContext } from 'vm';

const app = express();
// app.get('/', (req, res) => res.send('Hello World!'));

const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect( 'mongodb://localhost:27017/contacts' );

const connection = mongoose.connection;

connection.once( 'open', () => {
    console.log('MongoDB database connection stablished succesfully ');
});

// ERRORS
router.route( '/contacts' ).get( (req, res) => {
    Contact.find( ( err, contacts ) => {
        if (err)
            console.log(err);
        else
            res.json( contacts );
    })
});

router.route( '/contacts/:id' ).get( (req, res ) => {
    Contact.findById( req.params.id, ( err, contact ) => {
        if (err)
            console.log(err);
        else
            res.json( contact );
    })
});

// CREATE
router.route( '/contacts/add' ).post( ( req, res ) => {
    let contact = new Contact( req.body );
    contact.save().then( contact => {
        res.status( 200 ).json({'contact': 'Added successfully!'});
    }).catch( err => {
        res.status(400).send('Failed to create a new record!');
    });
});

// UPDATE
router.route( '/contacts/update/:id' ).post( (req, res) => {
    Contact.findById( req.params.id, ( err, contact ) => {
        if (!contact)
            return next( new Error( 'Could not load document!' ));
        else {
            contact.name = req.body.name;
            contact.lastName = req.body.lastName;
            contact.telephone = req.body.telephone;

            contact.save().then( contact => {
                res.json('Update done!');
            }).catch( err => {
                res.status(400).send('Update failed!');
            });
        }
    });
});

// DELETE
router.route('/contacts/delete/:id').get( (req, res) => {
    Contact.findByIdAndRemove({_id: req.params.id}, (err, contact) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully!');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));