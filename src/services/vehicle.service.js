import prisma from "../libs/prisma.lib.js";

export const createVehicle = (data) => {
  return prisma.vehicle.create({ data });
};

export const findAllVehicle = () => {
  return prisma.vehicle.findMany();
};

export const findAllVehicleByCradleId = (id) => {
  return prisma.vehicle.findMany({ where: { cradleId: id } });
};

export const updateVehicle = (id, data) => {
  return prisma.vehicle.update({
    where: { id },
    data,
  });
};

export const deleteVehicle = (id) => {
  return prisma.vehicle.delete({
    where: { id },
  });
};