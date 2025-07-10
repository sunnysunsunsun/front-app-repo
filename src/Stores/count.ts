import { create } from 'zustand'
import { combine, subscribeWithSelector, persist } from 'zustand/middleware'

export const useCountStore = create(
  persist(
    subscribeWithSelector(
      combine({ count: 0, double: 0 }, set => ({
        increase: () => {
          set(({ count }) => ({ count: count + 1 }))
        },
        decrease: () => {
          set(({ count }) => ({ count: count - 1 }))
        }
      }))
    ),
    { name: 'countStore', version: 0 }
  )
)

useCountStore.subscribe(
  state => state.count,
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
