'use strict';

const ioHook = require('iohook');

ioHook.on('keydown', event => {
  console.log(event); // 
});

// Register and start hook
ioHook.start();