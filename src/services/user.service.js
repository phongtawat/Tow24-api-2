import prisma from "../libs/prisma.lib.js"

export const findUserByMobile = (mobile) => {
    return prisma.user.findUnique({
        where: { mobile },
       
    });
};

export const createUser = (data) => {
    console.log('createUser',data)
    return prisma.user.create({
        data:  data
    });

};

export const findUserById = (id) => {
    return prisma.user.findUnique({
        where: { id }
    });
};

export const updateUser = (id, data) => {
    return prisma.user.update({
        where: {id},
        data: data
    });

};