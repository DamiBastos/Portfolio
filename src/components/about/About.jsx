import "./about.css"
import me from "../../img/retrato.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-card">
                <img 
                    src={me} 
                    alt="" 
                    className="a-img" />
                    </div>
                    </div>
            <div className="a-right">
                <h1 className="a-title">Sobre mi</h1>
                <p className="a-sub">
                Soy una persona creativa e inquieta, con una gran capacidad de adaptación. 
                <br/>
                Y una gran capacidad de trabajo en equipo.
                <br/>
                Me gustan los retos y las nuevas experiencias.
                <br/>
                Mis hobbies son la fotografía, la música y el cine.
                </p>
            </div>
            </div>
    )
}

export default About;