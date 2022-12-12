const generateImagesNum = 1;

const renderItem = () => {
    fetch(`https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`)
        .then((response) => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `<img src="${response.url}" class="randomImage" alt="image">`
            document.body.appendChild(item);
        })
}

for(let i=0; i < generateImagesNum; i++){
    renderItem();
}

// https://source.unsplash.com/1600x900/?beach