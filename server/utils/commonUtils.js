
export const validateObjectId= (id)=> {
    return id.match(/^[0-9a-fA-F]{24}$/);
}