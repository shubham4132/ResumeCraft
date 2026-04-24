"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, User, LucideIcon } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  logoText?: string;
  logoIcon?: LucideIcon;
  links?: NavLink[];
  categories?: string[];
  showSearch?: boolean;
  showUser?: boolean;
  showHamburger?: boolean;
  userName?: string;
};

export const Navbar = (props: NavbarProps) => {
  const {
    categories = [],
    links = [],
    logoIcon: LogoIcon,
    logoText,
    showHamburger,
    showSearch,
    showUser,
    userName,
  } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
            {LogoIcon ? (
              <LogoIcon size={15} className="text-white" />
            ) : (
              <span className="text-white text-xs font-bold">R</span>
            )}
          </div>
          <span className="font-semibold text-gray-900">{logoText}</span>
        </Link>

        {/* Links — desktop */}
        {links.length > 0 && (
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Categories — desktop */}
        {categories.length > 0 && (
          <ul className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    activeCategory === cat
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Right icons */}
        <div className="flex items-center gap-1">
          {showSearch && (
            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
              <Search size={17} />
            </button>
          )}

          {showUser && (
            <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
              {userName ? (
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-semibold">
                  {userName[0].toUpperCase()}
                </div>
              ) : (
                <User size={17} />
              )}
              {userName && (
                <span className="text-sm text-gray-700 font-medium hidden sm:block">
                  {userName}
                </span>
              )}
            </button>
          )}

          {showHamburger && (
            <button
              className="p-2 md:hidden rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="absolute right-4 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
          {/* Links */}
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {links.length > 0 && categories.length > 0 && (
            <div className="my-1 border-t border-gray-100" />
          )}

          {/* Categories */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                activeCategory === cat
                  ? "text-indigo-600 font-medium bg-indigo-50"
                  : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
