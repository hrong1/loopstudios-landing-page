import './card-container.scss';
import Card from './card/card';


const desktopImages = import.meta.glob('../../assets/desktop/*.jpg', { eager: true, query: '?url', import: 'default' });
const mobileImages = import.meta.glob('../../assets/mobile/*.jpg', { eager: true, query: '?url', import: 'default' });

const cardData = [
    {
        id: 1, 
        title: 'Deep earth', 
        filename: 'image-deep-earth.jpg',
        altText: "A bird's-eye view of Earth from space"
    },
    {
        id: 2, 
        title: 'Night arcade', 
        filename: 'image-night-arcade.jpg',
        altText: "An arcade game machine with flashing neon lights"
    },
    {
        id: 3, 
        title: 'Soccer team VR', 
        filename: 'image-soccer-team.jpg',
        altText: "A soccer player kicking a ball"
    },
    {
        id: 4, 
        title: 'The grid', 
        filename: 'image-grid.jpg',
        altText: "Close-up of a car tire"
    },
    {
        id: 5, 
        title: 'From up above VR', 
        filename: 'image-from-above.jpg',
        altText: "Aerial view of mountain road"
    },
    {
        id: 6, 
        title: 'Pocket borealis', 
        filename: 'image-pocket-borealis.jpg',
        altText: "Aurora borealis on a polar night"
    },
    {
        id: 7, 
        title: 'The curiosity', 
        filename: 'image-curiosity.jpg',
        altText: "A planetary roving vehicle"
    },
    {
        id: 8, 
        title: 'Make it fisheye', 
        filename: 'image-fisheye.jpg',
        altText: "Island through fisheye lens"
    },
]

const Container = () => {
    return (
        <div className='card-container'>
            <h2 className='card-container__title'>
                Our creations
            </h2>
            <div className='card-container__grid'>
                {cardData.map((card) => {
                    const desktopKey = `../../assets/desktop/${card.filename}`;
                    const mobileKey = `../../assets/mobile/${card.filename}`;
                    const imgDesktop = desktopImages[desktopKey];
                    const imgMobile = mobileImages[mobileKey];
                    if (!imgDesktop || !imgMobile) {
                        console.error(`image not found, please check: ${card.filename}`);
                        return null;
                    }
                    return (
                        <Card 
                            key={card.id}
                            title={card.title}
                            imgDesktop={imgDesktop}
                            imgMobile={imgMobile}
                            alt={card.altText}
                        />
                    );
                })}
            </div>
            <button className='card-container__button' type='button'>See All</button>
        </div>
    )
}

export default Container;