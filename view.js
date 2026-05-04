window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // script.js에서 보낸 이름표(n, s, i, e, p)와 일치해야 합니다.
    const name = urlParams.get('n');
    const snsType = urlParams.get('s');
    const snsId = urlParams.get('i');
    const email = urlParams.get('e');
    const phone = urlParams.get('p');

    // 데이터가 있으면 표시, 없으면 기본값 출력
    if (name) {
        document.getElementById('owner-name').innerText = name;
    }

    let details = "";
    if (snsType && snsId) details += `[${snsType}] ${snsId}\n`;
    if (email) details += `[Email] ${email}\n`;
    if (phone) details += `[Phone] ${phone}`;
    
    if (details) {
        document.getElementById('owner-contact').innerText = details;
    }

    // 버튼 제어
    const callBtn = document.getElementById('call-link');
    if (phone) {
        callBtn.href = "tel:" + phone.replace(/[^0-9+]/g, "");
        callBtn.style.display = "block";
    } else {
        callBtn.style.display = "none";
    }

    const mailBtn = document.getElementById('mail-link');
    if (email) {
        mailBtn.href = "mailto:" + email;
        mailBtn.style.display = "block";
    } else {
        mailBtn.style.display = "none";
    }
};