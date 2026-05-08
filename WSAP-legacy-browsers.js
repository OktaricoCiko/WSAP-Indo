/************* 
 * Wsap *
 *************/


// store info about the experiment session:
let expName = 'WSAP';  // from the Builder filename that created this script
let expInfo = {
    'No Partisipan': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instruction1RoutineBegin());
flowScheduler.add(Instruction1RoutineEachFrame());
flowScheduler.add(Instruction1RoutineEnd());
flowScheduler.add(Instruction2RoutineBegin());
flowScheduler.add(Instruction2RoutineEachFrame());
flowScheduler.add(Instruction2RoutineEnd());
flowScheduler.add(Instruction3RoutineBegin());
flowScheduler.add(Instruction3RoutineEachFrame());
flowScheduler.add(Instruction3RoutineEnd());
const PtrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PtrialsLoopBegin(PtrialsLoopScheduler));
flowScheduler.add(PtrialsLoopScheduler);
flowScheduler.add(PtrialsLoopEnd);




flowScheduler.add(StartInstructionRoutineBegin());
flowScheduler.add(StartInstructionRoutineEachFrame());
flowScheduler.add(StartInstructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Practice_Trial.xlsx', 'path': 'Practice_Trial.xlsx'},
    {'name': 'trial.xlsx', 'path': 'trial.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["No Partisipan"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Instruction1Clock;
var Ins1;
var Next1;
var next1;
var Instruction2Clock;
var Ins2;
var Next2;
var next2;
var Instruction3Clock;
var StartPractice;
var Practice_Ins;
var PfixClock;
var P_fix;
var PPrime;
var PstimuliClock;
var PStimulus;
var Pnext;
var P_next;
var PanswerClock;
var PQuestion;
var P_answer;
var StartInstructionClock;
var Start_Ins;
var StartIns;
var fix_crossClock;
var Fixcross;
var Prime;
var stimuliClock;
var Stimuli;
var Space;
var Next;
var answerClock;
var Question;
var Answer;
var EndClock;
var Exit;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instruction1"
  Instruction1Clock = new util.Clock();
  Ins1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ins1',
    text: 'Anda akan melihat kata dan kalimat yang muncul di layar secara bergantian dengan urutan sebagai berikut:\n1. Sebuah kata akan muncul terlebih dahulu.\n2. Setelah itu, akan muncul sebuah kalimat.\n\nAnda diminta untuk menekan tombol <SPASI> pada papan ketik komputer setelah selesai membaca kalimat yang muncul pada layar.\n\nKemudian, akan muncul sebuah pertanyaan di layar mengenai apakah kata dan kalimat yang ditampilkan sebelumnya berkaitan atau tidak.\n\nAnda diminta menjawab IYA (menekan tombol 1) atau TIDAK (menekan tombol 0)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  Next1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Next1',
    text: 'Tekan tombo <SPASI> untuk melanjutkan',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -1.0 
  });
  
  next1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction2"
  Instruction2Clock = new util.Clock();
  Ins2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ins2',
    text: 'Perlu Diingat!\n1. Jawablah secepat mungkin, tapi tetap teliti\n2. Tidak ada jawaban benar atau salah\n3. Ikuti kesan pertama Anda\n4. Tetap fokus selama mengerjakan',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  Next2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Next2',
    text: 'Tekan tombol L untuk melanjutkan',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -1.0 
  });
  
  next2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction3"
  Instruction3Clock = new util.Clock();
  StartPractice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Practice_Ins = new visual.TextStim({
    win: psychoJS.window,
    name: 'Practice_Ins',
    text: 'Sebelum mengerjakan tes, anda akan melakukan sesi latihan terlebih dahulu.\n\nTekan P untuk memulai latihan',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Pfix"
  PfixClock = new util.Clock();
  P_fix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'P_fix', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([-1.0000, -1.0000, -1.0000]), 
    fillColor: new util.Color([-1.0000, -1.0000, -1.0000]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  PPrime = new visual.TextStim({
    win: psychoJS.window,
    name: 'PPrime',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Pstimuli"
  PstimuliClock = new util.Clock();
  PStimulus = new visual.TextStim({
    win: psychoJS.window,
    name: 'PStimulus',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  Pnext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pnext',
    text: 'Tekan <SPASI> untuk melanjutkan',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -1.0 
  });
  
  P_next = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Panswer"
  PanswerClock = new util.Clock();
  PQuestion = new visual.TextStim({
    win: psychoJS.window,
    name: 'PQuestion',
    text: 'Apakah situasi tersebut cocok dengan kata yang muncul sebelumnya?\n\nTekan 1 jika YA, tekan 0 jika TIDAK.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  P_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "StartInstruction"
  StartInstructionClock = new util.Clock();
  Start_Ins = new visual.TextStim({
    win: psychoJS.window,
    name: 'Start_Ins',
    text: 'Sesi latihan telah selesai\n\nTekan tombol M untuk memulai pengerjaan',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: 0.0 
  });
  
  StartIns = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix_cross"
  fix_crossClock = new util.Clock();
  Fixcross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Fixcross', units : 'height', 
    vertices: 'cross', size:[0.03, 0.03],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([-1, -1, -1]), 
    fillColor: new util.Color([-1, -1, -1]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  Prime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Prime',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "stimuli"
  stimuliClock = new util.Clock();
  Stimuli = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stimuli',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 2.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  Space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Next = new visual.TextStim({
    win: psychoJS.window,
    name: 'Next',
    text: 'Tekan <SPASI> untuk melanjutkan',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.0000, -1.0000, -1.0000]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "answer"
  answerClock = new util.Clock();
  Question = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question',
    text: 'Apakah situasi tersebut cocok dengan kata yang muncul sebelumnya?\n\nTekan 1 jika YA, tekan 0 jika TIDAK.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  Answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  Exit = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exit',
    text: 'Mohon tunggu, sedang menyimpan data.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1, -1, -1]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Instruction1MaxDurationReached;
var _next1_allKeys;
var Instruction1MaxDuration;
var Instruction1Components;
function Instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instruction1Clock.reset();
    routineTimer.reset();
    Instruction1MaxDurationReached = false;
    // update component parameters for each repeat
    next1.keys = undefined;
    next1.rt = undefined;
    _next1_allKeys = [];
    psychoJS.experiment.addData('Instruction1.started', globalClock.getTime());
    Instruction1MaxDuration = null
    // keep track of which components have finished
    Instruction1Components = [];
    Instruction1Components.push(Ins1);
    Instruction1Components.push(Next1);
    Instruction1Components.push(next1);
    
    Instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instruction1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction1' ---
    // get current time
    t = Instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Ins1* updates
    if (t >= 0.0 && Ins1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ins1.tStart = t;  // (not accounting for frame time here)
      Ins1.frameNStart = frameN;  // exact frame index
      
      Ins1.setAutoDraw(true);
    }
    
    
    // if Ins1 is active this frame...
    if (Ins1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Next1* updates
    if (t >= 2 && Next1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Next1.tStart = t;  // (not accounting for frame time here)
      Next1.frameNStart = frameN;  // exact frame index
      
      Next1.setAutoDraw(true);
    }
    
    
    // if Next1 is active this frame...
    if (Next1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *next1* updates
    if (t >= 2 && next1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next1.tStart = t;  // (not accounting for frame time here)
      next1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next1.clearEvents(); });
    }
    
    // if next1 is active this frame...
    if (next1.status === PsychoJS.Status.STARTED) {
      let theseKeys = next1.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _next1_allKeys = _next1_allKeys.concat(theseKeys);
      if (_next1_allKeys.length > 0) {
        next1.keys = _next1_allKeys[_next1_allKeys.length - 1].name;  // just the last key pressed
        next1.rt = _next1_allKeys[_next1_allKeys.length - 1].rt;
        next1.duration = _next1_allKeys[_next1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction1' ---
    Instruction1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instruction1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next1.corr, level);
    }
    psychoJS.experiment.addData('next1.keys', next1.keys);
    if (typeof next1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next1.rt', next1.rt);
        psychoJS.experiment.addData('next1.duration', next1.duration);
        routineTimer.reset();
        }
    
    next1.stop();
    // the Routine "Instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instruction2MaxDurationReached;
var _next2_allKeys;
var Instruction2MaxDuration;
var Instruction2Components;
function Instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instruction2Clock.reset();
    routineTimer.reset();
    Instruction2MaxDurationReached = false;
    // update component parameters for each repeat
    next2.keys = undefined;
    next2.rt = undefined;
    _next2_allKeys = [];
    psychoJS.experiment.addData('Instruction2.started', globalClock.getTime());
    Instruction2MaxDuration = null
    // keep track of which components have finished
    Instruction2Components = [];
    Instruction2Components.push(Ins2);
    Instruction2Components.push(Next2);
    Instruction2Components.push(next2);
    
    Instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instruction2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction2' ---
    // get current time
    t = Instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Ins2* updates
    if (t >= 0.0 && Ins2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ins2.tStart = t;  // (not accounting for frame time here)
      Ins2.frameNStart = frameN;  // exact frame index
      
      Ins2.setAutoDraw(true);
    }
    
    
    // if Ins2 is active this frame...
    if (Ins2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Next2* updates
    if (t >= 2 && Next2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Next2.tStart = t;  // (not accounting for frame time here)
      Next2.frameNStart = frameN;  // exact frame index
      
      Next2.setAutoDraw(true);
    }
    
    
    // if Next2 is active this frame...
    if (Next2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *next2* updates
    if (t >= 2 && next2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next2.tStart = t;  // (not accounting for frame time here)
      next2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next2.clearEvents(); });
    }
    
    // if next2 is active this frame...
    if (next2.status === PsychoJS.Status.STARTED) {
      let theseKeys = next2.getKeys({
        keyList: typeof 'l' === 'string' ? ['l'] : 'l', 
        waitRelease: false
      });
      _next2_allKeys = _next2_allKeys.concat(theseKeys);
      if (_next2_allKeys.length > 0) {
        next2.keys = _next2_allKeys[_next2_allKeys.length - 1].name;  // just the last key pressed
        next2.rt = _next2_allKeys[_next2_allKeys.length - 1].rt;
        next2.duration = _next2_allKeys[_next2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction2' ---
    Instruction2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instruction2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next2.corr, level);
    }
    psychoJS.experiment.addData('next2.keys', next2.keys);
    if (typeof next2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next2.rt', next2.rt);
        psychoJS.experiment.addData('next2.duration', next2.duration);
        routineTimer.reset();
        }
    
    next2.stop();
    // the Routine "Instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instruction3MaxDurationReached;
var _StartPractice_allKeys;
var Instruction3MaxDuration;
var Instruction3Components;
function Instruction3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instruction3Clock.reset();
    routineTimer.reset();
    Instruction3MaxDurationReached = false;
    // update component parameters for each repeat
    StartPractice.keys = undefined;
    StartPractice.rt = undefined;
    _StartPractice_allKeys = [];
    psychoJS.experiment.addData('Instruction3.started', globalClock.getTime());
    Instruction3MaxDuration = null
    // keep track of which components have finished
    Instruction3Components = [];
    Instruction3Components.push(StartPractice);
    Instruction3Components.push(Practice_Ins);
    
    Instruction3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instruction3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction3' ---
    // get current time
    t = Instruction3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *StartPractice* updates
    if (t >= 0.0 && StartPractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StartPractice.tStart = t;  // (not accounting for frame time here)
      StartPractice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { StartPractice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { StartPractice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { StartPractice.clearEvents(); });
    }
    
    // if StartPractice is active this frame...
    if (StartPractice.status === PsychoJS.Status.STARTED) {
      let theseKeys = StartPractice.getKeys({
        keyList: typeof 'p' === 'string' ? ['p'] : 'p', 
        waitRelease: false
      });
      _StartPractice_allKeys = _StartPractice_allKeys.concat(theseKeys);
      if (_StartPractice_allKeys.length > 0) {
        StartPractice.keys = _StartPractice_allKeys[_StartPractice_allKeys.length - 1].name;  // just the last key pressed
        StartPractice.rt = _StartPractice_allKeys[_StartPractice_allKeys.length - 1].rt;
        StartPractice.duration = _StartPractice_allKeys[_StartPractice_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Practice_Ins* updates
    if (t >= 0.0 && Practice_Ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_Ins.tStart = t;  // (not accounting for frame time here)
      Practice_Ins.frameNStart = frameN;  // exact frame index
      
      Practice_Ins.setAutoDraw(true);
    }
    
    
    // if Practice_Ins is active this frame...
    if (Practice_Ins.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instruction3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction3' ---
    Instruction3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instruction3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(StartPractice.corr, level);
    }
    psychoJS.experiment.addData('StartPractice.keys', StartPractice.keys);
    if (typeof StartPractice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('StartPractice.rt', StartPractice.rt);
        psychoJS.experiment.addData('StartPractice.duration', StartPractice.duration);
        routineTimer.reset();
        }
    
    StartPractice.stop();
    // the Routine "Instruction3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Ptrials;
function PtrialsLoopBegin(PtrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Ptrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Practice_Trial.xlsx',
      seed: undefined, name: 'Ptrials'
    });
    psychoJS.experiment.addLoop(Ptrials); // add the loop to the experiment
    currentLoop = Ptrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Ptrials.forEach(function() {
      snapshot = Ptrials.getSnapshot();
    
      PtrialsLoopScheduler.add(importConditions(snapshot));
      PtrialsLoopScheduler.add(PfixRoutineBegin(snapshot));
      PtrialsLoopScheduler.add(PfixRoutineEachFrame());
      PtrialsLoopScheduler.add(PfixRoutineEnd(snapshot));
      PtrialsLoopScheduler.add(PstimuliRoutineBegin(snapshot));
      PtrialsLoopScheduler.add(PstimuliRoutineEachFrame());
      PtrialsLoopScheduler.add(PstimuliRoutineEnd(snapshot));
      PtrialsLoopScheduler.add(PanswerRoutineBegin(snapshot));
      PtrialsLoopScheduler.add(PanswerRoutineEachFrame());
      PtrialsLoopScheduler.add(PanswerRoutineEnd(snapshot));
      PtrialsLoopScheduler.add(PtrialsLoopEndIteration(PtrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function PtrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Ptrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function PtrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fix_crossRoutineBegin(snapshot));
      trialsLoopScheduler.add(fix_crossRoutineEachFrame());
      trialsLoopScheduler.add(fix_crossRoutineEnd(snapshot));
      trialsLoopScheduler.add(stimuliRoutineBegin(snapshot));
      trialsLoopScheduler.add(stimuliRoutineEachFrame());
      trialsLoopScheduler.add(stimuliRoutineEnd(snapshot));
      trialsLoopScheduler.add(answerRoutineBegin(snapshot));
      trialsLoopScheduler.add(answerRoutineEachFrame());
      trialsLoopScheduler.add(answerRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var PfixMaxDurationReached;
var PfixMaxDuration;
var PfixComponents;
function PfixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pfix' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PfixClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    PfixMaxDurationReached = false;
    // update component parameters for each repeat
    PPrime.setText(Pprime);
    psychoJS.experiment.addData('Pfix.started', globalClock.getTime());
    PfixMaxDuration = null
    // keep track of which components have finished
    PfixComponents = [];
    PfixComponents.push(P_fix);
    PfixComponents.push(PPrime);
    
    PfixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function PfixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pfix' ---
    // get current time
    t = PfixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *P_fix* updates
    if (t >= 0.0 && P_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      P_fix.tStart = t;  // (not accounting for frame time here)
      P_fix.frameNStart = frameN;  // exact frame index
      
      P_fix.setAutoDraw(true);
    }
    
    
    // if P_fix is active this frame...
    if (P_fix.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (P_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      P_fix.tStop = t;  // not accounting for scr refresh
      P_fix.frameNStop = frameN;  // exact frame index
      // update status
      P_fix.status = PsychoJS.Status.FINISHED;
      P_fix.setAutoDraw(false);
    }
    
    
    // *PPrime* updates
    if (t >= 0.5 && PPrime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PPrime.tStart = t;  // (not accounting for frame time here)
      PPrime.frameNStart = frameN;  // exact frame index
      
      PPrime.setAutoDraw(true);
    }
    
    
    // if PPrime is active this frame...
    if (PPrime.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (PPrime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      PPrime.tStop = t;  // not accounting for scr refresh
      PPrime.frameNStop = frameN;  // exact frame index
      // update status
      PPrime.status = PsychoJS.Status.FINISHED;
      PPrime.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PfixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PfixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pfix' ---
    PfixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pfix.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (PfixMaxDurationReached) {
        PfixClock.add(PfixMaxDuration);
    } else {
        PfixClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PstimuliMaxDurationReached;
var _P_next_allKeys;
var PstimuliMaxDuration;
var PstimuliComponents;
function PstimuliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pstimuli' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PstimuliClock.reset();
    routineTimer.reset();
    PstimuliMaxDurationReached = false;
    // update component parameters for each repeat
    PStimulus.setText(Pstimulus);
    P_next.keys = undefined;
    P_next.rt = undefined;
    _P_next_allKeys = [];
    psychoJS.experiment.addData('Pstimuli.started', globalClock.getTime());
    PstimuliMaxDuration = null
    // keep track of which components have finished
    PstimuliComponents = [];
    PstimuliComponents.push(PStimulus);
    PstimuliComponents.push(Pnext);
    PstimuliComponents.push(P_next);
    
    PstimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PstimuliRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pstimuli' ---
    // get current time
    t = PstimuliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PStimulus* updates
    if (t >= 0.0 && PStimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PStimulus.tStart = t;  // (not accounting for frame time here)
      PStimulus.frameNStart = frameN;  // exact frame index
      
      PStimulus.setAutoDraw(true);
    }
    
    
    // if PStimulus is active this frame...
    if (PStimulus.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Pnext* updates
    if (t >= 1 && Pnext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pnext.tStart = t;  // (not accounting for frame time here)
      Pnext.frameNStart = frameN;  // exact frame index
      
      Pnext.setAutoDraw(true);
    }
    
    
    // if Pnext is active this frame...
    if (Pnext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *P_next* updates
    if (t >= 1 && P_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      P_next.tStart = t;  // (not accounting for frame time here)
      P_next.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { P_next.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { P_next.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { P_next.clearEvents(); });
    }
    
    // if P_next is active this frame...
    if (P_next.status === PsychoJS.Status.STARTED) {
      let theseKeys = P_next.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _P_next_allKeys = _P_next_allKeys.concat(theseKeys);
      if (_P_next_allKeys.length > 0) {
        P_next.keys = _P_next_allKeys[_P_next_allKeys.length - 1].name;  // just the last key pressed
        P_next.rt = _P_next_allKeys[_P_next_allKeys.length - 1].rt;
        P_next.duration = _P_next_allKeys[_P_next_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PstimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PstimuliRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pstimuli' ---
    PstimuliComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Pstimuli.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(P_next.corr, level);
    }
    psychoJS.experiment.addData('P_next.keys', P_next.keys);
    if (typeof P_next.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('P_next.rt', P_next.rt);
        psychoJS.experiment.addData('P_next.duration', P_next.duration);
        routineTimer.reset();
        }
    
    P_next.stop();
    // the Routine "Pstimuli" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PanswerMaxDurationReached;
var _P_answer_allKeys;
var PanswerMaxDuration;
var PanswerComponents;
function PanswerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Panswer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PanswerClock.reset();
    routineTimer.reset();
    PanswerMaxDurationReached = false;
    // update component parameters for each repeat
    P_answer.keys = undefined;
    P_answer.rt = undefined;
    _P_answer_allKeys = [];
    psychoJS.experiment.addData('Panswer.started', globalClock.getTime());
    PanswerMaxDuration = null
    // keep track of which components have finished
    PanswerComponents = [];
    PanswerComponents.push(PQuestion);
    PanswerComponents.push(P_answer);
    
    PanswerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PanswerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Panswer' ---
    // get current time
    t = PanswerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PQuestion* updates
    if (t >= 0.0 && PQuestion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PQuestion.tStart = t;  // (not accounting for frame time here)
      PQuestion.frameNStart = frameN;  // exact frame index
      
      PQuestion.setAutoDraw(true);
    }
    
    
    // if PQuestion is active this frame...
    if (PQuestion.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *P_answer* updates
    if (t >= 0.0 && P_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      P_answer.tStart = t;  // (not accounting for frame time here)
      P_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { P_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { P_answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { P_answer.clearEvents(); });
    }
    
    // if P_answer is active this frame...
    if (P_answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = P_answer.getKeys({
        keyList: typeof ['1','0'] === 'string' ? [['1','0']] : ['1','0'], 
        waitRelease: false
      });
      _P_answer_allKeys = _P_answer_allKeys.concat(theseKeys);
      if (_P_answer_allKeys.length > 0) {
        P_answer.keys = _P_answer_allKeys[_P_answer_allKeys.length - 1].name;  // just the last key pressed
        P_answer.rt = _P_answer_allKeys[_P_answer_allKeys.length - 1].rt;
        P_answer.duration = _P_answer_allKeys[_P_answer_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PanswerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PanswerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Panswer' ---
    PanswerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Panswer.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(P_answer.corr, level);
    }
    psychoJS.experiment.addData('P_answer.keys', P_answer.keys);
    if (typeof P_answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('P_answer.rt', P_answer.rt);
        psychoJS.experiment.addData('P_answer.duration', P_answer.duration);
        routineTimer.reset();
        }
    
    P_answer.stop();
    // the Routine "Panswer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var StartInstructionMaxDurationReached;
var _StartIns_allKeys;
var StartInstructionMaxDuration;
var StartInstructionComponents;
function StartInstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'StartInstruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    StartInstructionClock.reset();
    routineTimer.reset();
    StartInstructionMaxDurationReached = false;
    // update component parameters for each repeat
    StartIns.keys = undefined;
    StartIns.rt = undefined;
    _StartIns_allKeys = [];
    psychoJS.experiment.addData('StartInstruction.started', globalClock.getTime());
    StartInstructionMaxDuration = null
    // keep track of which components have finished
    StartInstructionComponents = [];
    StartInstructionComponents.push(Start_Ins);
    StartInstructionComponents.push(StartIns);
    
    StartInstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StartInstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'StartInstruction' ---
    // get current time
    t = StartInstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Start_Ins* updates
    if (t >= 0.0 && Start_Ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_Ins.tStart = t;  // (not accounting for frame time here)
      Start_Ins.frameNStart = frameN;  // exact frame index
      
      Start_Ins.setAutoDraw(true);
    }
    
    
    // if Start_Ins is active this frame...
    if (Start_Ins.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *StartIns* updates
    if (t >= 0.0 && StartIns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StartIns.tStart = t;  // (not accounting for frame time here)
      StartIns.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { StartIns.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { StartIns.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { StartIns.clearEvents(); });
    }
    
    // if StartIns is active this frame...
    if (StartIns.status === PsychoJS.Status.STARTED) {
      let theseKeys = StartIns.getKeys({
        keyList: typeof 'm' === 'string' ? ['m'] : 'm', 
        waitRelease: false
      });
      _StartIns_allKeys = _StartIns_allKeys.concat(theseKeys);
      if (_StartIns_allKeys.length > 0) {
        StartIns.keys = _StartIns_allKeys[_StartIns_allKeys.length - 1].name;  // just the last key pressed
        StartIns.rt = _StartIns_allKeys[_StartIns_allKeys.length - 1].rt;
        StartIns.duration = _StartIns_allKeys[_StartIns_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StartInstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StartInstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'StartInstruction' ---
    StartInstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('StartInstruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(StartIns.corr, level);
    }
    psychoJS.experiment.addData('StartIns.keys', StartIns.keys);
    if (typeof StartIns.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('StartIns.rt', StartIns.rt);
        psychoJS.experiment.addData('StartIns.duration', StartIns.duration);
        routineTimer.reset();
        }
    
    StartIns.stop();
    // the Routine "StartInstruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fix_crossMaxDurationReached;
var fix_crossMaxDuration;
var fix_crossComponents;
function fix_crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_cross' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fix_crossClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    fix_crossMaxDurationReached = false;
    // update component parameters for each repeat
    Prime.setText(prime);
    psychoJS.experiment.addData('fix_cross.started', globalClock.getTime());
    fix_crossMaxDuration = null
    // keep track of which components have finished
    fix_crossComponents = [];
    fix_crossComponents.push(Fixcross);
    fix_crossComponents.push(Prime);
    
    fix_crossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fix_crossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_cross' ---
    // get current time
    t = fix_crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Fixcross* updates
    if (t >= 0.0 && Fixcross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fixcross.tStart = t;  // (not accounting for frame time here)
      Fixcross.frameNStart = frameN;  // exact frame index
      
      Fixcross.setAutoDraw(true);
    }
    
    
    // if Fixcross is active this frame...
    if (Fixcross.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Fixcross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Fixcross.tStop = t;  // not accounting for scr refresh
      Fixcross.frameNStop = frameN;  // exact frame index
      // update status
      Fixcross.status = PsychoJS.Status.FINISHED;
      Fixcross.setAutoDraw(false);
    }
    
    
    // *Prime* updates
    if (t >= 0.5 && Prime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Prime.tStart = t;  // (not accounting for frame time here)
      Prime.frameNStart = frameN;  // exact frame index
      
      Prime.setAutoDraw(true);
    }
    
    
    // if Prime is active this frame...
    if (Prime.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Prime.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Prime.tStop = t;  // not accounting for scr refresh
      Prime.frameNStop = frameN;  // exact frame index
      // update status
      Prime.status = PsychoJS.Status.FINISHED;
      Prime.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fix_crossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_crossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_cross' ---
    fix_crossComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fix_cross.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fix_crossMaxDurationReached) {
        fix_crossClock.add(fix_crossMaxDuration);
    } else {
        fix_crossClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimuliMaxDurationReached;
var _Space_allKeys;
var stimuliMaxDuration;
var stimuliComponents;
function stimuliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimuli' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stimuliClock.reset();
    routineTimer.reset();
    stimuliMaxDurationReached = false;
    // update component parameters for each repeat
    Stimuli.setText(stimulus);
    Space.keys = undefined;
    Space.rt = undefined;
    _Space_allKeys = [];
    psychoJS.experiment.addData('stimuli.started', globalClock.getTime());
    stimuliMaxDuration = null
    // keep track of which components have finished
    stimuliComponents = [];
    stimuliComponents.push(Stimuli);
    stimuliComponents.push(Space);
    stimuliComponents.push(Next);
    
    stimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimuliRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimuli' ---
    // get current time
    t = stimuliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Stimuli* updates
    if (t >= 0 && Stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimuli.tStart = t;  // (not accounting for frame time here)
      Stimuli.frameNStart = frameN;  // exact frame index
      
      Stimuli.setAutoDraw(true);
    }
    
    
    // if Stimuli is active this frame...
    if (Stimuli.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Space* updates
    if (t >= 1 && Space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Space.tStart = t;  // (not accounting for frame time here)
      Space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Space.clearEvents(); });
    }
    
    // if Space is active this frame...
    if (Space.status === PsychoJS.Status.STARTED) {
      let theseKeys = Space.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _Space_allKeys = _Space_allKeys.concat(theseKeys);
      if (_Space_allKeys.length > 0) {
        Space.keys = _Space_allKeys[_Space_allKeys.length - 1].name;  // just the last key pressed
        Space.rt = _Space_allKeys[_Space_allKeys.length - 1].rt;
        Space.duration = _Space_allKeys[_Space_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Next* updates
    if (t >= 1 && Next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Next.tStart = t;  // (not accounting for frame time here)
      Next.frameNStart = frameN;  // exact frame index
      
      Next.setAutoDraw(true);
    }
    
    
    // if Next is active this frame...
    if (Next.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimuliRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimuli' ---
    stimuliComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('stimuli.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Space.corr, level);
    }
    psychoJS.experiment.addData('Space.keys', Space.keys);
    if (typeof Space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Space.rt', Space.rt);
        psychoJS.experiment.addData('Space.duration', Space.duration);
        routineTimer.reset();
        }
    
    Space.stop();
    // the Routine "stimuli" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var answerMaxDurationReached;
var _Answer_allKeys;
var answerMaxDuration;
var answerComponents;
function answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    answerClock.reset();
    routineTimer.reset();
    answerMaxDurationReached = false;
    // update component parameters for each repeat
    Answer.keys = undefined;
    Answer.rt = undefined;
    _Answer_allKeys = [];
    psychoJS.experiment.addData('answer.started', globalClock.getTime());
    answerMaxDuration = null
    // keep track of which components have finished
    answerComponents = [];
    answerComponents.push(Question);
    answerComponents.push(Answer);
    
    answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'answer' ---
    // get current time
    t = answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Question* updates
    if (t >= 0.0 && Question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question.tStart = t;  // (not accounting for frame time here)
      Question.frameNStart = frameN;  // exact frame index
      
      Question.setAutoDraw(true);
    }
    
    
    // if Question is active this frame...
    if (Question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Answer* updates
    if (t >= 0.0 && Answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answer.tStart = t;  // (not accounting for frame time here)
      Answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Answer.clearEvents(); });
    }
    
    // if Answer is active this frame...
    if (Answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = Answer.getKeys({
        keyList: typeof ['0','1'] === 'string' ? [['0','1']] : ['0','1'], 
        waitRelease: false
      });
      _Answer_allKeys = _Answer_allKeys.concat(theseKeys);
      if (_Answer_allKeys.length > 0) {
        Answer.keys = _Answer_allKeys[0].name;  // just the first key pressed
        Answer.rt = _Answer_allKeys[0].rt;
        Answer.duration = _Answer_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'answer' ---
    answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('answer.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Answer.corr, level);
    }
    psychoJS.experiment.addData('Answer.keys', Answer.keys);
    if (typeof Answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Answer.rt', Answer.rt);
        psychoJS.experiment.addData('Answer.duration', Answer.duration);
        routineTimer.reset();
        }
    
    Answer.stop();
    // the Routine "answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndClock.reset();
    routineTimer.reset();
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString();
    }).join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'j8SbWj3G2vW7', // UPDATE WITH YOUR DATAPIPE EXPERIMENT ID
            filename: filename,
            data: data,
        }),
    })
    .then(response => response.json())
    .then(result => {
        // Log response and force experiment end
        console.log(result);
        quitPsychoJS();
    })
    .catch(err => {
        // Handle network or server errors
        console.error('Failed to save data:', err);
    });
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = 3
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(Exit);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > EndMaxDuration) {
        EndMaxDurationReached = true
        continueRoutine = false
    }
    
    // *Exit* updates
    if (t >= 0.0 && Exit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Exit.tStart = t;  // (not accounting for frame time here)
      Exit.frameNStart = frameN;  // exact frame index
      
      Exit.setAutoDraw(true);
    }
    
    
    // if Exit is active this frame...
    if (Exit.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
