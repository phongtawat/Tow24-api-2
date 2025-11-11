import { z } from "zod";

export const cradleSchema = z.object({
    nameCradle:z.string().min(1, "Name cradle is require").max(255),
    branch:z.string().min(1, "branch is require").max(255),
    province:z.string().min(1, "province is require").max(255),
    district:z.string().min(1, "district is require").max(255),
    subDistrict:z.string().min(1, "subDistrict is require").max(255),
    
    latitude: z
    .string()
    .min(1, "latitude is required")
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= -90 && val <= 90, {
        message: "latitude must be between -90 and 90",
    }),

    longitude: z
    .string()
    .min(1, "longitude is required")
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= -180 && val <= 180, {
        message: "longitude must be between -90 and 90",
    }),

    img:z.url(),
})

export const schemaParamsCradle = z.object({
    cradleId: z.string().min(1, "cradle Id is required"),
})