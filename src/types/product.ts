export interface Product {
  id: string
  name: string
  subtitle?: string
  price: number
  image: string
  colors: ProductColor[]
  isBestGift?: boolean
  category: string
  type: string
  sizes: string[]
  fit?: string
  collection?: string
  fabric?: string
}

export interface ProductColor {
  name: string
  hex: string
  image: string
}

export interface FilterOption {
  label: string
  value: string
  count?: number
}

export interface FilterCategory {
  id: string
  title: string
  options: FilterOption[]
  isExpanded: boolean
}
