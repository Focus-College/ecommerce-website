export function getValueFromStringPath( obj:any, path:string ): string {
    
    const paths = path.split("."); // ["nivea", "products", "aloeHydro"]
    const currentKey:string = paths[0];
    const nextPath:string = paths.slice(1).join(".");

    if( paths.length > 1 ){
        return getValueFromStringPath( obj[currentKey], nextPath);
    }
        
    return obj[currentKey]; // Images.aloeHydro

}