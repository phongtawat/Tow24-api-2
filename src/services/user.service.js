import prisma from "../libs/prisma.lib.js"

export const findUserByMobile = (mobile) => {
    return prisma.user.findUnique({
        where: { mobile },
        omit: { password: true},
    });
};

export const createUser = (data) => {
    console.log('createUser',data)
    return prisma.user.create({
        data:  data ,
        omit: { password: true},
    });

};

export const findUserById = (id) => {
    return prisma.user.findUnique({
        where: { id },
        omit: { password: true},
    });
};

export const updateUser = (id, data) => {
    return prisma.user.create({
        where: {id},
        data: { data },
        omit: { password: true},
    });

};