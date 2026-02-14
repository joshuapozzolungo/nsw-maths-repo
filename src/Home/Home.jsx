import Hero from "../components/hero.jsx";
import Questions from "../components/questions.jsx";
import Pricing from "../components/pricing.jsx";
import Compare from "../components/compare.jsx";
import Why from "../components/why.jsx";
import Testimonials from "../components/testimonials.jsx";
import Promotion from "../components/promotion.jsx";

export default function Home() {
  
  return (
    <div>
      <Hero/>
      <Why/>
      <Compare/>
      <Pricing/>
      <Testimonials/>
      <Promotion/>
    </div>
  );
}



