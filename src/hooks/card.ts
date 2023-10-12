import { create } from 'zustand'

type Item = {
  id: string
  name: string
  price: number
  quantity: number
  pictureUrl: string
}

type CartStore = {
  cartList: Item[]
  addToCart: (item: Item) => void
  removeFromCart: (id: string) => void
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cartList: [],
    addToCart: (item) => {
      set((state) => {
        const existingItem = state.cartList.find(
          (cartItem) => cartItem.id === item.id,
        )
        if (existingItem) {
          return {
            cartList: state.cartList.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem,
            ),
          }
        }
        return { cartList: [...state.cartList, item] }
      })
    },
    removeFromCart: (id) =>
      set((state) => ({
        cartList: state.cartList.filter((item) => item.id !== id),
      })),
  }
})
