import { links } from '@/lib/data';

export const dynamicParams = false;
export const dynamic = 'force-static';

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}

export async function generateStaticParams() {
  return links.map((link) => ({
    slug: link.src,
  }));
}
