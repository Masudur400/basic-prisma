// import { PrismaClient } from './generated/prisma'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // // Create/Insert data into DB
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Masudur Rahman",
  //     email: "masudur@ph.com",
  //     profilePhoto: "https://programing-hero.com/level2/jkr.png"
  //   }
  // })

  // console.log(result)

  // // Retrive all data from DB 
  // const usersData = await prisma.user.findMany()
  // console.log(usersData)

 // // Find a unique user by ID
  // const findUserById = await prisma.user.findUniqueOrThrow({
  //   where: {
  //     id: 2
  //   }
  // })
  // console.log(findUserById)


  // // Update user data by ID (only one user)
  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: 1
  //   },
  //   data: {
  //     name: "Rana",
  //     email: "rana@gmail.com"
  //   }
  // })

  // console.log(updatedUser)


  // // Update multiple users by condition
  // const updateProfilePhoto = await prisma.user.updateManyAndReturn({
  //   where: {
  //     // id: {
  //     //   gt: 2
  //     // }
  //     id:2
  //   },
  //   data: {
  //     profilePhoto: "https://programing-hero.com/level2/default-image.png"
  //   }
  // })
  // console.log(updateProfilePhoto)


  // // Delete multiple users by condition
  // const deleteUser = await prisma.user.deleteMany({
  //   where: {
  //     id: {
  //       lt: 3
  //     }
  //   }
  // })

  // console.log(deleteUser)

  // // Retrive all data from DB
  // console.log(await prisma.user.findMany())
}

main()