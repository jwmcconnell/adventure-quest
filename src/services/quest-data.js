const rescue = {
  id: 'rescue',
  title: 'Rescue the Princess',
  image: '',
  description: `
  You are tasked with rescuing a Princess who has been captured by the evil goblins. As you approach her cell in the underground underground lair you find ablade at your throat. What do you do?
  `,
  choices: [{
    id: 'fight',
    description: 'Turn and start swinging',
    results: [{
      class: 'warrior',
      text: `
      Luckily you brought your armour and sword or you might have been in a world of hurt.  You handle the three goblins that were behind you but you don't escape unsathed. You do hower get out with the Princess.
      `,
      hp: -10,
      gold: 50
    }, {
      class: 'any',
      text: `
      You are underprepared for what awaits behind you and are subdued quickly. They take your money and beat you up before dragging you outside.
      `,
      hp: -30,
      gold: -50
    }]
  }, {
    id: 'run',
    description: 'Run as fast as you can.',
    results: [{
      class: 'priest',
      text: `
      You immediatly bolt for a door you saw a few moments earlier while casting anything you
      think might slow them down. In the commotion you lose the goblins and are able to double
      back to complete your quest. You heal all of your injuries.
      `,
      hp: 0,
      gold: 50
    }, {
      class: 'any',
      text: `
      You run as fast as your legs can carry until you are far from the lair. You find your
      adreniline has masked some of the pain from a couple arrows they sent your way, but you
      can certainly feel them now.
      `,
      hp: -50,
      gold: -50
    }]
  }, {
    id: 'distract',
    description: 'Make a distraction',
    results: [{
      class: 'wizard',
      text: `
      You look around and notice the lanterns lighting the passage way. First you send summon
      a gust of wind to blow out the lanterns and after a moment pour a great amount of energy
      into making a fire illusion fill the room. The goblins are to frightend to notice which
      way you decided to go and you make it out unscathed with the Princess.
      `,
      hp: 0,
      gold: 50
    }, {
      class: 'any',
      text: `
      You try to pull a shelf over and into the crowd behind you but find the goblins are smarter
      than you had thought and had bolted it to the wall. This frustrates the goblins so they 
      beat you up and take your money.
      `,
      hp: -50,
      gold: -50
    }]
  }, {
    id: 'negotiate',
    description: 'Negotiate with the goblin',
    results: [{
      class: 'rogue',
      text: `
      You explain your job and convince the goblins you will steal whatever they want you to as
      you can have the Princess they captured. The goblins agree and don't notice you pocketing
      anything you can on the way out.
      `,
      hp: 0,
      gold: 80
    }, {
      class: 'any',
      text: `
      You try to sell them you life story as a theif but they aren't buying it. The eventualy get
      tired of talking so they beat you up and kick you out
      `,
      hp: -30,
      gold: -50
    }]
  }]
};

const assassinate = {
  id: 'assassinate',
  title: 'Assassinate the Evil King',
  image: '',
  description: `
  An evil king has been encrouching on your home land and you are tasked with
  ending his life in order to stop the impending war he seems determined to 
  wage. You make your way to their camp and disguise yourself as one of their
  men. How do you go about executing your mission?
  `,
  choices: [{
    id: 'fight',
    description: 'Charge him at first site',
    results: [{
      class: 'warrior',
      text: `
      You manage to get close enough to get a good blow with your sword but are
      immidiatly restrained following. You are taken into custody and your
      belongings are taken. Soon after you hear the king is dead and there is the sound of celebration as it turns out not many wanted to fight the kings war.
      `,
      hp: -10,
      gold: 50
    }, {
      class: 'any',
      text: `
      You make your hasty attempt but are overwhelmed by guards as soon as you get close. They beat you and take your money as a message to anyone else who dares kill the king.
      `,
      hp: -50,
      gold: -50
    }]
  }, {
    id: 'run',
    description: 'Help first, kill later',
    results: [{
      class: 'priest',
      text: `
      You see one of the kings men with a severe injury and rush to help.
      You use a healing spell to fix the wound and immidiatly the king 
      asks who you are. He takes you back to his home to thank you for saving
      one of him most loyal men but as soon as you are behind closed doors you 
      finish the job. While you are in his home you take some souvineers.
      `,
      hp: 0,
      gold: 70
    }, {
      class: 'any',
      text: `
      You see one of the kings men with a severe injury and rush to help. As you are
      trying to stop the bleeding the soldier dies and the King's men ask who you are.
      They find your orders to kill their King in your pocket, so they beat you 
      up and take your money.
      `,
      hp: -50,
      gold: -50
    }]
  }, {
    id: 'distract',
    description: 'Set the main tent on fire',
    results: [{
      class: 'wizard',
      text: `
      You look notice the king and a large group of soldier making their way into the largest
      tent in the camp. You take the opprotunity to set it on fire with a spell from affar.  
      In the commotion the King doesn't make it out alive and nobody can pinpoint where or 
      how the fire started.
      `,
      hp: 0,
      gold: 50
    }, {
      class: 'any',
      text: `
      You attempt to set fire to their tent but as you are sitting their struggling to make your
      fire, some guards notice you and kick you out of the area. Now that they are on higher alert,
      you are unable to complete your quest.
      `,
      hp: 0,
      gold: 0
    }]
  }, {
    id: 'negotiate',
    description: 'Steal something and see if it helps',
    results: [{
      class: 'rogue',
      text: `
      You explain your job and convince the goblins you will steal whatever they want you to as
      you can have the Princess they captured.  The goblins agree and don't notice you pocketing
      anything you can on the way out.
      `,
      hp: 0,
      gold: 80
    }, {
      class: 'any',
      text: `
      You try to sell them you life story as a theif but they aren't buying it.  The eventualy get
      tired of talking so they beat you up and kick you out
      `,
      hp: -30,
      gold: -50
    }]
  }]
};

const quests = [rescue, assassinate];

export default quests;