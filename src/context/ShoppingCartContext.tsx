import { ReactNode, createContext, useContext } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({})

export default function useShoppingCart() {
    return (
        useContext(ShoppingCartContext)
    )
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
