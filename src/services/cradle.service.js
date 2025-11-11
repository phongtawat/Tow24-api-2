import prisma from "../libs/prisma.lid.js";

export const createCradle = (data) => {
  return prisma.cradle.create({ data });
};

export const findAllCradle = () => {
  return prisma.cradle.findMany();
};

export const findAllCradleByCradleId = (id) => {
  return prisma.cradle.findUnique({ where: { id } });
};
