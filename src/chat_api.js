import axios from 'axios';

const BASE_URL = "https://finlit-test.store";

// Проверка наличия чата
export async function chatExists(chatName, kbId) {
    const url = `${BASE_URL}/api/v1/chat/list`;
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const chats = response.data;
            const chatsDict = Object.fromEntries(chats.map(chat => [[chat.name, chat.kb_id], chat]));
            const chat = chatsDict[[chatName, kbId]];

            if (chat) {
                return chat.id;
            } else {
                // Если чат не найден, создаем новый
                const newChat = await chatCreate(chatName, kbId);
                if (newChat) {
                    // После создания чата повторно вызываем chatExists для получения id
                    return await chatExists(chatName, kbId);
                }
            }
        }
    } catch (error) {
        console.error(`Ошибка запроса в chatExists: ${error.message}`);
        return null;
    }
}

// Функция для создания чата
export async function chatCreate(userName, kbId) {
    const url = `${BASE_URL}/api/v1/chat/create`;
    const headers = { 'accept': 'application/json', 'Content-Type': 'application/json' };
    const data = {
        name: userName,
        kb_id: kbId,
        m_settings: {
            temperature: 0.1,
            top_p: 0.3,
            max_tokens: 512,
            presence_penalty: 0.4,
            frequency_penalty: 0.7
        },
        prompt_engine: {
            rag_system: `
                Вы умный помощник.
                Пожалуйста, кратко изложите содержание базы знаний, чтобы ответить на вопрос.
                Пожалуйста, отвечайте без markdown-стилей. 
                Пожалуйста, укажите данные в базе знаний и ответьте подробно. 
                Если все содержимое базы знаний не имеет отношения к вопросу, ваш ответ должен включать предложение 
                «Ответ, который вы ищете, не найден в базе знаний!» 
                Ответы должны учитывать историю чата.
                Вот база знаний:

                {knowledge_base}
                Вышеуказанное является базой знаний.
            `,
            system: `
                Вы умный помощник.
                Пожалуйста, отвечайте только на русском языке.
                Ответы должны учитывать историю чата.
            `,
            threshold: 0.6,
            k: 10,
            user_rerank: true
        }
    };

    try {
        const response = await axios.post(url, data, { headers });
        if (response.status === 200) {
            return true; // Возвращаем информацию о созданном чате
        }
    } catch (error) {
        console.error(`Ошибка в chatCreate: ${error.message}`);
        return null;
    }
}

// Отправка запроса пользователя
export async function chatGenerate(chatId, content) {
    const url = `${BASE_URL}/api/v1/chat/generation?chat_id=${chatId}&use_rag=true&extract_keywords=true&stream=true`;
    const data = { role: "user", content };
    const headers = { 'accept': 'application/json', 'Content-Type': 'application/json' };

    try {
        const response = await axios.post(url, data, { headers });
        if (response.status === 200) {
            console.log('Получилось');
        }
    } catch (error) {
        console.error(`Ошибка в chatGenerate: ${error.message}`);
        return null;
    }
}

// Получение ответа
export async function getAnswer(chatId) {
    const url = `${BASE_URL}/api/v1/chat/message/list?chat_id=${chatId}`;
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const messages = response.data;
            for (let i = messages.length - 1; i >= 0; i--) {
                const message = messages[i];
                if (message.role === "assistant") {
                    let answer = message.content;
                    answer = answer.replaceAll('*','');
                    console.log(answer);
                    // Очищаем чат после получения ответа
                    await msgClear(chatId);
                    return answer;
                }
            }
        }
    } catch (error) {
        console.error(`Ошибка в getAnswer: ${error.message}`);
        return null;
    }
}

// Очистка чата
export async function msgClear(chatId) {
    const url = `${BASE_URL}/api/v1/chat/message/clear?chat_id=${chatId}`;
    const headers = { 'accept': 'application/json' };

    try {
        const response = await axios.post(url, {}, { headers });
        if (response.status === 200) {
            console.log("Чат успешно очищен.");
            return true;
        }
    } catch (error) {
        console.error(`Ошибка в msgClear: ${error.message}`);
        return false;
    }
}
