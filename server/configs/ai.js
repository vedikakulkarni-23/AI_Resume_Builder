import OpenAI from "openai"

const ai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
})

export default ai 