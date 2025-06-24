"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Building, Beaker, Shield, Zap } from 'lucide-react';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import Link from 'next/link';
// import cempollcc from '@/app/cempoll_logo.jpeg'
const ConstructionChemicalsLanding = () =>
{
  const [clients, setClients] = useState([]);
  const [categories, setCategories] = useState([]);

  const [clientsLoading, setClientsLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const [clientsError, setClientsError] = useState(null);
  const [categoriesError, setCategoriesError] = useState(null);

  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  // Fetch clients and categories
  useEffect(() =>
  {
    const fetchClients = async () =>
    {
      try
      {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/clients`);
        if (!res.ok) throw new Error("Failed to fetch clients");
        const data = await res.json();
        setClients(data);
      } catch (err)
      {
        setClientsError(err.message || "Client fetching failed");
      } finally
      {
        setClientsLoading(false);
      }
    };

    const fetchCategories = async () =>
    {
      try
      {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/categories`);
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
      } catch (err)
      {
        setCategoriesError(err.message || "Category fetching failed");
      } finally
      {
        setCategoriesLoading(false);
      }
    };

    fetchClients();
    fetchCategories();
  }, []);

  // Auto-carousel
  useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      if (clients.length > 0)
      {
        setCurrentClientIndex(prev => (prev + 1) % clients.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [clients]);

  const solutions = [
    { name: "Concrete Admixtures", icon: Building, color: "from-orange-500 to-orange-600" },
    { name: "Waterproofing Systems", icon: Shield, color: "from-green-500 to-green-600" },
    { name: "Repair Mortars", icon: Beaker, color: "from-pink-500 to-pink-600" },
    { name: "Protective Coatings", icon: Zap, color: "from-yellow-400 to-yellow-500" },
    { name: "Adhesives & Sealants", icon: Building, color: "from-green-400 to-green-500" },
    { name: "Floor Hardeners", icon: Shield, color: "from-pink-400 to-pink-500" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation Bar */}

      <Navbar />
      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-green-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Building Tomorrow's
            <br />
            Infrastructure
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading manufacturer of innovative construction chemicals that enhance durability,
            performance, and sustainability in modern construction projects worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link
  href="/products"
  className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-green-600 transition-all transform hover:scale-105 font-semibold text-lg inline-block"
>
  Explore Solutions
</Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all font-semibold text-lg">
              Download Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Trusted by Industry Leaders</h2>
          <div className="relative overflow-hidden">
            <div className="flex justify-center items-center h-32">
              {clientsLoading ? (
                <p className="text-gray-500 text-lg">Loading clients...</p>
              ) : clientsError ? (
                <p className="text-red-500 text-lg">{clientsError}</p>
              ) : (
                <div className="flex flex-col items-center animate-pulse">
                  <img
                    src={clients[currentClientIndex]?.image || "/placeholder.png"}
                    alt={clients[currentClientIndex]?.name}
                    className="h-12 w-auto object-contain mb-2"
                  />
                  <div className="text-xl font-semibold text-gray-700">
                    {clients[currentClientIndex]?.name}
                  </div>
                </div>
              )}
            </div>

            {/* Indicators */}
            {!clientsLoading && clients.length > 0 && (
              <div className="flex justify-center mt-6 space-x-2">
                {clients.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${index === currentClientIndex ? "bg-orange-500 w-8" : "bg-gray-300 w-2"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* About Us */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                About Cempoll
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over two decades of excellence in construction chemicals, we've been at the forefront
                of innovation, developing cutting-edge solutions that transform the way buildings are constructed
                and maintained.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality, sustainability, and customer satisfaction has made us a trusted
                partner for contractors, architects, and developers across the globe.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 via-green-100 to-pink-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Building className="w-24 h-24 mx-auto mb-4 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Innovation First</h3>
                  <p className="text-gray-600">Leading the industry with cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A wide range of high-performance construction chemical categories tailored for every building need.
            </p>
          </div>

          {categoriesLoading ? (
            <div className="text-center text-gray-500 text-lg">Loading categories...</div>
          ) : categoriesError ? (
            <div className="text-center text-red-500 text-lg">{categoriesError}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) =>
              {
                const colors = [
                  "from-orange-500 to-orange-600",
                  "from-green-500 to-green-600",
                  "from-pink-500 to-pink-600",
                  "from-yellow-400 to-yellow-500",
                  "from-blue-400 to-blue-500",
                  "from-red-400 to-red-500"
                ];
                const icons = [Building, Shield, Beaker, Zap];
                const color = colors[index % colors.length];
                const Icon = icons[index % icons.length];

                return (
                  <Link
                    key={category._id}
                    href={`/products?category=${category._id}`}
                    className="group relative block overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">{category.CategoryName}</h3>
                    <p className="text-gray-600 mb-6 relative z-10 break-words whitespace-normal">
  {category.CategoryDesc?.substring(0, 120) || 'High-performance chemicals for durable construction.'}
</p>
                    <div className="flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors relative z-10">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConstructionChemicalsLanding;