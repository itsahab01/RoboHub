import { usersData } from "../data/user";

function UserPage() {

    return (
        <div className="main-content">
            <h2>Users</h2>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>region</th>
                    </tr>
                </thead>

                <tbody>
                    {usersData.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserPage;
