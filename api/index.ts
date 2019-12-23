const express = require('express')
const service = require('../service')
const router = express.Router()

router.get('/addRepo', (req, res, next)=>{
    const title = `Add Repository`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('add_repo', {layout: 'layout/default', title: title, menuData: menuData})
})
router.get('/createBranch', (req, res, next)=>{
    const title = `Create Branch`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('create_branch', {layout: 'layout/default', title: title, menuData: menuData})
})
router.get('/renameBranch', (req, res, next)=>{
    const title = `Rename Branch`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('rename_branch', {layout: 'layout/default', title: title, menuData: menuData})
})
router.get('/showAllBranches', (req, res, next)=>{
    const title = `Show all Branches`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('show_branches', {layout: 'layout/default', title: title, menuData: menuData})
})
router.get('/showJenkinsBranches', (req, res, next)=>{
    const title = `Show All Branches being monitored by Jenkins`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('show_branches', {layout: 'layout/default', title: title, menuData: menuData})
})
router.get('/removeBranchFromJenkins', (req, res, next)=>{
    const title = `Remove Branch from Jenkins`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('remove_branch_from_jenkins', {layout: 'layout/default', title: title, menuData: menuData})
})
router.get('/mergeBranchToHead', (req, res, next)=>{
    const title = `Merge Branch into HEAD`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('merge_branch_to_head', {layout: 'layout/default', title: title, menuData: menuData})
})

// =====================================================
// API ROUTES BELOW::::::::::::::::::::::::::

// BRANCH -----------------------------
router.post('/createBranch', (req, res, next)=>{
    const str = `creating Branch:[${req.body.branchName}] on repo:[${req.body.repoName}]`
    console.log(str)    
    res.send(str)    
})
router.post('/renameBranch', (req, res, next)=>{
    const str = `renaming Branch:[${req.body.branchName}] on repo:[${req.body.repoName}] to branch:[${req.body.newBranchName}]`
    console.log(str)    
    res.send(str)    
})
router.post('/removeJenkins', (req, res, next)=>{
    const str =`removing Jenkins configs from Branch:[${req.body.branchName}] on repo:[${req.body.repoName}]`
    console.log(str)    
    res.send(str)    
})
router.post('/showBranches', (req, res, next)=>{
    const str =`list of all branches on repo:[${req.body.repoName}]`
    console.log(str)    
    res.send(str)    
})
router.post('/showJenkinsBranches', (req, res, next)=>{
    const str = `list of branches maintained by Jenkins on repo:[${req.body.repoName}]`
    
    service.getSVNBranches(req.body.repoName)
        .then((list)=>{
            console.log(list)    
            res.send(list)            
        })
        .catch(()=>{
            const err = 'Failed to fetch List of Branches.'
            console.log(err)    
            res.send(err)            
        })
})
// -----------------------------


// REPO -----------------------------
router.post('/addRepo', (req, res, next)=>{
    const str = `Add new Repository repo:[${req.body.repoName}]`
    console.log(str) 
    //res.send(str)
    service.getSVNBranches(req.body.repoName)
        .then((list)=>{
            console.log(list)    
            res.send(list)            
        })
        .catch((err)=>{
            //const err = 'Failed to fetch List of Branches.'
            console.log(JSON.stringify(err))    
            res.send(err)            
        })
})
router.post('/removeRepo', (req, res, next)=>{
    const str =`remove repo:[${req.body.repoName}]`
    console.log(str)    
    res.send(str)    
})
// -----------------------------

module.exports = router