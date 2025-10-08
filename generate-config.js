// generate-config.js
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  API_URL: process.env.API_URL || 'http://localhost:3030',
};

const outputPath = path.join('src/api', 'config.js');

fs.writeFileSync(
  outputPath,
  JSON.stringify(config, null, 2)
);

console.log(`✅ Generated ${outputPath} with API_URL=${config.API_URL}`);
