// generate-config.js
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.API_URL || 'http://localhost:3030';

const outputPath = path.join('src/api', 'config.js');

fs.writeFileSync(
  outputPath,
  `export const config = { API_URL: "${apiUrl}" };`
);

console.log(`✅ Generated ${outputPath} with API_URL=${apiUrl}`);
