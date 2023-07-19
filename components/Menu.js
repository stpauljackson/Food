import { ScrollView,FlatList} from 'react-native'
import React from 'react'

import Accordian from './Accordian'

export default function Menu() {
  const randomFoods = [  
    { id:1870,
      title:'Stater',
      food:
      [
      { id: 3671, price:"12",name: "Pizza" },
      { id: 5392, price:"36",name: "Burger" },
      { id: 5173, price:"40",name: "Pasta" },
      { id: 6644, price:"99",name: "Salad" },
    ]},
    {id:2514,
      title:'Meal',
      food:
      [
      { id: 2375, price:"91",name: "Sushi" },
      { id: 3566, price:"77",name: "Ramen" },
      { id: 4927, price:"24",name: "Tempura" },
      { id: 6608, price:"56",name: "Gyoza" },
    ]},
    {
      id:1563,
      title:'Snack',
      food:
      [
      { id: 1279, price:"33",name: "Tacos" },
      { id: 95610, price:"92",name: "Burritos" },
      { id: 53711, price:"27",name: "Enchiladas" },
      { id: 30912, price:"17",name: "Quesadilla" },
    ]},
    {id:1587,
      title:'Deserts',
      food:[
      { id: 85213, price:"3",name: "Curry" },
      { id: 7414, price:"73",name: "Biryani" },
      { id: 70515, price:"38",name: "Naan" },
      { id: 49016, price:"27",name: "Tandoori Chicken" },
    ]},
  ];
  return (
    <ScrollView>
      {
          randomFoods.map((x)=><Accordian key={x.id} item={x} />)
      }
    </ScrollView>
  )
}

