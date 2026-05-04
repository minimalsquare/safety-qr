window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // 주소창에서 n, s, i, e, p 라는 이름표를 찾아 읽어옵니다
    const data = {
        name: urlParams.get('n'),
        sns: urlParams.get('s'),
        id: urlParams.get('i'),
        email: urlParams.get('e'),
        phone: urlParams.get('p')
    };

    // 값이 있을 때만 해당 박스를 화면에 띄우는 함수입니다
    function showField(id, value, boxId) {
        const targetElement = document.getElementById(id);
        const targetBox = document.getElementById(boxId);
        
        if (value && value.trim() !== "" && targetElement && targetBox) {
            targetElement.innerText = value;
            targetBox.style.display = "block"; // 숨겨져 있던 상자를 보이게 함
        }
    }

    // HTML의 ID들과 토씨 하나 틀리지 않게 연결합니다
    showField('v-name', data.name, 'box-name');
    showField('v-sns', data.sns, 'box-sns');
    showField('v-id', data.id, 'box-id');
    showField('v-email', data.email, 'box-email');
    showField('v-phone', data.phone, 'box-phone');

    // 전화 및 이메일 버튼 제어
    const callBtn = document.getElementById('call-link');
    if (data.phone) {
        callBtn.href = "tel:" + data.phone.replace(/[^0-9+]/g, "");
        callBtn.style.display = "block";
    } else {
        callBtn.style.display = "none";
    }

    const mailBtn = document.getElementById('mail-link');
    if (data.email) {
        mailBtn.href = "mailto:" + data.email;
        mailBtn.style.display = "block";
    } else {
        mailBtn.style.display = "none";
    }
};
