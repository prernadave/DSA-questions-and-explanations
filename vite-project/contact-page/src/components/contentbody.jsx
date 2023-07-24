import React from 'react'
import "../components/body.css"

const Body = () => {
    return (
        <div>
            <H1>CONTACT US</H1>
            <p>I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out to me. Building connections with fellow developers and enthusiasts is what drives me in this journey. Your feedback and collaboration are always welcome.</p>

            <div className="body-sections">
                <div className='body-sections-form'>
                    <div class="button-container">
                        <button class="black-button">Via Support Chat</button>
                        <button class="black-button">Via Call</button>
                    </div>
                    <button class="via-email-button">Via Email</button>
                </div>

                <div class="form-container">
        <form class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
                <div className='body-sections-img'></div>
            </div>
        </div>
    )
}

export default Body
