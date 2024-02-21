/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const room = {
  name: "Elias´s room",
  furniture: {
    bed: 1,
    desk: 2,
    chairs: 1,
    bookshelf: 0,
  },
  technologicalDevices: {
    computer: 1,
    videoGameConsole: 3,
    tv: 1,
    printDevice: 1,
    mouse: 1,
  },    
  color: "White",
  NumberOfPersons: 1,
  door: 1,
  windows: 2, 
  },

  doorOpen: false,
  doorHandle: function (OpenDoor) {
  this.doorOpen = OpenDoor;
  },
  newtechnologicalDevices: function (videoGameConsole, computer) {
    this.technologicalDevices.gameConsole= videoGameConsole;
    this.technologicalDevices.compu= computer;
  },
};

  
  
  



