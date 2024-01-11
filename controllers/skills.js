// import { skills } from '../data/skill-data.js' garbage
import  { Skill } from "../models/skills.js"

function index(req, res) {
  //garbage
  // res.render('skills/index', {
  //   skills: skills
  // })

  Skill.find({})
    .then(skills =>{
      res.render('skills/index', {
        skills: skills
      })
    })
    .catch(error => { 
      console.log(error)
      res.redirect('/')
    })
}

function newSkill(req, res){
  res.render("skills/new")
}

export {
	index,
  newSkill as new
}