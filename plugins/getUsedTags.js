const getUsedTags = ( posts, tags ) => {
    const postTags = []
    const tagList = []
    const usedTags = []

    for ( let i = 0; i < posts.length; ++i ) {
        for ( let ii = 0; ii < posts[i].tag.length; ++ii ) {
            postTags.push( posts[i].tag[ii].id )
        }
    }

    for ( let i = 0; i < tags.length; ++i ) {
        tagList.push( tags[i].id )
    }

    for ( let i = 0; i < tagList.length; ++i ) {
        if( postTags.includes( tagList[i] ) ) {
            usedTags.push( tags[i] )
        }
    }
    return Array.from( new Set( usedTags ) )
}

export default ( context, inject ) => {
    inject( 'getUsedTags', getUsedTags );
}
