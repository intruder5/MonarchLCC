import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Monarch Finance</h3>
                        <p className="text-sm mb-4">
                            Building financial futures with affordable, accessible personal loans that grow with you.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-orange-600 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Our Services</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Apply Now</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Credit Tips</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Financial Education</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm">123 Finance Street, Suite 100<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 flex-shrink-0" />
                                <span className="text-sm">(555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 flex-shrink-0" />
                                <span className="text-sm">info@monarchfinance.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © 2026 Monarch Finance. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm hover:text-orange-600 transition-colors">Privacy</a>
                        <a href="#" className="text-sm hover:text-orange-600 transition-colors">Terms</a>
                        <a href="#" className="text-sm hover:text-orange-600 transition-colors">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}