//posts collection
//_id-post
//p1-Post1
//p2-Post2

//comments collection
//_id-pid-comment
//c1-p1-comment1
//c2-p1-comment2
//c3-p2-comment1
//c4-p2-comment2
//c5-p2-comment3

//posts
db.posts.insertOne(
    {
        _id: "p1",
        post:"Post1"
    }
)
db.posts.insertOne(
    {
        _id: "p2",
        post:"Post2"
    }
)
//comments
db.comments.insertOne(
    {
        _id: "c1",
        pid:"p1",
        comment:"Comment1",
    }
)
db.comments.insertOne(
    {
        _id: "c2",
        pid:"p1",
        comment:"Comment2",
    }
)
db.comments.insertOne(
    {
        _id: "c3",
        pid:"p2",
        comment:"Comment1",
    }
)
db.comments.insertOne(
    {
        _id: "c4",
        pid:"p2",
        comment:"Comment2",
    }
)
db.comments.insertOne(
    {
        _id: "c5",
        pid:"p2",
        comment:"Comment3",
    }
)



