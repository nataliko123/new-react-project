export interface Products {
    id: number
    name: string
    price: number
    image: string
  }
  
export interface ProductWithQuantity extends Products {
  quantity: number
}