const fs = require('fs');
const path = require('path');

const mpath = path.join(__dirname,"files")

// console.log(mpath)
fs.readdir(mpath,  (err, files) => {
    files.forEach(file => {

        // let k = file.split('.')[1]
        let k = path.extname(file)

        if(k==''){
            k="No-extension"
        }else {
            k=path.extname(file).slice(1,);
        }

        const fpath = path.join(path.dirname(mpath), k);

        fs.mkdirSync(fpath, { recursive: true })

        const newpath = path.join(fpath, file)
        const oldpath = path.join(mpath, file)

        fs.renameSync(oldpath, newpath)
        
    });

    fs.rmdir(mpath,(er)=>{
        console.log(er)
    })
})
