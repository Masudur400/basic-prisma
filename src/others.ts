import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function others() {
    // Insert multiple users
    const insertUsers = await prisma.user.createMany({
        data: [
            {
                name: "Mir",
                email: "mir@ph.com"
            },
            {
                name: "Tanmoy",
                email: "tanmoy@ph.com"
            },
            {
                name: "Mizan",
                email: "mizan@ph.com"
            },
            {
                name: "Imun",
                email: "imun@ph.com"
            }
        ]
    });

    console.log(insertUsers)


    // Filtered data retrive by condition with sorting
    const users = await prisma.user.findMany({
        where: {
            email: {
                contains: "ph.com",
                mode: "insensitive" // case insensitive.
            }
        },
        orderBy: {
            name: 'asc'
        }
    })
    console.log(users)
}

others()