let active = false
function myFunction() {
    console.log("issue not found")
    let sidebar = document.getElementById("dashboard-sidebar");
    let dashboard = document.getElementById("dashboard-content")
    active = !active
    if (active) {
        sidebar.classList.add('sidebar')
        dashboard.classList.add('content-screen')
    } else {
        sidebar.classList.remove('sidebar')
        dashboard.classList.remove('content-screen')
    }
}