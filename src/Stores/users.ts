import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  immer(
    combine(
      {
        user: {
          name: 'Neo',
          age: 22,
          address: {
            city: 'seoul',
            country: 'Korea',
            emails: ['neo@gmail.com', 'neo@Naver.com']
          }
        }
      },
      set => {
        return {
          changeFirstEmail: (email: string) => {
            set(state => {
              state.user.address.emails[0] = email
            })
          }
        }
      }
    )
  )
)
