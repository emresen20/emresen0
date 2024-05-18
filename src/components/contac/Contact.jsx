import "./contact.css";
import github from "../../images/github.png";
import email from "../../images/email.png";
import linkedin from "../../images/linkedin.png";
import { useRef, useState, useContext } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

// E-posta doğrulama işlevi
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [error, setError] = useState('');
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const githubLink = "https://github.com/emresen20";
    const linkedinLink = "https://www.linkedin.com/in/mresen/";

    // Güncellenmiş handleSubmit fonksiyonu
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const userEmail = formData.get('user_Email');

        // E-posta doğrulaması yap
        if (!validateEmail(userEmail)) {
            setError("Please enter a valid e-mail address.");
            return; // Eğer e-posta geçerli değilse göndermeyi durdur
        }

        // Eğer e-posta geçerli ise formu gönder
        emailjs.sendForm('service_7u4lhmo', 'template_7iqv7tl', formRef.current, '9UnHVHe9nkclGiBEc')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">How to contact me ?</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="c-icon"
                                />
                                https://github.com/emresen20
                            </a>
                        </div>
                        <div className="c-info-item">
                            <img
                                src={email}
                                className="c-icon"
                            />
                            emreium@gmail.com
                        </div>
                        <div className="c-info-item">
                            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    className="c-icon"
                                />
                                https://www.linkedin.com/in/mresen/
                            </a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> You can contact me, my determination to work is inexhaustible.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_Email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {done && "Thanks for your conctact "}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
