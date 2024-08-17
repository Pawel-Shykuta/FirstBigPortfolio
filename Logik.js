

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.container').classList.toggle('open');
});





const TELEGRAM_BOT_TOKEN = '7305202944:AAGoHGkwxXkqMIXs3j653ynfrh-pv8WSQ7E';
const TELEGRAM_CHAT_ID = '@TestFrontCaseThree';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function sendEmailTelegram(event) {
    event.preventDefault(); // Убирает перезагрузку страницы при нажатии на кнопку или в том духе

    const form = event.target;
    const formBtn = document.querySelector('.form_submit_button button');
    const formSendResult = document.querySelector('.form_send-resultat');
    formSendResult.textContent = ' ';

    const { name, email, phone, message } = Object.fromEntries(new FormData(form).entries());

    const text = `Заявка от ${name}!\nemail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`;

    try {
        formBtn.textContent = "Loading...";
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text
            })
        });

        if (response.ok) {
            formSendResult.textContent = 'Спасибо за ваше обращение!';
            form.reset();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
        formSendResult.textContent = 'Анкета не отправлена! Попробуйте еще раз.';
        formSendResult.style.color = 'red';
    } finally {
        formBtn.textContent = 'Отправить';
    }
}





