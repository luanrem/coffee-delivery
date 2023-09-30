import { useQuery } from '@tanstack/react-query'
import coffeeList from '../api/coffeeList.json'

export const useGetCoffee = () => {
  const fetchCoffeeList = async () => {
    console.log(coffeeList)
    return coffeeList.data
  }

  return useQuery(['coffees'], () => fetchCoffeeList(), {})
}
