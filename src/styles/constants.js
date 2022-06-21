// Create object with the different sizes
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '580px',
    tabletL: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

// Export devices in object that references the above
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`
};