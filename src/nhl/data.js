SLOT_TYPE_CENTER = 'C';
SLOT_TYPE_LEFT_WING = 'LW';
SLOT_TYPE_RIGHT_WING = 'RW';
SLOT_TYPE_FORWARD = 'F';
SLOT_TYPE_DEFENSEMAN = 'D';
SLOT_TYPE_GOALIE = 'G';
SLOT_TYPE_UTIL = 'UTIL';
SLOT_TYPE_BENCH = 'Bench';
SLOT_TYPE_IR = 'IR';

POSITION_SLOT_MAPPING = {
    'C': [SLOT_TYPE_CENTER, SLOT_TYPE_FORWARD, SLOT_TYPE_UTIL],
    'LW': [SLOT_TYPE_LEFT_WING, SLOT_TYPE_FORWARD, SLOT_TYPE_UTIL],
    'RW': [SLOT_TYPE_RIGHT_WING, SLOT_TYPE_FORWARD, SLOT_TYPE_UTIL],
    'F': [SLOT_TYPE_FORWARD, SLOT_TYPE_UTIL],
    'D': [SLOT_TYPE_DEFENSEMAN, SLOT_TYPE_UTIL],
    'G': [SLOT_TYPE_GOALIE],
}

function parseSlotType(text) {
    switch (text) {
        case 'C': return SLOT_TYPE_CENTER
        case 'LW': return SLOT_TYPE_LEFT_WING
        case 'RW': return SLOT_TYPE_RIGHT_WING
        case 'F': return SLOT_TYPE_FORWARD;
        case 'D': return SLOT_TYPE_DEFENSEMAN;
        case 'G': return SLOT_TYPE_GOALIE;
        case 'UTIL': return SLOT_TYPE_UTIL;
        case 'Bench': return SLOT_TYPE_BENCH;
        case 'IR': return SLOT_TYPE_IR;
        default: throw new Error('Unknown slot type: ' + text);
    }
}
