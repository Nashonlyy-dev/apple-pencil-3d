


const Footer = () => {
  return (
    <footer className="w-full py-20 px-6 md:px-20 border-t border-gray-900 z-10 relative bg-[#0b0b0d]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Section: Branding */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-2xl font-black tracking-tighter text-white mb-2">
            PENCIL PRO
          </div>
          <p className="text-gray-500 text-sm">Precision in every pixel.</p>
        </div>

        {/* Middle Section: Credits & Link */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="text-gray-400 text-sm uppercase tracking-widest">
            Developed with ❤️ by <span className="text-white font-bold">Nashdev</span>
          </div>
          
          <div className="flex gap-8">
            <a 
              href="https://github.com/Nashonlyy-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
            >
              <span className="text-xs font-medium">GitHub</span>
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section: Legal & Fine Print */}
        <div className="w-full border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
          <div>
            © 2024 Apple Pencil Experience. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;