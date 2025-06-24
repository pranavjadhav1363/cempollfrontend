import React from 'react';
import { ChevronDown, Shield, Target, Award, Users, Building, Leaf } from 'lucide-react';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Navbar/>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-green-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-orange-800">Building Tomorrow's Foundation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-green-600 bg-clip-text text-transparent">
              About Cempoll
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a leading manufacturer of premium construction chemicals, dedicated to providing innovative solutions 
            that enhance the durability, performance, and sustainability of modern construction projects worldwide.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">10k+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize the construction industry by developing cutting-edge chemical solutions that enhance 
                  structural integrity, improve sustainability, and reduce environmental impact. We strive to be the 
                  trusted partner for builders, architects, and contractors worldwide.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in construction chemicals, setting industry standards for quality, innovation, 
                  and sustainability. We envision a future where every structure built with our products contributes 
                  to a more durable and environmentally conscious world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We pursue excellence in every aspect of our work, from product development to customer service, 
                  ensuring the highest quality standards in all our chemical solutions.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Environmental responsibility is at the core of our operations. We develop eco-friendly products 
                  and implement sustainable practices throughout our manufacturing processes.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in building lasting relationships with our clients, suppliers, and communities, 
                  working together to achieve mutual success and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 via-pink-500 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to discover how our innovative construction chemicals can enhance your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" passHref>
  <div className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center cursor-pointer">
    Explore Products
  </div>
</Link>

<Link href="/contact" passHref>
  <div className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 text-center cursor-pointer">
    Contact Us Today
  </div>
</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}