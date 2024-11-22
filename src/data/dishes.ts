import { image } from "framer-motion/client";

export const dishes = [
  {
    id: 1,
    name: 'Paneer Butter Masala',
    price: 249,
    rating: 4.8,
    image:'/images/a1.jpg',
    description: 'Creamy curry with cottage cheese cubes in a rich tomato gravy'
  },
  {
    id: 2,
    name: 'Masala Dosa',
    price: 149,
    rating: 4.7,
    image:'/images/a2.jpg',
    description: 'Crispy rice crepe filled with spiced potato mixture'
  },
  {
    id: 3,
    name: 'Rajma Chawal',
    price: 199,
    rating: 4.6,
    image:'/images/a3.jpg',
    description: 'Red kidney beans cooked in a spiced tomato gravy served with steamed rice'
  },
  {
    id: 4,
    name: 'Chole Bhature',
    price: 229,
    rating: 4.8,
    image:'/images/a4.jpg',
    description: 'Spicy chickpea curry served with fluffy deep-fried bread'
  },
  {
    id: 5,
    name: 'Aloo Paratha',
    price: 99,
    rating: 4.5,
    image:'/images/a5.jpg',
    description: 'Indian flatbread stuffed with a seasoned potato mixture'
  },
  {
    id: 6,
    name: 'Palak Paneer',
    price: 249,
    rating: 4.7,
    image:'/images/a6.jpg',
    description: 'Cottage cheese cooked in a creamy spinach-based gravy'
  },
  {
    id: 7,
    name: 'Veg Biryani',
    price: 299,
    rating: 4.8,
    image:'/images/a7.jpg',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices'
  },
  {
    id: 8,
    name: 'Dal Tadka',
    price: 149,
    rating: 4.6,
    image:'/images/a8.jpg',
    description: 'Yellow lentils tempered with garlic, cumin, and ghee'
  },
  {
    id: 9,
    name: 'Dhokla',
    price: 99,
    rating: 4.7,
    image:'/images/a9.jpg',
    description: 'Steamed fermented gram flour cake, a Gujarati delicacy'
  },
  {
    id: 10,
    name: 'Pav Bhaji',
    price: 179,
    rating: 4.7,
    image:'/images/a10.jpg',
    description: 'Spicy mashed vegetable curry served with buttered bread rolls'
  },
  {
    id: 11,
    name: 'Malai Kofta',
    price: 249,
    rating: 4.8,
    image:'/images/a11.jpg',
    description: 'Soft cottage cheese and potato dumplings served in a creamy gravy'
  },
  {
    id: 12,
    name: 'Kadai Paneer',
    price: 249,
    rating: 4.6,
    image:'/images/a12.jpg',
    description: 'Cottage cheese cooked with bell peppers, onions, and Indian spices'
  },
  {
    id: 13,
    name: 'Shahi Paneer',
    price: 269,
    rating: 4.8,
    image:'/images/a13.jpg',
    description: 'A royal dish of cottage cheese in a rich and creamy cashew gravy'
  },
  {
    id: 14,
    name: 'Veg Kolhapuri',
    price: 229,
    rating: 4.7,
    image:'/images/a4.jpg',
    description: 'Mixed vegetables cooked in a spicy and flavorful Kolhapuri masala'
  },
  {
    id: 15,
    name: 'Bhindi Masala',
    price: 189,
    rating: 4.6,
    image:'/images/a15.jpg',
    description: 'Okra stir-fried with onions, tomatoes, and aromatic spices'
  },
  {
    id: 16,
    name: 'Aloo Gobi',
    price: 189,
    rating: 4.5,
    image:'/images/a16.jpg',
    description: 'Potatoes and cauliflower cooked with Indian spices'
  },
  {
    id: 17,
    name: 'Dal Makhani',
    price: 249,
    rating: 4.8,
    image:'/images/a17.jpg',
    description: 'Rich and creamy black lentil curry with a buttery texture'
  },
  {
    id: 18,
    name: 'Sev Puri',
    price: 99,
    rating: 4.4,
    image:'/images/a18.jpg',
    description: 'Crispy puris topped with spicy chutneys, sev, and chopped vegetables'
  },
  {
    id: 19,
    name: 'Samosa',
    price: 49,
    rating: 4.6,
    image:'/images/a19.jpg',
    description: 'Deep-fried pastry filled with spiced potato mixture'
  },
  {
    id: 20,
    name: 'Kachori',
    price: 69,
    rating: 4.5,
    image:'/images/a20.jpg',
    description: 'Crispy, flaky pastry stuffed with spiced lentil mixture'
  },
  {
    id: 21,
    name: 'Roti',
    price: 20,
    rating: 4.7,
    image:'/images/a21.jpg',
    description: 'Soft and freshly made Indian flatbread'
  },
  {
    id: 22,
    name: 'Naan',
    price: 40,
    rating: 4.8,
    image:'/images/a22.jpg',
    description: 'Leavened bread cooked in a tandoor, served plain or with butter'
  },
  {
    id: 23,
    name: 'Jeera Rice',
    price: 149,
    rating: 4.6,
    image:'/images/a23.jpg',
    description: 'Steamed basmati rice flavored with cumin'
  },
  {
    id: 24,
    name: 'Lemon Rice',
    price: 169,
    rating: 4.5,
    image:'/images/a24.jpg',
    description: 'Rice flavored with lemon juice, mustard seeds, and curry leaves'
  },
  {
    id: 25,
    name: 'Thepla',
    price: 79,
    rating: 4.5,
    image:'/images/a25.jpg',
    description: 'Gujarati flatbread made with whole wheat flour and spices'
  },
  {
    id: 26,
    name: 'Handvo',
    price: 129,
    rating: 4.6,
    image:'/images/a26.jpg',
    description: 'Savory baked dish made with lentils and rice flour'
  },
  {
    id: 27,
    name: 'Chaas',
    price: 49,
    rating: 4.7,
    image:'/images/a27.jpg',
    description: 'Refreshing spiced buttermilk drink'
  },
  {
    id: 28,
    name: 'Lassi',
    price: 99,
    rating: 4.8,
    image:'/images/a28.jpg',
    description: 'Sweet or salted yogurt-based drink'
  },
  {
    id: 29,
    name: 'Gulab Jamun',
    price: 79,
    rating: 4.8,
    image:'/images/a29.jpg',
    description: 'Soft milk dumplings soaked in sugar syrup'
  },
  {
    id: 30,
    name: 'Rasmalai',
    price: 129,
    rating: 4.9, 
    image:'/images/a30.jpg',
    description: 'Soft paneer discs soaked in sweetened flavored milk'
  } ,{
    id: 31,
    name: 'Dum Aloo',
    price: 199,
    rating: 4.6,
    image:'/images/a31.jpg',
    description: 'Baby potatoes cooked in a tangy and spicy tomato-based gravy'
  },
  {
    id: 32,
    name: 'Pulao',
    price: 179,
    rating: 4.5,
    image:'/images/a32.jpg',
    description: 'Fragrant rice dish cooked with vegetables and mild spices'
  },
  {
    id: 33,
    name: 'Rasgulla',
    price: 99,
    rating: 4.9,
    image:'/images/a33.jpg',
    description: 'Soft and spongy cheese balls soaked in sugar syrup'
  },
  {
    id: 34,
    name: 'Jalebi',
    price: 89,
    rating: 4.8,
    image:'/images/a34.jpg',
    description: 'Crispy and syrupy deep-fried spiral dessert'
  },
  {
    id: 35,
    name: 'Vegetable Hakka Noodles',
    price: 219,
    rating: 4.7,
    image:'/images/a35.jpg',
    description: 'Stir-fried noodles cooked with fresh vegetables and soy sauce'
  },
  {
    id: 36,
    name: 'Paneer Tikka',
    price: 249,
    rating: 4.8,
    image:'/images/a36.jpg',
    description: 'Char-grilled cottage cheese cubes marinated in spices and yogurt'
  },
  {
    id: 37,
    name: 'Bhel Puri',
    price: 79,
    rating: 4.4,
    image:'/images/a37.jpg',
    description: 'Crispy puffed rice mixed with tamarind chutney, vegetables, and sev'
  },
  {
    id: 38,
    name: 'Vada Pav',
    price: 59,
    rating: 4.6,
    image:'/images/a38.jpg',
    description: 'Spicy potato fritter stuffed in a bun, served with chutneys'
  },
  {
    id: 39,
    name: 'Sabudana Khichdi',
    price: 139,
    rating: 4.5,
    image:'/images/a39.jpg',
    description: 'Pearl tapioca stir-fried with peanuts, spices, and potatoes'
  },
  {
    id: 40,
    name: 'Misal Pav',
    price: 169,
    rating: 4.7,
    image:'/images/a40.jpg',
    description: 'Spicy curry made with sprouts, served with bread rolls'
  },
  {
    id: 41,
    name: 'Upma',
    price: 99,
    rating: 4.5,
    image:'/images/a41.jpg',
    description: 'Semolina porridge cooked with vegetables and tempered with spices'
  },
  {
    id: 42,
    name: 'Pani Puri',
    price: 69,
    rating: 4.8,
    image:'/images/a42.jpg',
    description: 'Crispy puris filled with spiced water, tamarind chutney, and fillings'
  },
  {
    id: 43,
    name: 'Khichdi',
    price: 149,
    rating: 4.5,
    image:'/images/a43.jpg',
    description: 'Comforting one-pot rice and lentil dish, tempered with ghee'
  },
  {
    id: 44,
    name: 'Masala Puri',
    price: 89,
    rating: 4.6,
    image:'/images/a44.jpg',
    description: 'Crispy puris topped with spicy lentil gravy, chutneys, and sev'
  },
  {
    id: 45,
    name: 'Vegetable Pakoras',
    price: 99,
    rating: 4.7,
    image:'/images/a45.jpg',
    description: 'Crispy deep-fried fritters made with vegetables and gram flour batter'
  },
  {
    id: 46,
    name: 'Rava Dosa',
    price: 159,
    rating: 4.6,
    image:'/images/a46.jpg',
    description: 'Thin and crispy dosa made with semolina and rice flour'
  },
  {
    id: 47,
    name: 'Vegetable Manchurian',
    price: 239,
    rating: 4.8,
    image:'/images/a47.jpg',
    description: 'Deep-fried vegetable balls cooked in a tangy Indo-Chinese sauce'
  },
  {
    id: 48,
    name: 'Patra',
    price: 119,
    rating: 4.5,
    image:'/images/a48.jpg',
    description: 'Steamed colocasia leaf rolls stuffed with spiced gram flour'
  },
  {
    id: 49,
    name: 'Besan Ladoo',
    price: 89,
    rating: 4.9,
    image:'/images/a49.jpg',
    description: 'Sweet balls made of roasted gram flour, sugar, and ghee'
  },
  {
    id: 50,
    name: 'Nimbu Pani',
    price: 49,
    rating: 4.7,
    image:'/images/a50.jpg',
    description: 'Refreshing drink made with fresh lemon juice, sugar, and water'
  },
  {
    id: 51,
    name: 'Filter Coffee',
    price: 99,
    rating: 4.8,
    image:'/images/a51.jpg',
    description: 'South Indian-style strong and aromatic coffee served with froth'
  },
  {
    id: 52,
    name: 'Kesar Pista Kulfi',
    price: 119,
    rating: 4.8,
    image:'/images/a52.jpg',
    description: 'Traditional Indian frozen dessert made with saffron and pistachios'
  },
  {
    id: 53,
    name: 'Thepla with Pickle',
    price: 149,
    rating: 4.6,
    image:'/images/a53.jpg',
    description: 'Gujarati spiced flatbread served with tangy pickle'
  },
  {
    id: 54,
    name: 'Chana Masala',
    price: 199,
    rating: 4.7,
    image:'/images/a54.jpg',
    description: 'Spiced chickpea curry cooked in a tangy tomato-based gravy'
  },
  {
    id: 55,
    name: 'Kadhi',
    price: 169,
    rating: 4.5,
    image:'/images/a55.jpg',
    description: 'Tangy yogurt-based curry tempered with spices and served with rice'
  },
  {
    id: 56,
    name: 'Veg Sandwich',
    price: 79,
    rating: 4.5,
    image:'/images/a56.jpg',
    description: 'A classic sandwich filled with fresh vegetables like cucumber, tomato, lettuce, and mayonnaise'
  },
  {
    id: 57,
    name: 'Pineapple Jam Sandwich',
    price: 89,
    rating: 4.4,
    image:'/images/a57.jpg',
    description: 'Sweet and tangy pineapple jam spread between slices of soft bread, perfect for a light snack'
  },
  {
    id: 58,
    name: 'Tea',
    price: 39,
    rating: 4.6,
    image:'/images/a58.jpg',
    description: 'A hot cup of traditional Indian chai, brewed with spices like cardamom, ginger, and tea leaves'
  },
  {
    id: 59,
    name: 'Regular Coffee',
    price: 49,
    rating: 4.5,
    image:'/images/a59.jpg',
    description: 'A simple yet aromatic cup of strong coffee, perfect to kickstart your day'
  },
  {
    id: 60,
    name: 'Dabeli',
    price: 99,
    rating: 4.7,
    image:'/images/a60.jpg',
    description: 'A popular snack from Gujarat, this spiced potato filling is served in a bun with tamarind chutney, pomegranate, and peanuts'
  }
];