import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Heavyweight Cotton Jersey T-Shirt',
    price: 68,
    image: 'https://ext.same-assets.com/1252540099/4221324315.webp',
    colors: [
      { name: 'White', hex: '#ffffff', image: 'https://ext.same-assets.com/1252540099/4221324315.webp' },
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/4221324315.webp' },
      { name: 'Tan', hex: '#c9a29d', image: 'https://ext.same-assets.com/1252540099/3538937878.webp' },
      { name: 'Navy', hex: '#37475f', image: 'https://ext.same-assets.com/1252540099/4221324315.webp' }
    ],
    category: 'Shirts',
    type: 'T-Shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    fit: 'Classic Fit',
    collection: 'Soft Jersey',
    fabric: 'Cotton'
  },
  {
    id: '2',
    name: 'Soft Knit Overshirt',
    price: 128,
    image: 'https://ext.same-assets.com/1252540099/3538937878.webp',
    colors: [
      { name: 'Charcoal', hex: '#60544e', image: 'https://ext.same-assets.com/1252540099/3538937878.webp' },
      { name: 'Grey', hex: '#a2a09e', image: 'https://ext.same-assets.com/1252540099/3538937878.webp' },
      { name: 'Navy', hex: '#37475f', image: 'https://ext.same-assets.com/1252540099/3538937878.webp' }
    ],
    category: 'Shirts',
    type: 'Overshirts',
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Relaxed Fit',
    fabric: 'Cotton'
  },
  {
    id: '3',
    name: 'Always Down Puffer Vest',
    price: 268,
    image: 'https://ext.same-assets.com/1252540099/3415802523.webp',
    colors: [
      { name: 'Charcoal', hex: '#60544e', image: 'https://ext.same-assets.com/1252540099/3415802523.webp' },
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/3415802523.webp' },
      { name: 'Brown', hex: '#9d8565', image: 'https://ext.same-assets.com/1252540099/3415802523.webp' },
      { name: 'Grey', hex: '#cccbca', image: 'https://ext.same-assets.com/1252540099/3415802523.webp' }
    ],
    category: 'Vests',
    type: 'Puffer Vests',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Always Down'
  },
  {
    id: '4',
    name: 'ABC Classic-Fit 5 Pocket Pant 32L',
    subtitle: 'Warpstreme',
    price: 138,
    image: 'https://ext.same-assets.com/1252540099/1119210993.webp',
    colors: [
      { name: 'Charcoal', hex: '#60544e', image: 'https://ext.same-assets.com/1252540099/1119210993.webp' },
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/1119210993.webp' },
      { name: 'Khaki', hex: '#c8c0af', image: 'https://ext.same-assets.com/1252540099/1119210993.webp' },
      { name: 'Olive', hex: '#6e7456', image: 'https://ext.same-assets.com/1252540099/1119210993.webp' },
      { name: 'Blue', hex: '#6592ba', image: 'https://ext.same-assets.com/1252540099/1119210993.webp' }
    ],
    isBestGift: true,
    category: 'Pants',
    type: '5 Pocket Pants',
    sizes: ['28', '29', '30', '31', '32', '33', '34', '36'],
    fit: 'Classic Fit',
    collection: 'ABC',
    fabric: 'Warpstreme'
  },
  {
    id: '5',
    name: 'Steady State Full-Zip Hoodie',
    price: 138,
    image: 'https://ext.same-assets.com/1252540099/876225637.webp',
    colors: [
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/876225637.webp' },
      { name: 'Grey', hex: '#a2a09e', image: 'https://ext.same-assets.com/1252540099/876225637.webp' },
      { name: 'Khaki', hex: '#c8c0af', image: 'https://ext.same-assets.com/1252540099/876225637.webp' }
    ],
    category: 'Hoodies & Sweatshirts',
    type: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Relaxed Fit',
    collection: 'Steady State'
  },
  {
    id: '6',
    name: 'Steady State Classic-Fit Pant Regular',
    price: 118,
    image: 'https://ext.same-assets.com/1252540099/3938978977.webp',
    colors: [
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/3938978977.webp' },
      { name: 'Grey', hex: '#a2a09e', image: 'https://ext.same-assets.com/1252540099/3938978977.webp' }
    ],
    category: 'Pants',
    type: 'Athletic Pants',
    sizes: ['S', 'M', 'L', 'XL'],
    fit: 'Classic Fit',
    collection: 'Steady State'
  },
  {
    id: '7',
    name: 'ABC Jogger Regular',
    price: 128,
    image: 'https://ext.same-assets.com/1252540099/261357841.webp',
    colors: [
      { name: 'Tan', hex: '#c9a29d', image: 'https://ext.same-assets.com/1252540099/261357841.webp' },
      { name: 'Blue', hex: '#6592ba', image: 'https://ext.same-assets.com/1252540099/261357841.webp' },
      { name: 'Navy', hex: '#37475f', image: 'https://ext.same-assets.com/1252540099/261357841.webp' },
      { name: 'Brown', hex: '#9d8565', image: 'https://ext.same-assets.com/1252540099/261357841.webp' },
      { name: 'Grey', hex: '#7a8586', image: 'https://ext.same-assets.com/1252540099/261357841.webp' }
    ],
    isBestGift: true,
    category: 'Pants',
    type: 'Athletic Pants',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fit: 'Classic Fit',
    collection: 'ABC',
    fabric: 'Warpstreme'
  },
  {
    id: '8',
    name: 'Soft Jersey Pullover Hoodie',
    price: 98,
    image: 'https://ext.same-assets.com/1252540099/999620338.webp',
    colors: [
      { name: 'Beige', hex: '#c9a29d', image: 'https://ext.same-assets.com/1252540099/999620338.webp' },
      { name: 'Navy', hex: '#37475f', image: 'https://ext.same-assets.com/1252540099/999620338.webp' },
      { name: 'White', hex: '#ffffff', image: 'https://ext.same-assets.com/1252540099/999620338.webp' },
      { name: 'Charcoal', hex: '#60544e', image: 'https://ext.same-assets.com/1252540099/999620338.webp' },
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/999620338.webp' }
    ],
    category: 'Hoodies & Sweatshirts',
    type: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Soft Jersey',
    fabric: 'Cotton'
  },
  {
    id: '9',
    name: 'Zeroed In Linerless Short 7"',
    price: 68,
    image: 'https://ext.same-assets.com/1252540099/525845016.webp',
    colors: [
      { name: 'Burgundy', hex: '#955a44', image: 'https://ext.same-assets.com/1252540099/525845016.webp' },
      { name: 'Grey', hex: '#7a8586', image: 'https://ext.same-assets.com/1252540099/525845016.webp' },
      { name: 'Charcoal', hex: '#60544e', image: 'https://ext.same-assets.com/1252540099/525845016.webp' },
      { name: 'Navy', hex: '#37475f', image: 'https://ext.same-assets.com/1252540099/525845016.webp' },
      { name: 'Blue', hex: '#6592ba', image: 'https://ext.same-assets.com/1252540099/525845016.webp' }
    ],
    isBestGift: true,
    category: 'Shorts',
    type: 'Athletic Shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Zeroed In'
  },
  {
    id: '10',
    name: 'Zeroed In Linerless Short 5"',
    price: 68,
    image: 'https://ext.same-assets.com/1252540099/1019900752.webp',
    colors: [
      { name: 'Burgundy', hex: '#955a44', image: 'https://ext.same-assets.com/1252540099/1019900752.webp' },
      { name: 'Grey', hex: '#7a8586', image: 'https://ext.same-assets.com/1252540099/1019900752.webp' },
      { name: 'Charcoal', hex: '#60544e', image: 'https://ext.same-assets.com/1252540099/1019900752.webp' },
      { name: 'Navy', hex: '#303951', image: 'https://ext.same-assets.com/1252540099/1019900752.webp' },
      { name: 'Blue', hex: '#5d6f8b', image: 'https://ext.same-assets.com/1252540099/1019900752.webp' }
    ],
    isBestGift: true,
    category: 'Shorts',
    type: 'Athletic Shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Zeroed In'
  },
  {
    id: '11',
    name: 'Pace Breaker Linerless Short 7"',
    price: 68,
    image: 'https://ext.same-assets.com/1252540099/870939754.webp',
    colors: [
      { name: 'Blue', hex: '#6592ba', image: 'https://ext.same-assets.com/1252540099/870939754.webp' },
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/870939754.webp' },
      { name: 'Burgundy', hex: '#955a44', image: 'https://ext.same-assets.com/1252540099/870939754.webp' },
      { name: 'Grey', hex: '#cccbca', image: 'https://ext.same-assets.com/1252540099/870939754.webp' },
      { name: 'Yellow', hex: '#d4a542', image: 'https://ext.same-assets.com/1252540099/870939754.webp' }
    ],
    isBestGift: true,
    category: 'Shorts',
    type: 'Athletic Shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    collection: 'Pace Breaker'
  },
  {
    id: '12',
    name: "Men's Restfeel Slide",
    price: 58,
    image: 'https://ext.same-assets.com/1252540099/3656132488.webp',
    colors: [
      { name: 'Grey', hex: '#a2a09e', image: 'https://ext.same-assets.com/1252540099/3656132488.webp' },
      { name: 'Tan', hex: '#c9a29d', image: 'https://ext.same-assets.com/1252540099/3656132488.webp' },
      { name: 'Navy', hex: '#303951', image: 'https://ext.same-assets.com/1252540099/3656132488.webp' },
      { name: 'Black', hex: '#000000', image: 'https://ext.same-assets.com/1252540099/3656132488.webp' }
    ],
    isBestGift: true,
    category: 'Shoes',
    type: 'Slides',
    sizes: ['7', '8', '9', '10', '11', '12'],
    collection: 'Restfeel'
  }
]
