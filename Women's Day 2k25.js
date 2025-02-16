const facultyEvents = [{name:'Fun Games',time:'10.30 am to 12.00 pm',date:'19.02.25',place:'SRL Audithorium',contact:'7348872039'}
    ,{name: 'Dumb Charades',time:'2.30 pm to 4.00 pm',date:'19.02.25 ',place:'SRL Audithorium',contact:'9176057963'}
    ,{name:'Mehandi',time:'10.30 am to 12.00 pm',date:'20.02.25',place:'SRL Audithorium',contact:'9790895464'}
    , {name:'Lucky Corner',time:'1.00 am to 1.30 pm',date:'20.02.25',place:'SRL Audithorium',contact:'9524412764'}
    ,{name:'Ramp Walk',time:'2.30 pm to 3.30 pm',date:'20.02.25',place:'SRL Audithorium',contact:'9677532525'}
    ,{name:'Singing-Solo',time:'1.30 am to 3.00 pm',date:'21.02.25 ',place:'SRL Audithorium',contact:'8973281169'}
    ,{name:'Reels',time:'2.30 am to 4.00 pm',date:'21.02.25 ',place:'SRL Audithorium',contact:'9842330409'}
    ,{name:'Dance-Solo',time:'10.00 am to 12.00 pm',date:'24.02.25 ',place:'SRL Audithorium',contact:'9894961269'}
    ,{name:'Dance-Group',time:'2.00 pm to 4.00 pm',date:'24.02.25 ',place:'SRL Audithorium',contact:'9080782215'}];
const studentEvents = [{name:'Nail Art',time:'9.30 am to 11. 00 am',date:'18.02.25',place:'SRL Audithorium',contact:'9524412764'},
    {name:'Photography',time:'11.30 am to 12.30 pm ',date:'18.02.25',place:'SRL Audithorium',contact:'9524412764'},
    {name:'Poem Writing',time:'2.30 pm to 3.30 pm ',date:'18.02.25',place:'SRL Audithorium',contact:'8973281169'},
    {name:'Debate',time:'9.30 am to 11. 00 am ',date:'19.02.25 ',place:'SRL Audithorium',contact:'9600772392'},
    {name:'App Development',time:'11.30 pm to 12.30 pm ',date:'19.02.25 ',place:'SRL Audithorium',contact:'9790895464'},
    {name:'Art from Waste',time:'2.30 pm to 3.30 pm ',date:'19.02.25 ',place:'SRL Audithorium',contact:'9894961269'},
    {name:'Short Film',time:'2.30 pm to 3.30 pm ',date:'19.02.25 ',place:'SRL Audithorium',contact:'9080782215'},
    {name:'Singing-Solo',time:'10.30 am to 11.30 am ',date:'24.02.25',place:'SRL Audithorium',contact:'7348872039'},
    {name: 'Dance-Solo',time:'11.30 am to 12.30 pm',date:'24.02.25',place:'SRL Audithorium',contact:'9842330409'},
    {name: 'Dance-Group',time:'1.00 pm to 4.00 pm ',date:'24.02.25',place:'SRL Audithorium',contact:'9677532525'},
    ];

document.getElementById("faculty-events").innerHTML = facultyEvents.map(event => `<a href="events/faculty/${event.name}.html" style="text-decoration:none;" onclick="setVariable('${event.name}','${event.time}','${event.contact}','${event.date}','${event.place}');"><li>${event.name}</li></a>`).join('');
document.getElementById("student-events").innerHTML = studentEvents.map(event => `<a href="events/students/${event.name}.html" style="text-decoration:none;" onclick="setVariable('${event.name}','${event.time}','${event.contact}','${event.date}','${event.place}')"><li>${event.name}</li></a>`).join('');

function setVariable(value,time,contact,date,place) {
    localStorage.setItem('variable', value);
    localStorage.setItem('clock',time);
    localStorage.setItem('phone',contact);
    localStorage.setItem('day',date);
    localStorage.setItem('venue',place);

}