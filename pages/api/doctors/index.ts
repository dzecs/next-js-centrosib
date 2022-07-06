import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const doctors = await prisma.doctor.findMany({
        select: {
          id: true,
          first_name: true,
          last_name: true,
          professional_statement: true,
          image_url: true,
          specializations: {
            select: {
              specialization: {
                select: {
                  id: true,
                  specialization_name: true,
                },
              },
            },
          },
        },
      });
      const result = doctors.map((doctor) => {
        return {
          ...doctor,
          specializations: doctor.specializations.map(
            (specialization) => specialization.specialization
          ),
        };
      });
      res.json({ doctors: result });
  }
}

export default getUsers;
