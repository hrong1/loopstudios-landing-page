import './intro.scss'
import desktopImg from '../../assets/desktop/image-interactive.jpg';
import mobileImg from '../../assets/mobile/image-interactive.jpg';

const Intro = () => {
    return (
        <div className='intro'>
            <picture className='intro__image-container'>
                <source 
                    media="(min-width: 50rem)" 
                    srcSet={desktopImg} 
                />
                <img 
                    className='intro__image'
                    src={mobileImg} 
                    alt="a man wearing VR" 
                />
            </picture>
            <div className='intro__content'>
                <h2 className='intro__title'>
                    The leader in interactive VR
                </h2> 
                <p className='intro__text'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </div>
    )
}

export default Intro;