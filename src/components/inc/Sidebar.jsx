
export default function Sidebar() {
    return (
        <>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/admin">
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/admin/user">
                        User
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/admin/settings">
                        Settings
                    </a>
                </li>
            </ul>
        </>
    );
}