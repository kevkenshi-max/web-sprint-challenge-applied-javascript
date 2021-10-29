const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
 
  const header = document.createElement('div');
  header.classList.add('header');

  const dateSpan = document.createElement('span');
  dateSpan.classList.add('date');
  dateSpan.textContent = date;

  const hOne = document.createElement('h1');
  hOne.textContent = title;

  const tempSpan = document.createElement('span');
  tempSpan.classList.add('temp');
  tempSpan.textContent = temp;

  header.appendChild(dateSpan);
  header.appendChild(hOne);
  header.appendChild(tempSpan);

  return header;
}

const headerAppender = (selector) => {
  const parent = document.querySelector(selector);
  
  parent.appendChild(Header('Lambda Times', 'January 6, 2021', '26'));




  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
