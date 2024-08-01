"use client"

import { getUserById } from "@/lib/api"
import { IUser } from "@/lib/types"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Props{
    params: {id:string}
}
export default function Page({params}:Props){


    const [user, setUser] = useState<IUser>()

    const router = useRouter()

    const handleUpdate = () => {
        axios
        .put("/users/"+params.id, {name:"OK"})
        .then(res => {
            router.push("/users/"+params.id + "/details/update/page")
            
        })
    }

    useEffect(() => {
        axios
        .get("/users")
        .then(res => {
            console.log(res.data)
            setUser(res.data.user)
        })
    }, [])
    return <>
        <h3>User Details No. {params.id}</h3>
        <p>{user?.name} {user?.surname}</p>
        <strong>{user?.salary}</strong> 
        <button onClick={handleUpdate}>Update</button>
    </>
}