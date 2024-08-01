import { getUserById } from "@/lib/api"

export const PUT = async (req:Request, {params}:{params:{id:number}}) => {
    const result = await req.json()
    return Response.json({
        result, params
    })
}

export const GET  = async (req:Response) => {
    const data = await req.json()
    const user = getUserById(data)
}