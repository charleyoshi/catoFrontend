import { useEffect, useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Account() {
  const { user } = useAuthContext()
  const { login, error, isLoading } = useLogin()
  const { logout } = useLogout()
  const [open, setOpen] = useState(false)

  const handleCredentialResponse = async (response) => {
    const IDtoken = response.credential
    await login(IDtoken)
    document.getElementById('signin').hidden = true
  }

  useEffect(() => {

    /* global google */
    google.accounts.id.initialize({
      client_id: '81267985240-09qcr5ug991sq0hrs5saeiibq1b6f85q.apps.googleusercontent.com',
      auto_select: true,
      callback: handleCredentialResponse,
    });
    // Note: client_id has restricted access to specific JavaScript origins in the whitelist

    google.accounts.id.renderButton(document.getElementById('signin'), { theme: "filled_white" })

    setOpen(false)
  }, [user])

  return (
    <div className='account'>
      {user &&
        (
          <div className='userContainer'>

            <div className="top" onClick={() => setOpen(!open)}>
              <div className="user">
                <div className="userCircle">
                  <img referrerPolicy="no-referrer" src={user.imageURL} alt="userImage" width={40} height={40} />
                </div>
                <div className="name">
                  <span>{user.firstName}&nbsp;{user.lastName}</span>
                </div>

              </div>
              {!open
                ? <span className="material-symbols-rounded">expand_more</span>
                : <span className="material-symbols-rounded">expand_less</span>}
            </div>

            {open &&
              <div className="bottom">
                <div className="logoutDiv" onClick={logout}>
                  <span className="material-symbols-rounded">power_settings_new</span>
                  <span>Sign Out</span>
                </div>

              </div>
            }

          </div >
        )
      }

      {!user &&
        (
          <div className='guest'>
            <div id="signin"></div>
            {error && <div className="error">{error}</div>}
          </div>
        )
      }


    </div>
  )
}
