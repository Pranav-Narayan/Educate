import React from 'react'
import './Contact.css'
import message_icon from '/src/assets/msg-icon.png'
import mail_icon from '/src/assets/mail-icon.png'
import phone_icon from '/src/assets/phone-icon.png'
import location_icon from '/src/assets/location-icon.png'
import white_arrow from '/src/assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "03b5f043-3c6e-48ab-9d3b-264eaa05cbb5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact container'>
        <div className="contact-col">
            <h3>Send us a message
                <img src={message_icon} alt="" />
            </h3>
            <p>Feel free to reach out through contact form or find our contact infromation below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptioinal service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />
                Contact@Educate.com</li>
                <li><img src={phone_icon} alt="" />
                    +91 7775556661</li>
                <li><img src={location_icon} alt="" />
                    77 Chaithnya Line, Kochi<br /> MA 02139 , Kerala</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows='6' placeholder='Enter Your Message' required></textarea>
                <button type='submt' className='btn' style={{backgroundColor:'blue',color:'white'}}>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
