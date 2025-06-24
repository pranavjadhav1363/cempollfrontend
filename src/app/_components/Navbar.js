"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoryError, setCategoryError] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() =>
  {
    const fetchCategories = async () =>
    {
      try
      {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_ROUTES_API_URL}/web/categories`
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data || []);
      } catch (error)
      {
        setCategoryError("Failed to load product categories.");
        console.error(error);
      } finally
      {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // 🔒 Close dropdown on outside click
  useEffect(() =>
  {
    const handleClickOutside = (event) =>
    {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      )
      {
        setIsProductDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-40 h-40 flex items-center justify-center">
              <img
                src="/cempoll_logo.jpeg"
                alt="Cempoll Pro Logo"
                className="w-120 h-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">About Us</Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductDropdownOpen((prev) => !prev)}
                className="flex items-center text-gray-700 hover:text-orange-600 font-medium"
              >
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {loadingCategories ? (
                    <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>
                  ) : categoryError ? (
                    <div className="px-4 py-2 text-sm text-red-500">{categoryError}</div>
                  ) : (
                    categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/products?category=${category._id}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                      >
                        {category.CategoryName}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-black text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">About Us</Link>

              <div className="border-t border-gray-200 pt-2">
                <p className="text-sm text-gray-500 font-semibold">Products</p>
                {loadingCategories ? (
                  <div className="text-sm text-gray-500">Loading...</div>
                ) : categoryError ? (
                  <div className="text-sm text-red-500">{categoryError}</div>
                ) : (
                  categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/products?category=${category._id}`}
                      className="block text-gray-700 hover:text-orange-600 text-sm py-1"
                    >
                      {category.CategoryName}
                    </Link>
                  ))
                )}
              </div>

              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
