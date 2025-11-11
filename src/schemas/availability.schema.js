import {  z } from "zod"

export const availabilitySchema = z.object({
    vehicleType:z.enum(["car", "MOTORCYCLE", "TRUCK", "VAN"]),
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

    dateTime: z
    .string()
    .min(1, "DateTime is required")
    .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format, must be ISO date string",
    })
    .transform((val) => new Date(val)),

    expenses: z
    .string()
    .transform((val) => (val === "" ? null : parseFloat(val)))
    .nullable()
    .refine(
        (val) => val === null || (!isNaN(val) && val >= 0),
        "Expenses must br a non-negative number"
    ),

    statusPayment: z.enum(["PENDING","PAID", "CANCELLED"]),
    status: z.enum(["PENDING", "APPROVED", "IN_USE", "COMPLETED", "CANCELLED"]),
    vehicleId: z.string(),
    cradleId: z.string(),
});

export const schemaParamsAvailability = z.object({
    availabilityId: z.string().min(1, "availability id is required")
})