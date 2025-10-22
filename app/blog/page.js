
import Link from "next/link";
import { blogs } from "../../data/blogs";

export default function BlogsPage() {
  return (

    <>

     <section
      style={{
        position: "relative",
        backgroundImage: "url('/Homehero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Full overlay but darker on the left side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          padding: "0 1rem",
        }}
      >
        <h5
  style={{
    color: "#E40D11",
    textDecoration: "underline",
    textDecorationColor: "#BC153F",
    textUnderlineOffset: "4px", // 
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "0.5rem",
    fontFamily: "Tahoma",
    fontSize: "14px",
    textAlign:"center"
  }}
>
  Our Work
</h5>


        <h1
          style={{
            fontSize: "42.39px",
            lineHeight: 1.1,
            fontFamily: "Rubik, sans-serif",
            fontWeight: "700",
            marginBottom: "10px",
            color: "#FFFFFF",
          }}
        >
         Stories That Inspire Compassion
        </h1>

        <p
          style={{
            marginBottom: "0.75rem",
            fontFamily: "calibri",
            color: "#FFFFFF",
            fontSize: "15px",
          }}
        >
Discover how your support is transforming lives through education, healthcare, and community care.      </p>



      </div>
    </section>



 
    <div style={{ padding: "2rem" }}>
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "700",
          marginBottom: "2rem",
          textAlign: "center",
          color: "#000",
          
        }}
      >
        Our Blogs
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          overflow: "hidden",
          
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              flex: "0 0 32%",
              height: "430px",
              backgroundColor: "#ffffffff",
              borderRadius: "5px",
              
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
           <Link href={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>

              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "290px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h4
                  style={{
                    fontSize: "16px",
                    marginBottom: "8px",
                    color: "#000000ff",
                  }}
                >
                  {blog.title}
                </h4>
                <p style={{ fontSize: "10.5px", color: "#000000ff", lineHeight: "1.4" }}>
                  {blog.content.slice(0, 60)}...
                </p>
              </div>
              <div style={{ padding: "0 15px 15px 15px" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "8px 0",
                    textAlign:"left",
                    color: "#BC153F",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontsize:"6px"
                    
                  }}
                >
                  Read More 
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>




    </>
  );
}
