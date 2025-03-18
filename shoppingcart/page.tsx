import Header from "./components/Header";
import Cart from "./components/components/Cart";
import Footer from "../components/Footer/Footer";
import

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Header/>
      <Cart/>
      <Footer/>
    </div>
  );
}
