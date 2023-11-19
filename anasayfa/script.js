function animateSkills() {
    var progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(function(bar) {
        var targetPercent = parseInt(bar.getAttribute("data-percent"));
        var currentPercent = 0;

        var interval = setInterval(function() {
            if (currentPercent >= targetPercent) {
                clearInterval(interval);
            } else {
                currentPercent++;
                bar.style.width = currentPercent + "%";
                bar.innerHTML = currentPercent + "%";

                if (currentPercent === targetPercent) {
                    clearInterval(interval);
                }
            }
        }, 10); // Değişimi daha yavaş veya hızlı yapabilirsiniz
    });
}