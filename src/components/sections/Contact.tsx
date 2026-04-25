import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Premium Contact Section
 * Features: Floating label inputs, SheetDB integration, and cinematic success/error states.
 */
export const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gitxpriyanshu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/priyanshuverma-1310-kv', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/PriyanshuKV1310', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/priyanshu.verma_1310', label: 'Instagram' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch('https://sheetdb.io/api/v1/xte26tq15cgj1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [formData]
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ Name: '', Email: '', Subject: '', Message: '' });
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/[0.02] pointer-events-none skew-x-12" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Conversation Starter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              eyebrow="GET IN TOUCH" 
              title="Let's build something together."
              className="mb-8"
            />
            
            <p className="text-text-secondary text-lg font-body leading-relaxed mb-12 max-w-md">
              Whether you're looking for a dedicated engineer for your team, have an open-source project idea, or just want to discuss the latest in tech — I'm always open to a conversation.
            </p>

            <div className="space-y-8">
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex items-center gap-4 text-text-primary hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">Email</p>
                  <p className="text-lg font-body tracking-tight">{SITE_CONFIG.email}</p>
                </div>
              </a>

              <div className="pt-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-text-secondary mb-6">Social Networks</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/[0.05] border border-accent/20 rounded-3xl p-12 text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                    <CheckCircle2 size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-display text-text-primary mb-4">Message Sent!</h3>
                  <p className="text-text-secondary font-body mb-8">
                    Thanks for reaching out, Priyanshu. I've received your message and will get back to you shortly.
                  </p>
                  <Button variant="ghost" onClick={() => setFormStatus('idle')}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FloatingInput 
                      label="Your Name" 
                      name="Name" 
                      value={formData.Name} 
                      onChange={handleInputChange} 
                      required 
                    />
                    <FloatingInput 
                      label="Email Address" 
                      type="email" 
                      name="Email" 
                      value={formData.Email} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <FloatingInput 
                    label="Subject" 
                    name="Subject" 
                    value={formData.Subject} 
                    onChange={handleInputChange} 
                    required 
                  />
                  <FloatingInput 
                    label="Message" 
                    name="Message" 
                    textarea 
                    value={formData.Message} 
                    onChange={handleInputChange} 
                    required 
                  />

                  <motion.div
                    animate={formStatus === 'error' ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full h-14" 
                      loading={formStatus === 'loading'}
                      icon={Send}
                    >
                      {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>

                  {formStatus === 'error' && (
                    <div className="flex items-center justify-center gap-2 text-red-400 text-sm font-mono uppercase tracking-widest mt-4">
                      <AlertCircle size={14} /> Failed to send. Please try again.
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FloatingInputProps {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FloatingInput = ({ label, name, type = 'text', textarea, required, value, onChange }: FloatingInputProps) => {
  return (
    <div className="relative group">
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          required={required}
          className="peer w-full bg-transparent border-b border-white/10 py-3 text-text-primary focus:border-accent transition-all duration-300 outline-none min-h-[120px] resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          required={required}
          className="peer w-full bg-transparent border-b border-white/10 py-3 text-text-primary focus:border-accent transition-all duration-300 outline-none"
        />
      )}
      <label className="absolute left-0 top-3 text-text-secondary/50 font-body transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent">
        {label}
      </label>
    </div>
  );
};
