const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'PROPERTY', 'Additional pictures-20261006T054351Z-1-001', 'Additional pictures');
const destDir = path.join(__dirname, '..', 'public', 'img', 'additional');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'Table Tennis.png': 'table-tennis.png',
  'Carroms.png': 'carroms.png',
  'carroms 2.png': 'carroms-2.png',
  'gym 2.png': 'gym.png',
  'Gym1.png': 'gym-1.png',
  'Banquet Space.png': 'banquet-space.png',
  'Banquet space function.PNG': 'banquet-function.png',
  'conference room 1.png': 'conference-room.png',
  'Outdoor Event space.png': 'outdoor-event-lawn.png',
  'outdoor restaurant seating.png': 'outdoor-restaurant.png',
  'Restaurant 1.png': 'restaurant-1.png',
  'restaurant area.png': 'restaurant-area.png',
  'Restaurant hand wash.png': 'restaurant-hand-wash.png',
  'swimming pool.png': 'swimming-pool.png',
  'amphitheatre.png': 'amphitheatre.png',
  'Bonfire.png': 'bonfire.png',
  'reading area.png': 'reading-area.png'
};

for (const [srcName, destName] of Object.entries(mapping)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    const stats = fs.statSync(destPath);
    console.log('Copied ' + srcName + ' -> ' + destName + ' (' + (stats.size / 1024).toFixed(1) + ' KB)');
  } else {
    console.error('Missing source file: ' + srcPath);
  }
}
