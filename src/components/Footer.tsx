export default function Footer() {
  return (
    <footer className="bg-teal-dark text-primary-foreground py-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="text-sm">جميع الحقوق محفوظة - الإدارة العامة لتقنية المعلومات</p>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
            <span className="text-xs font-bold">KAU</span>
          </div>
          <div className="text-left">
            <span className="text-lg font-bold tracking-wider block">KAUWEB</span>
            <div className="flex gap-2 mt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors" aria-label="X">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors" aria-label="Instagram">
                <span className="text-xs">📷</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
