function generateQR() {
    const name = document.getElementById('name').value.trim();
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const qrcodeContainer = document.getElementById('qrcode');

    // 1. 이름 검증
    if (!name) { alert("이름을 입력해 주세요."); return; }

    // 2. 이메일 형식 정밀 검증
    if (email !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("올바른 이메일 형식을 입력해 주세요. (예: example@domain.com)");
            return;
        }
    }

    // 3. QR 생성
    qrcodeContainer.innerHTML = "";
    // 현재 주소를 기반으로 view.html 경로 생성
    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '') + "view.html";
    const params = new URLSearchParams({ n: name, s: snsType, i: snsId, e: email, p: phone });
    
    const finalUrl = `${baseUrl}?${params.toString()}`;

    new QRCode(qrcodeContainer, {
        text: finalUrl,
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    // 4. 인쇄용 카드 데이터 매칭
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone || "";
    document.getElementById('p-sns').innerText = snsId ? `${snsType}: ${snsId}` : "";
    document.getElementById('p-email').innerText = email || "";

    // 결과 화면 표시
    document.getElementById('result-area').style.display = "block";

    // 5. 다운로드 버튼 활성화 (QR 생성 후 이미지가 렌더링될 시간 필요)
    setTimeout(() => {
        const img = qrcodeContainer.querySelector('img');
        if (img) {
            document.getElementById('download-btn').onclick = function() {
                const link = document.createElement('a');
                link.href = img.src;
                link.download = `MinimalSquare_QR_${name}.png`;
                link.click();
            };
        }
    }, 500);
}
