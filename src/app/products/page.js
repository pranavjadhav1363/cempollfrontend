"use client";
import React, { useState, useEffect } from 'react';
import
{
  Search, Filter, Droplets, Zap, Shield, Star, ChevronRight
} from 'lucide-react';
import Footer from '../_components/Footer';
import Navbar from '../_components/Navbar';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductsPage()
{
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>
  {
    const fetchCategories = async () =>
    {
      try
      {
        setLoadingCategories(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/categories`);
        const data = await res.json();
        setCategories(data);
      } catch (err)
      {
        setError('Failed to fetch categories.');
      } finally
      {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() =>
  {
    const fetchProducts = async () =>
    {
      try
      {
        setLoadingProducts(true);
        const url = selectedCategory === 'All'
          ? `${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/products?category=all`
          : `${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/products?category=${selectedCategory}`;
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err)
      {
        setError('Failed to fetch products.');
      } finally
      {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter(product =>
  {
    const name = product?.ProductName?.toLowerCase() || "";
    const description = product?.ProductDescription?.toLowerCase() || "";
    const term = searchTerm.toLowerCase();
    return name.includes(term) || description.includes(term);
  });

  const getFeatureIcon = (feature) =>
  {
    if (feature.includes('Waterproof') || feature.includes('Weather')) return <Droplets className="w-4 h-4" />;
    if (feature.includes('Fast') || feature.includes('Rapid')) return <Zap className="w-4 h-4" />;
    if (feature.includes('Strength') || feature.includes('High')) return <Shield className="w-4 h-4" />;
    return <Star className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Navbar />

      <section className="py-16 text-center px-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-green-600 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Explore our range of high-performance construction chemical solutions.
        </p>
      </section>

      <section className="bg-white py-6 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800 placeholder-gray-500 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-gray-700" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800 shadow-sm min-w-[150px]"
            >
              <option value="All">All</option>
              {categories.map(cat => (
                <option key={cat._id} value={cat._id}>{cat.CategoryName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-700 px-4">
          {loadingProducts ? 'Loading products...' : `Showing ${filteredProducts.length} of ${products.length} products`}
        </div>
        {error && <div className="text-red-600 text-sm mt-2 px-4">{error}</div>}
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loadingProducts ? (
            <div className="text-center text-gray-500 text-lg">Loading products...</div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product._id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">
                  <Link
                    href={`/product/${product._id}`} // update to match your route
                    key={product._id}
                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden block"
                  >
                    <div className="relative h-48">
                      <img src={product.ProductImage?.[0] || '/placeholder.jpg'} alt={product.ProductName} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">

                      <h3 className="text-lg font-extrabold mt-2 mb-1 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                        {product.ProductName}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{product.ProductDescription}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {(product.FeaturesAndBenefits || []).slice(0, 2).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center px-3 py-1 rounded-full text-xs font-medium text-orange-700 bg-orange-100"
                          >
                            {getFeatureIcon(feature.FeatureName)}
                            <span className="ml-1">{feature.FeatureName}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        // Update this path as per your routing
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:scale-105 transition"
                      >
                        View Details <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No products found.</div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
