import Link from "next/link"

const blogs = [
  {
    "title": "Case Study & Product Design of a Micro-SaaS dashboard from Google Map History",
    "link": "https://medium.com/@abdulhakkeempa2002/map-in-review-an-analysis-of-your-travel-from-google-history-c71af5315493"
  }
]

function BlogCard({ title, link }) {
  return (
    <div className="col-span-12 md:col-span-6 w-full max-w-full rounded overflow-hidden shadow-lg bg-gray-900 border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 transition duration-100 hover:cursor-pointer flex items-center">
      <div className="px-6 pt-6 pb-4 flex items-center justify-center h-full">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="font-medium text-medium mb-2">{title}</div>
        </Link>
      </div>
    </div>
  )
}

export default function Blogs() {
  return (
    <div className="mx-auto max-w-screen-xl lg:px-30 p-10 md:pr-20 md:pl-20 pb-5 pt-5">
      <div className="grid grid-cols-12 gap-2">
        {blogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} link={blog.link} />
        ))}
      </div>
    </div>
  )
}