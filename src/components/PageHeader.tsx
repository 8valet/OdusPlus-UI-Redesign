import campusHero from "@/assets/campus-hero.jpg";

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <>
      {/* Top banner with ODUS PLUS branding */}
      <div className="bg-teal-dark text-primary-foreground py-4 px-6" dir="rtl">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="border-l-2 border-primary-foreground/50 pl-4 leading-none">
            <span className="text-2xl font-bold tracking-wide block">ODUS</span>
            <span className="text-2xl font-bold tracking-wide block">PLUS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading">{title}</h1>
        </div>
      </div>

      {/* Hero campus image */}
      <div className="relative h-40 md:h-56 overflow-hidden">
        <img src={campusHero} alt="حرم جامعة الملك عبدالعزيز" className="w-full h-full object-cover" width={1920} height={512} />
        <div className="absolute inset-0 bg-teal-dark/30" />
        {breadcrumb && (
          <div className="absolute top-4 right-6 text-primary-foreground text-sm font-semibold" dir="rtl">
            {breadcrumb}
          </div>
        )}
      </div>
    </>
  );
}
