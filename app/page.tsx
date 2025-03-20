import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Grid from "./components/Grid/Grid";
import Category from "./components/Category/Category";
import { Inter } from 'next/font/google';
import Products from "./components/Products/Products";
import Discounts from "./components/Discounts/Discounts";
import Banner from "./components/Banner/Banner";
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Header/>
      <Hero/>
      <Grid/>
      <Category/>
      <Products/>
      <Discounts/>
      <Banner/>
      <Footer/>
    </div>
  );
}
