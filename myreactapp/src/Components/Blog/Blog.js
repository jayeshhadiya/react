import React from 'react';
import './Blog.css';

// Sample data for blog posts
const blogPosts = [
  {
    title: 'Understanding Calculus',
    date: 'September 18, 2024',
    content: `Calculus is a branch of mathematics that studies continuous change. It is divided into two main parts: differential calculus and integral calculus. Differential calculus focuses on rates of change and slopes of curves, while integral calculus is concerned with the accumulation of quantities and the areas under curves. In this post, we will explore some fundamental concepts and problems in calculus.`
  },
  {
    title: 'Exploring Number Theory',
    date: 'September 17, 2024',
    content: `Number theory is the study of integers and their properties. It encompasses various topics such as prime numbers, divisibility, and modular arithmetic. This post will delve into some interesting problems and theories related to number theory, including theorems and proofs that highlight the beauty of this mathematical field.`
  },
  // Add more posts here
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Math Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p>Date: {post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
