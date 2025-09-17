import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Card } from '@/components/ui/card';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Personal Loans: A Beginner's Guide",
    date: "October 26, 2023",
    category: "Personal Finance",
    excerpt: "Personal loans can be a great financial tool if used wisely. This guide covers the basics, benefits, and how to apply.",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "5 Tips for Improving Your Credit Score",
    date: "September 15, 2023",
    category: "Credit Management",
    excerpt: "A good credit score opens doors to better loan rates. Here are five actionable tips to boost your score.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Future of Digital Lending: What to Expect",
    date: "August 01, 2023",
    category: "Fintech",
    excerpt: "Explore the exciting innovations shaping the digital lending landscape and how they benefit consumers.",
    imageUrl: "https://images.unsplash.com/photo-1639754503286-51539a72708c?q=80&w=2070&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-fintech-background-light text-fintech-text-dark hero-background">
      <Header />
      <main className="relative z-10 py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8">
          Our <span className="bg-gradient-to-r from-fintech-blue-accent to-fintech-blue-soft text-transparent bg-clip-text">Blog</span>
        </h1>
        <p className="text-lg text-fintech-text-muted text-center mb-16 max-w-3xl mx-auto">
          Stay informed with the latest insights, tips, and news on personal finance, loans, and the fintech industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-gradient-card-light border border-fintech-border-light rounded-xl shadow-lg overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-fintech-text-dark mb-3">{post.title}</h3>
                <div className="flex items-center text-fintech-text-muted text-sm mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <p className="text-fintech-text-muted mb-6">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-fintech-blue-accent hover:text-fintech-blue-soft font-semibold transition-colors">
                  Read More &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Blog;