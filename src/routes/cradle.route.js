import {Router} from "express"

const cradleRouter = Router()

//create cradle
cradleRouter.post("/", ()=> {});

//get all cradle
cradleRouter.get("/", ()=> {});
 
//get one cradle
cradleRouter.get('/:cradleId', () => {})

//update cradle
cradleRouter.put('/:cradleId', () => {})

//delete cradle
cradleRouter.delete('/:cradleId', () => {})


export default cradleRouter