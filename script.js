function updateClock() {
    let currentTime = new Date();
    
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // تحويل الساعة إلى تنسيق 12 ساعة
    hours = hours % 12;
    hours = hours ? hours : 12; // تحويل الساعة 0 إلى 12

    // إضافة صفر أمام الأرقام أقل من 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    document.getElementById('clock').textContent = timeString;
}

// تحديث الساعة كل ثانية
setInterval(updateClock, 1000);

// عرض الساعة عند تحميل الصفحة لأول مرة
updateClock();
