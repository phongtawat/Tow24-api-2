import { z } from "zod";

// ให้ export เฉพาะตัวนี้
export const vehicleSchema = z.object({
    plateNumber: z.string().min(1, "Plate Number is required").max(10),
    brand: z.string().min(1, "brand is required").max(255),
    model: z.string().min(1, "model is required").max(255),
    vehicleType: z.enum(["car", "MOTORCYCLE", "TRUCK", "VAN"]), // ❌ car/TRUCK/VAN
    status: z.enum(["AVAILABLE", "UNAVAILABLE", "MAINTENANCE"]),
    price: z.string()
    .min(1, "Price is required")
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >=0, {
        message: "Price must be a valid non-negative number",
    }),
    imgVehicles: z
    .array(z.url("Each image must br a valid URL")).optional(),
    cradleId: z.string().min(1, "cradle Id is required"),
});
export const schemaParamsVehicle = z.object({
    vehicleId: z.string().min(1, "vehicle Id is required"),
})