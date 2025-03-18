import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import crypto from "crypto";


export async function POST(req: Request) {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
        api_key: process.env.CLOUDINARY_API_KEY!,
        api_secret: process.env.CLOUDINARY_API_SECRET!,
    });

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // Преобразуем файл в base64 для загрузки
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;
        const uniqueId = crypto.randomUUID();

        // Загружаем в Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(base64Image, {
            folder: "uploads",
            public_id: `${Date.now()}-${uniqueId}`, // Уникальное имя файла
        });

        return NextResponse.json({ imageUrl: uploadResponse.secure_url });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}