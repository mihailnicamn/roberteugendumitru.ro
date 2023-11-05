
const _files = require('fs')
const _path = require('path')
const basicAuth = require('express-basic-auth')
const _express = require('express')()
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const _next = require('next')({ dev, hostname, port })
const handle = _next.getRequestHandler()
_express.use(require('express-fileupload')({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))
_express.use(require('body-parser').json(), require('body-parser').urlencoded({ extended: true }))
const _adminRouter = require('express').Router()

_next.prepare({
}).then(() => {
    _adminRouter.post('/api/uploadToProject/:id', async (req, res) => {
        let _res = await handleProjectUpdate(req)
        if (_res.error) return res.send(_res)
        _res = {..._res, ...(await handleProjectUpload(req))}
        res.send(_res)
    })
    _adminRouter.post('/api/updateProject/:id', async (req, res) => {
        res.send()
    })
    _adminRouter.post('/api/removeProject/:id', async (req, res) => {
        res.send(await handleProjectRemove(req))
    })
    _adminRouter.get('*', async (req, res) => {
        const query = req.query
        const pathname = `/admin${req.path}`
        const page = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
        return await _next.render(req, res, page, query)
    })
    _express.use('/admin', _adminRouter)

    _express.get('/api/projects', async (req, res) => {
        const result = await handleGetProjects(req)
        res.send(result)
    })
    _express.get('*', (req, res) => {
        return handle(req, res)
    })
    _express.listen(3001, () => {
        console.log('http://localhost:3001')
    })
})


const handleProjectUpload = async (req) => {
    const projectId = req.params.id
    if (!projectId) return { error: 'No project id provided' }
    const projectImages = _path.join(__dirname, 'public', 'projects', projectId, 'images')
    const projectPlans = _path.join(__dirname, 'public', 'projects', projectId, 'plans')
    if (!_files.existsSync(projectImages)) _files.mkdirSync(projectImages, { recursive: true })
    if (!_files.existsSync(projectPlans)) _files.mkdirSync(projectPlans, { recursive: true })
    let promises = []
    let _images = []
    let _plans = []
    if (req.files && req.files.images) {
        const images = req.files.images
        if (Array.isArray(images)) {
            _images = _images.concat([...images])
        } else {
            if (images) _images.push(images)
        }
    }
    if (req.files && req.files.plans) {
        const plans = req.files.plans
        if (Array.isArray(plans)) {
            _plans = _plans.concat([...plans])
        } else {
            if (plans) _plans.push(plans)
        }
    }
    _images.forEach(image => {
        const imageExtension = image.name.split('.').pop()
        const imageName = Math.random().toString(36).substring(7) + '.' + imageExtension
        promises.push(new Promise((resolve, reject) => {
            image.mv(_path.join(projectImages, imageName), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        }))
    })
    _plans.forEach(plan => {
        const planExtension = plan.name.split('.').pop()
        const planName = Math.random().toString(36).substring(7) + '.' + planExtension
        promises.push(new Promise((resolve, reject) => {
            plan.mv(_path.join(projectPlans, planName), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        }))
    })

    await Promise.all(promises)
    return { success: `Uploaded ${_images.length} images and ${_plans.length} plans` }
}

const updateProjectData = async (projectId, data={}) => {
    if(!_files.existsSync(_path.join(__dirname, 'public', 'projects', projectId))) _files.mkdirSync(_path.join(__dirname, 'public', 'projects', projectId), { recursive: true })
    if(!_files.existsSync(_path.join(__dirname, 'public', 'projects', projectId, 'data.json'))) _files.writeFileSync(_path.join(__dirname, 'public', 'projects', projectId, 'data.json'), JSON.stringify({}))
    let value = JSON.parse(_files.readFileSync(_path.join(__dirname, 'public', 'projects', projectId, 'data.json')))
    value = { ...value, ...data }
    _files.writeFileSync(_path.join(__dirname, 'public', 'projects', projectId, 'data.json'), JSON.stringify(value))
}


const handleProjectUpdate = async (req) => {
    const projectId = req.params.id
    if (!projectId) return { error: 'No project id provided' }
    const _body = req.body
    let promises = []
    let update = {}
    if (req.body.name) update.name = _body.name
    if (req.body.description) update.description = _body.description
    if (req.body.metadata) update.metadata = (()=>{
        try{
            return JSON.parse(_body.metadata)
        } catch (err){
            return {}
        }
    })()
    if (req.body.credits) update.credits = {}
    await updateProjectData(projectId, update)
    return { success: 'Project updated' }
}

const handleProjectRemove = async (req) => {
    const projectId = req.params.id
    if (!projectId) return { error: 'No project id provided' }
    const projectPath = _path.join(__dirname, 'public', 'projects', projectId)
    if (!_files.existsSync(projectPath)) return { error: 'Project does not exist' }
    _files.rmSync(projectPath, { recursive: true })
    return { success: 'Project removed' }
}

const handleGetProjects = async (req) => {
    if(!_files.existsSync(_path.join(__dirname, 'public', 'projects'))) _files.mkdirSync(_path.join(__dirname, 'public', 'projects'), { recursive: true })
    const projects = _files.readdirSync(_path.join(__dirname, 'public', 'projects'))
    return (await Promise.all(projects.map(async (project) => {
        const projectImages = _files.readdirSync(_path.join(__dirname, 'public', 'projects', project, 'images'))
        const projectPlans = _files.readdirSync(_path.join(__dirname, 'public', 'projects', project, 'plans'))
        const data = (()=>{
            try{
                return JSON.parse(_files.readFileSync(_path.join(__dirname, 'public', 'projects', project, 'data.json')))
            } catch (err){
                return {}
            }
        })()
        return {
            id: project,
            images: projectImages.map(image => `/projects/${project}/images/${image}`),
            plans: projectPlans.map(plan => `/projects/${project}/plans/${plan}`),
            ...data
        }
    })))
}