const prisma = require("../src/lib/prisma.js");
const bcrypt = require("bcryptjs");

async function main() {
  const email = "admin@system.local";

  const existing = await prisma.utilisateur.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("Admin existe déjà");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@123", 12);

  await prisma.utilisateur.create({
    data: {
      nom: "SYSTEM",
      prenom: "ADMIN",
      email,
      motdepasse: hashedPassword,
      role: "admin",
    },
  });

  console.log("Admin créé avec succès");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });