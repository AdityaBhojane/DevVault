import dotenv from 'dotenv';
dotenv.config();

export const USER_SECRET=process.env.USER_SECRET || "";
export const ADMIN_SECRET=process.env.ADMIN_SECRET || "";
export const TEACHER_SECRET=process.env.TEACHER_SECRET || "";
export const CLOUD_NAME=process.env.CLOUD_NAME || "";
export const CLOUD_API_KEY=process.env.CLOUD_API_KEY || "";
export const CLOUD_API_SECRET=process.env.CLOUD_NAME || "";
export const RZP_ID=process.env.RZP_ID;
export const RZP_KEY=process.env.RZP_KEY;