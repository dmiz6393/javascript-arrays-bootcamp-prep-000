var chocolateBars= ['snickers', 'hundred grand', 'kitkat',' skittles']; 

function addElementToBeginningOfArray(arrayone,elementone){
 return [elementone, ...arrayone]; 
}

function destructivelyAddElementToBeginningOfArray(arraytwo,elementtwo){
  array.unshift(elementtwo);
  return arraytwo;
}

function addElementtoEndofArray(array,element){ 
return [...array,element];
}

function destructivelyAddElementToEndofArray(array,element) {
  array.push(element);
  return array;
}

function accessElementInArray(array,index) { 
 return array[index];}  

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(); 
  return array; 
}

function removeElementFromBeginningOfArray(array){
  array.slice(1); 
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(); 
  return array
} 
function removeElementFromEndOfArray(array) {
  array.slice(0,array.length-1)
  return array
}

