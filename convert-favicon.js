import sharp from 'sharp';
import path from 'path';

async function convertFavicon() {
  try {
    // Convert AVIF to PNG
    await sharp('public/favicon.avif')
      .png()
      .toFile('public/favicon.png');
    
    // Create a 16x16 version for old browsers
    await sharp('public/favicon.avif')
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
    
    // Create a 32x32 version for old browsers
    await sharp('public/favicon.avif')
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
    
    // Create a 180x180 version for Apple touch icon
    await sharp('public/favicon.avif')
      .resize(180, 180)
      .png()
      .toFile('public/apple-touch-icon.png');
    
    console.log('Favicon conversion complete!');
  } catch (error) {
    console.error('Error converting favicon:', error);
  }
}

convertFavicon(); 