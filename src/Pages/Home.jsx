import { ShoppingBasket, UserRound , Phone, House, Brush, ToyBrick, BookOpen, SofaIcon, Car, Music} from "lucide-react";
import { Link } from "react-router-dom";



const categories = [
  {
    id: 1,
    name: "Mens",
    icon: <UserRound />,
    desc: "Clothing and accessories for men."
  },
  {
    id: 2,
    name: "Grocery",
    icon: <ShoppingBasket />,
    desc: "Everyday food and household items."
  },
  {
    id: 3,
    name: "Electronics",
    icon: <Phone />,
    desc: "Latest gadgets and tech products."
  },
  {
    id: 4,
    name: "Home",
    icon: <House />,
    desc: "Furniture and decoration for your home."
  },
  {
    id: 5,
    name: "Beauty",
    icon: <Brush />,
    desc: "Cosmetics and skincare products."
  },
  {
    id: 6,
    name: "Books",
    icon: <BookOpen />,
    desc: "Fiction, non-fiction, and textbooks."
  },
  {
    id: 7,
    name: "Toys",
    icon: <ToyBrick />,
    desc: "Toys and games for children."
  },
  {
    id: 8,
    name: "Sports",
    icon: <SofaIcon />,
    desc: "Sports gear, equipment, and apparel."
  },
  {
    id: 9,
    name: "Automotive",
    icon: <Car />,
    desc: "Car accessories, tools, and parts."
  },
  {
    id: 10,
    name: "Music",
    icon: <Music />,
    desc: "Instruments, albums, and accessories."
  }
];

const Home = () => {

  return (
    <div className="grid grid-cols-10 gap-5 m-10 ">
       {
        categories.map((cate) =>{
          return(
            <Link to={`/category/${cate.name}`} className="bg-white shadow-2xs flex items-center justify-center flex-col
            border border-slate-300 p-2">
               <p>{cate.icon}</p>
               <h1>{cate.name}</h1>
            </Link>
          )
        })
       }
    </div>
  );
};

export default Home;

// http://localhost:8080/api/filter/:name
