// src/context/CartContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode, useCallback } from 'react'
import { products } from '@/data/products'

type CartItem = {
  productId: number
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  addToCart: (productId: number, quantity: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  removeFromCart: (productId: number) => void
  getSubtotal: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const addToCart = useCallback((productId: number, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.productId === productId)
      if (existingItem) {
        return prevItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevItems, { productId, quantity }]
    })
  }, [])

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity <= 0) {
        return prevItems.filter(item => item.productId !== productId)
      }
      return prevItems.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    })
  }, [])

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.productId !== productId)
    )
  }, [])

  const getSubtotal = useCallback(() => {
    const total = cartItems.reduce((acc, item) => {
      const product = products.find(p => p.id === item.productId)
      return product ? acc + (parseFloat(product.price.replace(/,/g, '')) * item.quantity) : acc
    }, 0)

    return total.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
    }).replace(/^/, 'Rs ')
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        getSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}