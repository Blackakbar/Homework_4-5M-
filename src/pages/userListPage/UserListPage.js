import React from "react";
import { useSelector } from "react-redux";

export default function UsersListPage() {
    const users = useSelector((state) => state.usersReducer.users)

    return(
        <div>
            <h1>User List</h1>
            {users?.map((user) =>
                <div key={user} className="users_item">
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    )
}