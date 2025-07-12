import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight : ['100' , '200' , '300' , '400' , '500' , '600' , '700' ,'800' , '900']
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight : ['100' , '300' , '400' , '700' , '900'],
});

export const metadata: Metadata = {
  title: "Grow Easy CRM",
  description: "Grow smarter, not harder.",
};
// Tagline : 'Grow smarter, not harder.'
// description: 'Grow Easy CRM is built for small business owners who need a simple yet powerful way to manage leads, customers, tasks, and communication in one clean dashboard.'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
