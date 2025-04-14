
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import CallToAction from "@/components/CallToAction";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Things to Know Before Signing a Contract",
      excerpt: "Contracts are the foundation of business relationships. Here are five essential things to verify before putting your signature on any agreement.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: "June 15, 2023",
      readTime: "6 min read",
      slug: "things-to-know-before-signing-contract",
    },
    {
      title: "Your Rights During Police Arrest",
      excerpt: "Understanding your legal rights during an arrest is crucial. We outline what the law permits and what you should know if you're detained.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      date: "May 28, 2023",
      readTime: "8 min read",
      slug: "your-rights-during-police-arrest",
    },
    {
      title: "Navigating Family Property Disputes in Ghana",
      excerpt: "Family property disputes are common in Ghana. Learn about the legal framework and steps to resolve these sensitive matters.",
      image: "https://images.unsplash.com/photo-1611937591499-dd3adce56689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      date: "April 10, 2023",
      readTime: "5 min read",
      slug: "navigating-family-property-disputes",
    },
    {
      title: "The Importance of a Proper Will in Estate Planning",
      excerpt: "Without a valid will, your assets may not be distributed according to your wishes. Here's why proper estate planning matters.",
      image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      date: "March 5, 2023",
      readTime: "7 min read",
      slug: "importance-of-proper-will-estate-planning",
    },
    {
      title: "Starting a Business in Ghana: Legal Requirements",
      excerpt: "Planning to start a business in Ghana? This guide covers the essential legal requirements and procedures you need to follow.",
      image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      date: "February 18, 2023",
      readTime: "10 min read",
      slug: "starting-business-ghana-legal-requirements",
    },
    {
      title: "Understanding Child Custody Laws in Ghana",
      excerpt: "Divorce affects children deeply. Learn about Ghana's approach to child custody and what factors courts consider when making decisions.",
      image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1125&q=80",
      date: "January 7, 2023",
      readTime: "6 min read",
      slug: "understanding-child-custody-laws",
    },
  ];

  const categories = [
    "All Posts",
    "Business Law",
    "Criminal Law",
    "Family Law",
    "Property Law",
    "Civil Litigation",
  ];

  return (
    <Layout>
      <PageHeader 
        title="Legal Blog" 
        subtitle="Insights & Legal Tips from Reginald Morrison"
        backgroundImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogCard
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    date={post.date}
                    readTime={post.readTime}
                    slug={post.slug}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-law-gold"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-law-gold"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-law-gold"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-gold"
                  />
                  <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`block py-2 px-3 rounded ${
                          index === 0
                            ? "bg-law-gold/10 text-law-gold font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2 hover:text-law-gold">
                          <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h4>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact CTA */}
              <div className="bg-law-navy p-6 rounded-lg text-white">
                <h3 className="text-lg font-bold mb-3">Need Legal Help?</h3>
                <p className="text-gray-300 mb-4">
                  Our experts are ready to assist with your legal questions.
                </p>
                <a
                  href="/contact"
                  className="block text-center bg-law-gold hover:bg-white hover:text-law-navy text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Stay Informed" 
        description="Subscribe to our newsletter for the latest legal insights and updates."
        buttonText="Subscribe Now"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Blog;
