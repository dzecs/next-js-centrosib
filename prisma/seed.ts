import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const specializations = await prisma.specializaton.createMany({
    data: [
      {
        id: 1,
        specialization_name: "Odontología General",
      },
      {
        id: 2,
        specialization_name: "Ortodoncia",
      },
      {
        id: 3,
        specialization_name: "Implantes",
      },
      {
        id: 4,
        specialization_name: "Estética",
      },
    ],
    skipDuplicates: true,
  });

  const doctorRober = await prisma.doctor.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      first_name: "Roberto",
      last_name: "Rodriguez",
      professional_statement: "Un médico más",
      image_url: "../public/vercel.svg",
    },
  });
  const doctorSpecializations = await prisma.doctor_Specialization.createMany({
    data: [
      {
        doctorId: 1,
        specializationId: 3,
      },
      {
        doctorId: 1,
        specializationId: 1,
      },
    ],
    skipDuplicates: false,
  });
  console.log(doctorSpecializations.count);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
