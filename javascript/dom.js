// DOM Manipulation Examples

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  // 1. Selecting Elements
  // Different ways to select elements
  const mainTitle = document.getElementById('main-title');
  const description = document.querySelector('.description');
  const listItems = document.querySelectorAll('#item-list li');
  const itemList = document.getElementById('item-list');
  const clickButton = document.getElementById('click-me');
  
  // 2. Modifying Content and Attributes
  // Change text content
//   mainTitle.textContent = 'DOM Manipulation is Fun!';
  
  // Change HTML content
//   description.innerHTML = 'This paragraph now has <strong>bold text</strong>.';
  
  // Add/modify attributes
//   mainTitle.style.color = 'blue';
//   mainTitle.style.textAlign = 'center';
//   description.setAttribute('data-modified', 'true');
  
  // Add/remove CSS classes
//   description.classList.add('highlight');
  
  // 3. Creating and Appending Elements
  // Create a new element
//   const newParagraph = document.createElement('p');
//   newParagraph.textContent = 'This paragraph was dynamically created.';
//   newParagraph.classList.add('dynamic-content');
  
  // Append the new element to the body
//   document.body.appendChild(newParagraph);
  
  // Create a new list item
//   const newItem = document.createElement('li');
//   newItem.textContent = 'New Item (added dynamically)';
//   newItem.style.color = 'green';
  
  // Append to the list
//   itemList.appendChild(newItem);
  
  // 4. Event Handling
  // Click event
//   clickButton.addEventListener('click', () => {
//     alert('Button clicked!');
//     clickButton.textContent = 'Clicked!';
//     clickButton.style.backgroundColor = 'lightgreen';
//   });
  
  // Mouseover event
//   mainTitle.addEventListener('mouseover', () => {
//     mainTitle.style.cursor = 'pointer';
//     mainTitle.style.textDecoration = 'underline';
//   });
  
//   mainTitle.addEventListener('mouseout', () => {
//     mainTitle.style.textDecoration = 'none';
//   });
  
  // 5. DOM Traversal
  // Log the parent node of the list
//   console.log('Parent of item list:', itemList.parentNode);
  
  // Log children of the list
//   console.log('Children of item list:', itemList.children);
  
  // First and last child
//   console.log('First child:', itemList.firstElementChild);
//   console.log('Last child:', itemList.lastElementChild);
  
  // 6. Removing Elements
  // Add a remove button to each list item
//   listItems.forEach(item => {
//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Remove';
//     removeBtn.style.marginLeft = '10px';
//     removeBtn.addEventListener('click', () => {
//       item.remove(); // Remove the list item when button is clicked
//     });
//     item.appendChild(removeBtn);
//   });
  
  // 7. Add some dynamic styling
//   const style = document.createElement('style');
//   style.textContent = `
//     .highlight {
//       background-color: yellow;
//       padding: 5px;
//       border-radius: 3px;
//     }
    
//     .dynamic-content {
//       margin: 20px 0;
//       padding: 10px;
//       background-color: #f0f0f0;
//       border-left: 3px solid #333;
//     }
//   `;
//   document.head.appendChild(style);
}
);
