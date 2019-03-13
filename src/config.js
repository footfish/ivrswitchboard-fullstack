export const newSwitchboard =  {
    id : "1",
    number: "loading..",
    routeOption : "scheduled",  //scheduled, alwaysOpen, alwaysClosed
    schedule : {
      openHours: {  "mon": { active: true, begin: "09:00", end: "17:00" },
                    "tue": { active: true, begin: "09:00", end: "17:00" },
                    "wed": { active: true, begin: "09:00", end: "17:00" },
                    "thu": { active: true, begin: "09:00", end: "17:00" },
                    "fri": { active: true, begin: "09:00", end: "13:00" },
                    "sat": { active: false, begin: "09:00", end: "17:00" },
                    "sun": { active: false, begin: "09:00", end: "17:00" }
                },
      lunchHours: { "mon": { active: true, begin: "13:00", end: "14:00" },
                    "tue": { active: true, begin: "13:00", end: "14:00" },
                    "wed": { active: true, begin: "13:00", end: "14:00" },
                    "thu": { active: true, begin: "13:00", end: "14:00" },
                    "fri": { active: false, begin: "13:00", end: "13:00" },
                    "sat": { active: false, begin: "09:00", end: "17:00" },
                    "sun": { active: false, begin: "09:00", end: "17:00" }
                }
    },
    openMenu : { 
      emailNotification: true,
      greeting : { recordingId: 0, times: 3 },
      menu : {  //'1', '2', .... '10' (star), '11'(hash), 'none'. 
        'none': [ { action: "playRecording", recordingId: 1 },
                { action: "backToMenu" }
               ]
    }
    },
    closedMenu : { 
      emailNotification: false,
      greeting : { recordingId: 1, times: 3 },
      menu : {
        'none': [ { action: "playRecording", recordingId: 1 },
                { action: "backToMenu" }
               ]
      }
    },
    recordings : [{ label: "Default open greeting", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_Fizzer140C-05.mp3"} , { label: "Default closed greeting", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_BeatF145-01.mp3"}]
  }

