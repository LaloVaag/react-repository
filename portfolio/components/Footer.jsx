import IconsSection from '../components/Icons-Section';

export default function Footer() {
    return (
        <footer className='' id='contact'>
            <div id='contact-container'>
                <div id='contact-info'>
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how I could help. Please feel free to send me a message, and I'll get back to you as soon as possible.</p>
                    <IconsSection />
                    <hr />
                </div>
                <form action="POST">
                    <div className='input-area'>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input id='name' name='name' type="text" />
                    </div>
                    <div className='input-area'>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input id='email' name='email' type="email" />
                    </div>
                    <div className='input-area'>
                        <label htmlFor="email">Message</label>
                        <br />
                        <textarea name="message" id=""></textarea>
                    </div>
                    <input id='send-msg' type="submit" value="Send Message" />
                </form>
            </div>
        </footer>
    )
}