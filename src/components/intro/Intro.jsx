import "./intro.css";
import avatar from "../../img/avatar.png";

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-intro">Hola, mi nombre es</h2>
            <h1 className="i-name">Damián Federico Bastos</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Full Stack Web Developer</div>
                    <div className="i-title-item">JavaScript</div>
                    <div className="i-title-item">React-Redux</div>
                    <div className="i-title-item">Express</div>
                    <div className="i-title-item">Node</div>
                </div>
            </div>
            <p className="i-desc">
            
            </p>
        </div>
        

        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={avatar} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Intro;