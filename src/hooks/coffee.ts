import { useQuery } from '@tanstack/react-query'
import coffeeList from '../api/coffeeList.json'

export const useGetCoffee = () => {
  const fetchCoffeeList = async () => {
    return coffeeList.data
  }

  return useQuery(['coffees'], () => fetchCoffeeList(), {})
}
