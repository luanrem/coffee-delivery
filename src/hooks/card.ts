import { create } from 'zustand'

export type Item = {
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
  updateQuantity: (id: string, quantity: number) => void
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
    updateQuantity: (id, quantity) =>
      set((state) => {
        const cartItemIndex = state.cartList.findIndex(
          (cartItem) => cartItem.id === id,
        )

        if (cartItemIndex !== -1) {
          state.cartList[cartItemIndex].quantity = Math.max(1, quantity)
        }

        return { cartList: [...state.cartList] }
      }),
  }
})
