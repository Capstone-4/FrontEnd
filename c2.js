function createDivBox() {
    var selectedValue = document.getElementById("inputState").value;
    if (selectedValue === "강남구") {
        document.querySelector('.result-box').style.display = 'block';
        document.querySelector('.report').style.display = 'block';
    }
};

document.querySelector('#okay1').addEventListener('click', function() {
    document.querySelector('.report').style.display = 'none';
    document.querySelector('.result-box').style.display = 'none';
    document.querySelector('.form-group').style.display = 'none';
    document.querySelector('.work-banner').style.display = 'block';
});

document.querySelector('#final').addEventListener('click',function() {
    document.querySelector('.report2').style.display = 'block';
})