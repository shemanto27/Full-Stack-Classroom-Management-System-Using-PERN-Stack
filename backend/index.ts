import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const JOKES_DATA = 
[
  { id: 1, text: "Why do programmers prefer dark mode? Because light attracts bugs!" },
  { id: 2, text: "How many programmers does it take to change a light bulb? None, that's a hardware problem." },
  { id: 3, text: "Why did the developer go broke? Because he used up all his cache!" },
  { id: 4, text: "What's a programmer's favorite hangout place? Foo Bar." },
  { id: 5, text: "Why do Java developers wear glasses? Because they don't C#." }
];

app.get('/', (req, res) => {
  res.send('Hello, UniManage Backend is running!');
});

app.get('/api/jokes', (req, res)=>{
  res.json(JOKES_DATA);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});