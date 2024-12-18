import { MenuItem } from "@/types/menu"

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Double Cheeseburger',
    price: 4500,
    image: '/assets/double cheese.png?height=80&width=80',
    sold: 0,
    category: "Apetizers",
    available: true
  },
  {
    id: '2',
    name: 'Grand Sandwich',
    price: 4500,
    image: '/assets/grand sandwich.png?height=80&width=80',
    sold: 0,
    category: "American Cuisine",
    available: true
  },
  {
    id: '3',
    name: 'French Toast Slam',
    price: 4500,
    image: '/assets/french toast.png?height=80&width=80',
    sold: 0,
    category: "Apetizers",
    available: false
  },
  {
    id: '4',
    name: 'Buttermilk Pancake',
    price: 4500,
    image: '/assets/buttermilk pancake.png?height=80&width=80',
    sold: 0,
    category: "Asian Cuisine",
    available: true
  },
  {
    id: '5',
    name: 'Brooklyn Spaghetti',
    price: 4500,
    image: '/assets/brooklyn spaghetti.png?height=80&width=80',
    sold: 0,
    category: "American Cuisine",
    available: true
  }
]

