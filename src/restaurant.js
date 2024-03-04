const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image element
    const image = document.createElement('img');
    image.src = '../src/RR.jpg'
    image.height = '300';
    pageContent.appendChild(image);

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    //create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food and that :)'
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;
