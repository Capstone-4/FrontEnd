document.querySelector('#okay').addEventListener('click', function() {
    document.getElementById('main_banner').style.display = 'none';
    document.getElementById('result').style.display = 'block';
})

document.querySelector('#reset').addEventListener('click', function() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('main_banner').style.display = 'block';
})