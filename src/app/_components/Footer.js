import React from 'react'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Building, Beaker, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const Footer = () =>
{
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Column 1: Logo and Socials */}
                    <div>
                        <div className="flex items-center">
                            <div className="w-40 h-40 flex items-center justify-center">
                                <img
                                    src="/cempoll_logo.jpeg"
                                    alt="Cempoll Pro Logo"
                                    className="w-35 h-auto object-contain"
                                />
                            </div>
                            {/* <span className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Cempoll Pro
              </span> */}
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading manufacturer of innovative construction chemicals for modern infrastructure.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-pink-600 transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center hover:from-green-600 hover:to-orange-600 transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-green-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-green-600 transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-green-600 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h3>
                        <div className="space-y-4">
                            <Link href="/home" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                            <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                            <Link href="/products" className="block text-gray-400 hover:text-white transition-colors">Products</Link>
                            {/* <a href="#career" className="block text-gray-400 hover:text-white transition-colors">Career</a> */}
                            <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Column 3: Address and Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-green-400">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400">
                                        123 Industrial Avenue<br />
                                        Construction District<br />
                                        City, State 12345
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-400" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-green-400" />
                                <span className="text-gray-400">info@Cempoll.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2025 Cempoll. All rights reserved. Building the future, one chemical at a time.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer