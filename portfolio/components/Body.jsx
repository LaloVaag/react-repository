import me from '../assets/my-photo.jpeg';
import CardProject from './Card-Project';
import IconsSection from './Icons-Section';
import Menu from './Menu';


export default function Body( {isMobile} ){
    
    return(
        <main>
            <div className='container'>
                <section className={`${isMobile? 'menu-open': ''}`} id='menu'>
                    <Menu />
                </section>
                <section className="section" id="home">
                    <div id='home-container'>
                        <div id='welcome'>
                            <h2 className='mg-pd-0'>Hello there<span>!</span></h2>
                            <h1 className='mg-pd-0'>I'm <span>Eduardo Valencia</span></h1>
                            <h3 className='mg-pd-0'><span>Software engineer</span> with experience working as a <span>Salesforce </span>developer and <span>Fullstack </span>developer.</h3>
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
                    </div>
                </section>
            </div>
        </main>
    )
}