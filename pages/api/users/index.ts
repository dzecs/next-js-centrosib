import  { prisma }  from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function getUsers(req: NextApiRequest, res:NextApiResponse) {
    if (req.method === 'GET') {
        const users = await prisma.user.findMany()
        res.json(users)
    } else  {
        console.log('Could not be created')
    }
}

export default getUsers;