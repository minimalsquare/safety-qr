function generateQR() {
    // 1. 입력값 가져오기
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value;
    const email = document.getElementById('email').value;

    // 2. 카드 텍스트 업데이트
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone;
    document.getElementById('p-sns-type').innerText = snsType;
    document.getElementById('p-sns-id').innerText = snsId;
    
    // 3. 상냥한 영어 메시지 설정
    const mailSubject = "Found your Passport Wallet!";
    const mailBody = `Hello,\n\nI found your Minimal Square passport wallet.\nPlease let me know where I can return it to you or leave your contact number here.\n\nHave a wonderful day!`;

    // 4. 카드 내 메일 주소 클릭 시 동작 설정
    const emailElement = document.getElementById('p-email');
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    emailElement.innerHTML = `<a href="${mailtoLink}" style="text-decoration:none; color:inherit;">${email}</a>`;

    // 5. QR 코드 생성 (스캔 시 바로 메일 작성이 뜨도록 mailto 형식 적용)
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; 
    
    // QR 데이터 자체를 mailto 링크로 설정하여 스캔 즉시 메일 앱이 열리게 합니다.
    const qrData = mailtoLink;
    
    new QRCode(qrContainer, {
        text: qrData,
        width: 75,
        height: 75,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById('result-area').style.display = 'block';
}

// 다운로드 기능 유지
document.getElementById('download-btn').addEventListener('click', function() {
    const qrCanvas = document.querySelector('#qrcode canvas');
    if (qrCanvas) {
        const link = document.createElement('a');
        link.download = 'minimal_square_qr.png';
        link.href = qrCanvas.toDataURL();
        link.click();
    }
});
