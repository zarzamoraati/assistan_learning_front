import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
        <div >
            <Outlet/>
        </div>
    </div>
  )
}
