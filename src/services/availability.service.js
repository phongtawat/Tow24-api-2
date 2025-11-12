import prisma from "../libs/prisma.lib.js";

export const createAvailability = (data) => {
  return prisma.cradle.create({ data });
};

export const findAllAvailability = () => {
  return prisma.cradle.findMany();
};

export const findAllAvailabilityByCradleId = (id) => {
  return prisma.cradle.findUnique({ where: { id } });
};

export const updateAvailability = (id, data) => {
  return prisma.cradle.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteAvailability = (id) => {
  return prisma.cradle.delete({
    where: { id: Number(id) },
  });
};