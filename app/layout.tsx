import '../app/globals.css';
import VerticalNav from '../components/VerticalNav';

export const metadata = {
  title: 'Str8hitzz EPK',
  description: 'Official music profile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <VerticalNav />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
