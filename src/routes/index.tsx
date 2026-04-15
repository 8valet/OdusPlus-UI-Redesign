import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, GraduationCap, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import odusLogo from "@/assets/odus-logo.png";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "ODUS Plus - الصفحة الرئيسية" },
      { name: "description", content: "نظام خدمات الجامعة عند الطلب - جامعة الملك عبدالعزيز" },
    ],
  }),
});

const quickLinks = [
  { icon: Calendar, label: "الجدول", to: "/calendar" },
  { icon: GraduationCap, label: "الطالب", to: "/records" },
  { icon: FileText, label: "المعاملات", to: "/" },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <PageHeader title="الصفحة الرئيسية" />
      <Navbar />

      {/* Quick Links */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <item.icon size={40} className="text-foreground" strokeWidth={1.5} />
                <span className="text-lg font-semibold text-foreground">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 flex-1">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-64 flex-shrink-0">
            <img src={odusLogo} alt="ODUS Plus Logo" className="w-full h-full object-contain" width={512} height={512} loading="lazy" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">ODUS PLUS</h2>
            <p className="text-muted-foreground leading-relaxed">
              A streamlined website by King Abdulaziz University for easy course registration, grade management
              and academic record access, enhancing digital services for students and faculty.
            </p>
            <button className="mt-4 px-4 py-2 bg-muted text-foreground text-sm font-semibold rounded hover:bg-muted/80 transition-colors">
              المزيد
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
