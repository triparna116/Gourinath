import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://localhost:3000/sitemap.xml', // আপনার সাইটম্যাপের লিঙ্ক
    }
}