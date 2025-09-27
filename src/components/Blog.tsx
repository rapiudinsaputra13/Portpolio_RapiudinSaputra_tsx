
export function Blog() {
  const blogPosts = [
    {
      title: "Cara Menulis Test Case Efektif",
      summary: "Panduan menyusun test case QA manual dan automation dengan benar.",
      date: "2025-06-20",
    },
    {
      title: "Mengenal Regression Testing",
      summary: "Pentingnya regression testing dan cara mengelolanya dalam tim QA.",
      date: "2025-06-10",
    },
  ];

  return (
    <section id="blog" className="px-4 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Blog</h2>
      {blogPosts.map((post, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="mt-1">{post.summary}</p>
        </div>
      ))}
    </section>
  );
}
