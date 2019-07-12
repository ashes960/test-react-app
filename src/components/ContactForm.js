import React from "react";

const ContactForm = () => (
  <div className="contact-us-form">
    <div>
      <h3>Contact Us Form</h3>
      <p>Please fill in the details below and press submit to contact us.</p>
    </div>
    <div>
      <form id="frm_contact">
        <div>
          Name:<em>*</em>{" "}
          <input
            type="text"
            name="name"
            size="45"
            placeholder="Enter name here..."
            required
          />
        </div>
        <div>
          Email:<em>*</em>{" "}
          <input
            type="email"
            name="email"
            size="45"
            placeholder="Enter email here..."
            required
          />
        </div>
        <div>
          Category:<em>*</em>{" "}
          <select name="category" required>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
            <option>Category 4</option>
          </select>
        </div>
        <div>
          Gender:<em>*</em>
          <input type="radio" name="gender" value="male" required />
          Male
          <input type="radio" name="gender" value="female" required />
          Female
        </div>
        <div>
          Message:<em>*</em>
          <div>
            <textarea name="message" placeholder="Enter message here..." />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default ContactForm;
