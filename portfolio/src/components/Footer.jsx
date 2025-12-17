/* import { useRef } from 'react'; */
import IconsSection from './Icons-Section';
import Form from './Form';

export default function Footer() {
    
    return (
        <footer className='' id='contact'>
            <div id='contact-container'>
                <div id='contact-info'>
                    <h1 className='mg-pd-0'>Contact</h1>
                    <p className='mg-pd-0'>I would love to hear about your project and how I could help. Please feel free to send me a message, and I'll get back to you as soon as possible.</p>
                    <IconsSection />
                    <hr />
                </div>
                <Form />
            </div>
        </footer>
    )
}