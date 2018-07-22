//service-worker check
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://matthewbcool.github.io/cat-clicker//service-worker.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }

let fakeCatRequest = [
    {
        name: 'Spanky',
        url: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
    }, 
    {
        name: 'Curly', 
        url: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
        name: 'Angelica', 
        url: 'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg'
    },
    {
        name: 'Richard', 
        url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
        name: 'Fang', 
        url: 'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/BgzbIuBFvPz-png__700.jpg'
    },
    ];

const createListItems = () => {
    for (let i = 0; i < fakeCatRequest.length; i++) {
        let mainUl = document.getElementById('cat-list-group');
        let newLi =  document.createElement('li')
        newLi.className = 'list-group-item';    
        mainUl.appendChild(newLi); 
    }
};
    

const listInitializer = (() => {
    createListItems();
    //add the names from 'API'
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
    listItems[i].textContent = fakeCatRequest[i].name + '  ';
    //giving id's to list items so that they can bind to the index of the urls
    listItems[i].id = i;
    let badge = document.createElement('span');
    badge.className = 'badge badge-danger';
    listItems[i].appendChild(badge);
    }
})();

const imageInitializer = (() => {
    for (let i = 0; i < fakeCatRequest.length; i++) {
        let catImgBox = document.getElementById('cat-image-container');
        let newImg = document.createElement('img');
        newImg.className = 'hidden img-fluid'
        newImg.setAttribute('src', fakeCatRequest[i].url);
        catImgBox.appendChild(newImg); 
    }
})();

const addImageEventListeners = (() =>  { 
    let allImgs = document.getElementsByTagName('img');
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].addEventListener('click', function(){
            let spanItem = document.getElementById(i);
            spanItem = spanItem.lastChild;
            if (spanItem.innerText === '') {
                spanItem.innerText = 1;
            } else {
            spanItem.innerText = parseInt(spanItem.innerText) + 1;
            }    
        })
    }
})();
const hideContent = () => {
    let currentContents = document.querySelectorAll('#cat-image-container *');
        for (content of currentContents) {
            content.className = 'hidden img-fluid'
        }
}

const deactivateListItems = (listItems) => {
    for (item of listItems) {
        item.className = 'list-group-item'
    }
}

const addListItemListener = () => {
    //select list-items
    let listItems = document.querySelectorAll('li');
    let imgGroup = document.getElementsByTagName('img');
    //loop through list-items
    for (let i = 0; i < listItems.length; i++ ) {
        listItems[i].addEventListener('click', function(){
            hideContent();
            deactivateListItems(listItems);
            let selectedImage = imgGroup[i];
            selectedImage.className = 'img-fluid';
            this.className = 'list-group-item active touched';
        })
    }
}
addListItemListener();
