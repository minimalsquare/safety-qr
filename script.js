function generateQR() {
    const name = document.getElementById('name').value.trim();
    // ... (기존 변수들 생략) ...
    const resultArea = document.getElementById('result-area');

    if (!name) { alert("Please enter your name."); return; }

    // QR 코드 생성
    document.getElementById('qrcode').innerHTML = "";
    // (QR 생성 로직 동일)
    new QRCode(document.getElementById('qrcode'), {
        text: "연결주소...", 
        width: 85,
        height: 85
    });

    // 카드에 텍스트 채우기
    document.getElementById('p-name').innerText = name;
    // ... (나머지 텍스트 채우기 생략) ...

    // ★ 이 부분이 핵심입니다! 숨겨진 버튼과 카드를 화면에 보이게 만듭니다.
    resultArea.style.display = "block"; 

    // 인쇄 시 레이아웃이 깨지지 않게 화면 최하단으로 스크롤해주는 센스!
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
