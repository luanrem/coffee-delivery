import { create } from 'zustand'

type Item = {
  id: string
  name: string
  price: number
  quantity: number
}

type CartStore = {
  cart: Item[]
  addToCart: (item: Item) => void
  removeFromCart: (id: string) => void
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  }
})
