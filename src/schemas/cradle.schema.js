import { z } from "zod";

// 1. Vehicle Schema (สำหรับรถในสังกัดอู่)
// ชื่อฟิลด์ตรงกับ State ใน CradleForm.jsx เป๊ะๆ
const vehicleSchema = z.object({
  // 💥 แก้ไขจุดนี้: ต้องใช้ vehicleType เท่านั้น ห้ามใช้ type 💥
  vehicleType: z.enum(["SLIDE", "TOW"], {
    errorMap: () => ({ message: "Vehicle type must be SLIDE or TOW" }),
  }),
  
  plateNumber: z.string().min(1, "Plate number is required"),
  plateProvince: z.string().min(1, "Plate province is required"),
  brand: z.string().min(1, "Vehicle brand is required"),
  model: z.string().min(1, "Vehicle model is required"),
  id: z.number().optional(),  
});

// 2. Cradle Schema (ฟอร์มหลัก)import { useState } from 'react';

function CradleForm() {
  const [formData, setFormData] = useState({
    // --- Fields from cradleSchema ---
    nameCradle: '',
    branch: '', // optional, สามารถเป็นค่าว่างได้
    province: '',
    district: '',
    subDistrict: '',
    latitude: 0,  // ต้องเป็น Number
    longitude: 0, // ต้องเป็น Number
    img: '',      // optional
    status: 'ACTIVE', // optional, แต่ถ้ามีต้องเป็น 'ACTIVE' หรือ 'INACTIVE'
    
    // --- Field for vehicles (Array of Objects) ---
    vehicles: [
      // --- Fields from vehicleSchema ---
      {
        vehicleType: 'SLIDE', // 💥 สำคัญมาก: ต้องใช้ "vehicleType" ไม่ใช่ "type"
        plateNumber: '1กข1234',
        plateProvince: 'กรุงเทพมหานคร', // ชื่อฟิลด์ต้องเป็น plateProvince
        brand: 'Toyota',
        model: 'Revo',
      },
      // ...สามารถมีรถคันอื่น ๆ เพิ่มใน array นี้ได้
    ],
  });

  // ...โค้ดส่วนอื่น ๆ ของฟอร์ม
}

export const cradleSchema = z.object({
  nameCradle: z.string().min(1, "Name cradle is required").max(255),
  branch: z.string().optional(),
  province: z.string().min(1, "Province is required").max(255),
  district: z.string().min(1, "District is required").max(255),
  subDistrict: z.string().min(1, "Sub-district is required").max(255),

  // พิกัด
  latitude: z
    .number({
      required_error: "Latitude is required",
      invalid_type_error: "Latitude must be a number",
    })
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90"),

  longitude: z
    .number({
      required_error: "Longitude is required",
      invalid_type_error: "Longitude must be a number",
    })
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180"),

  // รูปภาพ
  img: z.string().optional(),

  // สถานะ
  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),

  // User ID
  userId: z.string().optional(),

  // รายการรถ (Array) ใช้ Schema ด้านบน
  vehicles: z.array(vehicleSchema).optional(),
});

// 3. Params Schema (สำหรับตรวจสอบ ID ใน URL)
export const schemaParamsCradle = z.object({
  cradleId: z.string().min(1, "cradle Id is required"),
});
