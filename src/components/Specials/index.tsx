import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="A traditional Greek Salad but with a Chicago twist! Made with a variety of crisp and refreshing vegetables, feta cheese, and phenomenal dressings."
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Bruchetta"
          price={7.99}
          description="Signature cheese served on grilled bread complimented by roasted garlic, olive oil, and salt!"
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="Our classic. This is not your typical citrus dessert. The layerss of moist cake and light, refreshing lemon create euphoria in your mouth."
        />
      </Cards>
    </Container>
  );
};

export default Specials;