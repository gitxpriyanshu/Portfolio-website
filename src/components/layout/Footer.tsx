import { SITE_CONFIG } from '@/lib/constants';
import { Biohazard, Copyright } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-text-secondary text-sm font-body">
              Designed & Built by <span className="text-text-primary">{SITE_CONFIG.name}</span>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              className="text-accent hover:text-accent/80 transition-all duration-300 transform hover:scale-110 active:scale-95 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
              aria-label="Back to top"
            >
              <Biohazard size={32} strokeWidth={1.5} />
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 text-text-secondary text-[10px] font-mono uppercase tracking-widest">
              <Copyright size={14} className="opacity-80" />
              <span>{currentYear} · All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
