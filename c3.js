const day = 'monday'; 

if (day === 'monday'){
 console.log('plan course structure');
}

else if (day === 'tuesday') {
 console.log('prepare theoy videos');
}
 else if (day === 'wednesday' ||  day === 'thursday') {
  console.log('write course examples');
 }
 else if (day === 'friday'){
  console.log('record videos');
 }
 else if (day === 'saturday' || day === 'sunday'){
  console.log('enjoy the weekened :D');
 }
else { 
 console.log('not a valid day');
}