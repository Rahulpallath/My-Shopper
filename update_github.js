import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const REPO_OWNER = 'Rahulpallath';
const REPO_NAME = 'My-Shopper';
const BRANCH = 'main';

// Using the token from environment
const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error('GitHub token not found in environment variables');
  process.exit(1);
}

// Define the files to update - these are all the files we've modified
const FILES_TO_UPDATE = [
  {
    localPath: 'azure-deploy/src/App.jsx',
    remotePath: 'azure-deploy/src/App.jsx'
  },
  {
    localPath: 'azure-deploy/src/index.css',
    remotePath: 'azure-deploy/src/index.css'
  },
  {
    localPath: 'azure-deploy/tailwind.config.js',
    remotePath: 'azure-deploy/tailwind.config.js'
  },
  {
    localPath: 'azure-deploy/index.html',
    remotePath: 'azure-deploy/index.html'
  },
  {
    localPath: 'azure-deploy/package.json',
    remotePath: 'azure-deploy/package.json'
  },
  {
    localPath: 'azure-deploy/src/components/LoadingScreen.jsx',
    remotePath: 'azure-deploy/src/components/LoadingScreen.jsx'
  },
  {
    localPath: 'azure-deploy/src/pages/sections/HeroSection.jsx',
    remotePath: 'azure-deploy/src/pages/sections/HeroSection.jsx'
  },
  {
    localPath: 'azure-deploy/src/pages/sections/FeaturedCollections.jsx',
    remotePath: 'azure-deploy/src/pages/sections/FeaturedCollections.jsx'
  },
  {
    localPath: 'azure-deploy/src/pages/sections/RunwaySection.jsx',
    remotePath: 'azure-deploy/src/pages/sections/RunwaySection.jsx'
  },
  {
    localPath: 'azure-deploy/src/pages/sections/ProductsGrid.jsx',
    remotePath: 'azure-deploy/src/pages/sections/ProductsGrid.jsx'
  },
  {
    localPath: 'azure-deploy/src/pages/sections/ParallaxSection.jsx',
    remotePath: 'azure-deploy/src/pages/sections/ParallaxSection.jsx'
  },
  {
    localPath: 'vercel.json',
    remotePath: 'vercel.json'
  }
];

/**
 * Makes a request to the GitHub API
 */
function githubRequest(method, endpoint, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: endpoint,
      method: method,
      headers: {
        'User-Agent': 'Node.js GitHub Update Script',
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const jsonResponse = JSON.parse(responseData);
            resolve(jsonResponse);
          } catch (e) {
            resolve(responseData);
          }
        } else {
          reject({
            statusCode: res.statusCode,
            message: responseData
          });
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

/**
 * Gets the current file from GitHub
 */
async function getFile(filePath) {
  try {
    const endpoint = `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}?ref=${BRANCH}`;
    return await githubRequest('GET', endpoint);
  } catch (error) {
    if (error.statusCode === 404) {
      return null; // File doesn't exist yet, we'll create it
    }
    console.error(`Error getting file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Creates or updates a file on GitHub
 */
async function updateFile(filePath, content, sha = null) {
  try {
    const endpoint = `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
    const data = {
      message: `Update ${filePath} for Vercel deployment`,
      content: Buffer.from(content).toString('base64'),
      branch: BRANCH
    };
    
    if (sha) {
      data.sha = sha;
    }
    
    return await githubRequest('PUT', endpoint, data);
  } catch (error) {
    console.error(`Error updating file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Main function to update all files
 */
async function updateAllFiles() {
  for (const file of FILES_TO_UPDATE) {
    try {
      console.log(`Processing ${file.remotePath}...`);
      
      // Get the local file content
      let content;
      try {
        content = fs.readFileSync(file.localPath, 'utf8');
      } catch (err) {
        console.error(`Error reading local file ${file.localPath}:`, err);
        continue;
      }
      
      // Get the current file from GitHub to see if it exists and get its SHA
      const githubFile = await getFile(file.remotePath);
      
      if (githubFile) {
        console.log(`File ${file.remotePath} exists, updating it`);
        await updateFile(file.remotePath, content, githubFile.sha);
      } else {
        console.log(`File ${file.remotePath} does not exist, creating it`);
        await updateFile(file.remotePath, content);
      }
      
      console.log(`Successfully updated ${file.remotePath}`);
    } catch (error) {
      console.error(`Failed to update ${file.remotePath}`, error);
    }
  }
}

// Run the update
updateAllFiles().then(() => {
  console.log('All files updated successfully!');
}).catch(error => {
  console.error('Error updating files:', error);
});