
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Rapiudin sangat teliti dan cepat menyelesaikan test case regression kami.",
      author: "Budi, PM di Toko Pintar",
    },
    {
      quote: "Salah satu QA terbaik yang pernah saya ajak kerja sama. Proaktif dan komunikatif.",
      author: "Sari, QA Manager",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-8">Testimoni</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <p className="italic">"{t.quote}"</p>
              <span className="block mt-4 font-medium">— {t.author}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
