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
        url: 'https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450'
    },
    {
        name: 'Fang', 
        url: 'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/BgzbIuBFvPz-png__700.jpg'
    },
    ];

const createListItems = () => {
    for (let i = 0; i < 5; i++) {
        let mainUl = document.getElementById('cat-list-group');
        let newLi =  document.createElement('li')
        newLi.className = 'list-group-item';    
        mainUl.appendChild(newLi); 
    }
};
    

const listInitializer = (() => {
    //create list items
    createListItems();
    //add the names from 'API'
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
    listItems[i].textContent = fakeCatRequest[i].name;
    }
})();

const addListItemListener = () => {
    //select list-items
    let listItems = document.querySelectorAll('li');
    //loop through list-items
    for (let i = 0; i < listItems.length; i++ ) {
        listItems[i].addEventListener('click', function(){  
            
        })
    }
}
