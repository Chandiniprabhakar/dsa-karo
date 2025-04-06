import './App.css'
import { useEffect } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { userAtom } from './store/atoms/user'
import { Signin } from './components/Signin'
import { Topbar } from './components/Topbar'
import { Card } from './components/Card'
import { account } from './appwriteConfig'

function App() {
  return (
    <RecoilRoot>
      <StoreApp />
    </RecoilRoot>
  )
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom)

  useEffect(() => {
    // ✅ Check session with Appwrite
    async function fetchUser() {
      try {
        const userData = await account.get()
        setUser({
          loading: false,
          user: {
            email: userData.email
          }
        })
      } catch (error) {
        setUser({
          loading: false
        })
        console.log('Not logged in')
      }
    }

    fetchUser()
  }, [])

  if (user.loading) {
    return <div>loading...</div>
  }

  if (!user.user) {
    return <Signin />
  }

  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full bg-black align-center px-5 pb-5 pt-8">
        <Topbar />
        <Card>hi there</Card>
      </div>
    </div>
  )
}

export default App
