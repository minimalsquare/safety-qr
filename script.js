function generateQR() {
    const name = document.getElementById('name').value.trim();
    const snsType = document.getElementById('sns-type').value.trim();
    const snsId = document.getElementById('sns-id').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const qrcodeContainer = document.getElementById('qrcode');

    // 1. 이름은 필수
    if (!name) {
        alert("Please enter your Name.");
        return;
    }

    // 2. SNS 종류 입력 시 ID 필수
    if (snsType && !snsId) {
        alert("Please enter your SNS ID.");
        return;
    }

    // 3. 연락처 수단 중 최소 하나 입력 확인 (SNS세트, 메일, 전화번호)
    const hasSnsSet = snsType && snsId;
    const hasEmail = email !== "";
    const hasPhone = phone !== "";

    if (!hasSnsSet && !hasEmail && !hasPhone) {
        alert("Please provide at least one contact: SNS info, Email, or Phone number.");
        return;
    }

    // 4. QR 코드 생성 (모든 정보는 URL에만 저장)[cite: 1]
    qrcodeContainer.innerHTML = "";
    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '') + "view.html";
    
    const params = new URLSearchParams({
        n: name,
        s: snsType,
        i: snsId,
        e: email,
        p: phone
    });

    new QRCode(qrcodeContainer, {
        text: `${baseUrl}?${params.toString()}`,
        width: 180,
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff"
    });
}