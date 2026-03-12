import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Monarch Finance</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Building financial futures with affordable, accessible personal loans that grow with you.
                        </p>
                        <div className="flex space-x-4">
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="/Why" className="hover:text-orange-500 transition-colors">Why Monarch?</a></li>
                            <li><a href="/loan/Installment" className="hover:text-orange-500 transition-colors">Personal Loans</a></li>
                            <li><a href="/loan/AutoClub" className="hover:text-orange-500 transition-colors">Auto Club</a></li>
                            <li><a href="/Discover" className="hover:text-orange-500 transition-colors">Find a Branch</a></li>
                            <li><a href="/apply" className="hover:text-orange-500 transition-colors">Apply Now</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-orange-500" />
                                <span>123 Monarch Lane, Abilene, TX 79601</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="shrink-0 text-orange-500" />
                                <span>(800) MON-ARCH</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="shrink-0 text-orange-500" />
                                <span>info@monarchfinance.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">© 2026 Monarch Finance. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                        <a href="/licenses" className="hover:text-orange-500 transition-colors">Licenses</a>
                        <a href="/sms-terms" className="hover:text-orange-500 transition-colors">SMS Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}