Blockly.Python['import_bleepbloop'] = function(block) {
    var code = 'import bleepbloop\n';
    return code;
};

Blockly.Python['bleepbloop_bleep'] = function(block) {
    var code = 'bleepbloop.bleep()\n';
    return code;
};

Blockly.Python['bleepbloop_bloop'] = function(block) {
    var code = 'bleepbloop.bleep()\n';
    return code;
};

Blockly.Python['bleepbloop_blorp'] = function(block) {
    var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    var code = `bleepbloop.blorp(${parameters})\n`;
    return code;
};