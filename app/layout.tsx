import type {Metadata} from 'next';
import './globals.css';

export const metadata:Metadata={
  title:'Marcelli & Mariani â€” Site Oficial',
  description:'Site oficial de Marcelli & Mariani. IrmÃ£s, cantoras e artistas brasileiras nos Estados Unidos. Shows, vÃ­deos e contrataÃ§Ã£o.',
  keywords:['Marcelli e Mariani','Marcelli & Mariani','Brazilian singers USA','cantoras brasileiras Massachusetts','contratar Marcelli e Mariani'],
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}

