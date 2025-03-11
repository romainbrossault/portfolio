import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-red-500/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-300 mb-4 md:mb-0">
            <span className="font-semibold">Romain Brossault</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/romainbrossault"
              className="text-gray-300 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/romain-brossault-304a172b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-gray-300 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}