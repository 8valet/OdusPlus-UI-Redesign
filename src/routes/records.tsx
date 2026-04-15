import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/records")({
  component: RecordsPage,
  head: () => ({
    meta: [
      { title: "ODUS Plus - البيانات الشاملة" },
      { name: "description", content: "البيانات الشاملة للطالب - سجلات ودرجات" },
    ],
  }),
});

const grades = [
  { course: "اللغة العربية 2", credits: 2, score: "90 A" },
  { course: "برمجة 2", credits: 4, score: "85 B+" },
  { course: "تفاعل انسان مع الحاسب", credits: 3, score: "100 A+" },
  { course: "تراكيب متقطعه", credits: 3, score: "80 B" },
  { course: "ثقافة اسلامية 2", credits: 2, score: "100 A+" },
];

function RecordsPage() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <PageHeader title="البيانات الشاملة" breadcrumb="سجلات > بيانات شاملة" />
      <Navbar />

      <section className="py-10 px-6 flex-1">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">المعلومات الشخصية</h2>
            <div className="bg-secondary rounded-lg p-6 space-y-3">
              <p><span className="font-bold">الاسم كامل :</span> عبدالعزيز محمد السويلم</p>
              <p><span className="font-bold">الرقم الجامعي :</span> 2336137</p>
              <p><span className="font-bold">الهوية الوطنيه :</span> 1123945126</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">المعلومات الاكاديمية</h2>
            <div className="bg-secondary rounded-lg p-6 space-y-3">
              <p><span className="font-bold">الكلية:</span> كلية الحاسبات وتقنية المعلومات</p>
              <p><span className="font-bold">التخصص:</span> تقنية معلومات</p>
              <p><span className="font-bold">الفرع:</span> رابغ</p>
            </div>
          </div>

          {/* Grades */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">الفصل الدراسي الأول 2025</h2>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="py-3 px-4 text-right font-bold">المادة</th>
                    <th className="py-3 px-4 text-center font-bold">الوحدات</th>
                    <th className="py-3 px-4 text-center font-bold">الدرجة</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((g) => (
                    <tr key={g.course} className="border-t border-border">
                      <td className="py-3 px-4 text-right">{g.course}</td>
                      <td className="py-3 px-4 text-center">{g.credits}</td>
                      <td className="py-3 px-4 text-center font-semibold text-accent">{g.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-t-2 border-accent px-4 py-3 flex justify-between items-center">
                <span className="font-bold">المعدل الفصلي</span>
                <span className="font-bold text-lg">4.70</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
