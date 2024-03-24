import { Inter } from "next/font/google";
import "./globals.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '/public/css/owl.carousel.min.css';
import '/public/css/owl.theme.default.min.css';
import '/public/css/owl.theme.green.min.css';
import 'animate.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thatipamula Venkatesh",
  description: "Thatipamula Venkatesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
