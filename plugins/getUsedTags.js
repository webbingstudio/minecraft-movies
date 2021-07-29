const getUsedTags = ( tags ) => {
    const tagList = tags.map(v => v.tag).flat(1)
    return [...new Map( tagList.map(v => [v.label, v] ) ).values()]
}

export default ( context, inject ) => {
    inject( 'getUsedTags', getUsedTags );
}
