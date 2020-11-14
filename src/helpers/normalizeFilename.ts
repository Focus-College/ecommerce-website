export  function normalizeFileName( filename:string ){

    return filename
        
        // remove filetype
        .split(".").slice(0,-1)

        // normalize seperators
        .join("-")
        .split(" ").join("-")
        .split("_").join("-")

        // seperate
        .split("/").slice(1).map( name => {
                
            // turns "xyz-aloe-hydro-purple" into "xyzAloeHydroPurple"
            return name.split("-").map(( part:string, index:number ) => {
                return index === 0 ? part : part[0].toUpperCase() + part.substr(1);
            }).join('')

        }).join(".");

}