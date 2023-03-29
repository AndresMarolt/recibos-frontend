import { Routes, Route, Link } from "react-router-dom";
import LandlordsPage from "../Pages/LandlordsPage/LandlordsPage";
import TenantsPage from "../Pages/TenantsPage/TenantsPage";
import "./AdminLayout.css"

const AdminLayout = () => {
    return (
        <div >
            <header className="admin-header">
                <h4 className="text-light p-3 m-0"><Link className="text-decoration-none text-light" to={"/"}>Home</Link></h4>
            </header>

            <main className="d-flex admin-content">
                <section className="sidebar col-2 pt-5">
                    <ul className="list-unstyled text-center fw-bold d-flex flex-column gap-4">
                        <li className="py-2">
                            <Link to={`/admin/inquilinos`} className="admin-link text-decoration-none p-2">Inquilinos</Link>
                        </li>

                        <li className="py-2">
                            <Link to={`/admin/propietarios`} className="admin-link text-decoration-none p-2">Propietarios</Link>
                        </li>
                    </ul>
                </section>

                <section className="content col-10">
                    <div className="p-4">
                        <Routes>
                            {/* <Route path="/" element={<div></div>} /> */}
                            <Route path="/inquilinos" element={<TenantsPage/>} />
                            <Route path="/propietarios" element={<LandlordsPage/>} />
                            <Route path="/*" element={<div></div>}/>
                        </Routes>
                    </div>
                </section>
            </main>

            <footer className="admin-footer">
                <h6 className="text-light p-3 m-0">Admin</h6>
            </footer>

        </div>
    )
}

export default AdminLayout;