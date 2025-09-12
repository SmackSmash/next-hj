import Link from 'next/link';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Folios | Harrison Jack Photography'
};

export default function FoliosPage() {
  return (
    <div>
      <Link href='/folios/travel'>Travel</Link>
      <Link href='/folios/interiors'>Interiors</Link>
      <Link href='/folios/food'>Food</Link>
      <Link href='/folios/lifestyle'>Lifestyle</Link>
      <Link href='/folios/advertising'>Advertising</Link>
      <Link href='/folios/social'>Social</Link>
    </div>
  );
}
