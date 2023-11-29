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
