function darkMode(e) {
  const isDark = document.documentElement.classList.contains("dark");
  const darkButton = document.getElementById("darkButton");
  if (isDark) {
    document.getElementById("darkButton").innerText = "حالت تیره";
  } else {
    document.getElementById("darkButton").innerText = "حالت روشن";
  }
  document.documentElement.classList.toggle("dark");
}
