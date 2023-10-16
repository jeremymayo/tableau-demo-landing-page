document.addEventListener('DOMContentLoaded', () => {
  // window.demo = new Demo(document.getElementById('grid'));
  shuffleInstance = new Shuffle(document.getElementById('grid'), {
    itemSelector: '.item',
    speed: 750
    //,sizer: '.my-sizer-element'
  });

  var elements = document.getElementsByClassName('language-dropdown-item-filter');

  Array.from(elements).forEach((element) => {
    element.addEventListener('click', (event) => {
      // alert(`Clicked ${event.target.innerText}!`);
      console.log("event.target.innerText: " + event.target.innerText.toLowerCase());

      if (event.target.innerText.toLowerCase() === 'all') {

        shuffleInstance.filter(Shuffle.ALL_ITEMS);

      } else {
        shuffleInstance.filter(event.target.innerText.toLowerCase());

      }

    });
  });

});

document.getElementById('myFilter').addEventListener('keyup', (evt) => {
  const searchText = evt.target.value.toLowerCase();
  shuffleInstance.filter(element => {
      console.log('filtering...');
      const tags = element.getAttribute('data-groups');
      console.log("tags: " + tags);
      return tags.indexOf(searchText) !== -1;
  });

});
