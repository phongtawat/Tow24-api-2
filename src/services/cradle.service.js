import prisma from "../libs/prisma.lib.js";

// export const createCradle = ({ vehicles,  ...data  }) => {
//   const cradleData = { ...data, };

//   if (vehicles && Array.isArray(vehicles) && vehicles.length > 0) {
//     const vehiclesToCreate = vehicles.map(vehicle => {
//       const { id, ...vehicleData } = vehicle;
//       return vehicleData;
//     });
//     cradleData.vehicles = {
//       create: vehiclesToCreate,
//     };
//   }

//   console.log("cradleData",cradleData.vehicles)


//   return prisma.cradle.create({
//     data: cradleData,
//     include: {
//       vehicles: true,
//     },
//   });
// };

export const createCradle = ({ vehicles, ...data }) => {
  console.log("vehicles", vehicles);
  return prisma.cradle.create({
    data: {
      ...data,
      vehicles: {
        create: vehicles, // สร้าง vehicles พร้อมกับ cradle
      },
    },
    include: {
      vehicles: true, // ส่งคืน vehicles ที่สร้างมาด้วย
    },
  });
};

export const findAllCradle = () => {
  return prisma.cradle.findMany();
};

export const findAllCradleByCradleId = (id) => {
  return prisma.cradle.findUnique({ where: { id } });
};

// 🟡 Update
export const updateCradle = (id, data) => {
  return prisma.cradle.update({
    where: { id },
    data,
  });
};

export const deleteCradle = (id) => {
  return prisma.cradle.delete({
    where: { id },
  });
};