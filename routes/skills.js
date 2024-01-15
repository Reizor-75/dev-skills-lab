import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
// GET localhost:3000/skills/:todoId
router.get('/:skillId', skillsCtrl.show)
// GET localhost:3000/skills/:todoId/edit
router.get('/:skillId/edit', skillsCtrl.edit)
// PUT localhost:3000/todos/:todoId/update
router.put('/:skillId', skillsCtrl.update)
// POST localhost:3000/skills/
router.post('/', skillsCtrl.create)
// DELETE localhost:3000/skills/
router.delete('/:skillId', skillsCtrl.delete)

export { router }
