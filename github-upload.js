import fs from 'fs';
import https from 'https';

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
      return null; // File doesn't exist yet
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
      message: `Update ${filePath}`,
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
 * Main function
 */
async function uploadFiles() {
  // Upload vercel.json
  try {
    const vercelContent = fs.readFileSync('vercel.json', 'utf8');
    const existingFile = await getFile('vercel.json');
    
    if (existingFile) {
      console.log('vercel.json exists, updating it');
      await updateFile('vercel.json', vercelContent, existingFile.sha);
    } else {
      console.log('vercel.json does not exist, creating it');
      await updateFile('vercel.json', vercelContent);
    }
    
    console.log('Successfully updated vercel.json');
  } catch (error) {
    console.error('Failed to update vercel.json', error);
  }
}

// Run the update
uploadFiles().then(() => {
  console.log('All files updated successfully!');
}).catch(error => {
  console.error('Error updating files:', error);
});