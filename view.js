window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    
    // 정민님의 script.js 열쇠(n, s, i, e, p)와 완벽 매칭
    const fields = [
        { key: 'n', valId: 'v-n', boxId: 'box-n' },
        { key: 's', valId: 'v-s', boxId: 'box-s' },
        { key: 'i', valId: 'v-i', boxId: 'box-i' },
        { key: 'e', valId: 'v-e', boxId: 'box-e' },
        { key: 'p', valId: 'v-p', boxId: 'box-p' }
    ];

    fields.forEach(field => {
        const value = params.get(field.key);
        if (value && value.trim() !== "") {
            document.getElementById(field.valId).innerText = value;
            document.getElementById(field.boxId).style.display = "block";
        }
    });
};
