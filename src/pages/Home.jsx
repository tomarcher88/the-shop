import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import QuoteBox from '../components/QuoteBox'
import StoreSelector from '../components/StoreSelector'
import MailingList from '../components/MailingList'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        bgImage="/images/benjamin-wong.webp"
        innerImg="/images/sarah-dorweiler.webp"
        showBtn
        btnText="Shop"
        btnLink="/shop"
      />
      <QuoteBox italic quote="Testing the quote box. This is a prop." />
      <StoreSelector />
      <MailingList />
      <Footer />
    </>
  );
}