//spørgsmål 1

// kalender variabler
let date = new Date();
let week = ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'];
let months = ['Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'];

// footer information
const footerInfo = {
  day: week[ date.getDay() ],
  month: months[ date.getMonth() ],
  dayInMonth: date.getDate(),
  year: date.getFullYear(),
  hour: date.getHours(),
  minute: date.getMinutes(),
  restaurant: 'Alice\'s Restaurant', 
  adress: 'Volden 77 <br>8000 Aarhus C', 
  phone: '12 34 56 78',
  
  insertCalender: function() {
    console.log('insertCalender() = footer norminal');
    footer.innerHTML += `
      <div>
        &copy; Henrik Ø. Jacobsen<br>
        ${this.day}
        ${this.dayInMonth}.
        ${this.month}
        ${this.year}.
        ${this.hour}:${this.minute}
      </div>
    `;
  },
  insertAdress: function() {
    footer.innerHTML += `
      <div class="adress">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adress}<br>
          ${this.phone}
        </p>
      </div>
    `
  }
}

footerInfo.insertCalender();
footerInfo.insertAdress(); 