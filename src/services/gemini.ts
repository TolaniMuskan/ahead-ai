const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function analyzeGoal(goal: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json",
        },
        contents: [
          {
            parts: [
              {
                text: `
You are AHEAD, an AI Future Decision Simulator.

The user's goal is:

${goal}

Do NOT simply create a schedule.

Simulate the likely outcomes of different choices.

Return ONLY valid JSON in this exact format:

{
  "recommendedPlan": {
    "title": "",
    "summary": "",
    "successProbability": 0,
    "stress": "",
    "risk": ""
  },

  "futureIfCompleted": [
    "",
    "",
    "",
    ""
  ],

  "futureIfDelayed": [
    "",
    "",
    "",
    ""
  ],

  "timeline": [
    {
      "time": "",
      "task": ""
    }
  ],

  "recoveryPlan": [
    "",
    "",
    ""
  ],

  "rippleEffect": [
    "",
    "",
    "",
    "",
    ""
  ],

  "geminiInsight": ""
}

Rules:

- Never guarantee the future.
- Describe likely outcomes.
- Keep every point short.
- Give practical recovery advice.
- Make the ripple effect logical.
- Write in clear, simple English.
`
              }
            ]
          }
        ]
      })
    }
  );

  if (!response.ok) {
    throw new Error("Gemini request failed");
  }

  const data = await response.json();

  return JSON.parse(
    data.candidates[0].content.parts[0].text
  );
}