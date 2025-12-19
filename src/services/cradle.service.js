import prisma from "../libs/prisma.lib.js";

export const createCradle = ({ vehicles, userId, ...data  }) => {
  const cradleData = { ...data,
    userId: String(userId) };

  if (vehicles && Array.isArray(vehicles) && vehicles.length > 0) {
    const vehiclesToCreate = vehicles.map(vehicle => {
      const { id, ...vehicleData } = vehicle;
      return vehicleData;
    });
    cradleData.vehicles = {
      create: vehiclesToCreate,
    };
  }

  return prisma.cradle.create({
    data: cradleData,
    include: {
      vehicles: true,
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