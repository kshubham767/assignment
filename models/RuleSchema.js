const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ruleSchema = new Schema({
  ruleString: { type: String, required: true, unique: true },
  ast: { type: Schema.Types.ObjectId, ref: "AST", required: true },
});

module.exports = mongoose.model("Rule", ruleSchema);
