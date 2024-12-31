const baseUrl = "https://api.adviceslip.com/advice";

const adviceId = document.querySelector(".advice-number");
const adviceTitle = document.querySelector(".advice-text");

async function getAdvice() {
  try {
    const response = await fetch(baseUrl);
    
    if (!response.ok) {
      adviceTitle.textContent = `Error fetching data: ${response.status}`;
    }
    const data = await response.json();
    const advice = data.slip;

    adviceId.textContent = `ADVICE #${advice.id}`;
    adviceTitle.textContent = advice.advice;
  } catch (error) {
    console.error("Error:", error);
    adviceTitle.textContent = "Error fetching data";
  }
}

getAdvice();

const generateNewAdvice = document.querySelector(".action-button");
generateNewAdvice.addEventListener("click", getAdvice);
