const iframe = document.getElementById('iframes')

function showFile(input) {
    let file = input.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = function () {
        iframe.src = reader.result
    }

}