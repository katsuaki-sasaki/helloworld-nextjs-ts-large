import Link from 'next/link';

const blogPosts = [
    { slug: 'post-1', title: 'My First Blog Post' },
    { slug: 'post-2', title: 'Another Blog Post' },
    { slug: 'post-3', title: 'Next.js is Awesome!' },
];

export default function Blog() {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}