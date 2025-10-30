import Link from "next/link";
import { blogs } from "../../../data/blogs";
import Hero2Section from "@/app/components/hero2";

export default async function BlogPage({ params }) {
  const { id } = await params;
  const blog =  blogs.find((b) => b.id.toString() === id);

  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  if (!blog)
    return <p className="text-center mt-10 text-black">Blog not found</p>;

  return (

<>

<Hero2Section
        subtitle="BLOG"
        title="Stories That Inspire Compassion"
        description="Discover how your support is transforming lives through education, healthcare, and community care."
        topLeftLabel="Home / Blog"
      />
    
    <div className="px-4 sm:px-8 max-w-[1250px] mx-auto mt-20">
      {/* Blog Title */}
      <h1 className="text-2xl sm:text-[2rem] mb-4">{blog.title}</h1>
      <p className="text-sm  mb-4">{blog.subtitle}</p>

      {/* Blog Image */}
      <img
  src={blog.image}
  alt={blog.title}
  className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover mb-6 rounded-lg"
/>


      {/* Blog Content */}
      <p className="text-[12px] leading-[1.8] mb-[7rem] text-black">
        {blog.content}
      </p>

    {/* Related Blogs */}
<h3 className="text-[1.9rem] mb-8">Related Blogs</h3>

<div className="flex flex-wrap justify-center sm:justify-start gap-5 px-4 sm:px-6 md:px-0 pb-2.5">
  {relatedBlogs.map((r) => (
    <div
      key={r.id}
      className="
        flex-none
        w-full                   /* mobile: full width */
        sm:w-[calc(50%-0.625rem)]   /* 2 cards per row on small screens */
        md:w-[calc(33.333%-1.25rem)] /* 3 cards per row on medium screens */
        lg:w-[calc(33%-1.25rem)]     /* 3-4 cards per row on large screens */
        bg-white
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded
      "
      style={{ aspectRatio: "1 / 1" }} 
    >
      <Link href={`/blog/${r.id}`} className="no-underline text-inherit flex flex-col h-full">
        {/* Image container */}
        <div className="w-full h-[100%] overflow-hidden">
          <img
            src={r.image}
            alt={r.title}
            className="w-full h-full object-cover cursor-pointer rounded-t-md"
          />
        </div>

        {/* Text & Button */}
        <div className="p-3 flex-1 flex flex-col justify-between">
          <div>
            <h4 className="text-[14px] mb-1 text-black">{r.title}</h4>
            <p className="text-[10px] text-black leading-[1.2]">
              {r.content.slice(0, 50)}...
            </p>
          </div>
          <button className="mt-2 w-full py-2 text-left text-[#BC153F] rounded text-[12px] cursor-pointer">
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
