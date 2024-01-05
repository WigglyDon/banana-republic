const fs = require('fs');

const currentDbPath = './db.json';
const backupDbPath = './db.backup.json';

function migrateData() {
  fs.copyFile(backupDbPath, currentDbPath, (err) => {
    if (err) {
      console.error('Error occurred while migrating data:', err);
      return;
    }
    console.log('Data migration completed successfully.');
  });
}

migrateData();
