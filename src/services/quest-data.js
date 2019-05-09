const rescue = {
  id: 'rescue',
  title: 'Rescue the Princess',
  image: 'goblin.png',
  map: {
    top: '15%',
    left: '15%',
  },
  description: `
  You are tasked with rescuing a Princess who has been captured by the evil goblins. As you approach her cell in the underground underground lair you find ablade at your throat. What do you do?
  `,
  choices: [{
    id: 'fight',
    description: 'Turn and start swinging',
    results: [{
      id: 'warrior',
      text: `
      Luckily you brought your armour and sword or you might have been in a world of hurt.  You handle the three goblins that were behind you but you don't escape unsathed. You do hower get out with the Princess.
      `,
      health: -10,
      gold: 50
    }, {
      id: 'any',
      text: `
      You are underprepared for what awaits behind you and are subdued quickly. They take your money and beat you up before dragging you outside.
      `,
      health: -30,
      gold: -50
    }]
  }, {
    id: 'run',
    description: 'Run as fast as you can.',
    results: [{
      id: 'priest',
      text: `
      You immediatly bolt for a door you saw a few moments earlier while casting anything you
      think might slow them down. In the commotion you lose the goblins and are able to double
      back to complete your quest. You heal all of your injuries.
      `,
      health: 0,
      gold: 50
    }, {
      id: 'any',
      text: `
      You run as fast as your legs can carry until you are far from the lair. You find your
      adreniline has masked some of the pain from a couple arrows they sent your way, but you
      can certainly feel them now.
      `,
      health: -50,
      gold: -50
    }]
  }, {
    id: 'distract',
    description: 'Make a distraction',
    results: [{
      id: 'wizard',
      text: `
      You look around and notice the lanterns lighting the passage way. First you send summon
      a gust of wind to blow out the lanterns and after a moment pour a great amount of energy
      into making a fire illusion fill the room. The goblins are to frightend to notice which
      way you decided to go and you make it out unscathed with the Princess.
      `,
      health: 0,
      gold: 50
    }, {
      id: 'any',
      text: `
      You try to pull a shelf over and into the crowd behind you but find the goblins are smarter
      than you had thought and had bolted it to the wall. This frustrates the goblins so they 
      beat you up and take your money.
      `,
      health: -50,
      gold: -50
    }]
  }, {
    id: 'negotiate',
    description: 'Negotiate with the goblin',
    results: [{
      id: 'rogue',
      text: `
      You explain your job and convince the goblins you will steal whatever they want you to as
      you can have the Princess they captured. The goblins agree and don't notice you pocketing
      anything you can on the way out.
      `,
      health: 0,
      gold: 80
    }, {
      id: 'any',
      text: `
      You try to sell them you life story as a theif but they aren't buying it. The eventualy get
      tired of talking so they beat you up and kick you out
      `,
      health: -30,
      gold: -50
    }]
  }]
};

const assassinate = {
  id: 'assassinate',
  title: 'Assassinate the Evil King',
  image: 'king.jpg',
  map: {
    top: '30%',
    left: '67%',
  },
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
      id: 'warrior',
      text: `
      You manage to get close enough to get a good blow with your sword but are
      immidiatly restrained following. You are taken into custody and your
      belongings are taken. Soon after you hear the king is dead and there is the sound of celebration as it turns out not many wanted to fight the kings war.
      `,
      health: -10,
      gold: 50
    }, {
      id: 'any',
      text: `
      You make your hasty attempt but are overwhelmed by guards as soon as you get close. They beat you and take your money as a message to anyone else who dares kill the king.
      `,
      health: -50,
      gold: -40
    }]
  }, {
    id: 'run',
    description: 'Help first, kill later',
    results: [{
      id: 'priest',
      text: `
      You see one of the kings men with a severe injury and rush to help.
      You use a healing spell to fix the wound and immidiatly the king 
      asks who you are. He takes you back to his home to thank you for saving
      one of him most loyal men but as soon as you are behind closed doors you 
      finish the job. While you are in his home you take some souvineers.
      `,
      health: 0,
      gold: 70
    }, {
      id: 'any',
      text: `
      You see one of the kings men with a severe injury and rush to help. As you are
      trying to stop the bleeding the soldier dies and the King's men ask who you are.
      They find your orders to kill their King in your pocket, so they beat you 
      up and take your money.
      `,
      health: -50,
      gold: -20
    }]
  }, {
    id: 'distract',
    description: 'Set the main tent on fire',
    results: [{
      id: 'wizard',
      text: `
      You notice the king and a large group of soldier making their way into the largest
      tent in the camp. You take the opprotunity to set it on fire with a spell from affar.  
      In the commotion the King doesn't make it out alive and nobody can pinpoint where or 
      how the fire started.
      `,
      health: 0,
      gold: 50
    }, {
      id: 'any',
      text: `
      You attempt to set fire to their tent but as you are sitting their struggling to make your
      fire, some guards notice you and kick you out of the area. Now that they are on higher alert,
      you are unable to complete your quest.
      `,
      health: 0,
      gold: 0
    }]
  }, {
    id: 'negotiate',
    description: 'Steal something and see if it helps',
    results: [{
      id: 'rogue',
      text: `
      You manage to grab a letter from a courier heading towards the main tent. It contains a message detailing when
      the evil kings forces will strike. You take this back to those that sent you and they welcome the useful info instead.
      `,
      health: 0,
      gold: 80
    }, {
      id: 'any',
      text: `
      When you are trying to be sneaky some guards become aware of you. You are captured, your money is taken and you are beaten up.
      `,
      health: -20,
      gold: -30
    }]
  }]
};

