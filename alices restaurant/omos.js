//spørgsmål 1

// om os
let show, ourCrew = [
    'Ejer - Alice',
    'Kok - James Holden',
    'Tjener - Naomi Nagata',
    'Tjener - Amos Burton',
    'Tjener - Alex Kamal',
    'Opvask - Chrisjen Avasarala',
    'Opvask - Bobbie Draper',
    'Køkkenmedhjælper - Camina Drummer'
  ].sort();
  
  for (show in ourCrew){
    crew.innerHTML += '<li>' + ourCrew[ show ] + '</li>';
  }