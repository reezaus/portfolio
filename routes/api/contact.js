const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../../models/Contact');

// @route POST api/contact
// @desc send contact info
// @access Public

router.post(
  '/',
  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 

    const { name, email, message } = req.body;

    try {
      const contact = new Contact({
        name,
        email, 
        message
      });
    
    await contact.save();
      
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }

    res.send('Message Sent');
  }
);

module.exports = router;
