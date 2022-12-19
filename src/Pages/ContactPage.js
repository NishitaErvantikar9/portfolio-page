import React from 'react'
import {Form,Button} from 'react-bootstrap'

function ContactPage() {
    return (
        <div className="contactPage">
            <h1>Get In Touch</h1>
            <div className="form">
            <Form name="contact" method="POST" data-netlify="true" onSubmit="submit">
            <Form.Control className="d-none" name="form-name" value="contact"></Form.Control>

            <Form.Group className="mb-3 input" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control className="input" type="text" name="name" placeholder="Enter Name" required />
           
          </Form.Group>
            
  <Form.Group className="mb-3 input" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  className="input" type="email" name="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group  className="mb-3 input" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Write Your Message</Form.Label>
  <Form.Control name="message" as="textarea" rows={3} required/>
</Form.Group>

  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
            </div>
        </div>
    )
}

export default ContactPage
