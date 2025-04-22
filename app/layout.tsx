import '../app/globals.css';
import ClientLayout from '../components/clientlayout';
import AmplifyAuthProvider from '../components/AmplifyAuthProvider';

export const metadata = {
  title: 'Str8hitzz EPK',
  description: 'Official music profile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AmplifyAuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AmplifyAuthProvider>
      </body>
    </html>
  );
}
