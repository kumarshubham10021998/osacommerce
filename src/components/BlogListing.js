export const BlogListing = () => {
  return (
    <div><div className="container mx-auto px-4 py-6">
    {/* Title Section */}
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">Be One Step Ahead with Industry News</h2>
    </div>
  
    {/* Blog Listing */}
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* First Blog Post */}
      <article className="card bg-gray-100 p-4 rounded-lg">
        <a href="https://osacommerce.com/blog/osa-collaborative-visibility-platform" aria-label="Read full post: Enhancing Supply Chain Efficiency: Discover the Power of Collaborative Visibility Platforms">
          <img
            src="https://8211470.fs1.hubspotusercontent-na1.net/hubfs/8211470/osa%20collaborative%20visbility%20platform.png"
            alt="osa collaborative visibility platform"
            className="w-full rounded-t-lg"
          />
        </a>
        <div className="mt-4">
          <div className="flex space-x-2">
            <a href="https://osacommerce.com/blog/tag/3pl" className="text-sm text-blue-600">3PL</a>
            <a href="https://osacommerce.com/blog/tag/solutions" className="text-sm text-blue-600">Solutions</a>
            <a href="https://osacommerce.com/blog/tag/brands-retail" className="text-sm text-blue-600">Brands | Retail</a>
          </div>
          <time className="text-sm text-gray-500" dateTime="2023-04-11">April 11, 2023</time>
          <h3 className="text-lg font-semibold mt-2">
            <a href="https://osacommerce.com/blog/osa-collaborative-visibility-platform" className="hover:text-blue-500">Enhancing Supply Chain Efficiency: Discover the Power of Collaborative Visibility Platforms</a>
          </h3>
        </div>
      </article>
  
      {/* Second Blog Post */}
      <article className="card bg-gray-100 p-4 rounded-lg">
        <a href="https://osacommerce.com/blog/collaborative-integration-with-cybersecurity" aria-label="Read full post: Collaborative Integration with Cybersecurity">
          <img
            src="https://8211470.fs1.hubspotusercontent-na1.net/hub/8211470/hubfs/Osa%20Collaborative%20Integration%20Blog.png"
            alt="Collaborative Integration with Cybersecurity"
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </a>
        <div className="mt-4">
          <div className="flex space-x-2">
            <a href="https://osacommerce.com/blog/tag/solutions" className="text-sm text-blue-600">Solutions</a>
          </div>
          <time className="text-sm text-gray-500" dateTime="2023-03-30">March 30, 2023</time>
          <h3 className="text-lg font-semibold mt-2">
            <a href="https://osacommerce.com/blog/collaborative-integration-with-cybersecurity" className="hover:text-blue-500">Collaborative Integration with Cybersecurity</a>
          </h3>
        </div>
      </article>
  
      {/* Third Blog Post */}
      <article className="card bg-gray-100 p-4 rounded-lg">
        <a href="https://osacommerce.com/blog/osa-commerce-launches-unified-commerce-platform" aria-label="Read full post: Osa Commerce Launches Unified Commerce Platform">
          <img
            src="https://8211470.fs1.hubspotusercontent-na1.net/hubfs/8211470/Osa%20Commerce%20Press%20Release%20March%2020%202023.png"
            alt="Osa Commerce Launches Unified Commerce Platform"
            className="w-full rounded-t-lg"
          />
        </a>
        <div className="mt-4">
          <div className="flex space-x-2">
            <a href="https://osacommerce.com/blog/tag/press" className="text-sm text-blue-600">Press</a>
            <a href="https://osacommerce.com/blog/tag/solutions" className="text-sm text-blue-600">Solutions</a>
            <a href="https://osacommerce.com/blog/tag/news" className="text-sm text-blue-600">News</a>
          </div>
          <time className="text-sm text-gray-500" dateTime="2023-03-21">March 20, 2023</time>
          <h3 className="text-lg font-semibold mt-2">
            <a href="https://osacommerce.com/blog/osa-commerce-launches-unified-commerce-platform" className="hover:text-blue-500">Osa Commerce Launches Unified Commerce Platform</a>
          </h3>
        </div>
      </article>
  
    </section>
  </div>
  </div>
  )
}
