import { useRouter } from "next/router";
import { blogs } from "../../data/blogs";
import Link from "next/link";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;
  }

  const relatedBlogs = blogs.filter(
    (b) => b.category === blog.category && b.id !== blog.id
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {blog.title}
      </h1>
      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "1.5rem",
        }}
      />
      <p style={{ fontSize: "1rem", color: "#333", marginBottom: "2rem" }}>
        {blog.content}
      </p>

      {relatedBlogs.length > 0 && (
        <>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Related Blogs
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {relatedBlogs.map((rel) => (
              <Link key={rel.id} href={`/blog/${rel.id}`}>
                <div
                  style={{
                    width: "250px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={rel.image}
                    alt={rel.title}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "0.75rem" }}>
                    <h3 style={{ fontSize: "1rem", color: "#000" }}>
                      {rel.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
