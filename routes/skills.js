import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
// GET localhost:3000/skills/new
router.get('/:skillId', skillsCtrl.show)
// POST localhost:3000/skills/
router.post('/', skillsCtrl.create)
// POST localhost:3000/skills/
router.delete('/', skillsCtrl.delete)

export { router }
