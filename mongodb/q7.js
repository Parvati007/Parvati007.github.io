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
db.comments.insertOne(
    {
        _id: "c6",
        pid:"p1",
        comment:"Comment3",
    }
)

db.posts.aggregate([

    {$lookup:
        {
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments",
    }},
    {$unwind:"$comments"},
    {$project:{_id:0,post:1,"comments.comment":1}}
])

//-------------------------------------------------------
//marks collection
//name,term,subject,score
//John,t1,maths,98
//John,t2,maths,90
//John,t3,maths,88
//John,t1,science,92
//John,t2,science,82
//John,t3,science,82
//Cathy,t1,maths,92
//Cathy,t2,maths,92
//Cathy,t3,maths,82
//Cathy,t1,science,92
//Cathy,t2,science,82
//Cathy,t3,science,80

db.marks.insertOne(
    {
        name: "John",
        term:"t1",
        subject:"maths",
        score:98
    }
)
db.marks.insertOne(
    {
        name: "John",
        term:"t2",
        subject:"maths",
        score:90
    }
)
db.marks.insertOne(
    {
        name: "John",
        term:"t3",
        subject:"maths",
        score:88
    }
)
db.marks.insertOne(
    {
        name: "John",
        term:"t1",
        subject:"science",
        score:92
    }
)
db.marks.insertOne(
    {
        name: "John",
        term:"t2",
        subject:"science",
        score:82
    }
)
db.marks.insertOne(
    {
        name: "John",
        term:"t3",
        subject:"science",
        score:82
    }
)
db.marks.insertOne(
    {
        name: "Cathy",
        term:"t1",
        subject:"maths",
        score:92
    }
)
db.marks.insertOne(
    {
        name: "Cathy",
        term:"t2",
        subject:"maths",
        score:92
    }
)
db.marks.insertOne(
    {
        name: "Cathy",
        term:"t3",
        subject:"maths",
        score:82
    }
)
db.marks.insertOne(
    {
        name: "Cathy",
        term:"t1",
        subject:"science",
        score:92
    }
)
db.marks.insertOne(
    {
        name: "Cathy",
        term:"t2",
        subject:"science",
        score:82
    }
)
db.marks.insertOne(
    {
        name: "Cathy",
        term:"t3",
        subject:"science",
        score:80
    }
)

//display average score of each student
db.marks.aggregate([
    {$group:{
        _id:"$name",
        AvgScore:{$avg:"$score"}
    }}
])
//display average score by termwise
db.marks.aggregate([
    {$group:{
        _id:"$term",
        AvgScore:{$avg:"$score"}
    }}
])
//display with name and termwise avg score
db.marks.aggregate([
    {$group:{
        _id:{name:"$name",term:"$term"},
        AvgScore:{$avg:"$score"}
    }}
])




