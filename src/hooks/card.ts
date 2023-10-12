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
  totalPrice: number
  deliveryPrice: number
  addToCart: (item: Item) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cartList: [],
    totalPrice: 0,
    deliveryPrice: 10,
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
            totalPrice: state.totalPrice + item.price * item.quantity,
          }
        }
        return {
          cartList: [...state.cartList, item],
          totalPrice: state.totalPrice + item.price * item.quantity,
        }
      })
    },
    removeFromCart: (id) =>
      set((state) => {
        const itemToRemove = state.cartList.find(
          (cartItem) => cartItem.id === id,
        )

        if (!itemToRemove) return { ...state }

        const updatedCartList = state.cartList.filter((item) => item.id !== id)
        const totalPrice =
          state.totalPrice - itemToRemove.price * itemToRemove.quantity

        return {
          ...state,
          cartList: updatedCartList,
          totalPrice,
        }
      }),
    updateQuantity: (id, quantity) =>
      set((state) => {
        const cartItemIndex = state.cartList.findIndex(
          (cartItem) => cartItem.id === id,
        )

        if (cartItemIndex !== -1) {
          state.cartList[cartItemIndex].quantity = Math.max(1, quantity)
        }

        const newTotalPrice = state.cartList.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        )

        return { cartList: [...state.cartList], totalPrice: newTotalPrice }
      }),
  }
})
