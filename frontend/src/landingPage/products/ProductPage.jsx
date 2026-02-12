import Hero from "./Hero";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgURL="assets/kite.png"
        productName="Kite"
        ProductDescription="Our ultra-fast flagship  trading platform with string market data, advanced charts, an elegent UI, and more. Enjoy the Kite experience seamlessly on your Anroid and iOS device"
        tryDemo="#"
        LearnMore="#"
        googlePlay="assets/googlePlayBadge.svg"
        appStore="assets/appstoreBadge.svg"
      />
      <RightSection
        imgURL="assets/console.png"
        productName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
        LearnMore="#"
      />
      <LeftSection
        imgURL="assets/coin.png"
        productName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to ypur Demat account. Enjoy the investment experience on your Anroid and iOS devices"
        tryDemo="#"
        LearnMore="#"
        googlePlay="assets/googlePlayBadge.svg"
        appStore="assets/appstoreBadge.svg"
      />
      <RightSection
        imgURL="assets/kiteconnect.png"
        productName="Kite Connect API"
        ProductDescription="Build powrefull trading platforms and expriences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and shoowcase it to our clientbasr"
        LearnMore="#"
      />
      <LeftSection
        imgURL="assets/varsity.png"
        productName="Varsity"
        ProductDescription="Enjoy the investment experience on your Anroid and iOS devices"
        tryDemo="#"
        LearnMore="#"
        googlePlay="assets/googlePlayBadge.svg"
        appStore="assets/appstoreBadge.svg"
      />
      <Universe />
    </>
  );
}
