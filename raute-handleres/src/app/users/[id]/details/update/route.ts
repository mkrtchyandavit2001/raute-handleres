import { updateUser } from "@/lib/api"
import { IUser } from "@/lib/types"

export const POST = async (req:Request) => {

    const data = await req.json() as IUser
    const result = updateUser(data)

    if(result){
        return Response.json({status:'ok'})
    }else{
        return Response.json({status:'error'})
    }
}