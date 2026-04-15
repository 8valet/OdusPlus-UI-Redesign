import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "التسكين والتحويل", to: "/" },
  { label: "المرشد الاكاديمي", to: "/" },
  {
    label: "سجلات",
    children: [
      { label: "البيانات الشاملة", to: "/records" },
      { label: "تفاصيل درجات وخطة الطالب", to: "/records" },
      { label: "مستندات والوثيقة", to: "/" },
    ],
  },
  {
    label: "التسجيل",
    children: [
      { label: "تسجيل المقررات", to: "/" },
      { label: "حذف مقرر", to: "/" },
    ],
  },
  { label: "الرئيسية", to: "/" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-teal-medium text-primary-foreground" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center gap-6 h-12">
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-4 py-3 text-sm font-semibold hover:bg-teal-dark transition-colors">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link to={item.to} className="block px-4 py-3 text-sm font-semibold hover:bg-teal-dark transition-colors">
                    {item.label}
                  </Link>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full right-0 bg-muted text-foreground shadow-lg rounded-b-md min-w-48 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-teal-dark">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold hover:bg-teal-dark"
                  >
                    {item.label}
                    <ChevronDown size={14} className={openDropdown === item.label ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-teal-dark">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.to} className="block px-8 py-2.5 text-sm hover:bg-teal-light/20" onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.to} className="block px-4 py-3 text-sm font-semibold hover:bg-teal-dark" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
