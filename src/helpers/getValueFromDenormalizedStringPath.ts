import { normalizeFileName } from './normalizeFilename';
import { getValueFromStringPath } from './getValueFromStringPath';

export function getValueFromDenormalizedStringPath( obj:any, path:string ){
    const normalizedPath = normalizeFileName(path);
    return getValueFromStringPath( obj, normalizedPath );
}