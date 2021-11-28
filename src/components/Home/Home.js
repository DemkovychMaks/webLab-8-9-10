import {
    Button,
    ButtonWrapper,
    HeroWrapper,
    Image,
    ImageText, ItemsText,
    Label,
    TextWrapper,
} from "./Home.styles";
import VaseShop from "../../assets/hero.jpg"



export function Home() {
    return (
        <div>
            <HeroWrapper>
                <Image src={VaseShop}/>
                <TextWrapper>
                    <Label>The best vase shop</Label>
                    <ImageText>Our vases and bowls were designed to make your everyday happier and inspire your own creativity. Whether you fill a room with bouquets, put a single flower in a vase, or let our bowls and vases stand on their own. With our range, even the prices are beautiful.</ImageText>
                </TextWrapper>
            </HeroWrapper>
        </div>
    );
}