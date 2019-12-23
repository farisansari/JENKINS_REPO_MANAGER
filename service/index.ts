
const {exec} = require('child_process')

export const getMenuData = () => {
    return {
        '/manage/addRepo': 'Add Repo',
        '/manage/createBranch': 'Create Branch',
        '/manage/renameBranch': 'Rename Branch',
        '/manage/showAllBranches': 'Show All Branches',
        '/manage/showJenkinsBranches': 'Show Jenkins Branches',
        '/manage/removeBranchFromJenkins': 'Remove Branch From Jenkins',
        '/manage/mergeBranchToHEAD': 'Merge Branch To HEAD',
    }
}

export const getSVNInfo = (repo)=>{
    return new Promise((resolve, reject)=>{
        exec('ls', (err, stdout, stderr)=>{
            if(err){
                console.log(`ERROR: ${err.toString()}`)
                reject(err.toString());
            }
            else if(stderr){
                console.log(`ERROR: ${err.toString()}`)
                reject(err.toString());
            }
            else{
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
                resolve();
            }
        })
    })
}

export const getSVNBranches = (repoURL)=>{
    return new Promise((resolve, reject)=>{
        exec(`svn ls ${repoURL}`, (err, stdout, stderr)=>{
            if(err){
                console.log(`ERROR: ${err.toString()}`)
                reject(err.toString());
            }
            else if(stderr){
                reject(stderr)
            } else {
                console.log(`stdout: ${stdout}`);
                resolve();
            }
        })
    })
}