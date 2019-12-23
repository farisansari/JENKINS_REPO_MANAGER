
const express = require('express')
const bodyParser = require('body-parser');
//const exphbs = require('hbs')
const service = require('./service')
const apiRouter = require('./api')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/public/views/')
app.use('/manage', apiRouter)


app.get('/', (req, res, next)=>{
    const title = `Jenkins Repo Managaer`
    console.log(title)
    const menuData = service.getMenuData()
    res.render('home', {layout: 'layout/default', title: title, menuData: menuData})
})

export const start = ()=> {

    app.listen(PORT, (req, res, next)=>{
        console.log(`listening on PORT: ${PORT}`)
    })
    
    
}