export const dummySwitchboard =  {
    id : "123",
    number: "084412314555",
    routeOption : "alwaysOpen",  //scheduled, alwaysOpen, alwaysClosed
    schedule : {
      openHours: {  "mon": { active: true, begin: "09:00", end: "17:00" },
                    "tue": { active: true, begin: "09:00", end: "17:00" },
                    "wed": { active: true, begin: "09:00", end: "17:00" },
                    "thu": { active: true, begin: "09:00", end: "17:00" },
                    "fri": { active: true, begin: "09:00", end: "13:00" },
                    "sat": { active: false, begin: "09:00", end: "17:00" },
                    "sun": { active: false, begin: "09:00", end: "17:00" }
                },
      lunchHours: { "mon": { active: true, begin: "13:00", end: "14:00" },
                    "tue": { active: true, begin: "13:00", end: "14:00" },
                    "wed": { active: true, begin: "13:00", end: "14:00" },
                    "thu": { active: true, begin: "13:00", end: "14:00" },
                    "fri": { active: false, begin: "13:00", end: "13:00" },
                    "sat": { active: false, begin: "09:00", end: "17:00" },
                    "sun": { active: false, begin: "09:00", end: "17:00" }
                }
    },
    openMenu : { 
      emailNotification: true,
      greeting : { recordingId: 1, times: 2 },
      menu : {  //'1', '2', .... '10' (star), '11'(hash), 'none'. 
        '1': [ { action: "notifyEmail", email: "valid@dom@ain.co.uk", label: "this-is_an invalid-label" },
                    { action: "forwardToNumberConfirm", number: "", ringTimer: 30 },
                    { action: "analytics", label: "my-label" }
                  ],
        '2': [  { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label" },
                  { action: "playRecording", recordingId: 1 },
                  { action: "forwardToNumber", number: "0861217464", ringTimer: 30 }
                ],
        'none': [ { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label" },
                { action: "forwardToNumber", number: "0861217464", ringTimer: 30 },
                { action: "analytics", label: "my-label" },
                { action: "backToMenu" }
               ]
    }
    },
    closedMenu : { 
      emailNotification: false,
      greeting : { recordingId: 2, times: 1 },
      menu : {
        'none': [ { action: "notifyEmail", email: "valid@domain.co.uk", label: "this-is_a_valid-label" },
                    { action: "forwardToNumber", number: "0861217464", ringTimer: 30 }
                  ]
      }
    },
    recordings : [{ label: "Recording 1", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_Fizzer140C-05.mp3"} , { label: "Recording 2", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_BeatF145-01.mp3"},  {label: "Recording 3", src: "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_DubPad145G-01.mp3"}]
  }

export const mockSwitchboardJSON = `{
    "id" : "123",
    "number": "084412314555",
    "routeOption" : "scheduled",  
    "schedule" : {
      "openHours": {  "mon": { "active": true, "begin": "09:00", "end": "17:00" },
                    "tue": { "active": true, "begin": "09:00", "end": "17:00" },
                    "wed": { "active": true, "begin": "09:00", "end": "17:00" },
                    "thu": { "active": true, "begin": "09:00", "end": "17:00" },
                    "fri": { "active": true, "begin": "09:00", "end": "13:00" },
                    "sat": { "active": false, "begin": "09:00", "end": "17:00" },
                    "sun": { "active": false, "begin": "09:00", "end": "17:00" }
                },
      "lunchHours": { "mon": { "active": true, "begin": "13:00", "end": "14:00" },
                    "tue": { "active": true, "begin": "13:00", "end": "14:00" },
                    "wed": { "active": true, "begin": "13:00", "end": "14:00" },
                    "thu": { "active": true, "begin": "13:00", "end": "14:00" },
                    "fri": { "active": false, "begin": "13:00", "end": "13:00" },
                    "sat": { "active": false, "begin": "09:00", "end": "17:00" },
                    "sun": { "active": false, "begin": "09:00", "end": "17:00" }
                }
    },    
    "openMenu" : { 
    "emailNotification": true,
    "greeting" : { "recordingId": 1, "times": 2 },
    "menu" : {  
      "1": [ { "action": "notifyEmail", "email": "valid@dom@ain.co.uk", "label": "this-is_an invalid-label" },
                  { "action": "forwardToNumberConfirm", "number": "", "ringTimer": 30 },
                  { "action": "analytics", "label": "my-label" }
                ],
      "3": [  { "action": "notifyEmail", "email": "valid@domain.co.uk", "label": "this-is_a_valid-label" },
                { "action": "playRecording", "recordingId": 1 },
                { "action": "forwardToNumber", "number": "0861217464", "ringTimer": 30 }
              ],
      "none": [ { "action": "notifyEmail", "email": "valid@domain.co.uk", "label": "this-is_a_valid-label" },
              { "action": "forwardToNumber", "number": "0861217464", "ringTimer": 30 },
              { "action": "analytics", "label": "my-label" },
              { "action": "backToMenu" }
             ]
            }
     },
     "closedMenu" : { 
        "emailNotification": false,
        "greeting" : { "recordingId": 2, "times": 1 },
        "menu" : {
          "none": [ { "action": "notifyEmail", "email": "valid@domain.co.uk", "label": "this-is_a_valid-label" },
                      { "action": "forwardToNumber", "number": "0861217464", "ringTimer": 30 }
                    ]
        }
      },
      "recordings" : [{ "label": "Recording 1", "src": "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_Fizzer140C-05.mp3"} , 
                      { "label": "Recording 2", "src": "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_BeatF145-01.mp3"},
                      {"label": "Recording 3", "src": "http://cdn.mos.musicradar.com/audio/samples/dubstep-demo-loops/DS_DubPad145G-01.mp3"}]
}`
