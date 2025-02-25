const links = document.querySelectorAll("#link");

links.forEach(link => {
    link.addEventListener("click", e => {
        let name = e.target.innerHTML.toLowerCase();
        if(name.includes("github"))
        {
            window.location.href = "https://github.com/orss01";
        }
        else if(name.includes("linkedin"))
        {
            window.location.href = "https://www.linkedin.com/in/orss01";
        }
        else if(name.includes("resume"))
        {
            window.location.href = "https://orss01.dev/assets/pdf/resume.pdf";
        }
    });
});