const monster = {
  id: 'monster',
  title: 'Kill the Sea Monster',
  image: 'monster.jpg',
  map: {
    top: '75%',
    left: '23%',
  },
  description: `
  A large bounty has been placed on a Sea Monster. You are not so convinced by the rummors of the terrible beast until you see
  a ship, broken in half, on your way to wherer it resides.  When you arrive you see yet another crew being laid to waste before
  your eyes. What do you do?
  `,
  choices: [{
    id: 'fight',
    description: 'Charge him at first site',
    results: [{
      id: 'warrior',
      text: `
      Lucky for you the beast is very tired from trying its best to ruin the day of those poor sailors so you manage to take it
      by surprise. You manage to mount the monster and drive your blade through what you image it would call a neck. It screeches
      and flails destroying your boat but you manage to come out of it alive with the bounty.
      `,
      health: -10,
      gold: 100
    }, {
      id: 'any',
      text: `
      You soon realize this might not have been a smart idea as the beast bites a hole in your boat. You decided after the boat is no
      longer on the surface this might not be a good idea anymore. You swim away with some injuries for your time.
      `,
      health: 20,
      gold: 0
    }]
  }, {
    id: 'negotiate',
    description: 'See if you can reason with it',
    results: [{
      id: 'priest',
      text: `
      Once the other boat is demolished the monster turns on you only to be surprised by the lack of attack. You heal its injuries in an
      act of good faith and manage through hours of attempted hand signals to make it go terrorize people a bit further away.
      `,
      health: 0,
      gold: 100
    }, {
      id: 'any',
      text: `
      The beast seems confused by all of your waving and shouting and decides that your ship could use a hole in it. After doing
      some remodeling it leaves you alone in the ocean to swim home.
      `,
      health: -5,
      gold: 0
    }]
  }, {
    id: 'distract',
    description: 'Set it on fire',
    results: [{
      id: 'wizard',
      text: `
      You are at a loss for what to do so you figure you might as well try to light it on fire.  It immidiatly starts screeching
      after you cast the spell and you soon realize the fire is pretty resistant to water.  The beast eventualy disapears below
      the sea and you figure you can call it a day.
      `,
      health: 0,
      gold: 50
    }, {
      id: 'any',
      text: `
      You get an arrow ready wrapped with a rag and set it on fire. As you fire it you realize some fuel might have helped keep it lit
      before it reaches the beast. Realizing this too late you are forced to sail away as quickly as possible as you just poked the
      beast in the eye with a stick and it is not happy
      `,
      health: 0,
      gold: 0
    }]
  }, {
    id: 'negotiate',
    description: 'Wait your turn',
    results: [{
      id: 'rogue',
      text: `
      Lucky for you, after waiting your turn the monster seems to be nursing quite a few injuries. As it sees a fresh boat you can almost
      hear it groan and you see it swim away. Apparently it didn't want another fight today. You shrug and head home assuming victory.
      `,
      health: 0,
      gold: 80
    }, {
      id: 'any',
      text: `
      The beast, now finished with the other ship turns to you with so much rage in its eyes you start to quiver in your boots. It is tired
      of games and decides to go right for your mast. It topples over and injures you on the way down. The monster satisfied with its work
      disappears into the sea leaving you to firgure out a way home before it comes back.
      `,
      health: -10,
      gold: 0
    }]
  }]
};

const quests = [rescue, assassinate, monster];

export default quests;