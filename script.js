// بيانات التمارين مع الصور (تقدر تغير الروابط لصور حقيقية)
const exercisesData = [
    { name: "تمرين ضهر (W)", duration: 45, info: "بيخلي ضهرك مفرود زي الأبطال", img: "🧗‍♂️" },
    { name: "تمرين البلانك", duration: 30, info: "سر البطن الحديدية", img: "🧘‍♂️" },
    { name: "تمرين السكوات", duration: 45, info: "رجلين قوية يعني حرق أسرع", img: "🦵" },
    { name: "تمرين رفع الرجلين", duration: 40, info: "وداعاً لترهلات البطن", img: "⛓️" }
];

let progress = 0;

function startJourney() {
    const name = document.getElementById('userNameInput').value;
    if (name === "") return alert("اكتب اسمك الأول يا بطل!");

    localStorage.setItem('boda_user', name);
    document.getElementById('welcomeName').innerText = name;
    
    // إظهار المحتوى
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('progress-section').classList.remove('hidden');
    document.getElementById('exercises').classList.remove('hidden');
    document.getElementById('ai-chat').classList.remove('hidden');
    
    renderExercises();
}

function renderExercises() {
    const grid = document.getElementById('exerciseGrid');
    grid.innerHTML = exercisesData.map((ex, index) => `
        <div class="ex-card">
            <h3>${ex.name}</h3>
            <p>${ex.info}</p>
            <button class="btn" onclick="startTimer(${index})">ابدأ التمرين ▶</button>
        </div>
    `).join('');
}

let timer;
function startTimer(index) {
    const ex = exercisesData[index];
    document.getElementById('currentExerciseName').innerText = ex.name;
    document.getElementById('exerciseImage').innerText = ex.img; // هنا ممكن تحط صور حقيقية
    document.getElementById('timerModal').classList.remove('hidden');
    
    let timeLeft = ex.duration;
    const display = document.getElementById('countdown');
    display.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("عاش يا بطل! كمل اللي بعده.");
        }
    }, 1000);
}

function closeTimer() {
    clearInterval(timer);
    document.getElementById('timerModal').classList.add('hidden');
    updateProgress();
}

function updateProgress() {
    progress += (100 / exercisesData.length) / 23; // تقدم بسيط كل تمرين لمدة 23 يوم
    if (progress > 100) progress = 100;
    
    const bar = document.getElementById('progressBar');
    bar.style.width = progress + "%";
    bar.innerText = Math.round(progress) + "%";
}

// AI الذكي المتفاعل
function askAI() {
    const input = document.getElementById('aiInput').value.toLowerCase();
    const chatBox = document.getElementById('chatBox');
    let response = "";

    if (input.includes("تعبت")) {
        response = "عادي يا بطل، ده وجع خفيف معناه إن عضلاتك بتتبني! خد نفس وكمل.";
    } else if (input.includes("نتيجة")) {
        response = "في خلال 23 يوم جسمك هيتغير 180 درجة لو التزمت بالمياه والنوم مع التمارين دي.";
    } else if (input.includes("جوعان")) {
        response = "اشرب كوبايتين مياه كبار وكُل تفاحة أو خيارة، بلاش تبوظ التعب!";
    } else {
        response = "سؤال جامد! بص يا وحش، أهم حاجة في التمرين ده الاستمرارية، إنت قدها!";
    }

    chatBox.innerHTML += `<p class="user-msg"><b>إنت:</b> ${input}</p>`;
    chatBox.innerHTML += `<p class="ai-msg"><b>Boda Bot:</b> ${response}</p>`;
    document.getElementById('aiInput').value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
