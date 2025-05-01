// src/components/BlogSection/BlogSection.jsx
import React from 'react';

function BlogSection() {
  const blogPosts = [
    {
      category: 'Improvements',
      title: 'Automating Daily Tasks from Your Phone',
      description: 'Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.',
      date: 'April 24, 2022',
      imageAlt: 'Hand with phone and icons',
    },
    {
      category: 'Tips & Tricks',
      title: 'Can You Automate Group Learning?',
      description: 'Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.',
      date: 'April 24, 2022',
      imageAlt: 'Person working on a laptop',
    },
    {
      category: 'News',
      title: 'Our $3,000,000 B Round Investors',
      description: 'Eos ipsum et est quis neque cum. Quis autem est eligendi animi eaque. Itaque minus illo delectus vel vitae dolores minus.',
      date: 'April 24, 2022',
      imageAlt: 'Handshake with money and chart',
    },
  ];

  return (
    <section style={styles.blog}>
      <div style={styles.blogHeader}>
        <h2 style={styles.blogTitle}>Get smarter, with our blog.</h2>
        <a href="#" style={styles.blogLink}>See All Posts</a>
      </div>
      <div style={styles.blogPosts}>
        {blogPosts.map((post, index) => (
          <div key={index} style={styles.blogPost}>
            <div style={styles.postImage}>
              {/* Здесь будут изображения */}
            </div>
            <p style={styles.postCategory}>{post.category}</p>
            <h3 style={styles.postTitle}>{post.title}</h3>
            <p style={styles.postDescription}>{post.description}</p>
            <p style={styles.postDate}>{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  blog: {
    padding: '80px 40px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  blogHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  blogTitle: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  blogLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.1em',
  },
  blogPosts: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  blogPost: {
    width: '300px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  postImage: {
    height: '180px',
    backgroundColor: '#eee', // Заглушка для изображения
  },
  postCategory: {
    padding: '15px',
    color: '#555',
    fontSize: '0.9em',
  },
  postTitle: {
    padding: '0 15px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  postDescription: {
    padding: '0 15px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  postDate: {
    padding: '0 15px 15px',
    color: '#777',
    fontSize: '0.9em',
  },
};

export default BlogSection;