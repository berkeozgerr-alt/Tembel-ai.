// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    // Gerekli HTML elemanlarını seçiyoruz
    const askButton = document.getElementById('ask-button');
    const aiResponseElement = document.getElementById('ai-response');
    const userQuestionInput = document.getElementById('user-question');

    // Tembel Ai'nin değişmez yanıtı
    const lazyResponse = "Banane be, git **ChatCPT**'ye veya **Gemini**'ye sor!";

    // Butona tıklama olayını dinliyoruz
    askButton.addEventListener('click', () => {
        // Kullanıcının ne yazdığının önemi yok, yanıtımız hep aynı
        // innerHTML, metni kalın yapmamızı sağlayan <b> etiketini kullanabilmek için gerekli.
        aiResponseElement.innerHTML = lazyResponse;
        
        // (Opsiyonel): Yanıt verildikten sonra soru kutusunu temizleyebiliriz
        userQuestionInput.value = ''; 
    });
    
    // (Opsiyonel): Enter tuşuyla da gönderme işlevi ekleyelim
    userQuestionInput.addEventListener('keypress', (event) => {
        // Eğer basılan tuş Enter ise
        if (event.key === 'Enter') {
            // Butonun tıklanma fonksiyonunu tetikliyoruz
            askButton.click(); 
        }
    });

});
