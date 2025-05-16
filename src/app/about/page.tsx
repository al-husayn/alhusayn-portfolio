import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: 'About | Al-husayn Dev',
  description:
    'Learn more about Al-husayn Dev - Frontend Developer, JavaScript enthusiast, and tech explorer.',
  keywords: [
    'Al-husayn  Dev',
    'About Al-husayn',
    'Frontend Developer',
    'JavaScript',
    'Next.js',
    'GH Developer',
  ],
  openGraph: {
    title: 'About | Al-husayn Dev',
    description:
      'Discover the story and journey of Al-husayn Dev in the world of web development.',
    url: 'https://Al-husayn.com/about',
    siteName: 'Al-husayn Dev',
    type: 'website',
    locale: 'en_US',
    images: [
      // {
      //   url: "https://kinhdev.id.vn/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Kinh Dev About Page",
      // },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Al-husayn Dev',
    description:
      'Learn more about Al-husayn Dev - Frontend Developer and tech enthusiast.',
    // images: ["https://kinhdev.id.vn/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: 'https://Al-husayn.com/about',
  },
};

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
