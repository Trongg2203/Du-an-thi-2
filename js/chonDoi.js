var myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("http://116.118.49.43:5229/api/CulturaPerfomance", requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const selectElement = document.getElementById('select-school');

        if (data && data.schoolName) {
            const optionElement = document.createElement('option');
            optionElement.value = data.schoolName;
            optionElement.textContent = data.schoolName;

            selectElement.appendChild(optionElement);
        } else {
            console.error('Invalid data structure from API');
        }
    })
    .catch(error => console.log('error', error));
