import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/calendar")({
  component: CalendarPage,
  head: () => ({
    meta: [
      { title: "ODUS Plus - التقويم الاكاديمي" },
      { name: "description", content: "التقويم الأكاديمي لجامعة الملك عبدالعزيز" },
    ],
  }),
});

type EventStatus = "active" | "ending" | "ended";

interface CalendarEvent {
  name: string;
  startWeek: number;
  startDay: string;
  startDate: string;
  endWeek: number;
  endDay: string;
  endDate: string;
  status: EventStatus;
}

const events: CalendarEvent[] = [
  { name: "إجازة اليوم الوطني", startWeek: 6, startDay: "الأحد", startDate: "١٤٤٦/٣/١٩هـ\n٢٠٢٤/٩/٢٢م", endWeek: 6, endDay: "الاثنين", endDate: "١٤٤٦/٣/٢٠هـ\n٢٠٢٤/٩/٢٣م", status: "ended" },
  { name: "تقديم طلبات سحب مقرر للفصل الحالي على Odus Plus", startWeek: 6, startDay: "الثلاثاء", startDate: "١٤٤٦/٣/٢١هـ\n٢٠٢٤/٩/٢٤م", endWeek: 11, endDay: "الخميس", endDate: "١٤٤٦/٤/٢٨هـ\n٢٠٢٤/١٠/٣١م", status: "active" },
  { name: "اختبارات الدوري الأول", startWeek: 7, startDay: "الأحد", startDate: "١٤٤٦/٣/٢٦هـ\n٢٠٢٤/٩/٢٩م", endWeek: 7, endDay: "الخميس", endDate: "١٤٤٦/٣/٣٠هـ\n٢٠٢٤/١٠/٣م", status: "ended" },
  { name: "تقديم طلبات التحويل الداخلي بين الكليات على Odus Plus", startWeek: 8, startDay: "الأحد", startDate: "١٤٤٦/٤/٣هـ\n٢٠٢٤/١٠/٧م", endWeek: 18, endDay: "الأحد", endDate: "١٤٤٦/٦/٢١هـ\n٢٠٢٤/١٢/٢٢م", status: "active" },
  { name: "تقديم طلبات التخصيص في الكليات على Odus Plus", startWeek: 8, startDay: "الاثنين", startDate: "١٤٤٦/٤/٤هـ\n٢٠٢٤/١٠/٧م", endWeek: 18, endDay: "الاثنين", endDate: "١٤٤٦/٦/٢٢هـ\n٢٠٢٤/١٢/٢٣م", status: "active" },
  { name: "تقديم طلبات التسكين في الكليات لطلبة السنة التحضيرية والتأهيلية على Odus Plus", startWeek: 8, startDay: "الثلاثاء", startDate: "١٤٤٦/٤/٥هـ\n٢٠٢٤/١٠/٨م", endWeek: 18, endDay: "الثلاثاء", endDate: "١٤٤٦/٦/٢٣هـ\n٢٠٢٤/١٢/٢٤م", status: "active" },
  { name: "اختبارات الدوري الثاني", startWeek: 12, startDay: "الأحد", startDate: "١٤٤٦/٥/١هـ\n٢٠٢٤/١١/٣م", endWeek: 13, endDay: "الخميس", endDate: "١٤٤٦/٥/٥هـ\n٢٠٢٤/١١/٧م", status: "ending" },
  { name: "إجازة الخريف", startWeek: 12, startDay: "الجمعة", startDate: "١٤٤٦/٥/٦هـ\n٢٠٢٤/١١/٨م", endWeek: 0, endDay: "السبت", endDate: "١٤٤٦/٥/١٤هـ\n٢٠٢٤/١١/١٦م", status: "ending" },
  { name: "الاختبارات النهائية", startWeek: 16, startDay: "الأحد", startDate: "١٤٤٦/٦/٧هـ\n٢٠٢٤/١٢/٨م", endWeek: 18, endDay: "الخميس", endDate: "١٤٤٦/٦/٢٥هـ\n٢٠٢٤/١٢/٢٦م", status: "active" },
];

const statusStyles: Record<EventStatus, string> = {
  active: "border-r-4 border-r-status-active",
  ending: "border-r-4 border-r-status-ending",
  ended: "border-r-4 border-r-status-ended",
};

function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <PageHeader title="التقويم الاكاديمي" />
      <Navbar />

      <section className="py-8 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Semester selector + legend */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">اختر الفصل الدراسي:</span>
              <select className="bg-card border border-border rounded px-3 py-1.5 text-sm">
                <option>الفصل الدراسي الاول 2025</option>
              </select>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-status-active" /> الحدث الحالي
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-status-ending" /> ينتهي قريبا
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-status-ended" /> انتهى
              </span>
            </div>
          </div>

          {/* Events table */}
          <div className="bg-card rounded-lg border border-border overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="py-3 px-3 text-right font-bold">الحدث</th>
                  <th className="py-3 px-2 text-center font-bold">الأسبوع</th>
                  <th className="py-3 px-2 text-center font-bold">اليوم</th>
                  <th className="py-3 px-2 text-center font-bold">تاريخ البدأ</th>
                  <th className="py-3 px-2 text-center font-bold">الأسبوع</th>
                  <th className="py-3 px-2 text-center font-bold">اليوم</th>
                  <th className="py-3 px-2 text-center font-bold">تاريخ الانتهاء</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e, i) => (
                  <tr key={i} className={`border-t border-border ${statusStyles[e.status]} hover:bg-muted/50 transition-colors`}>
                    <td className="py-3 px-3 text-right">{e.name}</td>
                    <td className="py-3 px-2 text-center">{e.startWeek}</td>
                    <td className="py-3 px-2 text-center">{e.startDay}</td>
                    <td className="py-3 px-2 text-center whitespace-pre-line text-xs">{e.startDate}</td>
                    <td className="py-3 px-2 text-center">{e.endWeek || "—"}</td>
                    <td className="py-3 px-2 text-center">{e.endDay}</td>
                    <td className="py-3 px-2 text-center whitespace-pre-line text-xs">{e.endDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
