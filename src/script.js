window.onload = function() {
    document.getElementById('chance1').addEventListener('input', function() {
        const chance1 = Number(this.value);
        const chance2 = 100 - chance1;
        document.getElementById('chance2').value = chance2;
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const randomValue = Math.random(); // Generate a random value between 0 and 1
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        const chance1 = Number(document.getElementById('chance1').value)/100;
        // const chance2 = Number(document.getElementById('chance2').value)/100;
        let ret;
        if (randomValue < chance1) {
            ret = value1;
        } else {
            ret = value2;
        }
        document.getElementById('result-heading').innerText = `Your Random result was:`;
        document.getElementById('result').innerText = `Random Value: ${ret}`;
        document.getElementById('result-chance-heading').innerText = `Based on the following random number of:`;
        document.getElementById('result-chance').innerText = `Random number: ${randomValue}`;

    });
};