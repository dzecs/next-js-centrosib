import  { prisma }  from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function getUsers(req: NextApiRequest, res:NextApiResponse) {
    if (req.method === 'GET') {
        const users = await prisma.user.findMany({
            select: {
                username: true,
                email: true
            }
        })
        res.json(users)
    } else if (req.method === 'POST') {
        const user = await prisma.user.create({
            data: {
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
            }
          })
          res.json(user)
    } else  {
        console.log('Could not be created')
    }
}

export default getUsers;