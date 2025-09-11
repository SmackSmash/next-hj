import Link from 'next/link';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Folios | Harrison Jack Photography'
};

export default function FoliosPage() {
  return (
    <div>
      <Link href='/folios/travel'>Travel</Link>
    </div>
  );
}
