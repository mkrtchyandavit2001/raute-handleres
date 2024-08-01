"use client"

import { IUser } from "@/lib/types"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {

    const [user, setUser] = useState<IUser>()


    const router = useRouter()

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        axios
        .post("/users", setUser)
        .then(res => {
            router.push("/")
        })
    }
    return <>
        <h1>Update</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                value={user?.name}
                onChange={e => setUser({user, name:e.target.value})}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={user?.surname}
                    onChange={e => setUser({user, surname:e.target.value})}
                />
            </div>
            <div>
                <input
                    type="number"
                    step={15000}
                    value={user?.salary}
                    onChange={e => setUser({user, salary: +e.target.value})}
                />
            </div>
            <button>save</button>
        </form>
    </>
}