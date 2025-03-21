document.addEventListener('DOMContentLoaded', function () {
    // استرجاع القيم من localStorage
    const textValue = localStorage.getItem('textValue');
    const img = localStorage.getItem('img');

    if (textValue) {
        document.getElementById('cardName').value = textValue;
    }
    if (img) {
        document.getElementById('cardImage').src = img;
    }

    // معالجة زر إنشاء البطاقة
    document.getElementById('generateBtn').addEventListener('click', function () {
        const name = document.getElementById('cardName').value;
        const image = document.getElementById('cardImage').src;

        // هنا يمكنك إضافة المنطق لإنشاء البطاقة
        // مثلاً: إضافة اسم المستخدم إلى الصورة
        // أو حفظ البطاقة كملف صورة

        // إغلاق المودال بعد إنشاء البطاقة
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    });
});