import { useState } from "react";
import Menu from "./components/Menu";

function App(){
  const menu = [
  // Breakfast
  {
    id: 1,
    title: "Pancake Stack",
    category: "breakfast",
    price: 150,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fluffy pancakes served with maple syrup and fresh fruits."
  },
  {
    id: 2,
    title: "Omelette",
    category: "breakfast",
    price: 100,
  image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic 3-egg omelette with cheese, onion, and herbs."
  },
  {
    id: 3,
    title: "Waffles",
    category: "breakfast",
    price: 180,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Crispy golden waffles topped with honey and butter."
  },
  {
    id: 4,
    title: "Fruit Bowl",
    category: "breakfast",
    price: 120,
 image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A refreshing mix of seasonal fruits with yogurt and nuts."
  },

  // Lunch
  {
    id: 5,
    title: "Chicken Biryani",
    category: "lunch",
    price: 250,
 image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Aromatic basmati rice cooked with tender chicken and Indian spices."
  },
  {
    id: 6,
    title: "Grilled Chicken Salad",
    category: "lunch",
    price: 200,
   image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Healthy grilled chicken served over a bed of fresh vegetables."
  },
  {
    id: 7,
    title: "Veg Pasta",
    category: "lunch",
    price: 180,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Creamy pasta tossed with fresh vegetables and herbs."
  },
  {
    id: 8,
    title: "Fish Curry",
    category: "lunch",
    price: 220,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spicy and tangy fish curry served with steamed rice."
  },

  // Shakes
  {
    id: 9,
    title: "Chocolate Shake",
    category: "shakes",
    price: 120,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Rich and creamy chocolate milkshake topped with whipped cream."
  },
  {
    id: 10,
    title: "Strawberry Shake",
    category: "shakes",
    price: 110,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sweet strawberry shake blended with milk and topped with cream."
  },
  {
    id: 11,
    title: "Mango Shake",
    category: "shakes",
    price: 130,
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Refreshing mango shake made with ripe mangoes and chilled milk."
  },
  {
    id: 12,
    title: "Banana Shake",
    category: "shakes",
    price: 100,
     image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Nutritious banana shake blended with honey and almonds."
  }
];
const [menuDetails,setMenuDetails]=useState(menu);
function handleSort(category){
   if(category==="breakfast"){
     let filteredMenu=menu.filter((item,index)=>item.category==category);
     console.log(filteredMenu)
     setMenuDetails(filteredMenu)
   }
  if(category==="lunch"){
     let filteredMenu=menu.filter((item,index)=>item.category==category);
     console.log(filteredMenu)
     setMenuDetails(filteredMenu)
   }
   if(category==="shakes"){
     let filteredMenu=menu.filter((item,index)=>item.category==category);
     console.log(filteredMenu)
     setMenuDetails(filteredMenu)
   }
   if(category==="all"){
     setMenuDetails(menu)
   }
  //  else{
  //   let filteredMenu=menu.filter((item,index)=>item.category===category);
  //   setMenuDetails(filteredMenu)
  //  }

}
  return(
    <div id="main">
      <Menu menuItems={menuDetails} handleSort={handleSort}/>
    </div>
  )
}
export default App
