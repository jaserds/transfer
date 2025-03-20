import { NextRequest, NextResponse } from "next/server";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export async function POST(req: NextRequest) {
    try {
        // Получаем данные из тела запроса
        const { name, phone, message } = await req.json();

        // Формируем текст сообщения для Telegram
        const text = `📩 *Вопрос от клиента!* \n👤 Имя: ${name} \n📞 Телефон: ${phone} \n📝 Сообщение: ${message}`;

        // Отправляем запрос в Telegram API
        const response = await fetch(TELEGRAM_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: "Markdown", // Используем Markdown для форматирования текста
            }),
        });

        // Получаем результат из Telegram API
        const result = await response.json();

        if (!result.ok) {
            throw new Error("Error while sending the request to Telegram");
        }

        return NextResponse.json({ success: true, message: "Request successfully submitted!" });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, message: "Error while submitting the request" }, { status: 500 });
    }
}
