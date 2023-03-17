const h = require('virtual-dom/h');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');
const createElement = require('virtual-dom/create-element');

// 1: Create a function that declares what the DOM should look like
function render(count)  {
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px',
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        }
    }, [String(count)]);
}

// 2: Initialise the document
let count = 0;      // We need some app data. Here we just store a count.
 
let tree = render(count);               // We need an initial tree
let rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document
 
// 3: Wire up the update logic
const intervalId = setInterval(function () {
      count++;
 
      const newTree = render(count);
      console.log('oldTree: -----', tree)
      console.log('newTree: -----', newTree);
    // console.log(tree === newTree)
      const patches = diff(tree, newTree);
      console.log('patches: -----', patches)
      rootNode = patch(rootNode, patches);
      tree = newTree;
}, 1000);

const timeoutId = setTimeout(() => {
    clearInterval(intervalId);
}, 200000);