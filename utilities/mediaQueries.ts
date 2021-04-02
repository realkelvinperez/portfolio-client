interface IMedia {
    mobileS: string,
    mobileM: string,
    mobileL: string,
    tablet: string,
    laptop: string,
    laptopL: string,
    desktop: string,
    desktop2k: string,
    desktop4k: string,
}


const media : IMedia = {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '1920px',
        desktop2k: '2560px',
        desktop4k: '3840px'
    }

export default media;
