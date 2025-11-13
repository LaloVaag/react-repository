import github_logo from '../assets/github.png';
import linkedin_logo from '../assets/linkedin.png';

export default function IconsSection(){
    return(
        <div id='icons-section'>
            <div className='icon'>
                <a href="https://github.com/LaloVaag"><img src={github_logo} alt="github-log" /></a>
            </div>
            <div className='icon'>
                <a href=""><img src={linkedin_logo}alt="linkedin-log" />
                </a>
            </div>
        </div>
    )
}