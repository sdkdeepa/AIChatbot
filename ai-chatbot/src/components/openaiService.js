import axios from 'axios';

const apiKey = "process.env.API_KEY";

if (!apiKey) {
  throw new Error('Missing OpenAI API key. Please check if the API is correct');
}

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
});

export const getChatbotResponse = async (prompt) => {
  try {
    const response = await openai.post('/chat/completions', {
      model: 'gpt-3.5-turbo', // Change to the desired model
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
    });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    throw error;
  }
};
