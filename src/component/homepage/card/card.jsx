import './card.scss'

const Card = ({ title, imgDesktop, imgMobile, altText }) => {
    return (
        <div className='card'>
            <picture className='card__image-container'>
                <source 
                    media="(min-width: 50rem)" 
                    srcSet={imgDesktop} 
                />
                <img 
                    className='card__image'
                    src={imgMobile} 
                    alt={altText} 
                />
            </picture>
            <h3 className='card__title'>{title}</h3>
        </div>
    )
}

export default Card;