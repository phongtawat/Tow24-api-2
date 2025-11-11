import prisma from "../libs/prisma.lid.js"

export const findUserByMobile = (mobile) => {
    return prisma.user.findUnique({
        where: { mobile },
        omit: { password: true},
    });

};

export const createUser = (data) => {
    return prisma.user.create({
        data: { data },
        omit: { password: true},
    });

};