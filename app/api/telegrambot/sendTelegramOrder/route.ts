import { NextRequest, NextResponse } from "next/server";

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export async function POST(req: NextRequest) {
    try {
        const {
            name,
            inRoute,
            toRoute,
            selectedDate,
            selectedTime,
            selectedBackDate,
            selectedBackTime,
            personName,
            personPhone,
            personEmail,
            count,
            qtyBags,
            isChecked,
            isOnOutTransfer,
            comment,
            price
        } = await req.json();

        console.log(name,
            inRoute,
            toRoute,
            selectedDate,
            selectedTime,
            selectedBackDate,
            selectedBackTime,
            personName,
            personPhone,
            personEmail,
            count,
            qtyBags,
            isChecked,
            isOnOutTransfer,
            comment,
            price);


        const text = `📩 *Новая заявка! ${name}* 
        🚗 Пункт отправления: *${inRoute}*
        🚗 Пункт назначения: *${toRoute}*
        🏁 Дата поездки: *${selectedDate || "не указано"}*  
        ⏰ Время: *${selectedTime || "не указано"} * 
        
        🔄 Обратная поездка: *${isOnOutTransfer ? "Да" : "Нет"}*
        ${isOnOutTransfer ?
                `🚗 Дата обратной поездки: *${selectedBackDate || "не указано"}*
        ⏳ Время обратной поездки: *${selectedBackTime || "не указано"}*` : ""}
        
        👤 Имя: *${personName}*
        📞 Телефон: *${personPhone}*  
        📧 Email: *${personEmail}*  
        👥 Количество пассажиров: *${count}*
        👜 Количество багажа: *${qtyBags}*
        💬 Комментарий: *${comment || "нет"}*
        📡 Нужно что бы связались с клиентом?: *${isChecked ? "Да" : "Нет"}*
        📌 Цена: *${price}*`;

        const response = await fetch(TELEGRAM_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: "Markdown",
            }),
        });

        const result = await response.json();

        if (!result.ok) {
            throw new Error("Error while submitting the request to Telegram");
        }

        return NextResponse.json({ success: true, message: "Request successfully submitted!" });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, message: "Error while submitting the request" }, { status: 500 });
    }
}
