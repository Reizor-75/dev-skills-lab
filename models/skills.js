import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skillsSchema = new Schema({
  text: String,
  level: String
})

// Compile the schema into a model and export it
const Skill = mongoose.model('Skill', skillsSchema)

export {
  Skill
}