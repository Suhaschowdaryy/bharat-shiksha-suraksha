import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-hero-gradient p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DisasterEd India</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Transforming disaster management education across India through innovative 
              digital platforms, ensuring every student is prepared for emergencies and 
              contributing to national resilience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80">partnerships@disastered.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80">+91 11 4567 8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80">New Delhi, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
              <li><a href="#implementation" className="hover:text-white transition-colors">Implementation</a></li>
              <li><a href="#stakeholders" className="hover:text-white transition-colors">Partnership</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Materials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 DisasterEd India. All rights reserved. Building safer communities through education.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;