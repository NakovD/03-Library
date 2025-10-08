// generate-config.js
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Зареждаме .env файла от root директорията
dotenv.config();

const config = {
  API_URL: process.env.API_URL || 'http://localhost:3030',
};

// Път до frontend/config.js
const outputPath = path.join('frontend', 'config.js');

// Генерираме JS файл, достъпен в браузъра
fs.writeFileSync(
  outputPath,
  `window.APP_CONFIG = ${JSON.stringify(config, null, 2)};\n`
);

console.log(`✅ Generated ${outputPath} with API_URL=${config.API_URL}`);
