import prisma from "../libs/prisma.lib.js";

export const createReview = (data) => {
  return prisma.review.create({ data });
};

export const findAllReviews = () => {
  return prisma.review.findMany();
};

export const updateReview = (id, data) => {
  return prisma.review.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteReview = (id) => {
  return prisma.review.delete({
    where: { id: Number(id) },
  });
};