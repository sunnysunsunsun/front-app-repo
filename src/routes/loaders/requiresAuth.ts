import { redirect } from 'react-router'

export async function requireAuth({ request }: { request: Request }) {
  // 로그인 여부 확인
  const token = localStorage.getItem('token')
  if (token) return
  const url = new URL(request.url)
  const redirectTo = url.pathname + url.search
  return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
}
