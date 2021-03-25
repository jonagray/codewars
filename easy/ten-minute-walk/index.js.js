// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {  
  // For this function, the idea is that in order to get you back to the starting point,
  //   for every direction it gives it must also give you the equal amount in opposite dir
  // In order for this app to return true, it is going to take you out only 5 times before
  //   it has to start returning you to the original location
  
  let n = [];
  let s = [];
  let e = [];
  let w = [];
  
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        n.push(walk[i]);
        break;
      case 's':
        s.push(walk[i]);
        break;
      case 'e':
        e.push(walk[i]);
        break;
      case 'w':
        w.push(walk[i]);
        break;
      default:
        return false;
    }
  }
  
  if (n.length !== s.length || n.length > 5 || s.length > 5) {
    return false;
  } 
  if (e.length !== w.length || e.length > 5 || w.length > 5) {
    return false;
  } else {
    return true;
  }
};
