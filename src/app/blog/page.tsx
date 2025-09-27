export default function BlogPage() {
  const posts = [
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
    <main className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.map((post, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="mt-1">{post.summary}</p>
        </div>
      ))}
    </main>
  );
}
