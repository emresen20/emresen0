import './about.css'
import left from '../../images/left.png'

const About = () => {
    return (
        <div className="a">
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img className="a-image"
                        src={left} />
                </div>
            </div>
            <div className='a-right'>
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Hello, I'm Emre. I'm a 23-year-old individual from Izmir, Turkey.
                </p>
                <p className="a-desc">
                    I am a third-year student studying Computer Engineering at Pamukkale University.I'm a passionate engineer student with a love for software development. I thrive on challenges, constantly seeking opportunities to learn and grow. I'm dedicated, curious, and always excited to explore new technologies.
                </p>

            </div>
        </div>
    )
}
export default About;