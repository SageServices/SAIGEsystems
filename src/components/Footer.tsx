import React from 'react';
import { Facebook, X } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">SAIGEsystems</span>
            </div>
            <p className="text-sm">Powered by SAIGEsystems AI</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Store', href: 'https://www.sagedmarketing.com/browse/catRRAP6_594177.aspx' },
                { name: 'About Us', href: 'https://www.facebook.com/profile.php?id=61563105300751' },
                { name: 'Services', href: '#services' },
                { name: 'Reviews', href: 'https://www.facebook.com/profile.php?id=61563105300751&sk=reviews' },
                { name: 'Contact', href: 'https://www.facebook.com/profile.php?id=61563105300751' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61563105300751" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/yourprofile" className="hover:text-blue-400 transition-colors">
                <X className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;