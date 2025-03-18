import styles from "./page.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Grid from "./Grid/Grid";
import Category from "./Category/Category";
import { Inter } from 'next/font/google';
import Products from "./Products/Products";
import Discounts from "./Discounts/Discounts";
import Banner from "./Banner/Banner";
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
