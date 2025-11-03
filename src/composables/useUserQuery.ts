import { useQuery } from '@tanstack/vue-query'

interface User {
  id: number
  name: string
}

const fetchUser = async (): Promise<User> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  if (!response.ok) throw new Error('Falha na requisição')
  return response.json()
}

export const useUserQuery = () => {
  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: fetchUser
  })
}
