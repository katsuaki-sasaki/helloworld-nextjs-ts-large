import { GetStaticPaths, GetStaticProps } from 'next';

const blogPosts: Record<string, BlogPost>  = {
    'post-1': {
        title: 'My First Blog Post',
        content: 'This is the content of the first blog post.'
    },
    'post-2': {
        title: 'Another Blog Post',
        content: 'This is some more content, about another topic.'
    },
    'post-3': {
        title: 'Next.js is Awesome!',
        content: 'Let\'s learn about Next.js and how great it is for building web apps.'
    },
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(blogPosts).map((slug) => ({
        params: { slug }
    }));

    return { paths, fallback: false };
}

// getStaticPropsの型定義
interface StaticProps {
    post: BlogPost | null;
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const post = blogPosts[slug] || null; // 存在しない場合はnullを返す
    return { props: { post } };
};

// BlogPost コンポーネントの型定義
interface BlogPostProps {
    post: BlogPost | null;
}

// BlogPost コンポーネントの定義
export default function BlogPost({ post }: BlogPostProps) {
    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}