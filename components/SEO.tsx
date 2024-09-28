// components/SEO.tsx
import Head from 'next/head';

type SEOProps = {
    title: string;
    description: string;
};

export default (params: SEOProps) => (
    <Head>
        <title>{params.title}</title>
        <meta name="description" content={params.description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="Next.js, SEO, Hello World, JavaScript, React"/>
    </Head>
)