"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import
  {
    Download, Share2, Zap, Shield, Droplets, CheckCircle,
    Mail, FileText, ArrowRight
  } from 'lucide-react';
import Footer from '../../_components/Footer';
import Navbar from '../../_components/Navbar';
import Link from 'next/link';

export default function ProductDetailPage()
{
  const params = useParams()
  const { productId } = params

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() =>
  {
    const fetchProduct = async () =>
    {
      try
      {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/get-product/${productId}`);
        const data = await res.json();
        if (res.ok && data.success)
        {
          setProduct(data.product);
        } else
        {
          console.error(data.message || 'Failed to fetch product');
        }
      } catch (err)
      {
        console.error('Fetch error:', err);
      }
    };

    if (productId)
    {
      fetchProduct();
    }
  }, [productId]);

  const getFeatureIcon = (featureName) =>
  {
    if (featureName.includes('Strength') || featureName.includes('Bond')) return <Shield className="w-5 h-5" />;
    if (featureName.includes('Rapid') || featureName.includes('Fast')) return <Zap className="w-5 h-5" />;
    if (featureName.includes('Weather') || featureName.includes('Resistant')) return <Droplets className="w-5 h-5" />;
    return <CheckCircle className="w-5 h-5" />;
  };

  if (!product)
  {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <img
              src={product.ProductImage[selectedImage]}
              alt={product.ProductName}
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
            />
            <div className="flex space-x-3">
              {product.ProductImage.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden ${selectedImage === index ? 'ring-2 ring-orange-500' : ''}`}
                >
                  <img src={img} alt={`thumb-${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.ProductName}</h1>
            <p className="text-lg text-gray-600">{product.ProductDescription}</p>

            {/* Key Features Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.FeaturesAndBenefits?.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-green-600">{getFeatureIcon(feature.FeatureName)}</div>
                    <span className="text-sm text-gray-700">{feature.FeatureName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={product.ProductTDS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>View TDS</span>
              </a>
              
            </div>
          </div>
        </div>


        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'features', label: 'Features & Benefits' },

              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'overview' && (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.ProductDescription}
                </p>
                <div className="mt-8 bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6">

                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-6">
                {product.FeaturesAndBenefits.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl p-3 text-white">
                        {getFeatureIcon(feature.FeatureName)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.FeatureName}
                        </h4>
                        <p className="text-gray-600">
                          {feature.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">Technical Specifications</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <div key={index} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-gray-900">{spec.label}</span>
                      <span className="text-orange-600 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-2">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Use {product.ProductName}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert consultation and technical support for your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact" // <- change this to your actual support route or external mailto link
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get Technical Support</span>
            </Link>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
