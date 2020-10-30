import _ from 'lodash';

// Images.nivea.products.aloeHydro

interface IImage {
    [ key:string ]: any;
}

function normalizeFileName( filename:string ){

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

function importAll( r:any ){

    const images:IImage = {};

    r.keys().map(( key:string ) => {

        return {
            source: key,
            import: r([ key ])
        }

    }).forEach(( value:{ source:string, import:string }) => {
        
        const source = normalizeFileName( value.source );
        _.set( images, source, value.import );

    });

    return images;

}

const imports = require.context('./', true, /\.(png|jpe?g|svg)$/ );

export default importAll( imports );
