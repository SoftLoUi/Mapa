document.getElementById("showMapBtn").addEventListener("click", function() {
    document.getElementById("map-container").style.display = "block"; // Muestra el contenedor del mapa al hacer clic en el botón

    // Carga el mapa si aún no se ha cargado
    if (!document.getElementById("map").querySelector("iframe")) {
        var mapIframe = document.createElement("iframe");
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45016.55645932883!2d-89.6297800606448!3d20.941322874942635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5672270a784baf%3A0x764b40010695f0d9!2sUniversidad%20Tecnol%C3%B3gica%20Metropolitana!5e0!3m2!1ses-419!2smx!4v1715666671627!5m2!1ses-419!2smx";
        mapIframe.width = "100%";
        mapIframe.height = "100%";
        mapIframe.style.border = "0";
        mapIframe.allowfullscreen = "";
        mapIframe.loading = "lazy";
        mapIframe.referrerpolicy = "no-referrer-when-downgrade";
        document.getElementById("map").appendChild(mapIframe);
    }
});
