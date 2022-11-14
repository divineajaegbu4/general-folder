import * as FaIcons from "react-icons/fa";

import mealsImage4 from "../assests/meal4.jpg";
import NigerianFood4 from "../assests/NigerianFood4.jpg";
import NigerianFood5 from "../assests/NigerianFood7.webp";
import NigerianFood10 from "../assests/NigerianFood10.webp";
import NigerianFood1 from "../assests/NigeriaFood1.jpg";

import FoodChoice1 from "../assests/LandingPageImage/LandingPageImage1.jpg";
import FoodChoice2 from "../assests/LandingPageImage/LandingPageImage2.jpg";
import FoodChoice3 from "../assests/LandingPageImage/LandingPageImage3.jpg";
import FoodChoice4 from "../assests/LandingPageImage/LandingPageImage4.jpg";
import FoodChoice5 from "../assests/LandingPageImage/LandingPageImage5.jpg";
import FoodChoice6 from "../assests/LandingPageImage/LandingPageImage6.jpg";
import FoodChoice7 from "../assests/LandingPageImage/LandingPageImage7.jpg";
import FoodChoice8 from "../assests/LandingPageImage/LandingPageImage8.jpeg";
import FoodChoice9 from "../assests/LandingPageImage/LandingPageImage9.jpg";
import FoodChoice10 from "../assests/LandingPageImage/LandingPageImage10.jpg";
import FoodChoice11 from "../assests/LandingPageImage/LandingPageImage11.jpg";
import FoodChoice12 from "../assests/LandingPageImage/LandingPageImage12.jpg";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
const SliderImage = [
  {
    image: mealsImage4,
    id: "meals1",
  },
  {
    image: NigerianFood4,
    id: "meals2",
  },
  {
    image: NigerianFood10,
    id: "meals3",
  },
  {
    image: NigerianFood5,
    id: "meals4",
  },
  {
    image: NigerianFood1,
    id: "meals5",
  },
];

export const viewImages = [
  {
    image: FoodChoice1,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦2457",
    name: "Plaintain chicken",
  },
  {
    image: FoodChoice2,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦3895",
    name: "Jollof rice and chicken",
  },
  {
    image: FoodChoice3,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦299",
    name: "Fried Chicken and onions",
  },
  {
    image: FoodChoice4,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦4999",
    name: "Jollof rice and chicken",
  },
  {
    image: FoodChoice5,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦467",
    name: "Delicious chicken",
  },
  {
    image: FoodChoice6,
    iconHeart: <FaIcons.FaNeuter />,
    icon: <FaHeart />,
    naira: "₦1999",
    name: "African food and meat",
  },
  {
    image: FoodChoice7,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦2999",
    name: "Jollof rice and chicken",
  },
  {
    image: FoodChoice8,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦3892",
    name: "Burger and fried yam",
  },
  {
    image: FoodChoice9,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦5999",
    name: "Fried rice and meat",
  },
  {
    image: FoodChoice10,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦5776",
    name: "Fruit salad and egg",
  },
  {
    image: FoodChoice11,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦2999",
    name: "Snacks and tomatoes",
  },
  {
    image: FoodChoice12,
    icon: <FaHeart />,
    iconHeart: <FaIcons.FaNeuter />,
    naira: "₦4777",
    name: "African salad and groundnut",
  },
];

export default SliderImage;
