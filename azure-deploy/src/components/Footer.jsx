import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 mt-12 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <address className="not-italic text-gray-600">
              <p>Texas Tech University</p>
              <p>Lubbock, TX 79415</p>
              <p className="mt-2">Phone: +1 (806) 283-0944</p>
              <p>Email: rpallath@ttu.edu</p>
            </address>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              {['Home', 'Products', 'Collections', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rahul-pallath/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-white bg-primary rounded-full hover:bg-primary/90"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="https://www.instagram.com/rahul_pallath/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-white bg-primary rounded-full hover:bg-primary/90"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 mt-8 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} My Shopper. Created by Rahul Krishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer