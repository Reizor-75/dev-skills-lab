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
        skills: skills,
        time: req.time
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

function create(req, res){
  Skill.create(req.body)
  .then(skill =>{
    res.redirect("/skills")
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res){
  Skill.findById(req.params.skillId)
    .then(skill =>{
      res.render("skills/show", {
        skill:skill
      })
    })
    .catch(error =>{
      console.log(error)
      res.redirect('/skills')
    })
}

function deleteSkill(req, res){
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill =>{
    res.redirect('/skills')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/skills')
  })
}

function edit(req, res){
  Skill.findById(req.params.skillId)
  .then(skill =>{
    res.render("skills/edit", {
      skill:skill
    })
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/')
  })
}

function update(req, res){  
  Skill.findByIdAndUpdate(req.params.skillId, req.body, {new:true})
  .then(skill =>{
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/')
  })
}

export {
	index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update
}