var robotNames = [

    "Reactive Mining Technician",
    "Strategic Bodyguard Cyborg",
    "Strategic Docking Robot",
    "Sensitive Sanitation Machine",
    "Cole",
    "Booker",
    "Mecha",
    "Skip",
    "Oqubator",
    'Umt',
    "Super Assassination Automaton",
    "Super Translation Juggernaut",
    "Programmed Medical Entity",
    "Roberto",
    "Otis",
    "Devi",
    "Twobit",
    "Uyir",
    "Imixator",
    "Electronic Flora And Fauna Bot",
    "Exceptional Caretaker Emulator",
    "Robotic Caretaker Technician",
    "Mace",
    "Ranger",
    "Robbie",
    "Socket",
    "Ajikoid",
    "Ocix",
    "Main Care Golem",
    "Primitive Air Defense Robot",
    "Supreme Decoding Prototype",
    "Temporary Guidance Entity",
    "Mecha",
    "Ratchet",
    "Micro",
    "Rubber",
    "Izex",
    "Ifv"
];


function randomRobotName() {
    var rand = robotNames[Math.floor(Math.random() * robotNames.length)];

    robName = rand;

    $('.ROBOname').text(robName);

}
