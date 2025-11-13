/* import background from '../assets/background-video1.mp4'; */
import me from '../assets/my-photo.jpeg';
import CardProject from './Card-Project';
import IconsSection from './Icons-Section';
/* import Menu from './Menu'; */

export default function Body(){
    return(
        <main>
            <div className='container'>
                <section className="section" id="home">
                    <div id='home-container'>
                        <div id='welcome'>
                            <h2 className='margin-none'>Hello there<span>!</span></h2>
                            <h1 className='margin-none'>I'm <span>Eduardo Valencia</span></h1>
                            <h3 className='margin-none'><span>Software engineer</span> with experience working as a <span>Salesforce </span>developer and <span>Fullstack </span>developer.</h3>
                            <IconsSection />
                        </div>
                        <img id='my-photo' width={350} height={450} src={me} alt="My photo" />
                    </div>
                </section>
                <hr />
                <section className="section" id="projects">
                    <h1>Projects</h1>
                    <div id="projects-container">
                        <CardProject />
                        <CardProject />
                        <CardProject />
                        <CardProject />
                        <CardProject />
                    </div>
                </section>
                <section className='' id='contact'>
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
                </section>
            </div>
        </main>
    )
}