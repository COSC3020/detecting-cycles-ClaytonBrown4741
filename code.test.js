const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
dm1 = {};
assert(hasCycle(dm1) == false);
dm2 = {'foo': {'boo': 7},
    'boo': {'foo': 3, 'bar': 2},
    'bar': {'boo': 4}};
assert(hasCycle(dm2) == true);
dm3 = {'foo': {'boo': 7},
    'boo': {'bar': 2},
    'bar': {}};
assert(hasCycle(dm3) == false);
dm4 = {'foo': {}};
assert(hasCycle(dm4) == false);
dm5 = {'foo': {'boo': 7},
    'boo': {'bar': 2},
    'bar': {'boo': 4}};
assert(hasCycle(dm5) == true);
dm6 = {'foo': {'boo': 7},
    'boo': {'bar': 2},
    'bar': {'e': 4},
     'e': {'bar': 3}};
assert(hasCycle(dm6) == true)
dm7 = {'foo': {'boo': 7, 'bar': 3},
    'boo': {'bar': 2},
    'bar': {'e': 4},
     'e': {}};
assert(hasCycle(dm7) == false)
dm8 = {'foo': {'boo': 7, 'bar': 3},
    'boo': {'bar': 2},
    'bar': {'e': 4},
     'e': {'boo': 3}};
assert(hasCycle(dm8) == true)
