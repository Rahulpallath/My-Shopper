import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration - UPDATE THESE VALUES
const REPO_OWNER = 'Rahulpallath';
const REPO_NAME = 'My-Shopper';
const BRANCH = 'main';
const YOUR_GITHUB_TOKEN = ''; // Add your personal access token here

// Files content
const appJsxContent = `import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import ProductsSection from './components/ProductsSection'
import CollectionsSection from './components/CollectionsSection'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <motion.section 
          className="py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="container text-center">
            <h2 className="mb-8 text-3xl font-bold">Technology Showcase</h2>
            <TechStack />
          </div>
        </motion.section>
        
        <ProductsSection />
        
        <CollectionsSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App`;

const headerJsxContent = `import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          My Shopper
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {['Home', 'Products', 'Collections', 'About', 'Contact'].map((item) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a 
                  href="#" 
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="block p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <nav className="px-4 py-3 bg-white">
            <ul className="space-y-2">
              {['Home', 'Products', 'Collections', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="block py-2 text-gray-600 transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Header`;

const heroSectionJsxContent = `import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container relative z-10">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Frontend React Developer
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Welcome to my React development showcase. This website demonstrates 
              my skills with React, animations, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                View Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white border border-gray-300 hover:bg-gray-100"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Rahul Krishna</h2>
                <p className="text-white/80">Web Developer & UI Designer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-t from-primary/10 to-transparent" />
    </section>
  )
}

export default HeroSection`;

const vercelJsonContent = `{
  "buildCommand": "cd azure-deploy && npm run build",
  "outputDirectory": "azure-deploy/dist",
  "installCommand": "cd azure-deploy && npm install",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`;

const FILES_TO_UPDATE = [
  {
    content: appJsxContent,
    remotePath: 'azure-deploy/src/App.jsx'
  },
  {
    content: headerJsxContent,
    remotePath: 'azure-deploy/src/components/Header.jsx'
  },
  {
    content: heroSectionJsxContent,
    remotePath: 'azure-deploy/src/components/HeroSection.jsx'
  },
  {
    content: vercelJsonContent,
    remotePath: 'vercel.json'
  }
];

// Using the provided token
const token = YOUR_GITHUB_TOKEN;

if (!token) {
  console.error('GitHub token not provided, please add your token in the script');
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
    console.error(`Error getting file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Updates a file on GitHub
 */
async function updateFile(filePath, content, sha) {
  try {
    const endpoint = `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
    const data = {
      message: `Update ${filePath} to match original design`,
      content: Buffer.from(content).toString('base64'),
      sha: sha,
      branch: BRANCH
    };
    
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
      
      // Get the current file from GitHub to get its SHA
      const githubFile = await getFile(file.remotePath);
      
      // Update the file on GitHub with our content
      const result = await updateFile(file.remotePath, file.content, githubFile.sha);
      
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