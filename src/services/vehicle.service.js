import prisma from "../libs/prisma.lib.js";

export const createVehicle = (data) => {
  return prisma.cradle.create({ data });
};

export const findAllVehicle = () => {
  return prisma.cradle.findMany();
};

export const findAllVehicleByCradleId = (id) => {
  return prisma.cradle.findUnique({ where: { id } });
};

export const updateVehicle = (id, data) => {
  return prisma.cradle.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteVehicle = (id) => {
  return prisma.cradle.delete({
    where: { id: Number(id) },
  });
};