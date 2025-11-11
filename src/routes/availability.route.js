import {Router} from "express"

const availabilityLogRouter = Router()

//create  availabilityLog
availabilityLogRouter.post('/', () => {})

// get all  availabilityLog
availabilityLogRouter.get('/', () => {})

//get one  availabilityLog
availabilityLogRouter.get('/:availabilityLog', () => {})

// update  availabilityLog
availabilityLogRouter.put('/:availabilityLog', () => {})

//delete  availabilityLog
availabilityLogRouter.delete('/:availabilityLog', () => {})

export default availabilityLogRouter