document.addEventListener('DOMContentLoaded', () => {
    // --- FAQ Interaction ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class on question for arrow rotation
            question.classList.toggle('active');
            // Toggle visibility of the answer
            const answer = question.nextElementSibling;
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
            } else {
                answer.classList.add('show');
            }
        });
    });

    // --- AI Chat Interaction ---
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatDisplay = document.getElementById('chat-display');

    sendBtn.addEventListener('click', sendMessage);
    // Allow sending message with Enter key
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }
    
    function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') return;

        // Display user message
        const userMessageDiv = document.createElement('p');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.innerText = messageText;
        chatDisplay.appendChild(userMessageDiv);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom

        userInput.value = ''; // Clear input

        // Simulate AI response (this is where you'd integrate a real AI API)
        setTimeout(() => {
            const aiResponseDiv = document.createElement('p');
            aiResponseDiv.classList.add('ai-message');
            aiResponseDiv.innerText = getAIResponse(messageText);
            chatDisplay.appendChild(aiResponseDiv);
            chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom
        }, 800); // Simulate network delay
    }

    function getAIResponse(query) {
        query = query.toLowerCase();
        if (query.includes("وزن") || query.includes("تخسيس") || query.includes("دايت")) {
            return "الـ AI بيقولك: نعم، التمارين دي بتساعد في حرق الدهون وشد العضلات. ركز كمان على نظام غذائي صحي وقلل السكريات والنشويات!";
        } else if (query.includes("تمرين ضهر")) {
            return "الـ AI بيقولك: لتمرين الظهر (W)، ركز على عصر لوحي الكتف للخلف والأسفل. كأنك بتحاول تمسك قلم بين كتافك!";
        } else if (query.includes("بلانك")) {
            return "الـ AI بيقولك: في البلانك، حافظ على جسمك مستقيم زي اللوح الخشبي. بطنك مشدودة وماتخليش وسطك ينزل أو يطلع زيادة.";
        } else if (query.includes("سكوات")) {
            return "الـ AI بيقولك: في السكوات، لازم ظهرك يكون مفرود ووزنك على كعب رجلك. كأنك بتقعد على كرسي وهمي.";
        } else if (query.includes("رفع رجلين")) {
            return "الـ AI بيقولك: لتمرين رفع الرجلين، انزل برجليك ببطء شديد وقبل ما تلمس الأرض ارجع ارفعهم تاني عشان تحس بالعضلة صح.";
        } else if (query.includes("مياه") || query.includes("شرب")) {
            return "الـ AI بيقولك: شرب المياه ضروري جداً! بيساعد على الحرق، طرد السموم، وبيخليك نشيط. 3 لتر يومياً ممتازين!";
        } else if (query.includes("نوم")) {
            return "الـ AI بيقولك: النوم الكافي مهم لتعافي العضلات ونزول الوزن. نام 7-8 ساعات بدري عشان جسمك يستفيد.";
        } else {
            return "الـ AI بيقولك: سؤال رائع! استمر في التزامك وهتلاقي نتائج مبهرة في الـ 23 يوم.";
        }
    }
});
