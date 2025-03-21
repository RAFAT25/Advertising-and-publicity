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

document.getElementById("bt").addEventListener("click", function () {
    let btn = this;
    btn.classList.add("loading"); // تشغيل الدوران

    setTimeout(() => {
        btn.classList.remove("loading"); // إيقاف الدوران بعد 3 ثوانٍ
    }, 3000);
});


// Make the text element draggable.
$(document).ready(function () {
    $(function () {
        $('#theText').draggable({
            containment: 'parent' // set draggable area.
        });
    });
});
// Select image and show it.
let chooseImage = () => {
    document.getElementById('file').click();
}

let showImage = (fl) => {
    if (fl.files.length > 0) {
        let reader = new FileReader();

        reader.onload = function (e) {
            let img = new Image();

            img.onload = function () {
                if (this.width > screen.width || this.height > screen.height) {
                    alert('Please select a small image. The image width and height should be less than the screen width and height.');

                    document.getElementById('theText').style.display = 'none';
                    document.getElementById('bt').style.display = 'none';
                    document.getElementById('textArea').style.display = 'none';
                    document.getElementById('myimage').src = '';
                } else {
                    document.getElementById('theText').style.display = 'block';
                    document.getElementById('bt').style.display = 'block';
                    document.getElementById('textArea').style.display = 'block';
                }
            }

            img.src = e.target.result; // actual image. 
            document.getElementById('myimage').src = reader.result; // Add the image on the form.
        };
        reader.readAsDataURL(fl.files[0]);
    }
}

let textContainer;
let t = localStorage.getItem("textValue");

// Get the values that you have entered in the textarea and
// write it in the DIV over the image.

let writeText = (ele) => {
    t = ele.value;
    document.getElementById('theText').innerHTML = t.replace(/\n\r?/g, '<br />');
}

// Finally, save the image with text over it.
let saveImageWithText = () => {
    textContainer = document.getElementById('theText'); // The element with the text.

    // Create an image object.
    let img = new Image();
    img.src = document.getElementById('myimage').src;

    // Create a canvas object.
    let canvas = document.createElement("canvas");

    // Wait till the image is loaded.
    img.onload = function () {
        drawImage();
        downloadImage(img.src.replace(/^.*[\\\/]/, '')); // Download the processed image.
    }

    // Draw the image on the canvas.
    let drawImage = () => {
        let ctx = canvas.getContext("2d"); // Create canvas context.

        // Assign width and height.
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image.
        ctx.drawImage(img, 0, 0);

        textContainer.style.border = 0;

        // Get the padding etc.
        let left = parseInt(window.getComputedStyle(textContainer).left);
        let right = textContainer.getBoundingClientRect().right;
        let top = parseInt(window.getComputedStyle(textContainer).top, 0);
        let center = textContainer.getBoundingClientRect().width / 2;

        let paddingTop = window.getComputedStyle(textContainer).paddingTop.replace('px', '');
        let paddingLeft = window.getComputedStyle(textContainer).paddingLeft.replace('px', '');
        let paddingRight = window.getComputedStyle(textContainer).paddingRight.replace('px', '');

        // Get text alignement, colour and font of the text.
        let txtAlign = window.getComputedStyle(textContainer).textAlign;
        let color = window.getComputedStyle(textContainer).color;
        let fnt = window.getComputedStyle(textContainer).font;

        // Assign text properties to the context.
        ctx.font = "bold 70px Arial"; // 👈 حجم الخط 40px ونوعه Arial
        ctx.fillStyle = "#FFFFFF"; // 👈 اللون الأبيض
        ctx.textAlign = txtAlign;

        // Now, we need the coordinates of the text.
        let x; // coordinate.
        if (txtAlign === 'right') {
            x = right + parseInt(paddingRight) - 11;
        }
        if (txtAlign === 'left') {
            x = left + parseInt(paddingLeft);
        }
        if (txtAlign === 'center') {
            x = center + left;
        }
        x -= 300;

        // Get the text (it can a word or a sentence) to write over the image.
        let str = t.replace(/\n\r?/g, '<br />').split('<br />');

        // finally, draw the text using Canvas fillText() method.
        for (let i = 0; i <= str.length - 1; i++) {

            ctx.fillText(
                str[i]
                    .replace('</div>', '')
                    .replace('<br>', '')
                    .replace(';', ''),
                x,
                parseInt(paddingTop, 10) + parseInt(top, 10) + 590 + (i * 15));
        }

        // document.body.append(canvas);  // Show the image with the text on the Canvas.
    }

    // Download the processed image.
    let downloadImage = (img_name) => {
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = img_name;
        document.body.appendChild(a);
        a.click();
    }
}

document.querySelector(".result").innerHTML = localStorage.getItem("textValue");
document.querySelector("#test").innerHTML = localStorage.getItem("textValue");
document.querySelector(".img").src = localStorage.getItem("img");
