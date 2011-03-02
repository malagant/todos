// ==========================================================================
// Project:   Todos.Task Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

sc_require('models/task');

Todos.Task.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

 { guid: 1,
   isDone: false,
   description: "Essen kochen" },

 { guid: 2,
   isDone: true,
   description: "Bier kaufen" },

 { guid: 3,
   isDone: true,
   description: "Kacken gehen nicht vergessen" },

 { guid: 4,
   isDone: false,
   description: "Schlafen und so" },

 { guid: 5,
   isDone: true,
   description: "Ach hab ich echt vergessen, wa?" }

];
