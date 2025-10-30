// app/blog/page.js
import Link from "next/link";
import { blogs } from "../../data/blogs";
import Hero2Section from "../components/hero2";

export default function BlogsPage({ searchParams }) {
  const page = parseInt(searchParams?.page || "1");
  const perPage = 6;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const visibleBlogs = blogs.slice(0, endIndex);

  const hasMore = blogs.length > endIndex;

  return (
    <>
      <Hero2Section
        subtitle="BLOG"
        title="Stories That Inspire Compassion"
        description="Discover how your support is transforming lives through education, healthcare, and community care."
        topLeftLabel="Home / Blog"
      />

      <div className="px-4 sm:px-8">
        <h1 className="text-2xl sm:text-[2.25rem] font-bold mb-8 mt-16 sm:mt-24 text-left text-black">
          Our Blogs
        </h1>

        {/* Blogs container */}
       <div
  id="blogs-container"
  className="flex flex-wrap justify-center sm:justify-start gap-5"
>
  {visibleBlogs.map((blog) => (
    <div
  key={blog.id}
  className="
    flex-none 
    w-full
    sm:[width:calc(50%-0.625rem)]
    md:[width:calc(33.333%-1.25rem)]
    lg:[width:calc(25%-1.25rem)]
    h-[430px] 
    bg-white 
    rounded 
    overflow-hidden 
    flex 
    flex-col 
    justify-between
  "
>

      <Link href={`/blog/${blog.id}`} className="no-underline flex flex-col h-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[290px] object-cover cursor-pointer"
        />
        <div className="p-4 flex-1">
          <h4 className="text-base sm:text-[16px] mb-2 text-black">
            {blog.title}
          </h4>
          <p className="text-[10.5px] leading-5 text-black">
            {blog.content.slice(0, 60)}...
          </p>
        </div>
        <div className="px-4 pb-4">
          <button className="w-full py-2 text-left text-[#BC153F] rounded cursor-pointer text-[12px]">
            Read More
          </button>
        </div>
      </Link>
    </div>
  ))}
</div>


        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-6 mb-9">
            <Link
              href={`/blog?page=${page + 1}#blogs-container`}
              className="px-5 py-2 bg-[#BC153F] text-white rounded no-underline"
            >
              Load More
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
