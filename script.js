document.addEventListener("DOMContentLoaded", () => {
    fetchInstagramPosts();
});

function fetchInstagramPosts() {
    const container = document.getElementById("instagram-feed");
    
    const instagramPosts = [
        "https://instagram.com/p/Cxyz123/photo1.jpg",
        "https://instagram.com/p/Cxyz456/photo2.jpg",
        "https://instagram.com/p/Cxyz789/photo3.jpg"
    ];

    instagramPosts.forEach(url => {
        let img = document.createElement("img");
        img.src = url;
        img.alt = "Instagram Post";
        container.appendChild(img);
    });
}
