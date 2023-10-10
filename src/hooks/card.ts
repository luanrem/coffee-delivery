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
    addToCart: (item) => {
      set((state) => {
        const existingItem = state.cart.find(
          (cartItem) => cartItem.id === item.id,
        )
        if (existingItem) {
          return {
            cart: state.cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem,
            ),
          }
        }
        return { cart: [...state.cart, item] }
      })
    },
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  }
})
