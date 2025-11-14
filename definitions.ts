const bleepColor = "#5b5b6b";

Blockly.Blocks['import_bleepbloop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("import bleepbloop");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(bleepColor);
    }
};

Blockly.Blocks['bleepbloop_bleep'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("bleepbloop.bleep()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(bleepColor);
    }
};


Blockly.Blocks['bleepbloop_bloop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("bleepbloop.bloop()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(bleepColor);
    }
};

Blockly.Blocks['bleepbloop_blorp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("bleepbloop.blorp(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(bleepColor);
    }
};