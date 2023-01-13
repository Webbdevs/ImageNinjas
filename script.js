let counter = 0;
const accessKey = 'JunlsSkxYn3h43yY7iXg8kNtgHORpyIjjJvehFDRUAs';

const headers = new Headers({
  'Authorization': `Client-ID ${accessKey}`
});
let arr = []
function getImg() {
    arr = []
    const imageContainer = document.getElementById('image-container');
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    let searchTxt = document.getElementById('search-txt')
    fetch(`https://api.unsplash.com/search/photos?query=${searchTxt.value}&per_page=10`, { headers })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.results.length; i++) {
                const imageUrl = data.results[i].urls.regular;
                arr.push(imageUrl)
                console.log(arr)
            }
            document.getElementById('img-data').src = arr[0]
            /*for (let i = 0; i < arr.length; i++) {
                const imageElement = document.createElement('img');
                imageElement.src = arr[i]

                document.getElementById('image-container').appendChild(imageElement);
                const downloadButton = document.createElement('button');
                downloadButton.innerHTML = 'Download';
                downloadButton.addEventListener('click', e => {
                    e.preventDefault();
                    downloadImage(arr[i]);
                });
                document.getElementById('image-container').appendChild(downloadButton);
            }*/
        })
        .catch(error => {
            console.error(error);
        });
}

let forwardBtn = document.getElementById('material-symbols-outlined-forward')
            forwardBtn.onclick = () =>
            {
                //alert('sui')
                counter++;
              //alert(counter)  
                let imageAp = document.getElementById('img-data')
                if(counter==arr.length - 1)
                {
                    alert('sui')
                    counter = 0
                }
                imageAp.src = arr[counter]
            }

            let backwardBtn = document.getElementById('material-symbols-outlined-backward')
            backwardBtn.onclick = () =>
            {
                //alert('sui')
                counter--;
              //  alert(counter)
                let imageAp = document.getElementById('img-data')
                if(counter==-1)
                {
                    counter = arr.length - 1
                }
                imageAp.src = arr[counter]
            }
            function downloadImage() {
    let imgSrc = document.getElementById("img-data").src;
    fetch(imgSrc).then(response => response.blob()).then(blob => {
        let url = URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "image.jpg";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    });
}
let img = document.getElementById("img-data");
function enlarge() {
  img.classList.toggle("enlarged");
}
