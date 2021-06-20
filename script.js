var form = document.getElementById("my-form")

form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("search").value
    
    var originalname = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/"+originalname)
    .then((result)=> result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `<image src ="${data.avatar_url}"/>`
    })
})

